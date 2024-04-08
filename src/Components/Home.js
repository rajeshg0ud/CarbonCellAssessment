import React from 'react'
import SideNavBar from './SideNavBar'
import Title from './Title';
import PopulationChart from './Graphs/CryptoChart';
import Wallet from './Graphs/Wallet';
import SocialMedia from './Graphs/SocialMedia';
import GetAssets from './Assets/GetAssets';

function Home() {
  return (
    <div className=' bg-black h-full text-white flex'>
    <SideNavBar className=" absolute top-0"/>
    
    <div className=' flex flex-col w-full ml-7'>
      <Title />
      
      <div className=" w-5/5 flex flex-col lg:flex-row md:justify-between h-3/5">
        
        <PopulationChart />

        <Wallet />

        <SocialMedia />
      </div> 

      <div  className=" w-5/5 flex h-3/5 ">
        <p className=' text-xl my-4 mt-14 md:mt-[194px] lg:mt-0'> Assets</p>

        <div className='flex justify-between -ml-16 flex-wrap mt-20 md:mt-64 lg:mt-0'>
          <GetAssets />
          <GetAssets />
        </div>

      </div>
    </div>
    </div>
  )
}

export default Home