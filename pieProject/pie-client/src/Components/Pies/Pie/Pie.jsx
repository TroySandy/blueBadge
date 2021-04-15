import React from "react";
import "./Pie.css";

const Pie = (props) => {
  console.log(props.testData);
  return (
    <>
      {props.testData.map((pie, index) => {
        console.log(pie);

        return (
          <tr key={index}>
            <td>{pie.nameOfPie}</td>
            <td>{pie.baseOfPie}</td>
            <td>{pie.crust}</td>
            <td>{pie.timeToBake}</td>
            <td>{pie.servings}</td>
            <td>{pie.rating}</td>
          </tr>
        );
      })}
    </>
  );
};

export default Pie;
