import Image from "next/image";
import React from "react";
import MessageBullets from "./MessageBullets";

const Features = () => {
  return (
    <div className=" py-16 flex flex-col gap-10">
      <div className="flex flex-col gap-5 justify-center items-center">
        <p className="text-3xl font-extrabold text-textprimary">
          Messaging for all
        </p>
        <p className="text-textsecondary">
          User generated content in real-time will have multiple touchpoints for
          offshoring.
        </p>
      </div>
      <div>
        <MessageBullets />
      </div>
    </div>
  );
};

export default Features;
