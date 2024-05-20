import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";
import React, { useState } from "react";

const INITIAL_COSTS = [
  {
    id: 'c1',
    date: new Date(2020, 2, 12),
    description: "laptop",
    amount: 1500
  },
  {
    id: 'c2',
    date: new Date(2021, 11, 12),
    description: "telefon",
    amount: 500
  },
  {
    id: 'c3',
    date: new Date(2021, 8, 9),
    description: "table",
    amount: 90
  }
]

const App = () => {

  const [costs, setCosts] = useState(INITIAL_COSTS);

  const addCostHandler = (cost) => {
    setCosts(prevCost => {
      return [cost, ...costs]
    });
  }

  return (
    <div>
      <NewCost onAddCost={addCostHandler} />
      <Costs costs={costs} /> 
    </div>
  );
}

export default App;
