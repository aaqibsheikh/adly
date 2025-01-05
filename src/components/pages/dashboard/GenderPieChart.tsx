import React from 'react';
import ReactApexChart from 'react-apexcharts';

const GenderPieChart: React.FC = () => {
  const options = {
    chart: {
      type: 'pie',
    },
    labels: ['Male', 'Female'],
    colors: ['#F7F5FF', '#CB72FF'], // Custom colors for the chart
    legend: {
      position: 'bottom',
      markers: { radius: 12 },
    },
    dataLabels: { enabled: false },
  };

  const series = [34, 66]; // Data for male and female percentages

  return (
    <div className="flex-1 w-full border rounded-lg p-6 bg-white flex space-x-10">
      <ReactApexChart options={options} series={series} type="pie" height={250} />
      <div className="flex items-center justify-center space-x-24 w-full mt-4">
        <div className="flex flex-col space-y-1">
          <div className="flex items-center space-x-2">
            <span className="w-4 h-4 rounded-full bg-[#F7F5FF]"></span>
            <span className="text-sm font-normal font-inter text-[#4A4D4F]">Male</span>
          </div>
          <span className="text-black font-semibold font-inter text-[26px]">34%</span>
        </div>
        <div className="flex flex-col space-y-1  ml-6">
          <div className="flex items-center space-x-2">
            <span className="w-4 h-4 rounded-full bg-[#CB72FF]"></span>
            <span className="text-sm font-normal font-inter text-[#4A4D4F]">Female</span>
          </div>
          <span className="text-black font-semibold font-inter text-[26px]">66%</span>
        </div>
      </div>
    </div>
  );
};

export default GenderPieChart;
