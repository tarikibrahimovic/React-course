import React, { useState } from "react";
// import ".//components/Plocica";
// import Plocica from ".//components/Plocica";
import "./App.css";
import Card from "./components/Card";

function App() {
  // const [prikaz, setPrikaz] = useState("");
  // let brojevi;
  // function Klik(el) {
  //   setPrikaz(`${prikaz} ${el}`);
  // }
  const UserName = React.createContext();
  const [nesto, setNesto] = useState('nesto');

  // const Create = () => {
  //   const brojevi = [];
  //   for (let i = 1; i <= 9; i++) {
  //     brojevi.push(
  //       <Plocica value={i.toString()} />
  //     )
  // }
  //   return brojevi;
  // };
  return (
    <UserName.Provider value={{nesto, setNesto}}>
      <Card/>
    </UserName.Provider>


    // <div className="glavni">
    //   <div className="calculator">
    //     <div className="sadrzaj">0</div>
    //     <div className="operacije">
    //       <Plocica value={"/"}></Plocica>
    //       <Plocica value={"*"}></Plocica>
    //       <Plocica value={"+"}></Plocica>
    //       <Plocica value={"-"}></Plocica>
    //       <Plocica value={"DEL"}></Plocica>
    //     </div>
    //     {/* <div className="red">{Create()}</div> */}
    //     <div className="red">
    //       <Plocica value={"1"}></Plocica>
    //       <Plocica value={"2"}></Plocica>
    //       <Plocica value={"3"}></Plocica>
    //     </div>
    //     <div className="red">
    //       <Plocica value={"4"}></Plocica>
    //       <Plocica value={"5"}></Plocica>
    //       <Plocica value={"6"}></Plocica>
    //     </div>
    //     <div className="red">
    //       <Plocica value={"7"}></Plocica>
    //       <Plocica value={"8"}></Plocica>
    //       <Plocica value={"9"}></Plocica>
    //     </div>
    //     <div className="red">
    //       <Plocica value={"0"}></Plocica>
    //       <Plocica value={"."}></Plocica>
    //       <Plocica value={"="}></Plocica>
    //     </div>
    //   </div>
    // </div>
  );
}

export default App;
