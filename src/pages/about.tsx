import { RectangleIcon } from "@/components/icons";
import Pastorates from "@/components/pastorates";
import Salvation from "@/components/salvation";
import Services from "@/components/services";
import VisionMission from "@/components/visionMission";
import Gathering from "@/interface/gathering";
import PrimaryButton from "@/interface/primaryButton";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="flex flex-col gap-20">
      <div className="w-full h-full sm:w-[80%] shadow-[0px_14px_50px_rgba(0,0,0,0.06)] m-auto mt-8">
        <div className="border-[1.5px] border-solid border-[#10983A] "></div>
        <RectangleIcon
          props={""}
          className="m-auto mt-[-2px] md:mt-auto w-[17em] sm:w-full"
        />
        <div className="px-2 ">
          <h2 className="text-2xl font-bold text-center m-5">
            ABOUT THE ENVOYS CHURCH
          </h2>
          <span className="flex text-lg font-medium text-center max-w-[75em] m-auto">
            We are a community oriented family church and we place great
            emphasis on love and connectivity to foster unity in worship. We are
            a praying church and we stand for sound doctrine. We place a high
            regard on creatives and because God is a creative with a great value
            for excellence, we strive for excellence to encapsulate a wholesome
            service and community. Our fellowship isn’t complete without
            adequate worship and adoration, this is why we intentionally build a
            worship culture.{" "}
          </span>
        </div>
        <Image
          src="https://res.cloudinary.com/devkp5za2/image/upload/v1676428173/theenvoys/Image_o4ea4r.png"
          alt=""
          width={1100}
          height={570}
          className="flex items-center justify-center text-center m-auto mt-8 p-8 pb-0"
        />
      </div>
      <div className="m-auto max-w-[75em] px-4">
        <Services />
      </div>
      <div className="m-auto px-4">
        <VisionMission />
      </div>
      <div className="m-auto px-4">
        <Gathering />
      </div>
      <div className="px-4">
        <Pastorates />
      </div>
      <div className="m-auto px-4 mb-10">
        <Salvation />
      </div>
    </div>
  );
};

export default About;
