import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="py-12">
      <div className="py-12 flex justify-between flex-wrap">
        <div className=" w-[15rem] flex flex-col gap-4">
          <Image src={"/Lookscout.svg"} width={150} height={150} />
          <p className="text-textsecondary">
            Generate outside the box thinking with the possibility to targtet
            the low.
          </p>
          <div className="flex gap-4">
            <Image
              src={"/socialplatforms/facebook.svg"}
              width={20}
              height={20}
            />
            <Image src={"/socialplatforms/google.svg"} width={20} height={20} />
            <Image src={"/socialplatforms/apple.svg"} width={20} height={20} />
            <Image src={"/socialplatforms/insta.svg"} width={20} height={20} />
          </div>
        </div>
        <div className="flex flex-col gap-4 w-[10rem] mt-4">
          <p className="text-textprimary font-semibold">Products</p>
          <ul className="text-textsecondary flex flex-col gap-2">
            <li>Features</li>
            <li>Solutions</li>
            <li>Integrations</li>
            <li>Enterprise</li>
            <li>Solutions</li>
          </ul>
        </div>
        <div className="flex flex-col gap-4 w-[10rem] mt-4">
          <p className="text-textprimary font-semibold">Resources</p>
          <ul className="text-textsecondary flex flex-col gap-2">
            <li>Partners</li>
            <li>Community</li>
            <li>Developers</li>
            <li>App</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className="flex flex-col gap-4 w-[10rem] mt-4">
          <p className="text-textprimary font-semibold">Why Choose Us?</p>
          <ul className="text-textsecondary flex flex-col gap-2">
            <li>Channels</li>
            <li>Scale</li>
            <li>Watch the Demo</li>
            <li>Our Competition</li>
          </ul>
        </div>

        <div className="flex flex-col gap-4 w-[10rem] mt-4">
          <p className="text-textprimary font-semibold">Company</p>
          <ul className="text-textsecondary flex flex-col gap-2">
            <li>About Us </li>
            <li>News</li>
            <li>Leadership</li>
            <li>Media Kit</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col  items-center justify-center gap-">
        <Image src={"/footer.svg"} width={50} height={50} />
        <p className="text-textsecondary">
          © 2023 Lookscout. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
