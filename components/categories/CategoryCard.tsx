import { Category } from "@/types/dummy";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const CategoryCard = ({ category }: { category: Category }) => {
  return (
    <div className="p-4 rounded-lg bg-pink-100">
      <div className="flex items-center gap-2 justify-between">
        <div className="flex items-center gap-2">
          <div className="grid place-content-center size-[90px] rounded-full shrink-0 bg-rose-100">
            <Image
              src={category.icon}
              alt={category.name}
              width={50}
              height={50}
            />
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="text-lg font-semibold text-[#160E4B] max-w-[15ch]">
              {category.name}
            </h3>
            <p className="text-sm text-gray-500">{category.items} items</p>
          </div>
        </div>
        <Button variant="ghost" className="size-8! p-0!">
          <img src="/icons/edit-1.svg" alt="edit" />
        </Button>
      </div>
    </div>
  );
};
export default CategoryCard;
