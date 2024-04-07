import React, { useState, useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const CryptoChart = () => {
  const [populationData, setPopulationData] = useState([]);
  const chartRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://datausa.io/api/data?drilldowns=Nation&measures=Population');
        const { data } = await response.json();
        if (data) {
          setPopulationData(data.reverse());
        }
      } catch (error) {
        console.error('Error fetching population data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (populationData.length > 0) {
      renderChart();
    }
  }, [populationData]);

  useEffect(() => {
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, []);

  const formatPopulation = (value) => {
    if (value >= 1e12) {
      return (value / 1e12) + 'T';
    } else if (value >= 1e9) {
      return (value / 1e9) + 'B';
    } else if (value >= 1e6) {
      return (value / 1e6) + 'M';
    } else if (value >= 1e3) {
      return (value / 1e3) + 'K';
    }
    return value.toFixed(1);
  };

  const renderChart = () => {
    const years = populationData.map(item => item.Year);
    const populations = populationData.map(item => item.Population);

    if (chartRef.current) {
      chartRef.current.destroy();
    }

    const ctx = document.getElementById('CryptoChart').getContext('2d');
    chartRef.current = new Chart(ctx, {
      type: 'line',
      data: {
        labels: years,
        datasets: [{
          label: 'Price',
          data: populations,
          borderColor: 'rgba(0, 128, 0, 1)',
          borderWidth: 4,
          fill: false
        }]
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Market Overview - Bitcoin',
            position: 'top',
            color: 'white',
            font: {
              size: 18,
              weight: 'normal', 
            },
            padding: {
              top: 10,
              bottom: 5
            }
          },
          subtitle: {
            display: true,
            text: 'Get in depth charts in Trade',
            position: 'bottom',
            color: 'white',
            font: {
              size: 18,
              weight: 'normal',
            },
            padding: {
              top: 5,
              bottom: 10
            }
          },
          legend: {
            display: false
          }
        },
        scales: {
          y: { 
            ticks: {
              callback: function(value) {
                return formatPopulation(value);
              }
            }
          }
        },
        backgroundColor: 'white' 
      }
    });
  };

  return (
    <div className='w-[90%] md:w-[60%] my-10 lg:my-0'>
      <canvas id="CryptoChart" width="500" height="418" className=" bg-zinc-900 rounded-lg p-2 "></canvas>
    </div>
  );
};

export default CryptoChart;
