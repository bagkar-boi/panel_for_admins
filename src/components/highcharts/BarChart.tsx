import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const BarChart = () => {
  const options: Highcharts.Options = {
    chart: {
      type: 'bar',
    },
    title: {
      text: 'Employee Attendance Overview',
    },
    xAxis: {
      categories: ['John', 'Jane', 'Jim', 'Jill'],
      title: {
        text: 'Employees',
      },
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Days Present',
        align: 'high',
      },
    },
    tooltip: {
      valueSuffix: ' days',
    },
    plotOptions: {
      bar: {
        dataLabels: {
          enabled: true,
        },
      },
    },
    series: [
      {
        name: 'Attendance',
        type: 'bar',
        data: [20, 15, 18, 22],
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default BarChart;