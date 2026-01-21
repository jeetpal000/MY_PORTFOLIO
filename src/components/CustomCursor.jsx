import React from "react";

const CustomCursor = () => {
  return (
    <div className=' z-50 bg-[#2996E8] w-[20px] h-[20px] absolute top-[10%] left-[50%] translate-[-50% -50%]  rounded-full pointer-none shadow-[0_0_20px_#2996E8,0_0_60px_#2996E8,0_0_100px_#2996E8] before:content-[""] before:absolute before:w-[50px] before:h-[50px] before:bg-[#2996E8] before:opacity-20 before:translate[-50%,-50%] before:rounded-full '></div>
  );
};

export default CustomCursor;
