import React from "react";

function Butonc({type = primary, text}) {
  if (type === "primary") {
    return (
      <button className="border-2 border-orange-500 rounded w-24 py-1 text-white bg-[#FF9000] hover:bg-orange-700">
        {text}
      </button>
    );
  } else {
    return (
      <button className="border-2 border-[#FF9000] rounded w-24 py-1 text-[#FF9000] bg-white hover:bg-orange-700">
        {text}
      </button>
    );
  }
}

export default Butonc;
