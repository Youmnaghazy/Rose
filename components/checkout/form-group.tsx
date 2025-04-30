import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type FormGroupProps = {
  label: string;
  id: string;
  placeholder: string;
} & React.ComponentProps<typeof Input>;

const FormGroup = ({ label, id, placeholder, ...props }: FormGroupProps) => {
  return (
    <div className="grid gap-4">
      <div className="grid gap-2">
        <Label htmlFor={id} className="text-base text-[#160E4B]">
          {label}
        </Label>
        <Input {...props} id={id} placeholder={placeholder} />
      </div>
    </div>
  );
};

export default FormGroup;
