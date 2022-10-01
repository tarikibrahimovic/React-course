import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const axios = require("axios");
  let value = "";

  const getUser = (el) => {
  //   const options = {
  //     // method: "GET",
  //     // url: `https://numbersapi.p.rapidapi.com/${el}/date`,
  //     // params: { fragment: "true", json: "true" },
  //     // headers: {
  //     //   "X-RapidAPI-Key": "07aedaa6bdmsh5086c5b7fe24ecep1ca830jsnc57d502e51b1",
  //     //   "X-RapidAPI-Host": "numbersapi.p.rapidapi.com",
  //     // },
  //     method: 'GET',
  // url: 'https://free-football-soccer-videos.p.rapidapi.com/',
  // headers: {
  //   'X-RapidAPI-Key': '07aedaa6bdmsh5086c5b7fe24ecep1ca830jsnc57d502e51b1',
  //   'X-RapidAPI-Host': 'free-football-soccer-videos.p.rapidapi.com'
  // }
  //   };


  // const options = "https://apiv2.allsportsapi.com/football/?get=Countries&APIkey=fb1a25cf8f16d4c6ab5adf05526cf395e1e791847bafb4aecb6cf6fe076474e1";
  //   axios
  //     .request(options)
  //     .then(function (response) {
  //       setData(response.data);
  //       console.log(response);
  //     })
  //     .catch(function (error) {
  //       console.error(error);
  //     });


  //fb1a25cf8f16d4c6ab5adf05526cf395e1e791847bafb4aecb6cf6fe076474e1
    // fetch("https://kitsu.io/api/edge/anime?filter[text]=attack")
    fetch("https://kitsu.io/api/edge/anime-characters/4")
    .then((res) => {
      return res.json();
    }).then((response) => {
      console.log(response);
      setData(response);
    }).catch((e) => {
      console.log(e);
    })

  };

  // useEffect(() => {
  //   getUser();
  // }, []);

  return (
    <div>
      <div>
        <input
          onChange={(e) => {
            value = e.target.value;
          }}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            getUser(value);
          }}
        >
          Submit
        </button>
      </div>
      {/* <h1>{data.text}</h1> */}
    </div>
  );
}

export default App;
