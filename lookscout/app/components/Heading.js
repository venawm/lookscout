import React from "react";

const Heading = () => {
  return (
    <div className="bg-[#F8F9FB] flex justify-center">
      <div className="mx-4 md:mx-24 text-center py-12 flex flex-col gap-8 w-1/2 justify-center items-center">
        <small className="text-primary font-semibold">1% OF THE INDUSTRY</small>
        <div className="text-5xl font-extrabold text-textprimary">
          <h1>Hype got you here</h1>
          <h1>Stay for the support.</h1>
        </div>
        <p className=" text-textsecondary w-10/12">
          We’ve been told it is possible to revolutionize the payment industry.
          We have not reinvented the wheel, we decided to build upon it -
          successfully.
        </p>
      </div>
    </div>
  );
};

export default Heading;
