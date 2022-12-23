import { Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import styles from "./styles.module.css";

function SearchData() {
  const [plantData, setPlantData] = useState([]);

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "7e1eceeb37mshb9ca65c61c6b794p1b4ea6jsnfedcebb2e160",
      "X-RapidAPI-Host": "house-plants2.p.rapidapi.com",
    },
  };

  useEffect(() => {
    fetch("https://house-plants2.p.rapidapi.com/", options)
      .then((response) => response.json())
      //.then((response) => console.log(response))
      .then((response) => setPlantData(response))
      .catch((err) => console.error(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(plantData);

  return (
    <>
      <Grid container spacing={1} className={styles.container}>
        {plantData.map((data) => {
          return (
            <Card
              sx={{ maxWidth: 345 }}
              key={data.id}
              className={styles.card_item}
            >
              <CardMedia sx={{ height: 200 }} image={data.img} alt="" />
              <CardContent>
                <Typography>
                  <b>Plant Category: </b>
                  {data.Categories}
                </Typography>

                <Typography>
                  <b>Plant Care: </b>
                  {data.Watering}
                </Typography>
                <Typography>
                  <b>Pruning: </b>
                  {data.Pruning}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          );
        })}
      </Grid>
    </>
  );
}

export default SearchData;
