import React,{useState} from 'react'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
const Navbar = () => {

    const [nav,setNav]=useState(false)

    const handleClick = () =>{
          setNav(!nav)
    }
  return (
    <div className='w-full h-[90px] bg-black'>
        <div className='max-w-[1240px] flex mx-auto justify-between px-4 h-full  items-center'>
                 <div>
                   <h1 className='text-[#00d8ff] font-bold text-3xl '>DEFI</h1>
                 </div>
            <div className='hidden md:flex'>
                <ul className='flex text-white items-center'>
                    <li className='px-4'>Platform</li>
                    <li className='px-4'>Developers</li>
                    <li className='px-4'>Community</li>
                    <li className='px-4'>About</li>
                    <button className='ml-4'>Use Defi</button>
                </ul>
            </div>
            {/*Hamburger-menu*/}
            <div onClick={handleClick} className='block md:hidden'>
                {nav? <AiOutlineClose size={30} className='text-white' />: <AiOutlineMenu size={30} className='text-white' />}
                   
            </div>
            {/*Mobile-menu*/}
            <div className={nav? 'w-full text-white left-0 top-[90px] absolute bg-black flex justify-center text-center'
            : 'absolute left-[-100%]'}>
                <ul>
                    <li className='text-2xl p-4'>Platform</li>
                    <li className='text-2xl p-4'>Developers</li>
                    <li className='text-2xl p-4'>Community</li>
                    <li className='text-2xl p-4'>About</li>
                    <button className='ml-4'>Use Defi</button>
                </ul>
            </div>
        </div>
         
    </div>
  )
}

export default Navbar