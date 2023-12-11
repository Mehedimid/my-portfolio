import React from 'react';

function Title({children}) {
    return (
        <div className="flex uppercase text-[#9be2ea] justify-center">
        <h1 className=" relative text-4xl ">
          <span className="absolute md:-right-20 opacity-20 -top-6 md:text-5xl ">
            {children}
          </span>
          {children}
        </h1>
      </div>
    );
}

export default Title;