import Link from "next/link";
import React from "react";

interface ButtonProps {
  children?: any;
  className?: string;
  url: string;
  target?: string;
  onClick?: any;
}

const PrimaryButton = ({
  children,
  className,
  url,
  target,
  onClick,
}: ButtonProps) => {
  return (
    <Link
      href={url}
      target={target}
      onClick={onClick}
      className={
        "text-center text-white bg-[green] w-full font-medium text-sm rounded-[.3em] whitespace-nowrap px-3 hover:bg-opacity-80 py-3 hover:scale-[1.03] ease-in duration-150" +
        (className ? " " + className : "")
      }
    >
      {children}
    </Link>
  );
};

export default PrimaryButton;
