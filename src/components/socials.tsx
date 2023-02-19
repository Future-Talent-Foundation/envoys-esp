import Link from "next/link";
import React from "react";
import {
  FacebookIcon,
  InstagramIcon,
  MixlrIcon,
  TwitterIcon,
  YoutubeIcon,
} from "./icons";

const styles = {
  text: `text-white text-[.9em] font-medium`,
  iconBG: `flex items-center justify-center w-8 h-8 rounded-xl bg-[rgba(255,255,255,0.1)] text-white`,
};

const Socials = () => {
  return (
    <div className="flex gap-2">
      <Link
        href="https://web.facebook.com/rccgtheenvoys"
        target="_blank"
        className={styles.iconBG}
      >
        <FacebookIcon className="fill-white" props={""} />
      </Link>
      <Link
        href="https://www.instagram.com/rccgtheenvoys/"
        target="_blank"
        className={styles.iconBG}
      >
        <InstagramIcon className="fill-[white]" props={""} />
      </Link>
      <Link
        href="https://twitter.com/rccgtheenvoys"
        target="_blank"
        className={styles.iconBG}
      >
        <TwitterIcon className="fill-white" props={""} />
      </Link>
      <Link
        href="https://mixlr.com/rccgtheenvoys"
        target="_blank"
        className={styles.iconBG}
      >
        <MixlrIcon className="fill-inherit" props={""} />
      </Link>
      <Link
        href="https://www.youtube.com/@rccgtheenvoys"
        target="_blank"
        className={styles.iconBG}
      >
        <YoutubeIcon className="fill-white" props={""} />
      </Link>
    </div>
  );
};

export default Socials;
