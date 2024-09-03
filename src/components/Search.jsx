import React, { useState, useContext } from "react";
import { ApiDataContext } from "./ApiDataProvider";

function Search() {
  const [input, setInput] = useState("");
  const { updateSearch } = useContext(ApiDataContext);
  const handleButtonClick = () => {
    updateSearch(input);
    setInput("");
  };
  return (
    <div
      className="lg:w-[1100px] lg:h-[70px]
      w-[300px] h-[70px]
      lg:flex-row
      
      flex gap-2
     flex-col mt-2">
      <h2 className=" lg:my-3  font-bold 
      lg:text-lg
      ml-4
      text-2xl
      inline-block

      ">🌞Just Weather </h2>
      <div className="flex flex-row">
        <input
          type="text"
          placeholder="Search for cities"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="
             bg-slate-300
        lg:w-[700px] lg:h-[40px]
        w-[220px] h-[30px]
          text-black
          placeholder-slate-500
          lg:my-2
          lg:mx-0
          ml-3
          p-3
         rounded-bl-lg
         font-semibold
          rounded-tl-lg
          "
        />
        <button
          onClick={handleButtonClick}
          className="lg:h-[40px]
          w-[110px]
          h-[30px]
            lg:my-2
            p-1
          lg:p-1
           bg-slate-900 
          rounded-br-lg
          rounded-tr-lg text-white
           font-sans
          ">
          CheckWeather
        </button>
      </div>
    </div>
  );
}

export default Search;
