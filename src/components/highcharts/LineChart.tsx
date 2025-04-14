// components/LineChart.tsx
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const LineChart = () => {
  const options: Highcharts.Options = {
    chart: {
      type: "line",
    },
    title: {
      text: "Weekly Attendance Trend",
    },
    xAxis: {
      categories: ["Mon", "Tue", "Wed", "Thu", "Fri"],
    },
    yAxis: {
      title: {
        text: "Employees Present",
      },
    },
    tooltip: {
      valueSuffix: " present",
    },
    series: [
      {
        name: "John",
        type: "line",
        data: [1, 1, 0, 1, 1],
      },
      {
        name: "Jane",
        type: "line",
        data: [1, 1, 1, 1, 0],
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default LineChart;
