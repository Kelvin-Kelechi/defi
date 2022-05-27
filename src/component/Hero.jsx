import React from 'react'
import DefiVideo from '../assets/video.mp4'
const Hero = () => {
  return (
    <div className='w-full h-[90vh] top-[90px]'>
       <video className='object-cover w-full h-full absolute -z-10' src={DefiVideo} autoPlay loop muted /> 
       <div className='w-full h-[90%] flex flex-col justify-center items-center text-white text-center'>
           <h1>Decentralized</h1>
           <h1 className='py-2'> <span className='text-[#00d8ff]'>Trading</span> Protocol</h1>
           <p className='py-4 text-xl'>Guaranted liquidity trading for million of users and top
               Ethereum applications
           </p>
       <div>
           <button className='m-2'>Use Defi</button>
           <button className='m-2'>FAQ</button> 
           </div>
       </div>
       <div>
           <p className='text-white text-center font-bold text-2xl'>Total Volume Secured: $42,104,783,642.42</p>
       </div>
    </div>
  )
}

export default Hero