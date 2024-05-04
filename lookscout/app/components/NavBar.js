import React from "react";
import Image from "next/image";
import Link from "next/link";

const NavBar = () => {
  return (
    <div className="border-b-2 bg-[#F8F9FB] border-slate-100 ">
      <div className="mx-4 md:mx-24 py-6 flex justify-between">
        <div className="flex items-center">
          <Image src={"/Lookscout.svg"} width={150} height={150} />
          <div className="ml-24 ">
            <ul className="flex text-sm font-semibold gap-10 text-textprimary">
              <Link href={"/home"}>Home</Link>
              <Link href={"/home"}>Our Products</Link>
              <Link href={"/home"}>Resources</Link>
              <Link href={"/contact"}>Contacts</Link>
            </ul>
          </div>
        </div>
        <div className="flex gap-4 font-semibold items-center">
          <Link href={"/signup"} className="text-primary">
            Sign Up
          </Link>
          <Link
            href={"/signup"}
            className="bg-primary text-white px-4 py-3 rounded-lg hover:bg-primarylight "
          >
            Log In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
