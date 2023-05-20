import React from "react";

import logo1 from "../../assets/whatsapp.png";
import logo2 from "../../assets/outlook.png";
import logo3 from "../../assets/upwork.png";

const Data = [
  {
    id: 1,
    logo: logo1,
    title: "Whatsapp",
    sentence: "You can post Cv Form to this account if u want to know can ask.",
  },
  {
    id: 2,
    logo: logo2,
    title: "Outlook",
    sentence: "You can post Cv Form to this account if u want to know can ask.",
  },
  {
    id: 3,
    logo: logo3,
    title: "Upwork",
    sentence: "You can post Cv Form to this account if u want to know can ask.",
  },
];

const Value = () => {
  return (
    <div className="mb-[2rem] mt-[25px]">
      <h1 className="text-textColor text-[25px] py-[2rem] pb-[3rem] font-bold w-[400px] block">
        The value that holds us true and to account
      </h1>
      <div className="grid gap-[10rem] grid-cols-3 items-center">
        {Data.map(({ logo, title, sentence }) => {
          return (
            <div className="singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]">
              <div className="flex items-center gap-3">
                <div className="imgDiv p-[4px] rounded-[.8rem] bg-[#dedef8] h-[40px] w-[40px] flex items-center justify-center">
                  <img src={logo} className="w-[4rem] " alt="" />
                </div>
                <span className="font-semibold text-textColor text-[18px]">
                  {title}
                </span>
              </div>
              <p className="text-[15px] text-textColor opacity-[.7] py-[1rem] font-semibold">
                {sentence}
              </p>
            </div>
          );
        })}
      </div>
      <div className="card mt-[2rem] justify-between bg-grayColor p-[5rem] rounded-[10px] flex">
        <div className="">
          <h1 className="text-blueColor text-[32px] font-bold">
            Ready to switch a career
          </h1>
          <h2 className="text-textColor text-[25px] font-bold mt-[10px]">
            Let's get started
          </h2>
        </div>
        <div className="mt-0">
          <button className="border-[2px] border-blueColor text[18px] px-10 py-[20px] text-blueColor rounded-[10px] mt-[20px] hover:bg-white">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Value;
