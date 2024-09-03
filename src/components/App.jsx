

import React from "react";
import "./App.css";
import ShowComp from "./ShowComp";
import Search from "./Search";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div
      className="w-full lg:h-screen 
      h-[1700px]
    bg-slate-900
      flex
      justify-center
     lg:items-center  
      
       ">
      <div
        className=" lg:w-[1000px] lg:h-[650px]
         bg-slate-50 lg:rounded-3xl flex lg:justify-center 
       px-2
      rounded-xl
      mt-10
      lg:items-center flex-col lg:pl-[120px]">
        <Search />
        <ToastContainer closeOnClick={true} theme="dark" autoClose={1000} />

        <ShowComp/>
      </div>
    </div>
  );
}

export default App;
