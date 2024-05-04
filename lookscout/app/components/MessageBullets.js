import React from "react";
import Image from "next/image";
import Link from "next/link";

const MessageBullets = () => {
  return (
    <div className="flex flex-col gap-16">
      <div className="flex flex-wrap justify-evenly">
        <div className="flex flex-col gap-2 w-[25rem]">
          <div>
            <Image src={"/icon1.svg"} height={50} width={50} />
          </div>
          <p className="text-2xl font-semibold text-textprimary">
            Easier work organization
          </p>
          <p className="text-textsecondary">
            Efficiently unleash cross-media information without cross-media
            value. Quickly timely deliverables for real-time schemas.{" "}
          </p>
        </div>
        <div className="flex flex-col gap-2 w-[25rem]">
          <div>
            <Image src={"/icon2.svg"} height={50} width={50} />
          </div>
          <p className="text-2xl font-semibold text-textprimary">
            Fast Connection
          </p>
          <p className="text-textsecondary">
            Completely pursue scalable customer cross- media through
            potentialities. Holistically quickly installed portals.
          </p>
        </div>
        <div className="flex flex-col gap-2 w-[25rem]">
          <div>
            <Image src={"/icon3.svg"} height={50} width={50} />
          </div>
          <p className="text-2xl font-semibold text-textprimary">
            Streamlined Process
          </p>
          <p className="text-textsecondary">
            Objectively innovate empowered scalable manufactured products
            whereas parallel platforms predominate extensible.
          </p>
        </div>

        <div className="flex flex-col gap-2  w-[25rem] mt-6">
          <div>
            <Image src={"/icon4.svg"} height={50} width={50} />
          </div>
          <p className="text-2xl font-semibold text-textprimary">
            Easier Integrations
          </p>
          <p className="text-textsecondary">
            Completely pursue scalable customer try through potentialities.
            Pontificate portals installed. Efficiently unleash information.
          </p>
          <div className="flex gap-2 text-primary font-semibold">
            <Link href={"#"}>Learn More</Link>
            <Image src={"/arrow.svg"} width={20} height={10} />
          </div>
        </div>
        <div className="flex flex-col gap-2  w-[25rem] mt-6">
          <div>
            <Image src={"/icon5.svg"} height={50} width={50} />
          </div>
          <p className="text-2xl font-semibold text-textprimary">
            Marketing Analytics
          </p>
          <p className="text-textsecondary">
            Phosfluorescently engage worldwide methodologies with web-enabled
            Interactively coordinate.
          </p>
          <div className="flex gap-2 text-primary font-semibold">
            <Link href={"#"}>Learn More</Link>
            <Image src={"/arrow.svg"} width={20} height={10} />
          </div>
        </div>
        <div className="flex flex-col gap-2  w-[25rem] mt-6">
          <div>
            <Image src={"/icon6.svg"} height={50} width={50} />
          </div>
          <p className="text-2xl font-semibold text-textprimary">
            Workflow Builder
          </p>
          <p className="text-textsecondary">
            Collaboratively administrate turnkey service channels whereas
            virtual e-tailers. This is objectively scalable metrics whereas.
          </p>
          <div className="flex gap-2 text-primary font-semibold">
            <Link href={"#"}>Learn More</Link>
            <Image src={"/arrow.svg"} width={20} height={10} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageBullets;
