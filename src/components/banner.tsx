import Link from "next/link";
import React from "react";
import { EmailIcon, PhoneIcon, TimerIcon } from "./icons";
import Socials from "./socials";

const styles = {
  text: `text-white text-[.9em] font-medium`,
  iconBG: `flex items-center justify-center w-8 h-8 rounded-xl bg-[rgba(255,255,255,0.1)]`,
};

const Banner = () => {
  return (
    <div className="flex justify-around relative z-10 items-center bg-[green] py-4 px-4 md:flex-row flex-col gap-[1em]">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
        <div className="flex items-center justify-center gap-2">
          <div className="text-white max-w-[1.3em]">
            <TimerIcon props={""} className="" />
          </div>
          <span className={styles.text}>
            Opening Hours - 04:00 PM Every Sunday
          </span>
        </div>
        <div className="bg-white w-[3px] h-[24px] hidden sm:inline"></div>
        <Socials />
      </div>
      <div className="sm:flex justify-between items-center gap-7 hidden">
        <Link
          href="mailto:email@example.com"
          target="_blank"
          className="flex items-center justify-center "
        >
          <div className=" text-white mr-[.3em]">
            <EmailIcon props={""} className="" />
          </div>
          <span className={styles.text}>rccgtheenvoys@gmail.com</span>
        </Link>
        <Link
          href="tel:+2347046594084"
          target="_blank"
          className="flex items-center justify-center "
        >
          <div className=" text-white mr-[.3em]">
            <PhoneIcon props={""} className="" />
          </div>
          <span className={styles.text}>WhatsApp: +2349062134890</span>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
