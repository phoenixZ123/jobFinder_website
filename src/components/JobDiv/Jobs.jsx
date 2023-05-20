import React from "react";

import { BiTimeFive } from "react-icons/bi";
import logo1 from "../../assets/whatsapp.png";
import logo2 from "../../assets/outlook.png";
import logo3 from "../../assets/upwork.png";
const Data = [
  {
    id: 1,
    image: logo1,
    title: "Software Developer/UI UX Designer",
    time: "Now",
    location: "Yangon",
    desc: "Backend Developer (Python/ NodeJS) 2 Posts  at least 2 years of backend development experience-You have advanced proficiency either in Python or JS and SQL ,You are familiar with Unix/Linux operating systems You are familiar with commonly used database systems, such as MySQL ,Redis, etc",
    company: " Youth Vacancy Co.Ltd;",
  },
  {
    id: 2,
    image: logo2,
    title: "Bridge System Engineer (Japanese N2 level)",
    time: "Now",
    location: "Yangon Office",
    desc: "#Location - Yangon Office #Salary - around 1,700,000MMK +++ (Depend on Japan Skill) #Office Hours - Mon to Fri (8:00Am to 5:00Pm)■ Job Requirements Must have working experience in JAVA language at least 4 or 5 years Must have experience in Documentation writing with Japanese language",
    company: " Sim Co.Ltd;",
  },
  {
    id: 3,
    image: logo3,
    title: "𝘽𝙖𝙘𝙠𝙚𝙣𝙙 𝘿𝙚𝙫𝙚𝙡𝙤𝙥𝙚𝙧 ",
    time: "Now",
    location: "Yangon",
    desc: "• Using Laravel for designing and creating web apps and services • Debugging and troubleshooting issues Salary – Negotiate",
    company: "Strategy First Education Group",
  },
  {
    id: 4,
    image: logo1,
    title: "𝐅𝐥𝐮𝐭𝐭𝐞𝐫 𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫",
    time: "Now",
    location: "Mandalay",
    desc: "• Create clean interfaces and smooth interactions based on UI/UX designs and documentation for a range of devices, including mobiles, tablets• Design and build Flutter mobile applications for Learning Support",
    company: " Royal Co.Ltd;",
  },
  {
    id: 5,
    image: logo2,
    title: "Front end Engineer",
    time: "Now",
    location: "Yangon",
    desc: "Remote လျှောက်ထားနိုင်သည်☆လက်ရှိ အလုပ်လုပ်နေသော နိုင်ငံခြားသားဝန်ထမ်းများလည်း ရှိသည်လစာ ☆365万円～700万円 　တစ်နှစ်တာအတွင်း ရုံးပိတ်ရက် စုစုပေါင်း125 ရက်တစ်ပတ် 2 ရက်ပိတ်သည်",
    company: " Academic Co.Ltd;",
  },
  {
    id: 6,
    image: logo1,
    title: "Front-end developer",
    time: "Now",
    location: "Singapore and Yangon",
    desc: " ရေရှည် လုပ်နိုင်တဲ့ Developer ကို လိုအပ်နေပါတယ်ရှင်🧑‍💻Work From Home  or Office အနေဖြင့် နှစ်သက်ရာ လျှောက်ထားနိုင်ပါသည်။-Angular JS ဖြင့် အတွေ့အကြုံ ( ၂ ) နှစ်ရှိသူဖြစ်ရမည်။-Project များအား maintain , update & develop လုပ်နိုင်ရမည်။- flutter နှင့် familiar ဖြစ်သူကို ဦးစားပေးမည်။WFH လျှောက်လိုသူများအနေဖြင့် အရေးကြီးကိစ္စများရှိလာပါက ဆက်သွယ်နိုင်ရန် အမြဲတမ်း Online ဖြစ်နေရပါမည်။",
    company: " Legend Building Co.Ltd;",
  },
  {
    id: 7,
    image: logo3,
    title: "IT & System Administrator ",
    time: "Now",
    location: "Yangon",
    desc: "•Degree in Computer Science / Information technology or any graduate with IT diploma or relative.•Above 2 years’ experience in IT related field with hands-on troubleshooting practice.•Good problem-solving skills are required.",
    company: " Academic Co.Ltd;",
  },
  {
    id: 8,
    image: logo2,
    title: "IT Team Leader",
    time: "Now",
    location: "Yangon",
    desc: "Minimum of 5 years' experience in system development, with at least 2 years of project management in an IT backgroundProficient in PHP (Laravel) language, React, and Digital OceanAbility to write clear and concise technical documentation",
    company: " Academic Co.Ltd;",
  },
];
//and single Company map loop it..

const Jobs = () => {
  return (
    <div className="jobContainer flex flex-wrap gap-10 items-center  py-10">
      {Data.map(({ id, image, title, time, location, desc, company }) => {
        return (
          <div
            key={id}
            className=" singleJob w-[280px] p-[20px] bg-white rounded-[10px]
       hover:bg-blue-500 shadow-lg shadow-gray-400 hover:shadow-lg "
          >
            <span className="flex justify-center items-center gap-3 ">
              <h1 className="text-[16px] font-semibold text-textColor group-hover:text-white">
                {title}
              </h1>
              <span className="flex items-center text-[#ccc] gap-1">
                <BiTimeFive />
                {time}
              </span>
            </span>
            <h6 className="text-[#ccc] ">{location}</h6>
            <p className="text-[15px] text-[#95959] pt-[20px] border-t-[2px] mt-[10px] group-hover:text-white">
              {desc}
            </p>
            <div className="company flex items-center gap-2">
              <img src={image} alt="Company " className="w-[15%]" />
              <span className="text-[14px] py-[1rem] block hover:text-white">
                {company}
              </span>
            </div>
            <button className="border p-1 rounded-md  hover:bg-white w-full font-bold">
              Apply Now
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Jobs;
