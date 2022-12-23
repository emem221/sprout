import { Box, Grid, Paper } from "@mui/material";
import React, { useState, useEffect } from "react";
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
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1} className={styles.container}>
          {plantData.map((data) => {
            return (
              <Grid
                item
                xs={6}
                md={4}
                key={data.id}
                className={styles.card_item}
              >
                <Paper
                  variant="outlined"
                  elevation={3}
                  className={styles.paper}
                >
                  <img src={data.img} alt="" />
                  <div>
                    <b>Plant Category: </b>
                    {data.Categories}
                  </div>
                  <div>
                    <b>Plant Care: </b>
                    {data.Watering}
                  </div>
                  <div>
                    <b>Pruning: </b>
                    {data.Pruning}
                  </div>
                </Paper>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </>
  );
}

export default SearchData;
