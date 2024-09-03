import React,{useContext} from "react";
import { IoLocationSharp } from "react-icons/io5";
import { WiDaySnow } from "react-icons/wi";
import { WiDayCloudy } from "react-icons/wi";
import { WiDayWindy } from "react-icons/wi";
import { WiDaySunnyOvercast } from "react-icons/wi";
import { WiDaySunny } from "react-icons/wi";
import { MdOutlineWbSunny } from "react-icons/md";
import { motion } from "framer-motion";
import { ApiDataContext } from "./ApiDataProvider";

import "./basic.css";

function BasicComp() {

  const { data } = useContext(ApiDataContext);

     if (!data) {
       return;
     }
const getWeatherIcon = (tempInCelsius) => {
  if (tempInCelsius < 0) {
      return (
        <>
          <WiDaySnow size={80} className="mt-5 mb-3" />
          <h3>It's cold and freezing!</h3>
        </>
      );
  } else if (tempInCelsius < 10) {
  return (
    <>
      <WiDayCloudy size={80} className="mt-5 mb-3" />

      <h3>It's chilly outside.</h3>
    </>
  );
  } else if (tempInCelsius < 20) {
   return (
     <>
       <WiDayWindy size={80} className="mt-5 mb-3" />
       <h3>It's cool and pleasant.</h3>
     </>
   );
  } else if (tempInCelsius < 30) {
    return (
      <>
        <WiDaySunnyOvercast size={80} className="mt-5 mb-3" />
        <h3>It's warm and comfortable.</h3>
      </>
    );
  } else if (tempInCelsius < 35) {
    return (
      <>
        <MdOutlineWbSunny size={80} className="mt-5 mb-3" />
        <h3>It's hot outside.</h3>
      </>
    );
  } else {
    return (
      <>
        <WiDaySunny size={80} className="mt-5 mb-3" />
        <h3>It's extremely hot and scorching!</h3>
      </>
    );
  }
};
  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      className="h-[250px] lg:w-[350px]
      w-[300px]
      lg:m-0
      ml-4 m-3
        bg-slate-300 rounded-3xl
    ">
      <div className="p-5">
        <h2 className="temp text-5xl text-slate-900">
          {(data.main.temp - 273.15).toFixed(2)}°C
        </h2>
        <div className="flex gap-1">
          <h3 className="">
            {" "}
            {data.name.toUpperCase() + "," + data.sys.country.toUpperCase()}
          </h3>
          <IoLocationSharp className="mt-1" />
        </div>
        <div>{getWeatherIcon(data.main.temp - 273.15)}</div>
      </div>
    </motion.div>
  );
}

export default BasicComp;
