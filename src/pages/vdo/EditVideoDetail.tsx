import EditVideoDetailForm from "@/components/EditVideoDetailForm"
import Modal from "@/components/CustomModal"
import { Edit } from "lucide-react"
import CustomTooltip from "@/components/CustomTooltip"


const EditVideoDetail = () => {
    return (
        <Modal content={<EditVideoDetailForm />} title="Edit video details" description="You can update your video details here!" >
            <CustomTooltip content={"Edit video details"} className=" p-2 w-fit h-fit text-zinc-400 hover:text-white hover:bg-zinc-700/80 bg-transparent rounded-xl">
                    <Edit size={18} className="" />
            </CustomTooltip>
        </Modal>
    )
}

export default EditVideoDetail
