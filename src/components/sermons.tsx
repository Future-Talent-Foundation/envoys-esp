import SecondaryButton from "@/interface/secondaryButton";
import SermonCard from "@/interface/sermonCard";
import React from "react";

const Sermons = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <div className="flex flex-col items-center justify-center text-center mb-16">
        <h3 className="text-2xl text-[green] font-bold">OUR SERMONS</h3>
        <p className="text-lg font-bold leading-6 max-w-[35em]">
          Renew your mind by listening to our Sermons
        </p>
      </div>
      {/* <div className="grid grid-cols-[repeat(auto-fill,_minmax(18em,_1fr))] w-full mb-8 gap-4"> */}
      <div className="flex flex-wrap justify-center items-center w-full mb-8 gap-4">
        <SermonCard />
        <SermonCard />
        <SermonCard />
        <SermonCard />
        <SermonCard />
        <SermonCard />
        <SermonCard />
        <SermonCard />
        <SermonCard />
      </div>
      <SecondaryButton url="/" className="w-[18em]">
        View More Sermons
      </SecondaryButton>
    </div>
  );
};

export default Sermons;
