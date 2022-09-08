import { useState } from "react";

const Card = (props) => {
  const [isDeleted, setIsDeleted] = useState(false);
  if (!isDeleted) {
    return (
      <div>
        <p>{props.title}</p>
        <div>
           <button
            className="delete"
            onClick={() => {
              setIsDeleted(true);
            }}
          >
            delete
          </button>
        </div>
      </div>
    );
  }
};

export default Card;
