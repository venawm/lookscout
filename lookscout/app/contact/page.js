"use client";

import React, { useState } from "react";
import toast from "react-hot-toast";

const Page = () => {
  const [contact, setContact] = useState({
    firstName: "",
    lastName: "",
    phoneNo: "",
    subject: "",
    message: "",
  });

  const [selectedOption, setSelectedOption] = useState("");
  const [agree, setAgree] = useState(false);

  const handleSubmit = async () => {
    // Regular expressions for validation
    const nameRegex = /^[A-Za-z]+$/;
    const phoneRegex = /^[0-9]+$/;

    // Validation for first name
    if (!contact.firstName.trim()) {
      toast.error("Please enter your first name");
      return;
    } else if (!nameRegex.test(contact.firstName)) {
      toast.error("Please enter a valid first name");
      return;
    }

    // Validation for last name
    if (!contact.lastName.trim()) {
      toast.error("Please enter your last name");
      return;
    } else if (!nameRegex.test(contact.lastName)) {
      toast.error("Please enter a valid last name");
      return;
    }

    // Validation for phone number
    if (!contact.phoneNo.trim()) {
      toast.error("Please enter your phone number");
      return;
    } else if (!phoneRegex.test(contact.phoneNo)) {
      toast.error("Please enter a valid phone number");
      return;
    } else if (contact.phoneNo.length !== 10) {
      toast.error("A valid phone number should have 10 digits");
      return;
    }

    // Validation for subject
    if (!selectedOption) {
      toast.error("Please select a subject");
      return;
    }

    // Validation for message
    if (!contact.message.trim()) {
      toast.error("Please enter your message");
      return;
    }

    // Validation for agreement
    if (!agree) {
      toast.error("Please agree to the terms and condition");
      return;
    }

    // If all validations pass, proceed with submitting the form
    // (You can add your submission logic here)
    console.log(contact);
    const response = await fetch(`${process.env.API}/contact`, {
      method: "POST",
      body: JSON.stringify(contact),
    });
    if (!response.ok) {
      toast.error("Error while submiting message please try again later");
    }

    const data = await response.json();
    toast.success("Message sent sucessfully");
  };

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
    setContact((prev) => ({
      ...prev,
      subject: e.target.value,
    }));
  };

  return (
    <div className="bg-[#151B28]">
      <div className="mx-4 md:mx-24 p-4 md:p-16 flex flex-col justify-center items-center gap-8 h-[100vh]">
        <p className="text-white text-3xl font-bold text-center">
          Get in Touch With Us
        </p>
        <p className="text-[#A5ACBA] lg:text-center md:text-clip">
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
                  value={contact.firstName}
                  onChange={(e) =>
                    setContact((prev) => ({
                      ...prev,
                      firstName: e.target.value,
                    }))
                  }
                />
              </div>
              <div className="text-white w-full md:w-1/2">
                <label htmlFor="lastName">Last Name</label>
                <input
                  id="lastName"
                  type="text"
                  className="bg-[#2C3444] w-full py-3 rounded-lg"
                  value={contact.lastName}
                  onChange={(e) =>
                    setContact((prev) => ({
                      ...prev,
                      lastName: e.target.value,
                    }))
                  }
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
                  value={contact.phoneNo}
                  onChange={(e) =>
                    setContact((prev) => ({
                      ...prev,
                      phoneNo: e.target.value,
                    }))
                  }
                />
              </div>
              <div className="text-white w-full md:w-1/2">
                <label htmlFor="subject">Subject</label>
                <select
                  id="subject"
                  className="bg-[#2C3444] w-full py-3 rounded-lg"
                  value={selectedOption}
                  onChange={handleOptionChange}
                >
                  <option value="">Choose an option</option>
                  <option value="general">General Inquiry</option>
                  <option value="support">Customer Support</option>
                  <option value="feedback">Feedback</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
            <div className="text-white w-full md:w-full">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                className="bg-[#2C3444] w-full h-[15rem] py-3 rounded-lg"
                value={contact.message}
                onChange={(e) =>
                  setContact((prev) => ({
                    ...prev,
                    message: e.target.value,
                  }))
                }
              />
            </div>
            <div className="flex justify-start items-center mt-4 gap-2">
              <input
                type="checkbox"
                name=""
                id=""
                className="bg-white"
                onClick={() => {
                  setAgree(!agree);
                }}
              />
              <p className="text-white">
                I agree with Lookscout Privacy Policy
              </p>
            </div>
            <button
              className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primarylight mt-4"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
