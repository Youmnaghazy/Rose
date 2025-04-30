import CategoryCard from "@/components/categories/CategoryCard";
import { categories } from "@/constants/dummy";
import AddCategoryDialog from "@/components/categories/add-category-dialog";

const CategoriesPage = () => {
  return (
    <div className="p-5">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <CategoryCard key={category._id} category={category} />
        ))}
        <AddCategoryDialog />
      </div>
    </div>
  );
};
export default CategoriesPage;
