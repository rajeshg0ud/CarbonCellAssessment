import React, { useState, useEffect } from 'react';

function GetAssets() {
  const [cryptoData, setCryptoData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
        const data = await response.json();
        setCryptoData(data);
      } catch (error) {
        console.error('Error fetching crypto data:', error);
      }
    };

    fetchData();
  }, []);

  const symbolToImage = {
    '&#36;': 'https://pngimg.com/uploads/dollar_sign/dollar_sign_PNG21539.png', // Example image URL for USD symbol
    '&pound;': 'https://images.vexels.com/media/users/3/135999/isolated/preview/6c3f3472afd2cc726de1a1779b868503-gbp-pound-coin-icon.png', // Example image URL for GBP symbol
    '&euro;': 'https://cdn.icon-icons.com/icons2/903/PNG/512/euro_icon-icons.com_69531.png', // Example image URL for EUR symbol
    // Add more mappings as needed
  };

  return (
    <div className='left-0 mb-4 md:mt-10 lg:mt-16  '>
      {cryptoData && (
      <div className={`flex overflow-x-auto  justify-start items-center md:justify-around w-[83vw] md:w-[64vw] lg:w-auto`}>
      {Object.values(cryptoData.bpi).map((coin, index) => (
            <div key={index} className="bg-zinc-900 p-4 rounded-md mx-3 my-4 md:my-0 w-[176px]" >
              <div className='flex justify-start items-center w-48 md:w-40'>
                <img src={symbolToImage[decodeURIComponent(coin.symbol)]} alt={coin.description} className='w-10 bg-white rounded-full object-cover'/>
                <p className='px-2'>{coin.code}</p>
              </div>
              <h2 className='text-sm text-gray-400 p-4 px-1'>{coin.description}</h2>
              <p className='px-1'>₹{coin.rate}</p>
              <button className='bg-green-600 rounded-sm p-1 px-2 mx-2 text-sm m-2 mt-3 ml-0 self-center'>Trade</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
  
}

export default GetAssets;
