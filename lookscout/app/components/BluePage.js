import React from "react";
import Link from "next/link";
import Image from "next/image";

const BluePage = () => {
  return (
    <div className="bg-[#2B63D9]">
      <div className="p-16 flex flex-col justify-center items-center gap-8">
        <small className="font-semibold text-white">1% OF THE INDUSTRY</small>
        <h1 className="text-4xl font-semibold text-white w-3/4 text-center">
          Welcome to your new digital reality that which will rock your world
          truly at all.
        </h1>
        <div className="flex gap-4 font-semibold items-center">
          <Link
            href={"/signup"}
            className="bg-white text-primary px-4 py-3 rounded-lg hover:bg-primarylight"
          >
            Sign Up
          </Link>
          <Link
            href={"/signup"}
            className="bg-primary text-white px-4 py-3 rounded-lg hover:bg-primarylight "
          >
            Log In
          </Link>
        </div>
        <div className="flex gap-8 flex-wrap">
          <Image
            src={"/companylogos/Company Logo.svg"}
            width={120}
            height={120}
          />
          <Image
            src={"/companylogos/Company Logo-1.svg"}
            width={120}
            height={120}
          />
          <Image
            src={"/companylogos/Company Logo-2.svg"}
            width={120}
            height={120}
          />
          <Image
            src={"/companylogos/Company Logo-3.svg"}
            width={120}
            height={120}
          />
          <Image
            src={"/companylogos/Company Logo-4.svg"}
            width={120}
            height={120}
          />
          <Image
            src={"/companylogos/Company Logo-5.svg"}
            width={120}
            height={120}
          />
        </div>
      </div>
    </div>
  );
};

export default BluePage;
