const ChangeVidLocContent = dynamic(() => import("@/components/changeVideoLoc/ChangeVidLocContent"), {
    loading: () => <div>Loading...</div>
})
import Modal from "@/components/CustomModal"
import { Move } from "lucide-react"
import dynamic from "next/dynamic"


const ChangeVideoLocation = () => {
    return (

        <Modal title="Move to new Workspace/Folder"
            description="This action cannot be undone. This will permanently delete your  account and remove your data from our servers."
            content={<ChangeVidLocContent />}
        >
            <Move
                size={16}
                className="text-red-500"
            />
        </Modal>
    )
}

export default ChangeVideoLocation
