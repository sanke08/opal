import { Bot } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { FileTextIcon, Pencil } from 'lucide-react'
import { StarsIcon } from 'lucide-react'

const VdoAITool = () => {
    return (
        <div className=" p-4 bg-transparent  rounded-xl flex flex-col gap-y-6">
            <div className=" space-y-2">
                <div className="w-full">
                    <h2 className="text-2xl font-bold"> Ai Tools</h2>
                    <p className="text-zinc-400 text-sm">
                        Taking your video to the next step with the power of AI!
                    </p>
                </div>

                <div className="flex gap-4 w-full justify-end">
                    <Button className=" mt-2 text-sm">
                        Try now
                    </Button>
                    {/* WIP: Pay button  */}
                    <Button
                        className="mt-2 text-sm"
                        variant={'secondary'}
                    >
                        Pay Now
                    </Button>
                </div>
            </div>
            <div className=" border-t  p-3 space-y-4">

                <div className="flex items-center gap-2">
                    <h2 className="text-2xl font-bold text-[#a22fe0]"> Opal Ai</h2>
                    <StarsIcon
                        color="#a22fe0"
                        fill="#a22fe0"
                    />
                </div>

                <div className="flex gap-2 items-start ">
                    <div className="p-2 rounded-full border-[#2d2d2d] border-[2px] bg-[#2b2b2b] ">
                        <Pencil color="#a22fe0" className=' mt-2' />
                    </div>
                    <div className="flex flex-col">
                        <h3 className="textmdg">Summary</h3>
                        <p className="text-muted-foreground text-sm">
                            Generate a description for your video using AI.
                        </p>
                    </div>
                </div>

                <div className="flex gap-2 items-start">
                    <div className="p-2 rounded-full border-[#2d2d2d] border-[2px] bg-[#2b2b2b] ">
                        <FileTextIcon color="#a22fe0" className=' mt-2' />
                    </div>
                    <div className="flex flex-col">
                        <h3 className="textmdg">Summary</h3>
                        <p className="text-muted-foreground text-sm">
                            Generate a description for your video using AI.
                        </p>
                    </div>
                </div>

                <div className="flex gap-2 items-start">
                    <div className="p-2 rounded-full border-[#2d2d2d] border-[2px] bg-[#2b2b2b] ">
                        <Bot color="#a22fe0" className='' />
                    </div>
                    <div className="flex flex-col">
                        <h3 className="text-md">AI Agent</h3>
                        <p className="text-muted-foreground text-sm">
                            Viewers can ask questions on your video and our ai agent will
                            respond.
                        </p>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default VdoAITool
