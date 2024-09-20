import React from "react";
import { PiDotsThreeOutlineFill } from "react-icons/pi";
import PaymentDetails from "./PaymentDetails";
import { FaUser } from "react-icons/fa";
import UserImage from "../../../assets/user-image.webp";

function Dashboard({themeValue, setThemeValue}) {
  const userPaymentDetails = [
    {
      icon: <FaUser />,
      userName: "joe due",
      paymentTime: "Yesterday, 2:00 PM",
      paymentAmount: "-Q1,900",
      paymentStatus: "Success",
      paymentType: "Payment",
      paymentDebitOrCredit: "Transfer",
    },
    {
      icon: <FaUser />,
      userName: "Utkarsh",
      paymentTime: "Yesterday, 10:00 AM",
      paymentAmount: "+Q2,000",
      paymentStatus: "Success",
      paymentType: "Payment",
      paymentDebitOrCredit: "Earning",
    },
    {
      icon: <FaUser />,
      userName: "Utkarsh",
      paymentTime: "Yesterday, 4:00 AM",
      paymentAmount: "+Q2,500",
      paymentStatus: "Success",
      paymentType: "Payment",
      paymentDebitOrCredit: "Earning",
    },
    {
      icon: <FaUser />,
      userName: "Mannu",
      paymentTime: "1 Month Ago, 4:00 PM",
      paymentAmount: "-Q200",
      paymentStatus: "Success",
      paymentType: "Subscription",
      paymentDebitOrCredit: "Transfer",
    },
  ];
  const recentPaymentUserImages = [
    { img: UserImage, userName: "Alfredo" },
    { img: UserImage, userName: "Chaudia" },
    { img: UserImage, userName: "Cahya" },
    { img: UserImage, userName: "Mariana" },
    { img: UserImage, userName: "Mariana" },
    { img: UserImage, userName: "marceline" },
    { img: UserImage, userName: "marceline" },
  ];
  return (
    <section>
      <div className=" pt-3 h-full">
        <h1 className="text-3xl font-bold my-3 mb-4">Dashboard</h1>
        <div className={`flex bg-[#252525] justify-between items-center h-20 rounded-2xl pr-4 ${themeValue===true?"bg-[#FFFFFF]":""}`}>
          <h3 className=" text-[1.3rem] w-60 text-center font-semibold">
            Income & Spending (Today)
          </h3>
          <div className=" text-2xl w-28 text-center font-bold text-[#1FAE71]">
            +Q 5,000
          </div>
          <div className="  text-2xl w-28 text-center font-bold text-[#CB5E5F]">
            -Q 2,000
          </div>
          <div className=" cursor-pointer">
            <PiDotsThreeOutlineFill
              className={`text-[2rem] ${themeValue===true?"text-black":"text-white"}`}
            />
          </div>
        </div>

        <div className={` bg-[#252525] mt-3 pb-3 px-10 rounded-2xl ${themeValue===true?"bg-[#FFFFFF]":""}`}>
          <div className="flex items-center justify-between w-full">
            <h1 className="text-2xl font-bold mt-2 ">Transactions</h1>
            <div className=" cursor-pointer">
              <PiDotsThreeOutlineFill
                className={`text-[2rem] ${themeValue===true?"text-black":"text-white"}`}
              />
            </div>
          </div>
          <div className="flex flex-col justify-between items-center rounded-2xl gap-5 mt-5">
            {userPaymentDetails.map((item, index) => {
              const {
                icon,
                userName,
                paymentTime,
                paymentAmount,
                paymentStatus,
                paymentDebitOrCredit,
                paymentType,
                themeValue, setThemeValue
              } = item;
              const convertNumber = paymentAmount.split("");
              // console.log(convertNumber);
              return (
                <PaymentDetails
                  key={index}
                  icon={icon}
                  userName={userName}
                  paymentTime={paymentTime}
                  paymentAmount={paymentAmount}
                  paymentStatus={paymentStatus}
                  paymentDebitOrCredit={paymentDebitOrCredit}
                  paymentType={paymentType}
                  themeValue={themeValue} setThemeValue={setThemeValue}
                  paymentAmountClass={
                    convertNumber[0] == "+"
                      ? "text-[#029650]"
                      : "text-[#C7403F]"
                  }
                />
              );
            })}
          </div>
        </div>

        <div className={`  mt-3 px-10 rounded-2xl ${themeValue===true?"bg-[#FFFFFF]":"bg-[#252525]"}`}>
          <div className="flex items-center justify-between w-full">
            <h1 className="text-2xl font-bold mt-2 ">Recent Accounts</h1>
            <div className=" cursor-pointer">
              <PiDotsThreeOutlineFill
                style={{ color: "white", fontSize: "2rem" }}
              />
            </div>
          </div>
          <ul className="gap-5 flex mt-5 w-full">
            {recentPaymentUserImages.map((item, index) => {
              const {img, userName} = item;
              return (
                <li  key={index} className="">
                  <img src={img} className="rounded-full w-20" alt="" />
                  <p className="text-center text-gray-400 pb-[3px]">{userName}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
