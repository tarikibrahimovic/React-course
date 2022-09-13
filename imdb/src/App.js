import { Routes, Route, Link, NavLink } from "react-router-dom";
import "./App.css";
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useState } from "react";

function App() {
    let value = '';
    const [data, setData] = useState([]);

    function getData(name){
      fetch(`https://imdb-api.com/en/API/Search/k_4h3kc34h/${name}`)
      .then((e) => {
        return e.json();
      })
      .then((res) => {
        setData(res.results)
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
      <TextField id="standard-basic" label="Name" variant="standard"
      InputProps={{
        style: {color: 'black', width: '100%'}
    }} onChange={(e) => {
      value = e.target.value;
    }}/>
    <button className="pretrazi" onClick={(e) => {
      e.preventDefault();
      getData(value)
    }}>Pretrazi</button>
    </div>
      <div className="buttons">
        <button className="movie">Movies</button>
        <button className="tvshow">TV Shows</button>
      </div>
      {data.map((el) => {
        return(<div className="holder"><Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="auto"
          image={el.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card></div>)
      })
      }
    </div>
  );
}

export default App;
