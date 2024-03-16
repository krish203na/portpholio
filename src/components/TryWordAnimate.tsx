// import React from "react";

const TryWordAnimate = (props:{name:string}) => {
  
  console.log(props.name)
const words = props.name.split("");
  return (
    <div>
      {words.map((e:any, i:any) => {
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
