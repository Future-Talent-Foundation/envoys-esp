import React from "react";
import PrimaryInput from "./primaryInput";
import { toast, ToastContainer } from "react-toastify";
import { useForm } from "@formspree/react";

import "react-toastify/dist/ReactToastify.css";

const ContactSection = () => {
  const [state, handleSubmit] = useForm("xvonagdk");
  const contactToast = () => {
    toast.success("Thank you for contacting us!", {
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
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-8 border-[1px] border-solid border[#F1F1F1] rounded-[10px] p-8 mb-5 md:mb-0"
    >
      <div className="flex flex-col md:flex-row justify-between gap-3">
        <div className="w-full">
          <label htmlFor="firstName">First Name</label>
          <PrimaryInput
            className="bg-transparent border-solid border-[border] border-[1px] rounded-md mt-2"
            id="firstName"
            type="text"
            name="firstName"
            placeholder="First Name"
          />
        </div>
        <div className="w-full">
          <label htmlFor="lastName">Last Name</label>
          <PrimaryInput
            className="bg-transparent border-solid border-[border] border-[1px] w-full rounded-md mt-2"
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Last Name"
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between gap-3">
        <div className="w-full">
          <label htmlFor="email">Email Address</label>
          <PrimaryInput
            className="bg-transparent border-solid border-[border] border-[1px] rounded-md mt-2"
            type="email"
            id="email"
            name="email"
            placeholder="you@example.com"
          />
        </div>
        <div className="w-full">
          <label htmlFor="tel">Phone Number</label>
          <PrimaryInput
            className="bg-transparent border-solid border-[border] border-[1px] rounded-md mt-2"
            type="tel"
            id="tel"
            name="tel"
            placeholder="Phone Number"
          />
        </div>
      </div>
      <div className="w-full">
        <label htmlFor="description">Message</label>
        <textarea
          className="bg-transparent w-full border-solid border-[border] border-[1px] p-3 h-[8em] outline-green-500 rounded-sm mt-2"
          name="description"
          id="description"
          placeholder="Enter message here"
        />
      </div>
      <button
        type="submit"
        onClick={contactToast}
        className="text-center text-white bg-[green] w-full font-medium text-sm rounded-[.3em] whitespace-nowrap px-3 hover:bg-opacity-80 py-3 hover:scale-[1.03] ease-in duration-150"
      >
        SEND MESSAGE
      </button>
    </form>
  );
};

export default ContactSection;
