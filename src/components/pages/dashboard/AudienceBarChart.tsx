import React from 'react';
import ReactApexChart from 'react-apexcharts';

const AudienceBarChart: React.FC = () => {
  const options = {
    chart: {
      type: 'bar',
      toolbar: { show: false },
      stacked: true,
    },
    plotOptions: {
      bar: {
        horizontal: true,
        borderRadius: 6,
        barHeight: '50%',
      },
    },
    colors: ['#6277FF', '#A78BFA', '#D6E4FF'], // Custom colors for each audience
    xaxis: {
      categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'], // Days of the week
      labels: {
        style: {
          fontSize: '12px',
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          fontSize: '12px',
        },
      },
    },
    grid: {
      borderColor: '#F1F1F1',
    },
    legend: {
      show: false,
    },
    tooltip: {
      enabled: true,
      theme: 'light',
    },
  };

  const series = [
    {
      name: 'Audience 1',
      data: [300, 200, 100, 250, 150, 180, 220], // Data for Audience 1
    },
    {
      name: 'Audience 2',
      data: [200, 150, 250, 300, 100, 120, 180], // Data for Audience 2
    },
    {
      name: 'Audience 3',
      data: [150, 100, 200, 180, 250, 300, 100], // Data for Audience 3
    },
  ];

  return (
    <div className="w-full mt-4 border rounded-lg p-6 bg-white">
      <h3 className="text-[22px] font-semibold font-inter text-black">Your Top Audiences</h3>
      <div className="flex items-center space-x-6 mt-4">
        <div className="flex items-center space-x-2">
          <span className="w-4 h-4 rounded-full bg-[#6277FF]"></span>
          <span className="text-sm text-gray-500">Audience 1</span>
          <span className="text-black font-medium">9,823</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="w-4 h-4 rounded-full bg-[#A78BFA]"></span>
          <span className="text-sm text-gray-500">Audience 2</span>
          <span className="text-black font-medium">9,223</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="w-4 h-4 rounded-full bg-[#D6E4FF]"></span>
          <span className="text-sm text-gray-500">Audience 3</span>
          <span className="text-black font-medium">9,223</span>
        </div>
      </div>
      <div className="mt-6">
        <ReactApexChart options={options} series={series} type="bar" height={250} />
      </div>
    </div>
  );
};

export default AudienceBarChart;
