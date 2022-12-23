import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import styles from "./styles.module.css";
import { InputBase, Paper } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import SearchData from "./SearchData";

function Search() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <img src="logo.png" alt="" style={{ width: "150px" }} />
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12}>
            <h1 className={styles.h1Text}>Search for a Plant</h1>
            <p className={styles.pText}>
              Our database contains care instructions for over 100 of the monpm
              install @mui/icons-materialst common houseplants, so you know how
              to give your plant the optimal care it deserves.
            </p>
            <p className={styles.pText}>
              Simply search either by scientific name or by common name, and if
              we have care info for that plant we’ll share all of our knowledge
              with you.
            </p>
          </Grid>

          <Grid
            container
            display="flex"
            justifyContent="center"
            alignItems="center"
            paddingTop="40px"
          >
            <Paper
              component="form"
              elevation="0"
              variant="outlined"
              sx={{
                p: "4px 8px",
                display: "flex",
                alignItems: "center",
                width: 400,
                borderRadius: "10px",
                backgroundColor: "#32502E",
              }}
            >
              <InputBase
                sx={{ ml: 1, flex: 1, color: "white" }}
                placeholder="search Plant"
                inputProps={{ "aria-label": "search Plant" }}
              />
              <IconButton
                type="button"
                sx={{ p: "10px", color: "white" }}
                aria-label="search"
              >
                <SearchIcon>
                  <Link
                    style={{ textDecoration: "none", color: "#ffffff" }}
                    to="/result"
                  ></Link>
                </SearchIcon>
              </IconButton>
            </Paper>
            <Grid>
              <SearchData />
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Search;
