import React, { useState } from "react";
import contactUserImg from "../../assets/contact-user-img.jpg";
import { MdNotificationsActive } from "react-icons/md";
import { MdMessage } from "react-icons/md";
import { FaCopy } from "react-icons/fa";
import { MdSendToMobile } from "react-icons/md";
import { PiDotsThreeOutlineFill } from "react-icons/pi";
import { HiMoon } from "react-icons/hi";
import { IoSunny } from "react-icons/io5";

function AccountBalance({ themeValue, setThemeValue }) {
  const handleThemeChange = () => {
    setThemeValue(!themeValue);
  };
  return (
    <section>
      <div className="pt-4">
        <div className="flex justify-between items-center">
          <div className={`flex rounded-full items-center justify-between  w-20 h-8 px-2 ${themeValue===true?"bg-[#FFFFFF]":"bg-[#444040]"}`}>
            <span
              onClick={handleThemeChange}
              className={`${
                themeValue ? "p-1 bg-gray-400 rounded-full " : "cursor-pointer"
              } `}
            >
              <HiMoon />
            </span>
            <span
              onClick={handleThemeChange}
              className={`${
                themeValue === false
                  ? "p-1 bg-gray-400 rounded-full "
                  : "cursor-pointer"
              } `}
            >
              <IoSunny />
            </span>
          </div>
          <div className="flex  items-center gap-2">
            <div className="text-4xl cursor-pointer">
              <MdMessage />
            </div>
            <div className="text-4xl cursor-pointer">
              <MdNotificationsActive />
            </div>
            <div>
              <img
                src={contactUserImg}
                className="w-10 rounded-full h-10 object-cover cursor-pointer"
                alt=""
              />
            </div>
          </div>
        </div>
        <div
          className={`card1 px-5 bg-blue-800 pt-3 pb-2 mt-5 rounded-2xl ${
            themeValue === true ? "text-white" : ""
          }`}
        >
          <div className="flex justify-between">
            <p className="text-xl font-normal w-38">Available QNT's</p>
            <p className="font-bold text-xl">
              Pay<span>ME</span>
            </p>
          </div>
          <div className="flex justify-between my-5">
            <h1 className="text-5xl font-black pl-8 ">Q 13,500</h1>
            <p className="pr-3 text-sm">
              <FaCopy />
            </p>
          </div>
          <div className="flex gap-3">
            <button
              className={`flex items-center text-2xl gap-1 py-2 rounded-full px-4 ${
                themeValue === true
                  ? "bg-[#E6E2E2] text-black"
                  : "bg-[#252525] text-white"
              }`}
            >
              <span>
                <MdSendToMobile />
              </span>
              Transfer
            </button>
            <button
              className={`flex items-center text-2xl gap-1  py-2 rounded-full px-4 ${
                themeValue === true
                  ? "bg-[#E6E2E2] text-black"
                  : "bg-[#252525] text-white"
              }`}
            >
              Recieve
              <span className="block rotate-180">
                <MdSendToMobile />
              </span>
            </button>
          </div>
          <div className="mt-3">
            <p className="text-gray-200">Last updated:</p>
            <p className="font-bold text-lg">sep 19th, 2024 '12:30</p>
          </div>
        </div>
        <div
          className={`card2 px-5 py-3 mt-5 rounded-2xl ${
            themeValue === true ? "bg-[#FFFFFF]" : "bg-[#252525]"
          }`}
        >
          <div>
            <div className="flex justify-between">
              <p className="text-xl font-bold">Your Bank</p>
              <div className=" cursor-pointer">
                <PiDotsThreeOutlineFill
                  className={`text-[2rem] ${themeValue===true?"text-black":"text-white"}`}
                />
              </div>
            </div>
            <div className="flex justify-between items-center  mt-3">
              <p className="font-bold text-base">Acc. Number</p>
              <p
                className={`${
                  themeValue === true ? " text-gray-500" : " text-gray-400"
                }`}
              >
                xxx-xxxx-7890
              </p>
            </div>

            <div className="flex justify-between items-center  mt-1">
              <p className="font-bold text-base">Name</p>
              <p className={`${
                  themeValue === true ? " text-gray-500" : " text-gray-400"
                }`}>Sumon nath</p>
            </div>

            <div className="flex justify-between items-center  mt-1">
              <p className="font-bold text-base">Status</p>
              <p className={`${
                  themeValue === true ? " text-gray-500" : " text-gray-400"
                }`}>Active</p>
            </div>

            <div className="flex justify-between items-center  mt-1">
              <p className="font-bold text-base">Balance</p>
              <p className={`${
                  themeValue === true ? " text-gray-500" : " text-gray-400"
                }`}>$3,000.00</p>
            </div>

            <div className="flex justify-between items-center  mt-1">
              <p className="font-bold text-base">Bank</p>
              <p className={`${
                  themeValue === true ? " text-gray-500" : " text-gray-400"
                }`}>SBI Bank</p>
            </div>
          </div>
        </div>
        <button className={`bg-blue-800 w-full rounded-2xl py-4 text-2xl font-bold mt-4 text-white`}>
          Add Bank
        </button>
      </div>
    </section>
  );
}

export default AccountBalance;
