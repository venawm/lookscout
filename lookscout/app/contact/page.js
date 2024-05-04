import React from "react";

const Page = () => {
  return (
    <div className="bg-[#151B28] ">
      <div className="mx-4 md:mx-24 p-4 md:p-16 flex flex-col justify-center items-center gap-8 h-[100vh]">
        <p className="text-white text-3xl font-bold text-center">
          Get in Touch With Us
        </p>
        <p className="text-[#A5ACBA] lg:text-center md:text-clip ">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </p>
        <div className="bg-[#1C2534] rounded-lg w-full md:w-[100%]">
          <div className="p-4 md:p-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="text-white w-full md:w-1/2">
                <label htmlFor="firstName">First Name</label>
                <input
                  id="firstName"
                  type="text"
                  className="bg-[#2C3444] w-full px-3 py-3 rounded-lg"
                />
              </div>
              <div className="text-white w-full md:w-1/2">
                <label htmlFor="lastName">Last Name</label>
                <input
                  id="lastName"
                  type="text"
                  className="bg-[#2C3444] w-full py-3 rounded-lg"
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="text-white w-full md:w-1/2">
                <label htmlFor="number">Phone Number</label>
                <input
                  id="number"
                  type="text"
                  className="bg-[#2C3444] w-full px-3 py-3 rounded-lg"
                />
              </div>
              <div className="text-white w-full md:w-1/2">
                <label htmlFor="subject">Subject</label>
                <select
                  id="subject"
                  className="bg-[#2C3444] w-full py-3 rounded-lg"
                >
                  <option value="general">General Inquiry</option>
                  <option value="support">Customer Support</option>
                  <option value="feedback">Feedback</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
            <div className="text-white w-full md:w-full">
              <label htmlFor="lastName">Message</label>
              <input
                id="lastName"
                type="text"
                className="bg-[#2C3444] w-full h-[15rem] py-3 rounded-lg"
              />
            </div>
            <div className="flex justify-start items-center mt-4 gap-2">
              <input type="checkbox" name="" id="" className="bg-white" />
              <p className="text-white ">
                I agree with Lookscout Privacy Policy
              </p>
            </div>
            <button className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primarylight mt-4">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
