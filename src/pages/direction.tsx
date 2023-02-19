import { LocationIcon, RectangleIcon } from "@/components/icons";
import Salvation from "@/components/salvation";
import Services from "@/components/services";
import PrimaryButton from "@/interface/primaryButton";
import React from "react";

const Direction = () => {
  return (
    <div className="flex flex-col gap-[4em]">
      <div className=" w-full h-full sm:w-[80%] shadow-[0px_14px_50px_rgba(0,0,0,0.06)] m-auto mt-8">
        <div className="border-[1.5px] border-solid border-[#10983A] "></div>
        <RectangleIcon
          props={""}
          className="m-auto mt-[-2px] md:mt-auto w-[17em] sm:w-full"
        />
        <div className="px-4 pb-[.5em] ">
          <h2 className="text-2xl font-bold text-center m-5">GET DIRECTION</h2>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center p-4 sm:p-10 border-solid border-[1px] border-[border] rounded-[10px] w-full max-w-[80%] m-auto gap-6">
        <h3 className="text-[green] text-lg font-bold">OUR CHURCH ADDRESS</h3>
        <h2 className="text-center text-3xl md:text-4xl max-w-[12em] font-semibold">
          Excellence Hotel, Ogba Ikeja, Lagos.
        </h2>
        <PrimaryButton
          className="flex items-center justify-center max-w-[16em] gap-2"
          url="https://maps.google.com?q=Excellence%20Hotel%20Ogba,%20Lateef%20Jakande%20Road,%20Ikeja&ftid=0x103b932667444265:0x7be544a47b086449&hl=en-US&gl=us&entry=gps&lucs=47062720&g_st=ic"
        >
          <LocationIcon props={""} className="" />
          Open in Google Maps
        </PrimaryButton>
      </div>
      <div className="m-auto max-w-[70em] px-4">
        <Services />
      </div>
      <div className="m-auto px-4 mb-10">
        <Salvation />
      </div>
    </div>
  );
};

export default Direction;
