import React from "react";

const Faq = () => {
  return (
    <div className="flex flex-col gap-8 py-8">
      <div className="flex flex-col justify-center items-center">
        <p className="text-3xl font-semibold text-textprimary">
          Frequently asked questions
        </p>
        <p className="text-textsecondary w-2/3 text-center">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </p>
      </div>
      <div>
        <div className="flex justify-between border border-slate-200 p-4 rounded-t-lg">
          <div>
            <p className="text-textprimary text-xl font-semibold">
              Authentication Issues
            </p>
            <p className="text-textsecondary">
              Porttitor nec est nisi, id nunc.
            </p>
          </div>
          <button className=" bg-[#F5FAFF] p-2 text-primary rounded-lg">
            New
          </button>
        </div>

        <div className="flex justify-between border border-slate-200 p-4 flex-wrap">
          <div>
            <p className="text-textprimary ">Lorem ipsum dolor sit amet.</p>
          </div>
          <p className="text-textsecondary">Updated 3 days ago</p>
        </div>
        <div className="flex justify-between border border-slate-200 p-4 flex-wrap">
          <div>
            <p className="text-textprimary ">Lorem ipsum dolor sit amet.</p>
          </div>
          <p className="text-textsecondary">Updated 3 days ago</p>
        </div>
        <div className="flex justify-between border border-slate-200 p-4 flex-wrap">
          <div>
            <p className="text-textprimary">Lorem ipsum dolor sit amet.</p>
          </div>
          <p className="text-textsecondary">Updated 3 days ago</p>
        </div>
        <div className="flex justify-between border border-slate-200 p-4 flex-wrap">
          <div>
            <p className="text-textprimary ">Lorem ipsum dolor sit amet.</p>
          </div>
          <p className="text-textsecondary">Updated 3 days ago</p>
        </div>
        <div className="flex justify-between border border-slate-200 p-4 flex-wrap">
          <div>
            <p className="text-textsecondary">
              Porttitor nec est nisi, id nunc.
            </p>
          </div>
          <p className="text-textsecondary">Updated 3 days ago</p>
        </div>
      </div>
    </div>
  );
};

export default Faq;
