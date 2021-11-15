// a component to list All digimons inside cards
// put a container
import { Container } from "@mui/material";
import { useState, useEffect } from "react";
import GetDigimons from "../apiCall/ApiCall";
import DigimonCard from "./DigimonsCards";

const ListDigimonCards = () => {
  const [allDigimons, setDigimons] = useState([]);

  useEffect(() => {
    GetDigimons().then((allDigimonsArray) => {
      setDigimons(allDigimonsArray);
    });
  }, []);
  
  let digimonMap = allDigimons.map((digimon) => {
    return (
      <DigimonCard
        digimonName={digimon.name}
        digimonImage={digimon.img}
        digimonStatusLevel={digimon.level}
      />
    );
  });
  return (
    <Container fixed>
      <>{digimonMap}</>
    </Container>
  );
};

export default ListDigimonCards;
