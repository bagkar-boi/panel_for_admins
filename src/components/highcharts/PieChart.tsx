// components/PieChart.tsx
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const PieChart = () => {
  const options: Highcharts.Options = {
    chart: {
      type: "pie",
    },
    title: {
      text: "Attendance Percentage",
    },
    tooltip: {
      pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
    },
    accessibility: {
      point: {
        valueSuffix: "%",
      },
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: "pointer",
        dataLabels: {
          enabled: true,
          format: "<b>{point.name}</b>: {point.percentage:.1f} %",
        },
      },
    },
    series: [
      {
        name: "Attendance",
        type: "pie",
        data: [
          { name: "Present", y: 70 },
          { name: "Absent", y: 30 },
        ],
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default PieChart;
