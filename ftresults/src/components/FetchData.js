import React, { useEffect, useState } from "react";
import Card from "./Card";
import classes from "./FetchData.module.css";

const FetchData = (props) => {
  const axios = require("axios");
  const [data, setData] = useState([]);
  let leagues = [];
  // const [leagues, setLeagues] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  function getData() {
    const options = {
      method: "GET",
      url: "https://free-football-soccer-videos.p.rapidapi.com/",
      headers: {
        "X-RapidAPI-Key": "07aedaa6bdmsh5086c5b7fe24ecep1ca830jsnc57d502e51b1",
        "X-RapidAPI-Host": "free-football-soccer-videos.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setData(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  return (
    <Card>
      {data.forEach((e) => {
        if (!leagues.includes(e.competition.name)) {
          leagues.push(e.competition.name);
        }
      })}

      {data.map((e, i) => {
        for(let j=0; j<data.length;j++)
        if(leagues[i] === e.competition.name){
        return (
          <div className={classes.data}>
            <h2 className={classes.league}>{e.competition.name}</h2>
            {/* <h2>{e.title}</h2> */}
            <h3 className={classes.teams}>{e.side1.name}</h3>
            <h3>0 - 0</h3>
            <h3 className={classes.teams}>{e.side2.name}</h3>
          </div>
        );
        }
      })}
    </Card>
  );
};

export default FetchData;
