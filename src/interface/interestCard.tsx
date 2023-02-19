import { WhatsAppIcon } from "@/components/icons";
import React from "react";
import PrimaryButton from "./primaryButton";

interface InterestProps {
  interest: string;
  description: string;
  url: string;
}

const InterestCard = ({ interest, description, url }: InterestProps) => {
  return (
    <div className="flex flex-col gap-2 p-4 border-solid border-[1px] border-[border] rounded-[10px]">
      <h3 className="font-bold text-lg">{interest}</h3>
      <p className="text-start max-w-[20em] text-sm mb-2">{description}</p>
      <PrimaryButton
        url={url}
        className="flex justify-center items-center w-full font-semibold text-sm gap-2"
      >
        <WhatsAppIcon className="min-w-[1.2em] max-w-[1.5em]" props={""} />
        Join WhatsApp Group
      </PrimaryButton>
    </div>
  );
};

export default InterestCard;
