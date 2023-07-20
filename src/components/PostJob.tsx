import { TfiMoreAlt } from "react-icons/tfi";
import { RiCalendarEventLine } from "react-icons/ri";
import { MdOutlineLocationOn } from "react-icons/md";
import avatar04 from "../assets/avatar04.svg";
import { AiOutlineEye } from "react-icons/ai";
import { IoMdShare } from "react-icons/io";

function PostJob() {
  return (
    <div className="w-[692px] h-fit border-[1px] rounded shadow-sm">
      <div className="p-3">
        <div className="flex items-center gap-1 mb-2">
          <div>
            <p>💼️</p>
          </div>
          <p className="font-semibold text-base -mb-2">Job</p>
        </div>

        <div className="flex justify-between items-center text-xl gap-12">
          <h2 className="text-xl font-bold">
            Finance & Investment Elite Social Mixer @Lujiazui
          </h2>
          <p className="hover:bg-gray-100 rounded-sm p-2 cursor-pointer">
            <TfiMoreAlt />
          </p>
        </div>

        <div className="flex items-center gap-10 font-medium text-sm mb-2">
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
          className="w-full text-sm border-[1px] text-emerald-500 hover:text-emerald-500 rounded py-2 mb-4 text-center font-semibold hover:font-bold hover:border-emerald-500"
        >
          <p>Apply on Timesjobs</p>
        </a>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img className="w-12 h-12" src={avatar04} alt="Profile picture" />
            <p className="font-bold">Joseph Gray</p>
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

export default PostJob;
