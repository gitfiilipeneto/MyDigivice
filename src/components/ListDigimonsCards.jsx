// a component to list All digimons inside cards
// put a container
import { useContext, useEffect, useState } from "react";
import { Container } from "@mui/material";
import { Box } from "@mui/system";
import DigimonCard from "./DigimonsCards";
import { SearchContext } from "../context/searchParamContext";

const ListDigimonCards = ({ allDigimons = [] }, searchParams) => {
  const [filteredDigimons, setFilteredDigimons] = useState(allDigimons);
  const [searchParamContext] = useContext(SearchContext);

  useEffect(() => {
    const filteredDigimonsList = allDigimons.filter((digimon) =>
      digimon.name.toLowerCase().includes(searchParamContext)
    );
    setFilteredDigimons(filteredDigimonsList);
  }, [searchParamContext, allDigimons]);


  return (
    <Container fixed>
      <Box m="auto" justifyContent="center">
        {filteredDigimons.length === 0
          ? allDigimons.map((digimon) => (
              <DigimonCard
                digimonName={digimon.name}
                digimonImage={digimon.img}
                digimonStatusLevel={digimon.level}
              />
            ))
          : filteredDigimons.map((digimon) => (
              <DigimonCard digimonName={digimon.name}
              digimonImage={digimon.img}
              digimonStatusLevel={digimon.level} />
            ))}
      </Box>
    </Container>
  );
};

export default ListDigimonCards;
