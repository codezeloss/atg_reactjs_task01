import { MdModeEditOutline, MdOutlineLocationOn } from "react-icons/md";
import { AiOutlineInfoCircle } from "react-icons/ai";

function UserLocation() {
  return (
    <div className="w-[280px]">
      <div className="flex items-center justify-between border-b-[1px] pb-2 mb-8 text-sm">
        <div className="flex items-center gap-1">
          <p className="">
            <MdOutlineLocationOn />
          </p>
          <input
            className="w-full outline-none"
            type="text"
            placeholder="Your location"
          />
        </div>
        <MdModeEditOutline />
      </div>

      <div className="flex gap-1 text-black/50">
        <p className="text-sm">
          <AiOutlineInfoCircle />
        </p>
        <p className="text-xs">
          Your location will help us serve better and extend a personalised
          experience.
        </p>
      </div>
    </div>
  );
}

export default UserLocation;
