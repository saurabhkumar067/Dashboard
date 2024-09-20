import React from "react";
import BlackLogo from "../../assets/BG Logo/Black BG Logo.png";
import WhiteLogo from "../../assets/BG Logo/White BG Logo.png";
import PlayStoreImg from "../../assets/google-play-store-icon.png";
import AppStoreImg from "../../assets/app store-icon.png";
import { IoMdSettings } from "react-icons/io";
import { TiChevronRight } from "react-icons/ti";
import { NavLink } from "react-router-dom";

function Navbar({themeValue, setThemeValue}) {
  return (
    <nav>
      <div className={`bg-[#252525] h-full pb-4 pt-2 flex flex-col items-center fixed w-[20%] ${themeValue===true ? "bg-[#FFFFFF]":""}`}>
        <div className="logo mb-9">
          <img src={themeValue===true?WhiteLogo:BlackLogo} className="w-40" alt="" />
        </div>
        <ul className={`text-lg flex flex-col  gap-3 font-bold w-full text-center`}>
          <li>
            <NavLink
              to="/"
              className={(e) => {
                return e.isActive
                  ? `py-2 px-4  rounded-full bg-custom-gradient ${themeValue==true?"text-white":""}`
                  : ``;
              }}
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/transactions"
              className={(e) => {
                return e.isActive
                  ? `py-2 px-4  rounded-full bg-custom-gradient ${themeValue==true?"text-white":""}`
                  : ``;
              }}
            >
              Transactions
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/product"
              className={(e) => {
                return e.isActive
                  ? `py-2 px-4  rounded-full bg-custom-gradient ${themeValue==true?"text-white":""}`
                  : ``;
              }}
            >
              Product
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/invoices"
              className={(e) => {
                return e.isActive
                  ? `py-2 px-4  rounded-full bg-custom-gradient ${themeValue==true?"text-white":""}`
                  : ``;
              }}
            >
              Invoices
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/subscription"
              className={(e) => {
                return e.isActive
                  ? `py-2 px-4  rounded-full bg-custom-gradient ${themeValue==true?"text-white":""}`
                  : ``;
              }}
            >
              Subscription
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/settings"
              className="flex items-center gap-1 font-normal justify-center "
            >
              <span>
                <IoMdSettings />
              </span>
              Settings
            </NavLink>
          </li>
        </ul>
        <div className="apps flex flex-col justify-end h-full gap-2">
          <div className="flex items-center border-[1px] justify-center gap-2 py-1 rounded-md bg-[#010101]">
            <div className="appImg">
              <img src={PlayStoreImg} className="w-8" alt="" />
            </div>
            <div className={`${themeValue==true?"text-white":""}`}>
              <p className="text-xs">GET IT ON</p>
              <p className="font-semibold">Google Play</p>
            </div>
          </div>

          <div className="flex items-center border-[1px] justify-center gap-2 py-1 rounded-md bg-[#010101]">
            <div className="appImg">
              <img src={AppStoreImg} className="w-9" alt="" />
            </div>
            <div  className={`${themeValue==true?"text-white":""}`}>
              <p className="text-xs">Download on the</p>
              <p className="font-semibold">App Store</p>
            </div>
          </div>

          <div className={` ${themeValue===true?"text-black":"text-gray-200"}`}>Copyright &copy; BitPayME</div>
          <div className="flex gap-0 text-xl text-white">
            <TiChevronRight className={`${themeValue===true?"text-black":"text-white"}`} />
            <TiChevronRight className={`${themeValue===true?"text-black":"text-white"}`} />
            <TiChevronRight className={`${themeValue===true?"text-black":"text-white"}`}/>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
