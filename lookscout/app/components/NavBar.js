"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";

const NavBar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <div className="border-b-2 bg-[#F8F9FB] border-slate-100 ">
      <div className="mx-4 md:mx-24 py-6 flex justify-between">
        <div className="flex items-center">
          <Image src={"/Lookscout.svg"} width={150} height={150} />
          <div className="ml-24 ">
            <ul className="hidden xl:flex text-sm font-semibold gap-10 text-textprimary">
              <Link href={"/home"}>Home</Link>
              <Link href={"/home"}>Our Products</Link>
              <Link href={"/home"}>Resources</Link>
              <Link href={"/contact"}>Contacts</Link>
            </ul>
          </div>
        </div>
        <div className=" gap-4 font-semibold items-center hidden xl:flex">
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
        <div className="flex xl:hidden items-center">
          {!menu ? (
            <>
              <GiHamburgerMenu
                className="text-2xl"
                onClick={() => {
                  setMenu(!menu);
                }}
              />
            </>
          ) : (
            <>
              <ImCross
                onClick={() => {
                  setMenu(!menu);
                }}
              />
            </>
          )}
        </div>
      </div>
      {/* Menu */}
      <div
        className={`bg-white xl:hidden w-[60vw] h-[100vh] fixed z-50 top-0 ${
          menu ? "opacity-100" : "opacity-0 pointer-events-none"
        } transition-opacity duration-300`}
      >
        <div className="flex flex-col justify-center p-10 gap-16">
          <Image src={"/Lookscout.svg"} width={200} height={200} />
          <ul className="flex flex-col text-xl font-semibold gap-10 text-textprimary">
            <Link href={"/home"}>Home</Link>
            <Link href={"/home"}>Our Products</Link>
            <Link href={"/home"}>Resources</Link>
            <Link href={"/contact"}>Contacts</Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
