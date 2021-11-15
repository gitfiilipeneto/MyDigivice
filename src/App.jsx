import React, { useEffect, useState } from "react";
import GetDigimons from "./apiCall/ApiCall";
import ListDigimonCards from "./components/ListDigimonsCards";

const App = () => {
  useEffect(() => {
    GetDigimons().then((allDigimonnArray) => setAllDigimons(allDigimonnArray));
  }, []);

  const [allDigimons, setAllDigimons] = useState([]);

  return <ListDigimonCards allDigimons={allDigimons} />;
};

export default App;
