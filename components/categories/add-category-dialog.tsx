import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import Image from "next/image";
import IconInput from "./icon-input";
import { Input } from "../ui/input";
const AddCategoryDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="p-4 rounded-lg bg-white border border-rose-100 min-h-[122px]">
          <div className="flex items-center gap-2 justify-between">
            <div className="grid place-content-center size-[90px] rounded-full shrink-0 bg-rose-100">
              <Image
                src="/icons/add-cat.svg"
                alt="add category"
                width={50}
                height={50}
              />
            </div>

            <h3 className="text-lg font-semibold text-[#160E4B] max-w-[15ch]">
              Add Category
            </h3>
          </div>
        </Button>
      </DialogTrigger>
      <DialogContent withClose={false} className="max-w-[200px]">
        <DialogHeader className="sr-only">
          <DialogTitle>Add Category</DialogTitle>
          <DialogDescription>
            Add a new category to your store
          </DialogDescription>
        </DialogHeader>

        <form className="grid grid-cols-[auto_1fr] gap-4">
          <IconInput />
          <div className="space-y-4">
            <Input placeholder="Category Name" />
            <Button type="submit" className="w-fit">
              Add Category
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
export default AddCategoryDialog;
