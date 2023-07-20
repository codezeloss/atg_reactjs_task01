import { MdGroupAdd } from "react-icons/md";
import { BiSolidDownArrow } from "react-icons/bi";

function NavigationTabs() {
  return (
    <div className="flex items-center justify-between border-b-[1px] mb-7 text-sm">
      <div className="flex items-center gap-6 mb-0">
        <p className="border-b-[2px] border-b-black pb-3 -mb-2 cursor-pointer font-bold">
          All Posts
        </p>
        <p className="pb-3 -mb-2 cursor-pointer">Article</p>
        <p className="pb-3 -mb-2 cursor-pointer">Event</p>
        <p className="pb-3 -mb-2 cursor-pointer">Education</p>
        <p className="pb-3 -mb-2 cursor-pointer">Job</p>
      </div>

      <div className="flex items-center gap-2 text-xs pb-2.5">
        <button className="flex items-center gap-2 bg-gray-100 text-black py-2 px-3 rounded">
          <p>Write a Post</p>
          <p className="text-xs">
            <BiSolidDownArrow />
          </p>
        </button>

        <button className="flex items-center gap-2 bg-blue-600 text-white py-2 px-3 rounded">
          <MdGroupAdd />
          <p>Join Group</p>
        </button>
      </div>
    </div>
  );
}

export default NavigationTabs;
