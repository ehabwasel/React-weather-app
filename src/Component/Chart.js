import { useParams, Link } from "react-router-dom";
import useFetch from "./Fetch_data";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Chart = () => {
  const { cityId } = useParams();
  const FORECAST_END_POINT = `https://api.openweathermap.org/data/2.5/forecast?id=${cityId}&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}&units=metric`;
  const { data, isLoading, hasError } = useFetch(FORECAST_END_POINT);
  const chartData = data.list
    ? data.list.map((cast) => {
        return { name: cast.dt_txt, temperature: cast.main.temp };
      })
    : [];
  console.log(chartData);
  const btn_style = {
    color: "white",
    backgroundColor: "DodgerBlue",
    width: "70px",
    height: "35px",
  };

  if (hasError) {
    return <h2>Something went wrong...</h2>;
  }
  return (
    <>
      {isLoading && <h1>Loading ....</h1>}

      {data.list && <h3>5 days forecast for {data.city.name}</h3>}

      <AreaChart
        background={"white"}
        color={"white"}
        width={1000}
        height={400}
        data={chartData}
        margin={{
          top: 30,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="10 10 5" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="temperature" stroke="red" fill="green" />
      </AreaChart>

      <Link to="/">
        {" "}
        <button style={btn_style}>Home</button>
      </Link>
    </>
  );
};

export default Chart;
