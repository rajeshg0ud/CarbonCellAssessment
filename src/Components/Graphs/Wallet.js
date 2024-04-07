import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

function Wallet() {
  const quantities = {
    USDT: 230.56,
    NBST: 305.72,
    EFT: 50.04,
    WET: 109.76
  };

  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    renderChart();

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  const renderChart = () => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');

      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      chartInstance.current = new Chart(ctx, {
        type: 'doughnut', 
        data: {
          labels: Object.keys(quantities),
          datasets: [{
            label: 'Wallet Balance',
            data: Object.values(quantities),
            backgroundColor: ['#32CD32', '#008000', '#00FFFF', '#AFE1AF'],
            borderWidth: 2,
            borderColor: 'rgb(24 24 27)',
            borderRadius: 4,
            
          }]
        },
        options: {
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: 'Wallet Balance',
              color: 'white',
              font: {
                size: 18  ,
                weight: 'normal' 
              }
            }
          }
        }
      });
    }
  };

  return (
    <div className=' bg-zinc-900 mx-0 md:mx-4 text-sm flex flex-col rounded-lg  h-full w-[90%] md:w-[45%]   my-10 lg:my-0' >
      
        <div className=' w-[270px]  self-center'>
        <canvas ref={chartRef}  className=" bg-zinc-900 rounded-lg p-2 mx-4 mb-1"></canvas>
        </div>

        <div className=' flex justify-around mt-4'><span>USDT</span>  <span>₹230.56</span></div>
        <div className=' flex justify-around'><span> NBST</span>  <span> 305.72</span></div>
        <div className=' flex justify-around'><span> EFT </span> <span> 50.04</span></div>
        <div className=' flex justify-around mb-4'><span> WET</span> <span> 109.76</span></div> 
        
        <div className="border-b-2 border-zinc-700 mt-4 self-center w-[90%]"></div>

        <button className=' bg-green-600 rounded-sm p-2 m-[6px] mt-4 self-center'>Manage Wallet</button>
    
    </div>
  );
}

export default Wallet;
