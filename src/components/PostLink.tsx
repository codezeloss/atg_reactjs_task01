import { TfiMoreAlt } from "react-icons/tfi";
import { AiOutlineEye } from "react-icons/ai";
import { IoMdShare } from "react-icons/io";
import { RiCalendarEventLine } from "react-icons/ri";
import { MdOutlineLocationOn } from "react-icons/md";

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
  return (
    <div className="w-[692px] h-fit border-[1px] rounded shadow-sm">
      <div>
        <img className="w-full h-auto" src={image} alt="Post Image" />
      </div>

      <div className="p-3">
        <div className="flex items-center gap-1 mb-3">
          <div>
            <p>{logo}</p>
          </div>
          <p className="font-semibold text-base -mb-2">{type}</p>
        </div>

        <div className="flex justify-between items-center text-xl gap-12 mb-2">
          <h2 className="text-xl font-bold">{title}</h2>
          <p className="hover:bg-gray-100 rounded-sm p-2 cursor-pointer">
            <TfiMoreAlt />
          </p>
        </div>

        <div className="flex items-center gap-10 font-medium text-sm mb-2">
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
          className="w-full text-sm border-[1px] text-red-500 hover:text-red-500 rounded py-2 mb-4 text-center font-semibold hover:font-bold hover:border-red-500"
        >
          <p>Visit Website</p>
        </a>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img className="w-12 h-12" src={avatar} alt="Profile picture" />
            <p className="font-bold">{user}</p>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-neutral-600 text-sm font-medium">
              <AiOutlineEye />
              <p>1.4k views</p>
            </div>

            <p className="bg-gray-100 rounded-sm p-2 cursor-pointer">
              <IoMdShare />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostLink;
