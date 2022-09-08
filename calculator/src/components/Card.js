import React, { useContext } from "react";
import UserName from '../App';

const Card = () => {
    const content = useContext(UserName);

    return(<div>
        <h1>{content.nesto}</h1>
        <button onClick={(e) => {
            e.preventDefault();
            content.setNesto('Nesto Novo'); 
        }}></button>
    </div>)
}

export default Card;