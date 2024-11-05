import { UploadIcon, VideoIcon } from 'lucide-react'
import { Search } from "lucide-react"
import { Button } from './ui/button'
import { Input } from './ui/input'


const Header = () => {
  return (
    <header className=" w-full flex items-center justify-between">

    <div className="relative w-96">
      <Search                           
        size={25}
        className="text-zinc-500 absolute top-1/2 -translate-y-1/2 left-3"
      /> 
      <Input
        className="bg-transparent border-2 rounded-lg pr-4 pl-10 !placeholder-zinc-500"
        placeholder="Search for people, projects, tags & folders"
      />
    </div>



    <div className="flex items-center gap-4">
      <Button className=" border bg-neutral-300 hover:bg-neutral-100 text-black flex items-center gap-2">
        <UploadIcon size={24} />{' '}
        <span className="flex items-center gap-2">Upload</span>
      </Button>
      <Button isLoading={true} className=" border bg-neutral-300 hover:bg-neutral-100 text-black flex items-center gap-2">
        <VideoIcon size={24}/>
        <span className="flex items-center gap-2">Record</span>
      </Button>
      <div className=' p-5 rounded-full animate-pulse bg-zinc-800'></div>
      {/* <UserButton /> */}
    </div>
  </header>
  )
}

export default Header
