import React, { useEffect, useState } from "react";
import GetDigimons from "./apiCall/ApiCall";
import ListDigimonCards from "./components/ListDigimonsCards";
import { SearchContext } from "./context/searchParamContext";


const App = () => {
  const [allDigimons, setAllDigimons] = useState([])
  // const [searchParam, setSearchParam] = useState('')
  useEffect(() => GetDigimons().then(setAllDigimons), []);

  return(
    
    <ListDigimonCards allDigimons={allDigimons}/>
  ) 
 

 
}

export default App;
