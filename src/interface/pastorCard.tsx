import {
  EmailFillIcon,
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
} from "@/components/icons";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const styles = {
  iconBG: `flex items-center justify-center w-8 h-8 rounded-lg text-[green] bg-[rgba(16,152,58,0.1)]`,
};

interface PastorProps {
  name?: string;
  title?: string;
  instagram?: string;
  facebook?: string;
  twitter?: string;
  email?: string;
  image?: string;
  alt?: string;
}

const PastorCard = ({
  name,
  title,
  instagram,
  facebook,
  twitter,
  email,
  image,
  alt,
}: PastorProps) => {
  return (
    <div className="p-4 border-solid border-[1px] border-[#EAEAEA] rounded-[20px]">
      <div className="overflow-hidden w-[300px] h-[300px] object-cover">
        <Image
          className="rounded-[10px] object-center"
          src={`${image}`}
          alt={`${alt}`}
          width={300}
          height={300}
        />
      </div>
      <div className="flex flex-col items-center text-center p-2 gap-2">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-[gray] font-medium">{title}</p>
        <div className="flex gap-2">
          <Link href={`${facebook}`} target="_blank" className={styles.iconBG}>
            <FacebookIcon className="" props={""} />
          </Link>
          <Link href={`${instagram}`} target="_blank" className={styles.iconBG}>
            <InstagramIcon className="fill-[white]" props={""} />
          </Link>
          <Link href={`${twitter}`} target="_blank" className={styles.iconBG}>
            <TwitterIcon className="" props={""} />
          </Link>
          <Link href={`${email}`} target="_blank" className={styles.iconBG}>
            <EmailFillIcon className="" props={""} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PastorCard;
