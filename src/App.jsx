import React, { useEffect, useState, useMemo } from "react";
import GetDigimons from "./apiCall/ApiCall";
import ListDigimonCards from "./components/ListDigimonsCards";

const App = () => {
  const [allDigimons, setAllDigimons] = useState([]);

  const getToMemo = useMemo(() => GetDigimons());

  useEffect(() => getToMemo.then(setAllDigimons), []);

  return <ListDigimonCards allDigimons={allDigimons} />;
};

export default App;
