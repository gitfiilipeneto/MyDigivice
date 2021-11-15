//Digimons Cards to render
import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";

import CardActions from "@mui/material/CardActions";

import IconButton from "@mui/material/IconButton";


import FavoriteIcon from "@mui/icons-material/Favorite";

const DigimonCard = ({
  digimonName,
  digimonImage,
  digimonStatusLevel,
}) => {
  return (
    <Card sx={{ maxWidth: 345, margin: "15px", display: 'inline-block' }}>
      <CardHeader title={digimonName} subheader={digimonStatusLevel} />
      <CardMedia
        component="img"
        height="auto"
        image={digimonImage}
        alt={digimonName}
      />
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default DigimonCard;
