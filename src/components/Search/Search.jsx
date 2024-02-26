import { CiSearch } from "react-icons/ci";

const Search = () => {
  return (
    <form action="" className="flex items-center px-10 mb-6 relative">
      <div className="absolute">
        <CiSearch size={24} />
      </div>
      <input
        type="text"
        placeholder="Search"
        dir="rtl"
        className=" w-1/2 border-b-2 border-gray-400 py-3 pr-10 leading-tight focus:outline-none bg-stone-200"
      />
    </form>
  );
};

export default Search;
