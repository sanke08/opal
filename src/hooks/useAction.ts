import { useState, useCallback } from 'react';


type ExecuteFunction<T> = () => Promise<{ data: T }>;

interface UseActionProps<T> {
    executeFun: ExecuteFunction<T>
    onSuccess?: (data: T) => void
    onError?: (error: Error) => void
}

interface UseActionReturn<T> {
    execute: () => Promise<void>
    data: T | null
    isLoading: boolean
    isError: boolean
    error: string | null
    reset: () => void
}

function useAction<T>({ executeFun, onSuccess, onError }: UseActionProps<T>): UseActionReturn<T> {

    const [isLoading, setLoading] = useState(false);
    const [isError, setError] = useState(false);
    const [error, setErrorDetail] = useState<string | null>(null);
    const [data, setData] = useState<T | null>(null);

    const execute = useCallback(async () => {
        setLoading(true);
        setError(false);
        setErrorDetail(null);
        try {
            const { data } = await executeFun();
            setData(data);
            if (onSuccess) onSuccess(data);
        } catch (error:any) {
            setError(true);
            setErrorDetail(error.message);
            if (onError) onError(error);
        } finally {
            setLoading(false)
        }

    }, [executeFun, onError, onSuccess])

    const reset = useCallback(() => {
        setLoading(false);
        setError(false);
        setErrorDetail(null);
        setData(null);
    }, []);

    return { execute, data, isLoading, isError, error, reset };
}

export default useAction;