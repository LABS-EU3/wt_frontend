import React from "react";
import { Heading, Icon } from "@chakra-ui/core";
import {
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area
} from "recharts";

const Chart = ({ graphData, changeSlides }) => {
  graphData.data.forEach(
    graph => (graph.date = new Date(graph.date).toLocaleDateString())
  );

  return (
    <div className="chart mySlides slide">
      {/* <section> */}
      <Heading className="colorOrange" as="h4" size="md">
        {graphData.name}
      </Heading>
      <div className="chart-nav">
        <Icon
          className="pointer"
          onClick={() => changeSlides(-1)}
          name="chevron-left"
          size="24px"
        />
        <Icon
          className="pointer"
          onClick={() => changeSlides(1)}
          name="chevron-right"
          size="24px"
        />
      </div>
      {/* </section> */}
      <AreaChart
        width={800}
        height={250}
        data={graphData.data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis type="number" domain={["dataMin - 20", "dataMax + 20"]} />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="value"
          stroke="#8884d8"
          fillOpacity={0.8}
          fill="#8884d8"
        />
      </AreaChart>
    </div>
  );
};

export default Chart;
