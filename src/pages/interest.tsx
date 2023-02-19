import { RectangleIcon } from "@/components/icons";
import Salvation from "@/components/salvation";
import Gathering from "@/interface/gathering";
import InterestCard from "@/interface/interestCard";
import React from "react";

const Interest = () => {
  return (
    <div className="flex flex-col gap-[4em] ">
      <div className=" w-full h-full sm:w-[80%] shadow-[0px_14px_50px_rgba(0,0,0,0.06)] m-auto mt-8">
        <div className="border-[1.5px] border-solid border-[#10983A] "></div>
        <RectangleIcon
          props={""}
          className="m-auto mt-[-2px] md:mt-auto w-[17em] sm:w-full"
        />
        <div className="px-4 pb-[1.5em] ">
          <h2 className="text-2xl font-bold text-center m-5">
            INTEREST GROUPS
          </h2>
          <span className="flex text-lg font-medium text-center max-w-[75em] m-auto">
            Join amazing interest groups with a lot of amazing, talented, and
            spirit-filled people who have been able to created a balance between
            their daily life and their Spiritual Life.
          </span>
        </div>
      </div>
      <div className="m-auto px-4">
        <h2 className="uppercase text-lg font-bold mb-5">
          Select and join your prefered interest group
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-4">
          <InterestCard
            interest="Government"
            description="Join a group of politician changing the world for God one city at a time"
            url=""
          />
          <InterestCard
            interest="Education"
            description="Join and find out how Education can change the world for God"
            url=""
          />
          <InterestCard
            interest="Business"
            description="Do business the right way and it won’t affect your relationship with God"
            url=""
          />
          <InterestCard
            interest="Music"
            description="Come be among worshipper who love to sing the praises of God."
            url=""
          />
          <InterestCard
            interest="Health"
            description="Meet people in the Health sector on how they make great Impact "
            url=""
          />
          <InterestCard
            interest="Sports"
            description="Meet people in the Sports sector on how they make great Impact "
            url=""
          />
          <InterestCard
            interest="Fashio"
            description="Meet people in the Fashio Industry on how they make great Impact "
            url=""
          />
          <InterestCard
            interest="Arts"
            description="Meet people in the Art sector on how they make great Impact "
            url=""
          />
          <InterestCard
            interest="Technology"
            description="Meet people in the Tech Industry on how they make great Impact "
            url=""
          />
          <InterestCard
            interest="Media"
            description="Meet people in the Media sector on how they make great Impact "
            url=""
          />
          <InterestCard
            interest="Agriculture"
            description="Meet people in the Agric sector on how they make great Impact "
            url=""
          />
          <InterestCard
            interest="Entertainment"
            description="Meet people in the Entertainment sector on how they make great Impact "
            url=""
          />
          <InterestCard
            interest="Family"
            description="Meet people in the Family category on how they make great Impact in their Family "
            url=""
          />
          <InterestCard
            interest="CSR & Social"
            description="Meet people in the Social sector on how they make great Impact "
            url=""
          />
        </div>
      </div>
      <div className="m-auto px-4">
        <Gathering />
      </div>
      <div className="m-auto px-4 mb-10">
        <Salvation />
      </div>
    </div>
  );
};

export default Interest;
