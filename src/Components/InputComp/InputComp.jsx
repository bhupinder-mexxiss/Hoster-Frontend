import React from "react";
import CustomButton from "../CustomButton/CustomButton";

const InputComp = ({ placeholder, btnlabel, btnW="md:min-w-[140px]", as, to }) => {
  return (
    <div className="bg-white h-[46px] md:h-[56px] flex items-center justify-center rounded-full pl-2 sm:pl-5 pr-1 w-full">
      <input
        type="text"
        placeholder={placeholder}
        className="h-11 md:h-[54px] placeholder:text-black placeholder:opacity-50 text-black border-none focus:ring-0 w-full rounded-full"
      />
      <CustomButton label={btnlabel} className={`px-4 ${btnW}`} height="50" as={as} to={to} />
    </div>
  );
};

export default InputComp;
