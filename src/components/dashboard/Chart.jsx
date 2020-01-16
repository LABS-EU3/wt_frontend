import React from "react";
import { Heading, Icon, Stack } from "@chakra-ui/core";
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
    <div className="mySlides slide">
      <section>
        <Heading className="colorOrange" as="h4" size="md">
          {graphData.name}
        </Heading>
        <Stack isInline>
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
        </Stack>
      </section>
      <AreaChart
        width={730}
        height={250}
        data={graphData.data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="date" />
        <YAxis type="number" domain={["dataMin - 20", "dataMax + 20"]} />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="value"
          stroke="#8884d8"
          fillOpacity={1}
          fill="url(#colorUv)"
        />
      </AreaChart>
    </div>
  );
};

export default Chart;
