import { AiOutlineEye } from "react-icons/ai";
import { IoMdShare } from "react-icons/io";
import { TfiMoreAlt } from "react-icons/tfi";

interface Props {
  image: string;
  logo: string;
  type: string;
  title: string;
  description: string;
  avatar: string;
  user: string;
}

function PostText({
  image,
  logo,
  type,
  title,
  description,
  avatar,
  user,
}: Props) {
  return (
    <div className="w-[692px] h-fit border-[1px] rounded shadow-sm">
      <div>
        <img className="w-full h-auto" src={image} alt="Post Image" />
      </div>

      <div className="p-3">
        <div className="flex items-center text-base gap-1 mb-3">
          <div>
            <p>{logo}</p>
          </div>
          <p className="font-bold -mb-2">{type}</p>
        </div>

        <div className="flex justify-between items-center text-xl mb-2 gap-12">
          <h2 className="text-xl font-bold">{title}</h2>
          <p className="hover:bg-gray-100 rounded-sm p-2 cursor-pointer">
            <TfiMoreAlt />
          </p>
        </div>

        <p className="mt-2 mb-4 text-zinc-600 text-base font-normal">
          {description}
        </p>

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

export default PostText;
