"use client"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

type Props = {
  children: React.ReactNode
  content: React.ReactNode
  title: string
  description: string
  className?: string
}

const Modal = ({ children, description, title, content, className }: Props) => {
  return (
    <Dialog>
      <DialogTrigger
        className={className}
        asChild
      >
        {children}
      </DialogTrigger>
      <DialogContent className="bg-neutral-950 border-neutral-700">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        {content}
      </DialogContent>
    </Dialog>
  )
}

export default Modal
