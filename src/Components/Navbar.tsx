import { useState } from 'react';
import logo from '/images/Component 5.png'
import dark from '/images/Frame.png'
import toggle from '/images/toggle.png'
import close from '/images/close.png'
import { Link } from 'react-router-dom';
import light from '/images/frm.png'
import { useDarkMode } from './Context';







export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const { darkMode, toggleDarkMode } = useDarkMode();


    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='relative '>
            <nav className='w-full h-[88px] flex justify-between items-center border border-none border-gray-200 shadow-sm px-4 dark:bg-neutral-900'>
                <div className='flex items-center'>
                    <img src={logo} alt='logo' className="mr-2" />
                    <h1 className='text-[24px] leading-[36px] font-semibold text-customBlue' >Fluxdev</h1>
                </div>

                <ul className='hidden lg:flex space-x-8 text-[24px]  leading-[36px] font-raleway dark:text-darkGray  font-medium '>
                  <Link to='/' className='hover:bg-bYellow p-2 dark:hover:text-black'> <li >Home</li>  </Link>  
                 <Link to='/About' className='hover:bg-bYellow p-2  dark:hover:text-black'>  <li>About us</li></Link>
                  <Link to='/Services' className='hover:bg-bYellow p-2  dark:hover:text-black'> <li>Services</li></Link> 
                  <Link to='/Projects'  className='hover:bg-bYellow p-2  dark:hover:text-black'> <li>Our Projects</li> </Link>  
                </ul>

                <div className='hidden lg:flex items-center'>
                {darkMode ? (
  <button onClick={toggleDarkMode}>
    <img src={light} alt='dark-icon' className="mr-4"  />
  </button>
) : (
  <button onClick={toggleDarkMode}>
    <img src={dark} alt='dark-icon' className="mr-4"  />
  </button>
)}

                    <button className='w-[139px] h-[46px] bg-customBlue text-white font-raleway rounded-lg'>Contact Us</button>
                </div>

                <button className="lg:hidden" onClick={toggleMenu}  >
                    <img src={toggle} alt="toggle" />
                </button>
            </nav>

            {isOpen && (
                <div className="lg:hidden absolute right-0 space-y-[42px] h-[100vh] top-0 w-[60%] bg-white border-t border-gray-200 shadow-md  z-10  dark:bg-neutral-900">
<div className='flex justify-center items-center space-x-4 p-4 border-t border-gray-200'>
{darkMode ? (
  <button className=' space-x-2 font-bold flex justify-center items-center' onClick={toggleDarkMode}>
    <img src={light} alt='dark-icon' className="mr-4 " /> <p className='p-2 border rounded-lg bg-darkGray text-neutral-900 font-raleway' >Dark Mode</p>
  </button>
) : (
  <button  className='space-x-2 font-bold flex justify-center items-center' onClick={toggleDarkMode}>
    <img src={dark} alt='dark-icon' className="mr-4"  /> <p className='p-2 border rounded-lg bg-customBlue text-darkGray font-raleway'>Light Mode</p>
  </button>
)}
                        
                        
                    </div> 
                    <ul className='flex flex-col space-y-5 p-4 text-[16px] leading-[24px] dark:text-darkGray font-normal font-euclid'>
                    <Link to='/'>  <li onClick={toggleMenu} >Home</li></Link> 
                    <Link to='/About' >   <li onClick={toggleMenu}>About us</li></Link> 
                    <Link to='/Services'>  <li onClick={toggleMenu}>Services</li></Link> 
                    <Link to='/Projects'>  <li onClick={toggleMenu}>Our Projects</li></Link> 
                        <li onClick={toggleMenu}>Contact</li>
                        
                    </ul>
                 <button onClick={toggleMenu}> <img src={close} alt="close toggle" className='pl-2' style={{ filter: darkMode ? 'invert(1)' : 'none' }}/></button>  
                </div>
            )}
        </div>
    )
}