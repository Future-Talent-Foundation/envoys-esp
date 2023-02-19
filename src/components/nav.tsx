import Image from "next/image";
import Link from "next/link";
import React, { useCallback, useEffect, useState } from "react";
import { CancelIcon, HamburgerIcon } from "./icons";

const styles = {
  navText: `font-medium text-sm py-4 px-5 md:py-2 md:px-3 hover:text-[green] hover:font-extrabold w-full text-center ease-in duration-200 whitespace-nowrap`,
  navActive: `font-medium text-sm py-4 px-5 md:py-2 md:px-3 text-[green] font-extrabold w-full ease-in text-center duration-200 whitespace-nowrap`,
};

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [items, setItems] = useState(
    "active" || [
      "home",
      "about",
      "giving",
      "sermons",
      "interest",
      "direction",
      "contact",
    ]
  );

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex justify-between items-center max-w-[92em] px-4 w-full my-[1em] mx-auto">
      <Link href="/">
        <Image
          className=""
          src="https://res.cloudinary.com/devkp5za2/image/upload/v1676213144/theenvoys/THE_ENVOYS_LOGO_FILE-1_aojvjq.png"
          alt="logo"
          width={90}
          height={50}
        />
      </Link>
      <div className="relative">
        <div className="" onClick={handleMenuClick}>
          {isOpen === false ? (
            <HamburgerIcon
              props={""}
              className="transition-all ease-in-out duration-300 inline text-black md:hidden min-w-[1.3em] max-w-[1.2em] cursor-pointer"
            />
          ) : (
            <CancelIcon
              props={""}
              className="transition-all ease-in-out duration-300 inline text-black md:hidden min-w-[1.3em] max-w-[1.3em] cursor-pointer"
            />
          )}
        </div>

        <div
          className={`flex flex-col md:flex-row right-[16px] md:right-0 md:bg-transparent z-[9] bg-white md:translate-y-0 -translate-y-[200%] fixed w-[12em] md:w-full rounded-[6px] md:static transition-transform ease-in-out duration-500 md:shadow-transparent shadow-[0px_0px_20px_rgba(0,0,0,0.1)] mt-4 md:rounded-none items-center justify-center
            ${isOpen ? "translate-y-0 " : ""}`}
        >
          <Link
            className={items == "home" ? styles.navActive : styles.navText}
            onClick={() => {
              setItems("home");
              setIsOpen(false);
            }}
            href="/"
          >
            Home
          </Link>
          <Link
            className={items == "about" ? styles.navActive : styles.navText}
            onClick={() => {
              setItems("about");
              setIsOpen(false);
            }}
            href="/about"
          >
            About
          </Link>
          <Link
            className={items == "giving" ? styles.navActive : styles.navText}
            onClick={() => {
              setItems("giving");
              setIsOpen(false);
            }}
            href="/giving"
          >
            Giving
          </Link>
          {/* <Link
          className={items == "sermons" ? styles.navActive : styles.navText}
          onClick={() => setItems("sermons")}
          href="/sermons"
          >
          Sermons
          </Link> */}
          <Link
            className={items == "interest" ? styles.navActive : styles.navText}
            onClick={() => {
              setItems("interest");
              setIsOpen(false);
            }}
            href="/interest"
          >
            Interest Group
          </Link>
          <Link
            className={items == "direction" ? styles.navActive : styles.navText}
            onClick={() => {
              setItems("direction");
              setIsOpen(false);
            }}
            href="/direction"
          >
            Get Direction
          </Link>
          {/* <Link className={items == "home" ? styles.navActive : styles.navText}
          onClick={() => setItems("home")} href="/gallery">
          Gallery
          </Link> */}
          <Link
            className={items == "contact" ? styles.navActive : styles.navText}
            onClick={() => {
              setItems("contact");
              setIsOpen(false);
            }}
            href="/contact"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
