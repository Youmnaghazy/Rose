import { CircleAlert } from "lucide-react";

const FormErrorMsg = ({ error }: { error: string | undefined }) => {
  if (!error) return null;
  return (
    <div className="text-error-red flex items-center gap-1 text-xs">
      <CircleAlert className="w-4 h-4 text-error-red" />
      <p className="text-error-red text-xs">{error}</p>
    </div>
  );
};

export default FormErrorMsg;
