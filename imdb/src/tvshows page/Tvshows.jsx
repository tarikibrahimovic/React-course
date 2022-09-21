import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./tvshow.css";

function Tvshows(props) {
  let value = "";
  const [data, setData] = useState([]);
  // let navigate = useNavigate();
  let location = useLocation();

  React.useEffect(() => {
    console.log(location);
  }, []);

  function getData(name) {
    fetch(`https://imdb-api.com/en/API/Search/k_4h3kc34h/${name}`)
      .then((e) => {
        return e.json();
      })
      .then((res) => {
        setData(res.results);
      })
      .catch((e) => {
        console.log(e);
      });
  }
  // console.log(data);

  return (
    <>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch", marginTop: "4%" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          variant="outlined"
        //   value={location.state.name}
          onChange={(e) => {
            value = e.target.value;
          }}
        />
        <Button
          variant="contained"
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            // value = location.state.name;
            getData(value);
          }}
          style={{ marginTop: "4%" }}
        >
          Search
        </Button>
      </Box>
      <div className="holder">
        {data.map((el) => {
          return (
            <Card sx={{ maxWidth: 345, marginBottom: "3%" }}>
              <CardActionArea>
                <CardMedia component="img" height="auto" image={el.image} />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {el.title}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          );
        })}
      </div>
    </>
  );
}


export default Tvshows;