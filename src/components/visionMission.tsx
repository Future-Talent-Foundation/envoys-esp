import PrimaryButton from "@/interface/primaryButton";
import Image from "next/image";
import React from "react";

const VisionMission = () => {
  return (
    <div className="flex flex-col w-full max-w-[92em] ">
      <div className="flex flex-col justify-center items-center gap-3">
        <h3 className="text-[green] text-2xl font-bold text-center ">
          VISION AND MISSION STATEMENT
        </h3>
        <p className="flex text-lg items-center justify-center font-semibold text-center max-w-[30em] mb-8">
          We are sent to nations to spread the Gospel of Jesus
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between gap-[1.2em] border-solid border-[1px] border-[border] md:pr-4 rounded-[10px] mb-[2em] overflow-hidden">
        <div>
          <Image
            src="https://res.cloudinary.com/devkp5za2/image/upload/v1676219940/theenvoys/Rectangle_5_axyfz0.png"
            alt=""
            width={483}
            height={376}
            loading="lazy"
          />
        </div>
        <div className="flex flex-col p-4 pr-0 gap-3">
          <h3 className="font-bold text-[green] text-lg">OUR VISION</h3>
          <p className="text-lg font-bold leading-6">
            Building a Supernatural community
          </p>
          <p className="text-[gray] text-sm">
            We are raising a supernatural army, the king’s peculiar troop
            deployed as the His into every sphere of human endeavors.
          </p>
          <PrimaryButton
            url="https://beta.humdov.app/members/add-member"
            target="_blank"
            className="w-[12em]"
          >
            Become A Member
          </PrimaryButton>
        </div>
      </div>
      <div className="flex items-center flex-col md:flex-row overflow-hidden justify-between gap-[1.2em] border-solid border-[border] border-[1px] w-full rounded-[10px] md:pl-0">
        <div className="flex flex-col p-4 gap-3">
          <h3 className="font-bold text-[green] text-lg">OUR MISSION</h3>
          <p className="text-lg font-bold leading-6">
            Bringing many to that point where they know God for themselves
          </p>
          <p className="text-[gray] text-sm">
            We are a people that the Lord would sending to many nations to teach
            the Gospel of Jesus, and to set the captives free. Come join us!
          </p>
          <PrimaryButton
            url="https://beta.humdov.app/members/add-member"
            target="_blank"
            className="w-[12em]"
          >
            Become A Member
          </PrimaryButton>
        </div>
        <div>
          <Image
            src="https://res.cloudinary.com/devkp5za2/image/upload/v1676219940/theenvoys/Rectangle_5_1_j1znps.png"
            alt=""
            width={483}
            height={376}
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default VisionMission;
