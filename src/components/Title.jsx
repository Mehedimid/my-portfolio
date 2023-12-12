import React from "react";

function Title({ children }) {
  return (
    <div className="flex uppercase text-[#9be2ea] justify-center my-10">
      <h1 className=" relative text-4xl md:text-4xl pb-1 border-b-2 border-dotted title-font border-[#9be2ea] ">
        {children}
      </h1>
    </div>
  );
}

export default Title;
