import facebook from "../assets/facebook_icon.svg";
import google from "../assets/google_icon.svg";
import illustration from "../assets/atg_illustration.svg";
import { GrClose } from "react-icons/gr";

function SignupModal({ showModal, setShowModal }: any) {
  return (
    <div className="bg-black/50 w-full h-full absolute z-20 flex justify-center top-0 left-0 right-0 bottom-0">
      <div className="mt-40">
        <div className="w-full flex items-center justify-between mb-2">
          <div />
          <button
            className="bg-white text-gray-600 p-2 text-sm rounded-full cursor-pointer"
            onClick={() => setShowModal(!showModal)}
          >
            <GrClose />
          </button>
        </div>

        <div>
          <div className="w-[775px] h-[513px] bg-white rounded mx-auto">
            <p className="text-green-700 text-sm font-semibold bg-green-50 py-3 text-center mb-4 rounded-t">
              Let's learn, share & inspire each other with our passion for
              computer engineering. Sign up now 🤘🏼
            </p>

            <div className="flex gap-4 px-9">
              <div className="w-80">
                <h1 className="text-2xl font-bold mb-3">Create Account</h1>
                <div className="mb-4">
                  <div className="flex">
                    <input
                      className="bg-slate-50 outline-none w-40 border border-zinc-300 py-2.5 font-semibold px-2.5"
                      type="text"
                      placeholder="First Name"
                    />
                    <input
                      className="bg-slate-50 outline-none w-40 border border-l-0 border-zinc-300 py-2.5 font-semibold px-2.5"
                      type="text"
                      placeholder="Last Name"
                    />
                  </div>

                  <input
                    className="w-full bg-slate-50 outline-none border border-t-0 border-l-0 border-zinc-300 py-2.5 font-semibold px-2.5"
                    type="email"
                    placeholder="Email"
                  />
                  <input
                    className="w-full bg-slate-50 outline-none border border-t-0 border-l-0 border-zinc-300 py-2.5 font-semibold px-2.5"
                    type="password"
                    placeholder="Password"
                  />
                  <input
                    className="w-full bg-slate-50 outline-none border border-t-0 border-l-0 border-zinc-300 py-2.5 font-semibold px-2.5"
                    type="text"
                    placeholder="Confirm Password"
                  />
                </div>

                <button className="bg-blue-600 rounded-[20px] mb-4 text-white font-bold w-full text-center py-2.5">
                  Create Account
                </button>

                <div>
                  <button className="flex w-full items-center text-sm text-center border-[1px] gap-2 justify-center py-2 mb-2">
                    <img src={facebook} alt="Signup with facebook" />
                    <p>Sign up with Facebook</p>
                  </button>
                  <button className="flex w-full items-center text-sm text-center border-[1px] gap-2 justify-center py-2">
                    <img src={google} alt="Signup with Google" />
                    <p>Sign up with Google</p>
                  </button>
                </div>
              </div>

              <div className="flex flex-col justify-between items-end">
                <div className="flex items-center gap-1 text-right">
                  <p className="text-zinc-800 text-sm font-medium">
                    Already have an account?
                  </p>
                  <button className="text-blue-600 text-sm font-bold">
                    Sign In
                  </button>
                </div>
                <img
                  className="max-w-[320px] max-h-[320px]"
                  src={illustration}
                  alt="ATG Illustration"
                />
                <p className="text-xs text-black/60">
                  By signing up, you agree to our Terms & conditions, Privacy
                  policy
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupModal;
