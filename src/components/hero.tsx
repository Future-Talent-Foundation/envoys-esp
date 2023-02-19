import React from "react";
import PrimaryButton from "@/interface/primaryButton";

const Hero = () => {
  return (
    <div className="flex items-center justify-center bg-[url('https://res.cloudinary.com/devkp5za2/image/upload/v1675996207/theenvoys/Rectangle_6_iz1z5h.png')] bg-cover bg-center bg-no-repeat h-[88vh] ">
      <div className="flex flex-col items-center justify-center w-full max-w-[1100px] py-2 px-4">
        <div>
          <h1 className="text-white font-bold md:text-[39px] text-2xl text-center mb-2 ">
            WELCOME TO THE ENVOYS
          </h1>
          <p className="text-[rgba(206,206,206,0.83)] md:text-xl text-md font-normal mb-5 text-center">{`We're excited you're home!`}</p>
        </div>
        <div className="border-solid border-[#D2D2D2] border-[1px] w-full rounded-md backdrop-blur-sm">
          <div className="flex flex-col items-center justify-center before:blur-[20px] w-full py-10 md:p-8 p-4 bg-[rgba(255,255,255,0.1)] ">
            <span className="text-[green] font-semibold md:font-bold mb-[1.5em]">
              A GATHERING FOR YOU
            </span>
            <span className="text-white font-semibold text-center text-xl md:text-3xl w-full max-w-[900px] mb-[1.5em]">
              Come join us and experience how God changes lives and how men are
              transformed
            </span>
            <PrimaryButton
              url="https://beta.humdov.app/members/add-member"
              target="_blank"
              className="w-[12em]"
            >
              Become A Member
            </PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
