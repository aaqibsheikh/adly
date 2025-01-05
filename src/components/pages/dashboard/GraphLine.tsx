import React from 'react';
import ReactApexChart from 'react-apexcharts';

const GraphLine: React.FC = () => {
  const options = {
    chart: {
      type: 'line',
      height: 40,
      sparkline: { enabled: true },
    },
    stroke: {
      curve: 'smooth',
      width: 2,
    },
    colors: ['#34D399'], // Green line
    tooltip: { enabled: false },
  };

  const series = [
    {
      name: 'Value',
      data: [10, 15, 13, 20, 25, 23, 30],
    },
  ];

  return (
    <div className="w-24 h-10">
      <ReactApexChart options={options} series={series} type="line" height={40} />
    </div>
  );
};

export default GraphLine;
