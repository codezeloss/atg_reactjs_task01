import heroImg from "../assets/bg_image.svg";
import heroImgMobile from "../assets/bg_image_mobile.svg";
import { BiArrowBack } from "react-icons/bi";

function Hero() {
  return (
    <div className="w-full relative mt-0 mx-auto mb-[32px] 5bp:mb-0">
      <div>
        <img
          className="w-full h-auto max-h-[440px] object-cover 5bp:hidden"
          src={heroImg}
          alt="Hero background Image"
        />
        <img
          className="hidden 5bp:flex 5bp:w-full 5bp:h-auto 5bp:max-h-[440px] 5bp:object-cover"
          src={heroImgMobile}
          alt="Hero background Image"
        />
        <div className="bg-black/50 absolute h-full w-full top-0 left-0" />
      </div>

      <div>
        <div className="hidden 5bp:flex justify-between items-center text-white absolute top-[10px] left-[20px] right-[13px]">
          <p className="text-lg">
            <BiArrowBack />
          </p>
          <button className="text-xs border-[1px] border-white rounded p-1 hover:bg-white/20">
            Join Group
          </button>
        </div>

        <div className="w-fit flex items-center text-white absolute bottom-[80px] left-[80px] mx-auto 2bp:left-[40px] 2bp:bottom-[40px] 3bp:left-[20px] 4bp:bottom-[20px] 6bp:bottom-[35px]">
          <div>
            <h1 className="text-4xl font-bold 3bp:text-2xl 4bp:text-xl">
              Computer engineering
            </h1>
            <p className="text-base font-normal 3bp:text-xs">
              142,765 Computer Engineers follow this
            </p>
          </div>

          <div />
        </div>
      </div>
    </div>
  );
}

export default Hero;
