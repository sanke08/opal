import { useEffect, useState } from "react";
import useAction from "./useAction";
import useDebounce from "./useDebounce";





type SearchFunction<T> = (query: string) => Promise<{ data: T[] }>

interface useSearchProps<T> {
    searchFun: SearchFunction<T>
}

interface useSearchReturn<T> {
    query: string
    setQuery: (query: string) => void;
    results: T[]
    isLoading: boolean
    error: string | Error | null
}


const useSearch = <T>({ searchFun }: useSearchProps<T>): useSearchReturn<T> => {

    const [query, setQuery] = useState<string>("");
    const [results, setResults] = useState<T[]>([]);

    const debouncedQuery = useDebounce(query, 300);

    const { execute, error, isLoading } = useAction({
        executeFun: () => searchFun(debouncedQuery),
        onSuccess: (data) => setResults(data),
    });

    useEffect(()=>{
        if(debouncedQuery){
            execute()
        }
    },[debouncedQuery,execute])

    return {
        query, results, isLoading, error, setQuery
    }
}

export default useSearch
