import React from "react";

import { motion } from "framer-motion";
function WeatherDataModule({ title, value="293.15", unit, IconComponent}) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="w-[200px] 
      h-[100px] bg-slate-100
      rounded-3xl cursor-default
      p-3
    ">
      {/* Title
       value and  condition with logos   */}

      <h3
        className=" 
          text-slate-500 
           font-semibold inline-block">
        {title}
      </h3>

      <div className="valueAndUnit mt-3">
        <span
          className="font-medium 
        text-3xl
        ">
          {value}
        </span>
        <abbr
          className="
        no-underline p-1 font-semibold text-lg  
        "
          title="unit">
          {unit}
        </abbr>
        {IconComponent && (
          <IconComponent
            size={35}
            className="float-right  text-slate-500  mr-2 -mt-5"
          />
        )}
      </div>
    </motion.div>
  );
}

export default WeatherDataModule;
