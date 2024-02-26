import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
  } from "recharts";

  const data = [
    { name: "", uv: 100, pv: 2500, amt: 2400 },
    { name: "", uv: 250, pv: 2100, amt: 2400 },
    { name: "", uv: 100, pv: 1000, amt: 2400 },
    { name: "", uv: 400, pv: 2000, amt: 2400 },
    { name: "", uv: 300, pv: 1800, amt: 2400 },
  ];

const Chart = () => {
  return (
    <LineChart
      width={700}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="pv"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
      <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
    </LineChart>
  );
};

export default Chart;
