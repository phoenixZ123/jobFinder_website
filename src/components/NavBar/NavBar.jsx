import React from "react";

const NavBar = () => {
  return (
    <div className="navBar flex justify-between items-center p-[3rem]">
      <div className="logoDiv">
        <h2 className="logo text-[23px] text-blueColor">
          <strong className="text-extrabold">JOB</strong>Search
        </h2>
      </div>

      <div className="menu flex gap-8">
        <li className="menuList text-slate-700 hover:text-blueColor">Jobs</li>
        <li className="menuList text-slate-700 hover:text-blueColor">
          Companies
        </li>
        <li className="menuList text-slate-700 hover:text-blueColor">About</li>
        <li className="menuList text-slate-700 hover:text-blueColor">
          Contact
        </li>
        <li className="menuList text-slate-700 hover:text-blueColor">Blog</li>
        <li className="menuList text-slate-700 hover:text-blueColor">Login</li>
        <li className="menuList text-slate-700 hover:text-blueColor">
          Register
        </li>
      </div>
    </div>
  );
};

export default NavBar;
