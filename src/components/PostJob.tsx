import { TfiMoreAlt } from "react-icons/tfi";
import { RiCalendarEventLine } from "react-icons/ri";
import { MdOutlineLocationOn } from "react-icons/md";
import avatar04 from "../assets/avatar04.svg";
import { AiOutlineEye } from "react-icons/ai";
import { IoMdShare } from "react-icons/io";
import { useState } from "react";

function PostJob() {
  const [showMoreOptions, setShowMoreOptions] = useState(false);

  return (
    <div className="w-[692px] h-fit border-[1px] rounded shadow-sm 3bp:w-full">
      <div className="p-3">
        <div className="flex items-center gap-1 mb-2">
          <div>
            <p className="4bp:text-sm">💼️</p>
          </div>
          <p className="font-semibold text-base -mb-2 4bp:text-sm">Job</p>
        </div>

        <div className="flex justify-between items-center text-xl gap-12 4bp:mb-1">
          <h2 className="text-xl font-bold 4bp:text-lg">
            Finance & Investment Elite Social Mixer @Lujiazui
          </h2>
          <div className="relative">
            <button
              className="hover:bg-gray-100 rounded-sm p-2 cursor-pointer 4bp:text-sm"
              onClick={() => setShowMoreOptions(!showMoreOptions)}
            >
              <TfiMoreAlt />
            </button>
            {showMoreOptions && (
              <div className="bg-white absolute text-sm shadow-sm w-[160px] p-3 flex flex-col gap-2 z-20 right-[3px]">
                <p className="hover:font-bold cursor-pointer">Edit</p>
                <p className="hover:font-bold cursor-pointer">Report</p>
                <p className="hover:font-bold cursor-pointer">Option 3</p>
              </div>
            )}
          </div>
        </div>

        <div className="flex items-center gap-10 font-medium text-sm mb-2 4bp:text-xs">
          <div className="flex items-center gap-1">
            <RiCalendarEventLine />
            <p>Software Developer</p>
          </div>
          <div className="flex items-center gap-1">
            <MdOutlineLocationOn />
            <p>Noida, India</p>
          </div>
        </div>

        <a
          href={"#"}
          className="w-full text-sm border-[1px] text-emerald-500 hover:text-emerald-500 rounded py-2 mb-4 text-center font-semibold hover:font-bold hover:border-emerald-500 4bp:text-xs"
        >
          <p>Apply on Timesjobs</p>
        </a>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              className="w-12 h-12 4bp:w-[38px] 4bp:h-[38px]"
              src={avatar04}
              alt="Profile picture"
            />
            <div className="4bp:flex 4bp:flex-col">
              <p className="font-bold 4bp:text-sm">Joseph Gray</p>
              <p className="hidden 4bp:flex 4bp:text-xs">1.4k views</p>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-neutral-600 text-sm font-medium 4bp:hidden">
              <AiOutlineEye />
              <p>1.4k views</p>
            </div>

            <p className="bg-gray-100 rounded-sm p-2 cursor-pointer 4bp:flex 4bp:gap-1 4bp:text-xs 4bp:items-center">
              <IoMdShare />
              <span className="hidden 4bp:flex">Share</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostJob;
