import { RectangleIcon } from "@/components/icons";
import Salvation from "@/components/salvation";
import Gathering from "@/interface/gathering";
import PrimaryButton from "@/interface/primaryButton";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const style = {
  button: `text-black p-[1em] text-md leading-none rounded-[4px] w-full font-semibold bg-[#F2F2F2] hover:bg-[#D2D2D2]`,
  active: `text-white p-[1em] text-md leading-none rounded-[4px] w-full font-semibold bg-[green]`,
};

const Giving = () => {
  const [options, setOptions] = useState(
    "offering" || ["offering", "tithe", "project"]
  );

  const givinToast = () => {
    toast.warn("This feature is not available yet", {
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
  return (
    <div className="flex flex-col gap-[4em]">
      <div className=" w-full h-full sm:w-[80%] shadow-[0px_14px_50px_rgba(0,0,0,0.06)] m-auto mt-8">
        <div className="border-[1.5px] border-solid border-[#10983A] "></div>
        <RectangleIcon
          props={""}
          className="m-auto mt-[-2px] md:mt-auto w-[17em] sm:w-full"
        />
        <div className="px-4 pb-[1.5em] ">
          <h2 className="text-2xl font-bold text-center m-5">GIVING</h2>
          <span className="flex text-lg font-medium text-center max-w-[75em] m-auto">
            As a church, our goal is to reach as many people as possible with
            the Gospel and show them that it is possible to succeed in Life in
            Jesus. We trust that God will help as achieve this through your
            support
          </span>
        </div>
      </div>
      <div className="max-w-[60em] w-full m-auto px-4">
        <h2 className="text-2xl font-bold mb-2">METHOD 1 - BANK TRANSFER</h2>
        <div className="flex flex-col border-[1px] border-solid border[border] rounded-[10px] p-2">
          <div className="flex flex-col sm:flex-row gap-3 border-solid border-[1px] border-[border] rounded-[10px] p-2">
            <button
              className={options == "offering" ? style.active : style.button}
              onClick={() => setOptions("offering")}
            >
              Offering
            </button>
            <button
              className={options == "tithe" ? style.active : style.button}
              onClick={() => setOptions("tithe")}
            >
              Tithe
            </button>
            <button
              className={options == "project" ? style.active : style.button}
              onClick={() => setOptions("project")}
            >
              Project
            </button>
          </div>
          {options == "offering" ? (
            <div className="flex flex-col items-center justify-center text-center p-6">
              <h1 className="text-3xl font-bold">0765065154</h1>
              <span className="text-xl font-extrabold italic uppercase text-center">
                RCCG The Envoys
              </span>
              <span className="text-xl font-extrabold italic uppercase text-center">
                GUARANTEE TRUST BANK
              </span>
            </div>
          ) : (
            ""
          )}
          {options == "tithe" ? (
            <div className="flex flex-col items-center justify-center text-center p-6">
              <h1 className="text-3xl font-bold">0124503751</h1>
              <span className="text-xl font-extrabold italic uppercase text-center">
                RCCG The Envoys
              </span>
              <span className="text-xl font-extrabold italic uppercase text-center">
                WEMA BANK
              </span>
            </div>
          ) : (
            ""
          )}
          {options == "project" ? (
            <div className="flex flex-col items-center justify-center text-center p-6">
              <h1 className="text-3xl font-bold">0765065154</h1>
              <span className="text-xl font-extrabold italic uppercase text-center">
                RCCG The Envoys
              </span>
              <span className="text-xl font-extrabold italic uppercase text-center">
                GUARANTEE TRUST BANK
              </span>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="flex flex-col justify-start items-center max-w-[60em] px-4 m-auto gap-[1em] mb-[3em]">
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
        <h2 className="text-2xl font-bold">METHOD 2 - CREDIT/DEBIT CARD</h2>
        <span className="max-w-[30em] text-center">
          Choose Method, and don’t forget to put “Offering, Tithe, Project” in
          the “Reference” field you see in the popup
        </span>

        <PrimaryButton
          onClick={givinToast}
          className="max-w-[12em] w-full"
          url=""
        >
          Credit/Debit Card
        </PrimaryButton>
      </div>
      <div className="max-w-[55em] m-auto px-4">
        <Gathering />
      </div>
      <div className="m-auto px-4 mb-[3em]">
        <Salvation />
      </div>
    </div>
  );
};

export default Giving;
