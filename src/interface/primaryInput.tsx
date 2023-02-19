import React from "react";

interface InputProps {
  placeholder?: string;
  type?: string;
  name?: string;
  className?: string;
  id?: string;
}

const PrimaryInput = ({
  placeholder,
  type,
  name,
  className,
  id,
}: InputProps) => {
  return (
    <>
      <input
        className={
          "w-full p-3 bg-[#F1F1F1] rounded-[4px] outline-green-500 overflow-hidden" +
          (className ? " " + className : "")
        }
        id={id}
        type={type}
        name={name}
        placeholder={placeholder}
      />
    </>
  );
};

export default PrimaryInput;
