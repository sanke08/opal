import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Send } from "lucide-react"

const CommentForm = () => {
  return (
    <form
      className="relative w-full flex items-center gap-x-3"
    // onSubmit={onFormSubmit}
    >
      {/* <FormGenerator
            register={register}
            errors={errors}
            placeholder={`Respond to ${author}...`}
            name="comment"
            inputType="input"
            lines={8}
            type="text"
            /> */}
      <Input size={20} className=" bg-transparent" />
      <Button
        className="p-0 bg-transparent hover:bg-transparent "
        // type="submit"
      >
        <Send
          className="text-white cursor-pointer"
          size={30}
        />
      </Button>
    </form>
  )
}

export default CommentForm
