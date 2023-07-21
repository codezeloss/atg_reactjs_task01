import { TfiMoreAlt } from "react-icons/tfi";
import { AiOutlineEye } from "react-icons/ai";
import { IoMdShare } from "react-icons/io";
import { RiCalendarEventLine } from "react-icons/ri";
import { MdOutlineLocationOn } from "react-icons/md";
import { useState } from "react";

interface Props {
  image: string;
  logo: string;
  type: string;
  title: string;
  date: string;
  location: string;
  avatar: string;
  user: string;
}

function PostLink({
  image,
  logo,
  type,
  title,
  date,
  location,
  avatar,
  user,
}: Props) {
  const [showMoreOptions, setShowMoreOptions] = useState(false);

  return (
    <div className="w-[692px] h-fit border-[1px] rounded shadow-sm 3bp:w-full">
      <div>
        <img
          className="w-full h-auto object-cover"
          src={image}
          alt="Post Image"
        />
      </div>

      <div className="p-3">
        <div className="flex items-center gap-1 mb-3 4bp:mb-1">
          <div>
            <p className="4bp:text-sm">{logo}</p>
          </div>
          <p className="font-semibold text-base -mb-2 4bp:text-sm">{type}</p>
        </div>

        <div className="flex justify-between items-center text-xl gap-12 mb-2 4bp:mb-1">
          <h2 className="text-xl font-bold 4bp:text-lg">{title}</h2>
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

        <div className="flex items-center gap-10 font-medium text-sm mb-3 4bp:text-xs">
          <div className="flex items-center gap-1">
            <RiCalendarEventLine />
            <p>{date}</p>
          </div>
          <div className="flex items-center gap-1">
            <MdOutlineLocationOn />
            <p>{location}</p>
          </div>
        </div>

        <a
          href="#"
          className="w-full text-sm border-[1px] text-red-500 hover:text-red-500 rounded py-2 mb-4 text-center font-semibold hover:font-bold hover:border-red-500 4bp:text-xs"
        >
          <p>Visit Website</p>
        </a>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              className="w-12 h-12 4bp:w-[38px] 4bp:h-[38px]"
              src={avatar}
              alt="Profile picture"
            />
            <div className="4bp:flex 4bp:flex-col">
              <p className="font-bold 4bp:text-sm">{user}</p>
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

export default PostLink;
