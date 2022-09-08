import { useReducer, useState } from "react";
import "./App.css";
import Card from "./components/Card";


function App() {
  const reducer = (state, action) => {
    switch(action.type) {
      case "ADD":
        return[...state,action.data];
    }
  }
  const [value, dispatch] = useReducer(reducer,"");

  function Add(){
    dispatch({type: 'dodaj', data: a})
  }

  const [data, setData] = useState([]);
  const [a,setA] = useState('');
  return (
    <div className="container">
      <h1>TODO LIST</h1>
      <div className="unos">
        <input
          type="text"
          onChange={(e) => {
            setA(e.target.value);
          }}
          value={a}
        />
        <button
          onClick={() => {
            Add();
          }}
        >
          Submit
        </button>
      </div>
      {
        data.map((el) => {
        return <Card title={el.value} />;
      })
      }
    </div>
  );
}

export default App;

