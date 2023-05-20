import React from "react";

import { AiFillInstagram } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
const Footer = () => {
  return (
    <div
      className="footer p-[5rem] mb-4 bg-blueColor rounded-[10px]
     gap-[8] grid grid-cols-5 m-auto items-center justify-center"
    >
      <div className="">
        <div className="logoDiv">
          <h1 className="logo text-[25px] text-white pb-[1.5rem]">
            <strong className="text-extrabold">JOB</strong>Search
          </h1>
        </div>
        <p className="text-white pb-[13px] opacity-90 leading-5">
          We always make our seekers and companies find the best jobs and
          employers find the best condidates.
        </p>
      </div>
      <div className="grid ml-20">
        <span className="divTitle text-[18px] font-semibold pb-[1.5rem] text-white">
          Company
        </span>
        <div className="grid gap-3">
          <li className="text-white opacity-[.7] hover:opacity-90">About Us</li>
          <li className="text-white opacity-[.7] hover:opacity-90">Features</li>
          <li className="text-white opacity-[.7] hover:opacity-90">News</li>
          <li className="text-white opacity-[.7] hover:opacity-90">FAQ</li>
        </div>
      </div>
      <div className="grid ml-20">
        <span className="divTitle text-[18px] font-semibold pb-[1.5rem] text-white">
          Resources
        </span>
        <div className="grid gap-3">
          <li className="text-white opacity-[.7] hover:opacity-90">Account</li>
          <li className="text-white opacity-[.7] hover:opacity-90">
            Support Center
          </li>
          <li className="text-white opacity-[.7] hover:opacity-90">Feedback</li>
          <li className="text-white opacity-[.7] hover:opacity-90">
            Contact Us
          </li>
        </div>
      </div>
      <div className="grid ml-20">
        <span className="divTitle text-[18px] font-semibold pb-[1.5rem] text-white">
          Support
        </span>
        <div className="grid gap-3">
          <li className="text-white opacity-[.7] hover:opacity-90 ">Events</li>
          <li className="text-white opacity-[.7] hover:opacity-90">Promo</li>
          <li className="text-white opacity-[.7] hover:opacity-90">Req Demo</li>
          <li className="text-white opacity-[.7] hover:opacity-90">Careers</li>
        </div>
      </div>
      <div className="grid ml-7">
        <span className="divTitle text-[18px] font-semibold pb-[1.5rem] text-white">
          Contact Info
        </span>
        <div className="grid gap-3">
          <small className=" text-white text-[20px]">
            watanabe12@outlook.com
          </small>
          <div className="icons flex gap-4 py-[1rem] ">
            <AiFillInstagram className=" bg-white p-[5px] h-[35px] w-[35px] rounded-full icon text-blueColor" />
            <AiFillTwitterCircle className=" bg-white p-[5px] h-[35px] w-[35px] rounded-full icon text-blueColor" />
            <BsFacebook className=" bg-white p-[5px] h-[35px] w-[35px] rounded-full icon text-blueColor" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
