import atgLogo from "../assets/atg_logo.svg";
import { BiSolidDownArrow } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import SignupModal from "./SignupModal.tsx";
import { useState } from "react";

function Navbar() {
  const [showModal, setShowModal] = useState(false);

  return (
    <nav className="w-full text-plex-sans flex items-center justify-between px-16 py-3.5 text-sm">
      <div>
        <img className="w-[163px] h-[24px]" src={atgLogo} alt="ATG WORLD" />
      </div>

      <div className="flex items-center gap-1 w-[360px] h-[42px] text-zinc-600 bg-zinc-100 rounded-[21px] px-3.5 py-2.5">
        <div className="text-lg mr-3.5">
          <AiOutlineSearch />
        </div>
        <input
          className="w-full outline-none bg-transparent"
          type="text"
          name="search"
          id="search"
          placeholder="Search for your favorite groups in ATG"
        />
      </div>

      <div className="flex items-center gap-1">
        <p className="text-zinc-800 text-sm font-medium">Create account.</p>
        <button
          className="text-blue-600 text-sm font-bold"
          onClick={() => setShowModal(!showModal)}
        >
          It's free
        </button>
        <p className="text-[8px]">
          <BiSolidDownArrow />
        </p>
      </div>

      {!showModal && (
        <div className="">
          <SignupModal showModal={showModal} setShowModal={setShowModal} />
        </div>
      )}
    </nav>
  );
}

export default Navbar;
