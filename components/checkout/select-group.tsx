import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { countries } from "@/constants";
import { cn } from "@/lib/utils";
type SelectGroupProps = {
  label: string;
  id: string;
  placeholder: string;
  className?: string;
} & React.ComponentProps<typeof Select>;

const SelectGroup = ({
  label,
  id,
  placeholder,
  className,
  ...props
}: SelectGroupProps) => {
  return (
    <div className="grid gap-4">
      <div className="grid gap-2">
        <Label htmlFor={id} className="text-base text-[#160E4B]">
          {label}
        </Label>
        <Select {...props}>
          <SelectTrigger
            className={cn(
              className,
              "w-full border border-[#DEE2E6] rounded-[6px] h-[48px]!"
            )}
          >
            <SelectValue placeholder={placeholder} />
          </SelectTrigger>
          <SelectContent>
            {countries.map((country) => (
              <SelectItem key={country} value={country}>
                {country}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default SelectGroup;
