import { cn } from "@/lib/utils";
import { LucideProps, XCircle } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

const FormMessage = ({
  message,
  className,
  Icon = XCircle,
}: {
  message?: string | undefined;
  className?: string | undefined;
  Icon?: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
}) => {
  return (
    <div className={cn(className, "flex items-center gap-2 text-error-red")}>
      <Icon className="w-4 h-4 text-error-red" />
      <p>{message}</p>
    </div>
  );
};
export default FormMessage;
