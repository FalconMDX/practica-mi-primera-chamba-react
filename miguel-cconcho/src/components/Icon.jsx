import React from "react";

function Icon({ type }) {
  if (type == "foot") {
    return (<div className="flex items-center">
      <label htmlFor="">
        <a href="">
          <img className="w-14 h-14" src="../../public/hourglass.png" alt="" />
        </a>
      </label>
      <p className="text-2xl font-bold ml-3 text-[#FF9000]">
        Hum<span className="text-white">ans</span>
      </p>
    </div>)
  } else {
    return (
      <div className="flex items-center">
        <label htmlFor="">
          <a href="">
            <img
              className="w-14 h-14"
              src="../../public/hourglass.png"
              alt=""
            />
          </a>
        </label>
        <p className="text-2xl ml-3 text-[#212E41]">
          Hum<span className="text-[#FF9000]">ans</span>
        </p>
      </div>
    );
  }
}

export default Icon;
