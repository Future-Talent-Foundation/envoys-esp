import PrimaryButton from "@/interface/primaryButton";
import PrimaryInput from "@/interface/primaryInput";
import React from "react";

import { toast, ToastContainer } from "react-toastify";
import { useForm } from "@formspree/react";

import "react-toastify/dist/ReactToastify.css";

const Salvation = () => {
  const [state, handleSubmit] = useForm("xvonagdk");
  const salvationToast = () => {
    toast.success("⭐There is Joy in heaven, for taking that bold step!", {
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
    <div className="flex flex-col max-w-[55em] border-solid border-[1px] border-[#D2D2D2] rounded-[10px] p-4 sm:p-8 gap-4  ">
      <div className="flex flex-col justify-center items-center text-center">
        <h2 className="text-lg font-semibold text-[green] mb-2">
          TAKE THAT BOLD STEP
        </h2>
        <h4 className="text-xl font-bold">
          Do want to accept the free gift of Salvation? Fill in the form below
          and we will reach out.
        </h4>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-2 max-w-[40em] w-full m-auto"
      >
        <PrimaryInput
          className=""
          name="fullName"
          type="text"
          placeholder="Full Name"
        />
        <PrimaryInput
          className=""
          name="email"
          type="email"
          placeholder="Email Address"
        />
        <PrimaryInput
          className=""
          name="tel"
          type="tel"
          placeholder="Phone Number"
        />
        <button
          type="submit"
          onClick={salvationToast}
          className="text-center text-white bg-[green] w-full font-medium text-sm rounded-[.3em] whitespace-nowrap px-3 hover:bg-opacity-80 py-3 hover:scale-[1.03] ease-in duration-150 mt-4"
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default Salvation;
