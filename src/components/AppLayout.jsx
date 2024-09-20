import React, { useEffect } from "react";
import Navbar from "./navbarSection/Navbar";
import { Outlet } from "react-router-dom";
import AccountBalance from "./amountAndDetails/AccountBalance";

function AppLayout({themeValue, setThemeValue}) {
  useEffect(()=>{

    if(themeValue){
      document.querySelector('body').style.background="#EFEAEA"
      document.querySelector('body').style.color="black"
    }else{
      document.querySelector('body').style.background="#1F1F1F"
      document.querySelector('body').style.color="white"
    }
  })
  return (
    <section>
      <div className="grid justify-between grid-cols-[20%_50%_25%] gap-8 w-full">
        <Navbar themeValue={themeValue} setThemeValue={setThemeValue} />
        <Outlet />
        <AccountBalance themeValue={themeValue} setThemeValue={setThemeValue} />
      </div>
    </section>
  );
}

export default AppLayout;