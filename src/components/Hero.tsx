import heroImg from "../assets/bg_image.svg";

function Hero() {
  return (
    <div className="w-full relative mt-0 mx-auto mb-[32px]">
      <div>
        <img
          className="w-full h-auto max-h-[440px] object-cover"
          src={heroImg}
          alt="Hero background Image"
        />
        <div className="bg-black/50 absolute h-full w-full top-0 left-0" />
      </div>

      <div className="max-w-[1040px] w-[1040px] flex justify-around items-center text-white absolute bottom-[80px] mx-auto">
        <div>
          <h1 className="text-4xl font-bold">Computer engineering</h1>
          <p className="text-base font-normal">
            142,765 Computer Engineers follow this
          </p>
        </div>

        <div />
      </div>
    </div>
  );
}

export default Hero;
