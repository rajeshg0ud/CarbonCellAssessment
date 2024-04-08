import React from 'react'
import media from '../../media/media.jpg'

function SocialMedia() {
  return (
  <div className='bg-zinc-900 mx-0 text-sm flex flex-col justify-around rounded-lg  h-full w-[90%] md:max-w-[70%] lg:w-[50%]  my-10 lg:my-0 mr-10'>
    <h1 className='text-lg text-center'>In recent posts</h1>
    
    <img src={media} className=' max-w-[88%] md:max-w-[97%] lg:max-w-[92%] rounded-lg self-center h-[65%] md:h-[70%] lg:h-[65%]' />
    <div className="border-b-2 border-zinc-700 mt-4 self-center w-[90%]"></div>
    <button className='bg-green-600 rounded-sm p-2 self-center'>Follow us on x</button>

  </div>
  
  )
}

export default SocialMedia