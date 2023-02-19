import PastorCard from "@/interface/pastorCard";
import React from "react";

const Pastorates = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full gap-2">
      <h1 className="text-center text-xl text-[green] font-semibold">
        OUR PASTORATE
      </h1>
      <h3 className="text-center text-2xl font-bold mb-6">
        OUR BELOVED PASTORS
      </h3>
      <div className="flex items-center justify-center flex-wrap gap-4">
        <PastorCard
          image="https://res.cloudinary.com/devkp5za2/image/upload/v1676429905/theenvoys/Image_zakuxg.png"
          alt="Pastor Daniel Olawande"
          name="PASTOR DANIEL OLAWANDE"
          title="LEAD PASTOR"
          facebook="https://web.facebook.com/pdanielolawande"
          instagram="https://www.instagram.com/pdanielolawande/"
          twitter="https://twitter.com/pdanielolawande"
          email="mailto:info@pdanielolawande.com"
        />
        <PastorCard
          image="https://res.cloudinary.com/devkp5za2/image/upload/v1676429924/theenvoys/Image_jjdyvl.png"
          alt="Pastor Nifemi Olawande"
          name="PASTOR NIFEMI OLAWANDE"
          title="BRANCH PASTOR"
          facebook="https://web.facebook.com/pdanielolawande"
          instagram="https://www.instagram.com/pdanielolawande/"
          twitter="https://twitter.com/pdanielolawande"
          email="mailto:info@pdanielolawande.com"
        />
      </div>
    </div>
  );
};

export default Pastorates;
