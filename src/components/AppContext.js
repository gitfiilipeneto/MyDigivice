import NavBar from "./NavBar";
import React, { useState } from 'react'
import { SearchContext } from "../context/searchParamContext";
import App from "../App";

const AppContext = () => {
  const [contextValue, setContextValue] = useState()
    return (
    <SearchContext.Provider value = {[contextValue, setContextValue]}>
    <NavBar/>
    <App/>
    </SearchContext.Provider >
  
  )
}

export default AppContext