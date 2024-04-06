import React from 'react'


function Title() {


  return (
    <div className=' flex flex-col mt-20 md:mt-0'>
      <div className=' flex justify-between w-full'>
        <div className=' my-7'>
        <h1 className=' text-xl md:text-2xl font-semibold flex '>Hello,  
        <span className=' text-lime-500 flex px-2 '> Aatharv Kaundinya <img src='https://em-content.zobj.net/source/apple/391/waving-hand_1f44b.png' className='h-6 md:h-8 ml-2'/></span> 
        </h1>
        <h3 className='text-lg md:text-xl font-semibold'>Welcome to <span className=' text-green-500'>Spot trading !</span></h3>
    </div>
      <button className=' hidden md:block bg-green-600 px-3 py-0 rounded-sm font-semibold h-[40px] m-7 '>Start Trading</button>
   </div>
</div>
  )
}

export default Title