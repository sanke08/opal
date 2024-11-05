
import { Separator } from '@/components/ui/separator'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select'


interface Props {
    items: {
        id: string;
        name: string;
    }[];
    activeItemId: string;
    onValueChange: (value: string) => void;
    label?: string;
    placeholder?: string;
}


const CustomSelect = ({ items, activeItemId, onValueChange, placeholder = "Select an option", label = "Select an item" }: Props) => {
    return (
        <Select defaultValue={activeItemId} onValueChange={onValueChange} >
            <SelectTrigger className="bg-transparent">
                <SelectValue placeholder={placeholder} className=' text-white placeholder:text-white placeholder-opacity-100' />
            </SelectTrigger>
            <SelectContent className=' bg-transparent backdrop-blur-lg'>
                <SelectGroup>
                    <SelectLabel className="text-white text-left w-full">{label}</SelectLabel>
                    <Separator className="mb-1.5" />
                    {items.map((item) => (
                        <SelectItem value={item.id} key={item.id}>
                            {item.name}
                        </SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}

export default CustomSelect
