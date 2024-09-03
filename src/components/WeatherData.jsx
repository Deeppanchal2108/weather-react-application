import React,{useContext} from "react";
import { FaSun } from "react-icons/fa";
import { LuThermometerSun } from "react-icons/lu";
import { WiHumidity } from "react-icons/wi";
import { MdVisibility } from "react-icons/md";
import { FaWind } from "react-icons/fa6";
import { FaCloudSun } from "react-icons/fa";
import { MdOutlineCompress } from "react-icons/md";

import WeatherDataModule from "./WeatherDataModule";
import { ApiDataContext } from "./ApiDataProvider";
import { FiWind } from "react-icons/fi";
function WeatherData() {

  const { data } = useContext(ApiDataContext);
  
  if (!data) {
    return;
  }
  function getWindDirection(deg) {
    if (deg < 0 || deg >= 360) {
      return "Unknown";
    } else if (deg < 22.5 || deg >= 337.5) {
      return "North";
    } else if (deg < 67.5) {
      return "N-E";
    } else if (deg < 112.5) {
      return "East";
    } else if (deg < 157.5) {
      return "S-E";
    } else if (deg < 202.5) {
      return "South";
    } else if (deg < 247.5) {
      return "S-W";
    } else if (deg < 292.5) {
      return "West";
    } else {
      return "N-W";
    }
  }

  return (
    <div
      className="lg:w-[950px]
      lg:h-[290px] 

      w-[370px]
      h-[1000px]
      rounded-3xl bg-slate-300
        
        p-3
      ">
      <h2
        className="ml-9
            font-semibold
             font-sans 
         text-slate-700
         mb-1
         ">
        WEATHER DETAILS
      </h2>
      <div
        className="lg:w-[900px] flex 
      flex-wrap gap-5 ml-8
    
    ">
        <WeatherDataModule
          title="Temperature"
          unit="K"
          IconComponent={FaSun}
          value={data.main.temp}
        />
        <WeatherDataModule
          title="Feels Like"
          value={data.main.feels_like}
          unit="K"
          IconComponent={LuThermometerSun}
        />
        <WeatherDataModule
          title="Humidity"
          value={data.main.humidity}
          unit="%"
          IconComponent={WiHumidity}
        />

        <WeatherDataModule
          title="Visibility"
          value={data.visibility / 1000}
          unit="Km"
          IconComponent={MdVisibility}
        />
        <WeatherDataModule
          title="Wind"
          value={(data.wind.speed * 3.6).toFixed(2)}
          unit="km/h"
          visibility
          IconComponent={FaWind}
        />
        <WeatherDataModule
          title="Clouds"
          value={data.clouds.all}
          unit="%"
          IconComponent={FaCloudSun}
        />
        <WeatherDataModule
          title="Pressure"
          value={data.main.pressure}
          unit="hpa"
          IconComponent={MdOutlineCompress}
        />

        <WeatherDataModule
          title="Wind Direction"
          unit=""
         
          value={getWindDirection(data.wind.deg)}
          IconComponent={FiWind}
        />
      </div>
    </div>
  );
}

export default WeatherData;
