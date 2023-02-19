import Link from "next/link";
import React from "react";

interface ButtonProps {
  children: any;
  className: string;
  url: string;
}

const SecondaryButton = ({ children, className, url }: ButtonProps) => {
  return (
    <Link
      href={url}
      className={
        "text-center text-[green] w-full font-medium text-sm rounded-[.3em] border-solid border-[1px] border-[green] whitespace-nowrap px-3 py-[.78em]  hover:scale-[1.03] ease-in duration-150 hover:bg-[green] hover:text-white" +
        (className ? " " + className : "")
      }
    >
      {children}
    </Link>
  );
};

export default SecondaryButton;
