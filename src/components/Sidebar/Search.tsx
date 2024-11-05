import useSearch from "@/hooks/useSearch"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Loader from "../Loader"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { User as UserIcon } from "lucide-react"
import { Skeleton } from "../ui/skeleton"
import { User } from "@prisma/client"

type Props = {
    workspaceId: string
}

export const Search = ({ workspaceId }: Props) => {
    const { query, setQuery, results, isLoading, } = useSearch<User>({
        searchFun: async (query) => { return { data: [] } },
    })
    return (
        <div className="flex flex-col gap-y-5">
        <Input
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          className="bg-transparent border-2 outline-none"
          placeholder="Search for your user..."
          type="text"
        />
  
        {isLoading ? (
          <div className="flex flex-col gap-y-2">
            <Skeleton className="w-full h-8 rounded-xl" />
          </div>
        ) : !results ? (
          <p className="text-center text-sm text-[#a4a4a4]">No Users Found</p>
        ) : (
          <div>
            {results.map((user) => (
              <div
                key={user.id}
                className="flex gap-x-3 items-center border-2 w-full p-3 rounded-xl"
              >
                <Avatar>
                  <AvatarImage src={user.image as string} />
                  <AvatarFallback>
                    <UserIcon />
                  </AvatarFallback>
                </Avatar>
                <div className="flex flex-col items-start">
                  <h3 className="text-bold text-lg capitalize">
                    {user.firstname} {user.lastname}
                  </h3>
                  <p className="lowercase text-xs bg-white px-2 rounded-lg text-[#1e1e1e]">
                    {/* {user.subscription?.plan} */}
                  </p>
                </div>
                <div className="flex-1 flex justify-end items-center">
                  <Button
                    onClick={() =>{}
                    }
                    variant={'default'}
                    className="w-5/12 font-bold"
                  >
                    <Loader isLoading={false} />
                      Invite
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    )
}
