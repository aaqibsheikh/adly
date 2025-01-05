import React from 'react';
import ReactApexChart from 'react-apexcharts';

const AgeRangeBarChart: React.FC = () => {
  const options = {
    chart: {
      type: 'bar',
      toolbar: { show: false },
    },
    plotOptions: {
      bar: {
        distributed: true,
        borderRadius: 6,
        dataLabels: { position: 'top' },
      },
    },
    xaxis: {
      categories: ['18-25', '26-40', '41+'],
      labels: { style: { fontSize: '14px', fontWeight: 500 } },
    },
    yaxis: {
      labels: { style: { fontSize: '12px', fontWeight: 400 } },
    },
    colors: ['#6277FF', '#6277FF', '#6277FF'], // Blue bars
    dataLabels: {
      enabled: true,
      formatter: (val: number) => `${val}%`,
      style: { fontSize: '12px', fontWeight: 500, colors: ['#333'] },
    },
    grid: { show: false },
  };

  const series = [
    {
      name: 'Age Range',
      data: [19, 29, 17], // Age group percentages
    },
  ];

  return (
    <div className="w-full border rounded-lg p-6 bg-white flex-1">
      <h3 className="text-[22px] font-semibold text-black font-inter">Age Ranges</h3>
      <ReactApexChart options={options} series={series} type="bar" height={250} />
    </div>
  );
};

export default AgeRangeBarChart;
