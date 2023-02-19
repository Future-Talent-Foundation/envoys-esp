import PrimaryButton from "@/interface/primaryButton";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { toast, ToastContainer } from "react-toastify";
import { useForm } from "@formspree/react";

import "react-toastify/dist/ReactToastify.css";

const Newsletter = () => {
  const [state, handleSubmit] = useForm("xvonagdk");
  const newsToast = () => {
    toast.success("Thank you for subscribing!❤️", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  if (state.succeeded) {
    return (
      <>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        {/* Same as */}
        <ToastContainer />
      </>
    );
  }
  return (
    <div className="flex flex-col items-center justify-center">
      <Link href="/">
        <Image
          className="mb-5"
          src="https://res.cloudinary.com/devkp5za2/image/upload/v1676213144/theenvoys/THE_ENVOYS_LOGO_FILE-1_aojvjq.png"
          alt="logo"
          width={80}
          height={50}
        />
      </Link>
      <form
        onSubmit={handleSubmit}
        className="flex justify-center items-center gap-[.75em] w-full mb-3 max-w-[550px] flex-col sm:flex-row"
      >
        <input
          className="border-solid border-[1px] px-[1.3em] py-[.6em] w-full outline-green-500 border-[#D2D2D2] rounded-[.2em]"
          id="email"
          type="email"
          name="email"
          placeholder="Enter your email"
        />
        <button
          type="submit"
          onClick={newsToast}
          className="text-center text-white bg-[green] w-full font-medium text-sm rounded-[.3em] whitespace-nowrap px-3 hover:bg-opacity-80 py-3 hover:scale-[1.03] ease-in duration-150 sm:w-[12em]"
        >
          Subscribe Now
        </button>
      </form>
    </div>
  );
};

export default Newsletter;
