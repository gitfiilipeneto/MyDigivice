import React, { useEffect, useState } from "react";
import GetDigimons from "./apiCall/ApiCall";
import ListDigimonCards from "./components/ListDigimonsCards";

const App = () => {
  const [allDigimons, setAllDigimons] = useState([]);
  useEffect(() => GetDigimons().then(setAllDigimons), []);
  return <ListDigimonCards allDigimons={allDigimons} />;
};

export default App;
