import React from "react";

function PaymentDetails({
  icon,
  userName,
  paymentTime,
  paymentAmount,
  paymentStatus,
  paymentDebitOrCredit,
  paymentType,
  paymentAmountClass,
}) {
  return (
    <div className="flex h-11 justify-between items-center w-full">
      <div className="flex gap-5 items-center justify-center">
        <div className="hartImg py-2 px-2 rounded-md bg-[#333333] text-[1.7rem]">
          {icon}
        </div>
        <div className=" w-44">
          <h4 className="text-xl">{userName}</h4>
          <p className="text-[15px] text-gray-400">{paymentTime}</p>
        </div>
      </div>
      <div className=" text-2xl w-28 text-center">
        <h4 className="text-xl">{paymentType}</h4>
        <p className="text-[15px] text-gray-400">{paymentDebitOrCredit}</p>
      </div>
      <div className="  text-2xl w-28 text-center font-bold r">
        <h4 className={`text-xl ${paymentAmountClass}`}>{paymentAmount}</h4>
        <p className="text-[15px] text-gray-400">{paymentStatus}</p>
      </div>
    </div>
  );
}

export default PaymentDetails;
