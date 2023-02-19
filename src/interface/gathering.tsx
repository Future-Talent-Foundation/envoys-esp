import React from "react";
import PrimaryButton from "./primaryButton";

const Gathering = () => {
  return (
    <div className="flex items-center justify-center flex-col max-w-[75em] p-8 m-auto border-solid border-[1px] border-[#D2D2D2] rounded-[10px] gap-4">
      <h3 className="text-xl font-semibold text-[green]">
        A GATHERING FOR YOU
      </h3>
      <h4 className="text-xl font-bold text-center">
        Come join us and experience how God changes lives and how men are
        transformed
      </h4>
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

export default Gathering;
