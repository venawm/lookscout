import Image from "next/image";
import React from "react";
import Link from "next/link";

const Demonstrate = () => {
  return (
    <div className="flex flex-wrap gap-14">
      <div className="w-1/2 py-24 flex flex-col gap-4">
        <p className="text-3xl font-semibold text-textprimary">
          Demonstrate branding consequently think outside
        </p>
        <p className="text-textsecondary">
          Velit purus egestas tellus phasellus. Mattis eget sed faucibus magna
          vulputate pellentesque a diam tincidunt. Aenean malesuada tellus
          tellus faucibus mauris quisque mauris in.
        </p>
        <ul className="text-textsecondary flex flex-col gap-8">
          <div>
            <li className="flex items-center gap-2">
              <Image src={"/check.svg"} width={20} height={20} />
              <p>Enterprise-grade security</p>
            </li>
            <li className="flex items-center gap-2">
              <Image src={"/check.svg"} width={20} height={20} />
              <p>99.9% guaranteed uptime SLA</p>
            </li>
            <li className="flex items-center gap-2">
              <Image src={"/check.svg"} width={20} height={20} />
              <p>Designated customer success team</p>
            </li>
          </div>
          <Link
            href={"/signup"}
            className="bg-primary text-white px-4 py-3 rounded-lg text-sm font-semibold hover:bg-primarylight w-32 flex items-center gap-2"
          >
            Start Now
            <Image
              src={"/arrowwhite.svg"}
              className="text-white"
              width={15}
              height={15}
            />
          </Link>
        </ul>
      </div>
      <div className="relative flex justify-center items-center">
        <Image src={"/photo.svg"} width={550} height={600} />
        <div className=" absolute  bg-white w-[80%] h-[15rem] rounded-lg p-8 flex items-center justify-center flex-col gap-4">
          <p className="text-2xl font-semibold text-textprimary">
            Check Us out
          </p>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <Link
            href={"/signup"}
            className="bg-primary text-white px-4 py-3 rounded-lg text-sm font-semibold hover:bg-primarylight  flex justify-center items-center gap-2 w-[12rem]"
          >
            Get Started Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Demonstrate;
