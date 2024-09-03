import React, { useContext,useEffect, useState } from 'react'
import { motion } from "framer-motion";
import { ApiDataContext } from "./ApiDataProvider";
function ImageRender() {
  const { data } = useContext(ApiDataContext);
  const locationName = data?.name || "Goa";
  const countryName = data?.sys?.country || "India";
  
  const [imageUrl, setImageUrl] = useState('');

    useEffect(() => {
        fetch(
          `https://api.unsplash.com/search/photos?query=${locationName}&client_id=6B4oYj4VojwyJbiFKu2pxH11J7YulFdR7w7WMOnNjTA`
        )
          .then((response) => response.json())
          .then((data) => {
            if (data.results.length > 0) {
              setImageUrl(data.results[0].urls.regular);
            } else {
              setImageUrl(
                "https://images.unsplash.com/photo-1526129318478-62ed807ebdf9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDkyNzl8MHwxfHNlYXJjaHwxfHxsb25kb258ZW58MHx8fHwxNzI1MTg1NzgyfDA&ixlib=rb-4.0.3&q=80&w=1080"
              );
            }
          })
          .catch((error) => {
            console.error("Error fetching image:", error);
        setImageUrl(
          "https://images.unsplash.com/photo-1526129318478-62ed807ebdf9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDkyNzl8MHwxfHNlYXJjaHwxfHxsb25kb258ZW58MHx8fHwxNzI1MTg1NzgyfDA&ixlib=rb-4.0.3&q=80&w=1080"
        );
          });
        
    },[locationName]);
  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      className="lg:w-[588px] relative
      w-[340px]
      h-[240px]
 lg:m-0
 ml-4
 mb-2
 
      rounded-xl
      lg:h-[250px] lg:rounded-3xl
      bg-white overflow-hidden
    ">
      <img
        src={imageUrl}
        alt={`Image of ${locationName}`}
        style={{
          width: "100%",
          height: "auto",
          objectFit: "cover",
          objectPosition: "50% 50%",
        }}
      />
      <div
        className="absolute
           text-white
           text-3xl
           font-sans
           top-1/2
           left-1/3
           font-bold
       shadow-black
        
           z-10
          ">
        {locationName.toUpperCase() + "," + countryName.toUpperCase()}
      </div>
    </motion.div>
  );
}

export default ImageRender
