import facebook from "../assets/facebook_icon.svg";
import google from "../assets/google_icon.svg";
import illustration from "../assets/atg_illustration.svg";
import { GrClose } from "react-icons/gr";
import { useState } from "react";
import { HiOutlineEye } from "react-icons/hi";

function SignupModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      {!showModal && (
        <div className="bg-black/50 w-full h-full absolute z-20 flex justify-center top-0 left-0 right-0 bottom-0 overflow-hidden">
          <div className="mt-20 mx-auto">
            <div className="w-full flex items-center justify-between mb-2">
              <div />
              <button
                className="bg-white text-gray-600 p-2 text-sm rounded-full cursor-pointer 3bp:-mb-14 3bp:mr-1"
                onClick={() => setShowModal(!showModal)}
              >
                <GrClose />
              </button>
            </div>

            <div>
              <div className="w-full h-[457px] bg-white rounded mx-auto 5bp:h-fit 5bp:pb-8">
                <p className="text-green-700 text-sm font-semibold bg-green-50 py-3 text-center mb-4 rounded-t 3bp:hidden">
                  Let's learn, share & inspire each other with our passion for
                  computer engineering. Sign up now 🤘🏼
                </p>

                <div className="flex items-center gap-4 px-9 3bp:w-full 3bp:mx-3.5 3bp:px-3">
                  <div className="w-80">
                    <h1 className="text-2xl font-bold mb-3 3bp:mt-8 4bp:text-lg">
                      Sign In
                    </h1>
                    <div className="mb-4 text-sm 4bp:text-xs">
                      <input
                        className="w-full bg-slate-50 outline-none border border-t-0 border-l-0 border-zinc-300 py-2.5 font-semibold px-2.5"
                        type="email"
                        placeholder="Email"
                      />
                      <div className="relative">
                        <input
                          className="w-full bg-slate-50 outline-none border border-t-0 border-l-0 border-zinc-300 py-2.5 font-semibold px-2.5"
                          type="password"
                          placeholder="Password"
                        />
                        <button className="absolute right-2 bottom-3.5 text-base text-zinc-500">
                          <HiOutlineEye />
                        </button>
                      </div>
                    </div>

                    <div className="mb-4 3bp:flex items-center justify-between">
                      <button className="bg-blue-600 text-sm hover:bg-blue-600/70 rounded-[20px] text-white font-bold w-full text-center py-2.5 3bp:w-fit 3bp:px-8 3bp:mb-0 4bp:text-xs">
                        Sign In
                      </button>
                      <a
                        href="/register"
                        className="hidden 3bp:flex underline text-xs"
                      >
                        <p>or, Create Account</p>
                      </a>
                    </div>

                    <div className="text-sm 4bp:text-xs">
                      <button className="flex w-full items-center text-center border-[1px] gap-2 justify-center py-2 mb-2">
                        <img src={facebook} alt="Signin with facebook" />
                        <p>Sign in with Facebook</p>
                      </button>
                      <button className="flex w-full items-center text-center border-[1px] gap-2 justify-center py-2">
                        <img src={google} alt="Signin with Google" />
                        <p>Sign in with Google</p>
                      </button>
                    </div>
                    <p className="text-zinc-800 text-xs font-medium text-center mt-4 hover:underline cursor-pointer 3bp:mt-6">
                      Forgot Password?
                    </p>
                  </div>

                  <div className="flex flex-col justify-between items-end 3bp:hidden">
                    <div className="flex items-center gap-1 text-right">
                      <p className="text-zinc-800 text-sm font-medium">
                        Dont have an account yet?
                      </p>
                      <a
                        href="/register"
                        className="text-blue-600 text-sm font-bold"
                      >
                        Create new for free
                      </a>
                    </div>
                    <img
                      className="max-w-[320px] max-h-[320px]"
                      src={illustration}
                      alt="ATG Illustration"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SignupModal;
