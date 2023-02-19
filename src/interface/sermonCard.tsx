import { DownloadIcon, MixlrIcon } from "@/components/icons";
import Image from "next/image";
import React from "react";
import PrimaryButton from "./primaryButton";
import SecondaryButton from "./secondaryButton";

const SermonCard = () => {
  return (
    <div className="w-[20em] border-solid border-[1px] border-[border] rounded-[10px]">
      <Image
        src="https://res.cloudinary.com/devkp5za2/image/upload/v1676219940/theenvoys/Rectangle_5_2_mxqsnk.png"
        alt=""
        width={415}
        height={288}
      />
      <div className="flex flex-col gap-2 justify-center items-start p-3">
        <h4 className="font-medium text-[green] text-sm">
          SERMON 1 - 19TH FEBRUARY, 2023
        </h4>
        <h5 className="font-bold text-md">Inferno</h5>
        <p className="text-xs text-[gray]">Category: Wisdom, Faith</p>
        <p className="text-sm font-medium">
          Listen to our inaugural service and be blessed
        </p>
        <div className="flex items-center justify-center flex-col md:flex-row gap-2 w-full ">
          <PrimaryButton url="/" className="">
            <div className="flex gap-2 items-center justify-center">
              <DownloadIcon
                className="fill-[green] max-w-[1.2em] w-[1em]"
                props={""}
              />
              Download now
            </div>
          </PrimaryButton>
          <SecondaryButton url="/" className="">
            <div className="flex gap-2 items-center justify-center  ">
              <MixlrIcon
                className="fill-[green] max-w-[1.2em] w-[1em]"
                props={""}
              />
              Listen Live
            </div>
          </SecondaryButton>
        </div>
      </div>
    </div>
  );
};

export default SermonCard;
