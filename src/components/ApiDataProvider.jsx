import React from 'react'
import { useState, createContext, useEffect } from 'react'
import { toast } from "react-toastify";
export const ApiDataContext = createContext(null);
function ApiDataProvider({ children }) {
  const [search, setSearch] = useState("Goa");
  const [data, setData] = useState(null);
  const handleApi = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=6a44b51b07262e6092725628f9681de5`
      );
      if (!response.ok) {
        toast.error("City not found. Please try again.");
        return;
      }
      const data = await response.json();
      setData(data);
      console.log(data);
    } catch (e) {
      console.log("Something went Wrong", e.message());
    }
  };
    useEffect(() => {
     
        handleApi(search);
    
    }, [search]);
  
   const updateSearch = (query) => {
     setSearch(query);
   };
  return (
    <ApiDataContext.Provider value={{data, updateSearch}}>
      {children}
    </ApiDataContext.Provider>
  )
}

export default ApiDataProvider;
