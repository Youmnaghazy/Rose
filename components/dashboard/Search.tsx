import { SearchIcon } from "lucide-react";

const Search = () => {
  return (
    <div className="relative flex items-center gap-2 px-4 py-2 rounded-3xl lg:w-96 bg-white shadow-input">
      <SearchIcon className="text-rose-100" />
      <input
        type="text"
        placeholder="Search"
        className="text-[#696F79] text-xl"
      />
    </div>
  );
};
export default Search;
