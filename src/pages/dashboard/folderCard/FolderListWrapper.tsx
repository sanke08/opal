import Loader from "@/components/Loader"
import { Suspense } from "react"
 
const FolderListWrapper = ({children}:{children:React.ReactNode}) => {
  return (
    <Suspense fallback={<Loader isLoading />}>
      {children}
    </Suspense>
  )
}

export default FolderListWrapper
