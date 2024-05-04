import Image from "next/image";
import React from "react";

const TeamMembers = () => {
  return (
    <div className=" py-16">
      <div className="flex flex-col justify-center items-center">
        <p className="text-3xl font-semibold text-textprimary">
          The Core of Our Team
        </p>
        <p className="text-textsecondary w-2/3 text-center">
          Organically grow the holistic world view of disruptive innovation via
          workplace diversity and empowerment of people and great talent that
          truly rocks.
        </p>
      </div>
      <div className="flex justify-evenly flex-wrap">
        <div className="flex flex-col gap-2  mt-6">
          <Image src={"/avatars/image.png"} width={350} height={350} />
          <div>
            <p className="text-xl font-semibold text-textprimary">
              Morgan Drew
            </p>
            <p className="text-textsecondary">Manager</p>
          </div>
          <div className="flex gap-4">
            <Image
              src={"/socialplatforms/twitter.svg"}
              width={20}
              height={20}
            />
            <Image
              src={"/socialplatforms/facebook.svg"}
              width={20}
              height={20}
            />
            <Image
              src={"/socialplatforms/linkedin.svg"}
              width={20}
              height={20}
            />
            <Image
              src={"/socialplatforms/telegram.svg"}
              width={20}
              height={20}
            />
          </div>
        </div>
        <div className="flex flex-col gap-2  mt-6">
          <Image src={"/avatars/image1.png"} width={350} height={350} />
          <div>
            <p className="text-xl font-semibold text-textprimary">
              Jeffry Walker
            </p>
            <p className="text-textsecondary">Lead Designer</p>
          </div>
          <div className="flex gap-4">
            <Image
              src={"/socialplatforms/twitter.svg"}
              width={20}
              height={20}
            />
            <Image
              src={"/socialplatforms/facebook.svg"}
              width={20}
              height={20}
            />
            <Image
              src={"/socialplatforms/linkedin.svg"}
              width={20}
              height={20}
            />
            <Image
              src={"/socialplatforms/telegram.svg"}
              width={20}
              height={20}
            />
          </div>
        </div>
        <div className="flex flex-col gap-2  mt-6">
          <Image src={"/avatars/image2.png"} width={350} height={350} />
          <div>
            <p className="text-xl font-semibold text-textprimary">
              Andrew Steve
            </p>
            <p className="text-textsecondary">UI/UX Designer</p>
          </div>
          <div className="flex gap-4">
            <Image
              src={"/socialplatforms/twitter.svg"}
              width={20}
              height={20}
            />
            <Image
              src={"/socialplatforms/facebook.svg"}
              width={20}
              height={20}
            />
            <Image
              src={"/socialplatforms/linkedin.svg"}
              width={20}
              height={20}
            />
            <Image
              src={"/socialplatforms/telegram.svg"}
              width={20}
              height={20}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMembers;
