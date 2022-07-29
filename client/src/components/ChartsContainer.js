import React, { useState } from "react";

import BarChartComponent from "./BarChart";
import AreaChartComponent from "./AreaChart";
import { useAppContext } from "../context/appContext";
import Wrapper from "../assets/wrappers/ChartsContainer";

const ChartsContainer = () => {
  const [barChart, setBarChart] = useState(true);
  const { monthlyApplications: data } = useAppContext();
  return (
    <Wrapper>
      <h4>Monthly applications</h4>
      <button type="button" onClick={() => setBarChart(!barChart)}>
        {barChart ? "Area chart" : "Bar chart"}
      </button>
      {barChart ? (
        <BarChartComponent data={data} />
      ) : (
        <AreaChartComponent data={data} />
      )}
    </Wrapper>
  );
};
export default ChartsContainer;
