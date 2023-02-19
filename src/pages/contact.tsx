import {
  EmailFillIcon,
  FacebookIcon,
  InstagramIcon,
  PhoneFillIcon,
  RectangleIcon,
  TwitterIcon,
  WebIcon,
} from "@/components/icons";
import Salvation from "@/components/salvation";
import ContactSection from "@/interface/contactSection";
import Gathering from "@/interface/gathering";
import Link from "next/link";
import React from "react";

const styles = {
  iconBG: `flex items-center justify-center w-8 h-8 rounded-lg text-[green] bg-[rgba(16,152,58,0.1)]`,
};

const Contact = () => {
  return (
    <div className="flex flex-col gap-[4em]">
      <div className=" w-full h-full sm:w-[80%] shadow-[0px_14px_50px_rgba(0,0,0,0.06)] m-auto mt-8">
        <div className="border-[1.5px] border-solid border-[#10983A] "></div>
        <RectangleIcon
          props={""}
          className="m-auto mt-[-2px] md:mt-auto w-[17em] sm:w-full"
        />
        <div className="px-4 pb-[1.5em] ">
          <h2 className="text-2xl font-bold text-center m-5">CONTACT US</h2>
          <span className="flex text-lg items-center justify-center font-medium text-center max-w-[75em] m-auto">
            You can contact us by filling the form below or by using any of the
            communication medium.
          </span>
        </div>
      </div>
      <div className="flex flex-col-reverse md:flex-row justify-between w-full items-center md:items-start m-auto max-w-[90em] px-4 gap-6">
        <div className="flex flex-col gap-1">
          <h2 className="text-2xl font-bold">GET IN TOUCH</h2>
          <p className="text-lg max-w-[28em] leading-6 text-[#4F4F4F] mb-4">
            We would love to hear from you. Our Team is always here to chat with
            you.
          </p>
          <div className="flex flex-col gap-4 mb-5">
            <div className="flex w-full justify-start gap-2">
              <EmailFillIcon
                props={""}
                className=" mt-[5px] min-w-[1.7em] max-w-[1.5em]"
              />
              <div className="">
                <h3 className="text-lg font-bold">Send us an email</h3>
                <p className="text-[#4F4F4F]">rccgtheenvoys@gmail.com</p>
              </div>
            </div>
            <div className="flex w-full justify-start gap-2">
              <PhoneFillIcon
                props={""}
                className="text-[#10983A] mt-[5px] min-w-[1.5em] max-w-[1.5em]"
              />
              <div className="">
                <h3 className="text-lg font-bold">Chat with us on WhatsApp</h3>
                <p className="text-[#4F4F4F]">(+234)906 213 4890</p>
              </div>
            </div>
            <div className="flex w-full justify-start gap-2">
              <PhoneFillIcon
                props={""}
                className="text-[#10983A] mt-[5px] min-w-[1.5em] max-w-[1.5em]"
              />
              <div className="">
                <h3 className="text-lg font-bold">Call us directly</h3>
                <p className="text-[#4F4F4F]">(+234)906 213 4890</p>
              </div>
            </div>
          </div>
          <div className="">
            <h3 className="text-lg font-bold leading-6 max-w-[18em] mb-3">
              Reach out to us on our Social Media Platforms
            </h3>
            <div className="flex gap-2">
              <Link
                href="https://web.facebook.com/rccgtheenvoys"
                target="_blank"
                className={styles.iconBG}
              >
                <FacebookIcon className="" props={""} />
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
                <TwitterIcon className="" props={""} />
              </Link>
              <Link
                href="https://www.rccgtheenvoys.org/contact"
                target="_blank"
                className={styles.iconBG}
              >
                <WebIcon className="" props={""} />
              </Link>
              <Link
                href="mailto:email@example.com"
                target="_blank"
                className={styles.iconBG}
              >
                <EmailFillIcon className="" props={""} />
              </Link>
            </div>
          </div>
        </div>
        <ContactSection />
      </div>
      <div className="m-auto px-4">
        <Gathering />
      </div>
      <div className="m-auto mb-[4em] px-4">
        <Salvation />
      </div>
    </div>
  );
};

export default Contact;
