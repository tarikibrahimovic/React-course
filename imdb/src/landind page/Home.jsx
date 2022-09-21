import { Routes, Route, Link, NavLink, useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Button from "@mui/material/Button";
import { useState } from "react";
import "./home.css";

function Home(props) {
  let value = "";
  const [data, setData] = useState([]);
  let navigate = useNavigate();

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
  console.log(data);

  return (
    <div className="main">
        <h1 className="welcome">Welcome to IMDb</h1>
        <div className="pretraga">
          <TextField
            id="standard-basic"
            label="Name"
            variant="standard"
            InputProps={{
              style: { color: "black", width: "100%" },
            }}
            onChange={(e) => {
              value = e.target.value;
            }}
          />
          <button
            className="pretrazi"
            onClick={(e) => {
              e.preventDefault();
              getData(value);
            }}
          >
            Pretrazi
          </button>
        </div>
        <div className="dugmici">
        <Button
            variant="contained"
            onClick={(e) => {
              e.preventDefault();
              navigate("/movies",{
                state:{
                  name: value
                }
              })
            }}
          >
            Movies
          </Button>
          <Button
            variant="contained"
            onClick={(e) => {
              e.preventDefault();
              navigate("/tvshows",{
                state:{
                  name: value
                }
              })
            }}
          >
            Tv Shows
          </Button>
        </div>
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
    </div>
  );
}

export default Home;
