import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "./ui/textarea"


const EditVideoDetailForm = () => {
    return (
        <form
            className="flex flex-col gap-y-5"
        >
            <Input placeholder="Title" />
            <Textarea className=" max-h-[50vh] min-h-[50vh]" placeholder="Description" />
            <Button>
                Update
            </Button>
        </form>
    )
}

export default EditVideoDetailForm
