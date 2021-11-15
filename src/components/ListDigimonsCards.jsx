// a component to list All digimons inside cards
// put a container
import { Container } from "@mui/material";
import { Box } from "@mui/system";
import DigimonCard from "./DigimonsCards";

const ListDigimonCards = ({ allDigimons }) => {
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
      <Box m="auto" justifyContent="center">
        {digimonMap}
      </Box>
    </Container>
  );
};

export default ListDigimonCards;
