import React from "react";

// icons from react icons

//this import is impotant cuz derive icons from react
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { BsHouseDoor } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
const Search = () => {
  return (
    <div className="searchDiv  grid gap-10 bg-grayColor rounded-[10px] p-[3rem]">
      <form action="">
        <div
          className="firstDiv flex justify-between items-center rounded-[8px] gap-[10px]
         bg-white p-5  shadow-lg shadow-slate-400"
        >
          <div className="flex gap-2 items-center">
            <AiOutlineSearch className="text-[25px] icon" />

            <span class="sr-only">Search</span>
            <span class="absolute inset-y-0 left-0 flex items-center pl-2">
              <svg class="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"></svg>
            </span>
            <input
              class=" placeholder:italic placeholder:text-slate-400 block bg-white w-full border-0 border-slate-300 rounded-md py-1 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm "
              placeholder="Search Job Here"
              type="text"
              name="search"
            />

            <AiOutlineCloseCircle className="text-[27px] icon   text-slate-400 hover:text-gray-800 icon" />
          </div>
          <div className="flex gap-2 items-center">
            <BsHouseDoor className="text-[25px] icon" />
            <input
              class=" placeholder:italic placeholder:text-slate-400 block bg-white w-full border-0 border-slate-300 rounded-md py-1 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm "
              placeholder="Search By Company"
              type="text"
              name="search"
            />
            <AiOutlineCloseCircle className="text-[27px] icon left-0 text-slate-400 hover:text-gray-800 icon" />
          </div>
          <div className="flex gap-2 items-center">
            <CiLocationOn className="text-[25px] icon" />
            <input
              class=" placeholder:italic placeholder:text-slate-400 block bg-white w-full border-0 border-slate-300 rounded-md py-1 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
              placeholder="Search By Location"
              type="text"
              name="search"
            />
            <AiOutlineCloseCircle className="text-[27px] icon left-0 text-slate-400 hover:text-gray-800 icon" />
          </div>
          <button className="w-20 h-[35px] gap-3 mx-[10px] bg-blueColor rounded-md hover:bg-slate-400">
            Search
          </button>
        </div>
      </form>
      <div className="secDiv flex items-center gap-10 justify-center">
        <div className="singleSearch flex items-center gap-2">
          <label htmlFor="relevance" className=" text-[#808080] font-semibold">
            Sort By:
          </label>
          <select
            name=""
            id="relevance"
            className="bg-white rounded-sm px-2 py-1 hover:to-blueColor"
          >
            <option value="relevance">Relevance</option>
            <option value="inclusive">Inclusive</option>
            <option value="starts with">Starts With</option>
            <option value="contains">Contains</option>
          </select>
        </div>
        <div className="singleSearch flex items-center gap-2">
          <label htmlFor="type" className=" text-[#808080] font-semibold">
            Type:
          </label>
          <select
            name="relevance"
            id="relevance"
            className="bg-white rounded-sm px-2 py-1 hover:to-blueColor"
          >
            <option value="full-time">Full-Time</option>
            <option value="remote">Remote</option>
            <option value="contract">Contract</option>
            <option value="part-time">Part-Time</option>
          </select>
        </div>
        <div className="singleSearch flex items-center gap-2">
          <label htmlFor="level" className=" text-[#808080] font-semibold">
            Level:
          </label>
          <select
            name=""
            id="level"
            className="bg-white rounded-sm px-2 py-1 hover:to-blueColor"
          >
            <option value="Senior">Senior</option>
            <option value="Beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="junior">Junior</option>
            <option value="advocate">Advocate</option>
          </select>
        </div>
        <div className="singleSearch flex items-center gap-2">
          <span className="text-[#eb6f6f] cursor-pointer hover:text-gray-700">
            Clear All
          </span>
        </div>
      </div>
    </div>
  );
};

export default Search;
