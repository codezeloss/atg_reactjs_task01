import { MdGroupAdd } from "react-icons/md";
import { BiSolidDownArrow } from "react-icons/bi";

function NavigationTabs() {
  return (
    <div>
      <div className="flex items-center justify-between border-b-[1px] mb-7 text-sm 4bp:text-xs 5bp:hidden">
        <div className="flex items-center gap-6 mb-0 4bp:gap-4">
          <p className="border-b-[2px] border-b-black pb-3 -mb-2 cursor-pointer font-bold">
            All Posts (32)
          </p>
          <p className="pb-3 -mb-2 cursor-pointer">Article</p>
          <p className="pb-3 -mb-2 cursor-pointer">Event</p>
          <p className="pb-3 -mb-2 cursor-pointer">Education</p>
          <p className="pb-3 -mb-2 cursor-pointer">Job</p>
        </div>

        <div className="flex items-center gap-2 text-sm pb-2.5 4bp:text-xs">
          <button className="flex items-center gap-2 bg-gray-100 text-black py-2 px-3 rounded">
            <p>Write a Post</p>
            <p>
              <BiSolidDownArrow />
            </p>
          </button>

          <button className="flex items-center gap-2 bg-blue-600 text-white py-2 px-3 rounded">
            <MdGroupAdd />
            <p>Join Group</p>
          </button>
        </div>
      </div>

      <div className="hidden 5bp:flex 5bp:justify-between 5bp:items-center 5bp:text-sm 5bp:py-6">
        <p className="font-bold">Posts(368)</p>

        <div className="dropdown">
          <button
            className="btn dropdown-toggle text-xs bg-gray-200"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Filter: All
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>
              <a className="dropdown-item" href="#">
                Article
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Event
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Education
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Job
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavigationTabs;
