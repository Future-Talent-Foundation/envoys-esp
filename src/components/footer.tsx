import PrimaryButton from "@/interface/primaryButton";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Socials from "./socials";

import Newsletter from "./newsletter";

const styles = {
  navText: `font-medium text-sm py-2 px-3  hover:text-[green] hover:font-bold active:font-bold ease-in duration-200 whitespace-nowrap`,
};

const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center bottom-0 mt-auto w-full ">
      <div className="flex flex-col items-center justify-between w-full max-w-[1000px] mt-8 px-4">
        <Newsletter />
        <div className="flex flex-wrap justify-center items-center mb-3 ">
          <Link className={styles.navText} href="/">
            Home
          </Link>
          <Link className={styles.navText} href="/about">
            About
          </Link>
          <Link className={styles.navText} href="/giving">
            Giving
          </Link>
          {/* <Link className={styles.navText} href="/about">
            Sermons
          </Link> */}
          <Link className={styles.navText} href="/interest">
            Interest Group
          </Link>
          <Link className={styles.navText} href="/direction">
            Get Direction
          </Link>
          {/* <Link className={styles.navText} href="/about">
            Gallery
          </Link> */}
          <Link className={styles.navText} href="/contact">
            Contact Us
          </Link>
        </div>
        <div className="border-solid border-[#DFDFDF] border-[1px] w-full mb-8"></div>
      </div>
      <div className="flex  w-full py-3 bg-[green]">
        <div className=" w-full px-4 flex flex-col sm:flex-row justify-between items-center max-w-[80em] gap-[.75em] m-auto">
          <p className="text-white text-sm font-normal ">
            Copyright &copy;2023 All rights reserved
          </p>
          <div className="flex items-center gap-2">
            <Socials />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
