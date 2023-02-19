import PrimaryButton from "@/interface/primaryButton";
import React from "react";

const Services = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full gap-[1.2em] px-4 text-center  border-solid border-[#D2D2D2] border-[1px] rounded-md p-8">
      <h3 className="text-[green] text-2xl font-bold">
        SERVICES AT THE ENVOYS
      </h3>
      <p className="text-xl md:text-2xl font-medium">
        We hold our services twice every week. Our mid week services hold
        virtually every Wednesday at 5pm while our Sunday services hold at 4pm.
        During our services, you experience uplifting worship, inspiring message
        and sound doctrine as well as fellowship with other believers.
      </p>
      <PrimaryButton
        url="https://beta.humdov.app/members/add-member"
        target="_blank"
        className="w-[12em]"
      >
        Become A Member
      </PrimaryButton>
    </div>
  );
};

export default Services;
