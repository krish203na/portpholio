import React from "react";

const TryWordAnimate = (props) => {
  
const words = props.word.split(" ");
  return (
    <div>
      {words.map((e, i) => {
        return (
          <h1>
            <span className="text-8xl" key={i}>{e}</span>
          </h1>
        );
      })}
    </div>
  );
};

export default TryWordAnimate;
