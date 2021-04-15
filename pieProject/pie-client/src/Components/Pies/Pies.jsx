import React, { useState } from "react";
import "./Pies.css";
import Pie from "./Pie/Pie.jsx";

const Pies = (props) => {
  const [pies, setPies] = useState([]);

  // const pumpkinPie = {
  //   nameOfPie: "Pumpkin",
  //   baseOfPie: "Pumpkin Puree",
  //   crust: "Pastry",
  //   timeToBake: 50,
  //   servings: 8,
  //   rating: 4,
  // };

  const testDataPies = [
    {
        nameOfPie: 'Pumpkin',
        baseOfPie: 'Pumpkin puree',
        crust: 'Pastry',
        timeToBake: 50,
        servings: 8,
        rating: 4.2
    },
    {
        nameOfPie: 'Apple',
        baseOfPie: 'Jam',
        crust: 'Graham cracker',
        timeToBake: 30,
        servings: 6,
        rating: 4.0
    },
    {
        nameOfPie: 'Chocolate',
        baseOfPie: 'Pudding',
        crust: 'Pastry',
        timeToBake: 20,
        servings: 8,
        rating: 5.0
    }
]

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name of Pie</th>
            <th>Base of Pie</th>
            <th>Crust</th>
            <th>Bake Time</th>
            <th>Servings</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {/*   keyword/prop      value     */}
          <Pie testData={testDataPies}/>
        </tbody>
      </table>
    </div>
  );
};

export default Pies;
