import { useState, useEffect, useRef } from 'react';
import logo from '/images/Component 5.png'
import dark from '/images/Frame.png'
import toggle from '/images/toggle.png'
import close from '/images/close.png'
import { Link , useLocation} from 'react-router-dom';
import light from '/images/frm.png'
import { useDarkMode } from './Context';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const { darkMode, toggleDarkMode } = useDarkMode();
    const location = useLocation();
    const navbarRef = useRef<HTMLDivElement>(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const isActiveLink = (path: string) => {
      return location.pathname === path;
    };

    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            if (navbarRef.current && !navbarRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleOutsideClick);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);

    return (
        <nav ref={navbarRef} className='w-full fixed top-0 left-0 right-0 z-50 h-[88px] flex justify-between items-center border-none border-gray-200 shadow-lg px-4 dark:bg-neutral-900 bg-white'>
            <div className='flex items-center'>
                <img src={logo} alt='logo' className="mr-2" />
                <h1 className='text-[24px] leading-[36px] font-semibold text-customBlue dark:text-white'>Fluxdev</h1>
            </div>

            <ul className='hidden lg:flex space-x-8 text-[24px] leading-[36px] font-raleway dark:text-darkGray font-medium'>
               <Link to="/" className={`p-2 ${isActiveLink('/') ? 'text-yellow-500' : 'text-black'} ${isActiveLink('/') ? 'dark:text-yellow-500' : 'dark:text-white'}`}>
                <li>Home</li>
               </Link>
               <Link to="/About" className={`p-2 ${isActiveLink('/About') ? 'text-yellow-500' : 'text-black'} ${isActiveLink('/About') ? 'dark:text-yellow-500' : 'dark:text-white'}`}>
                <li>About us</li>
               </Link>
               <Link to="/Services" className={`p-2 ${isActiveLink('/Services') ? 'text-yellow-500' : 'text-black'} ${isActiveLink('/Services') ? 'dark:text-yellow-500' : 'dark:text-white'}`}>
                <li>Services</li>
               </Link>
               <Link to="/Projects" className={`p-2 ${isActiveLink('/Projects') ? 'text-yellow-500' : 'text-black'} ${isActiveLink('/Projects') ? 'dark:text-yellow-500' : 'dark:text-white'}`}>
                <li>Our Projects</li>
               </Link>
            </ul>

            <div className='hidden lg:flex items-center'>
                {darkMode ? (
                    <button onClick={toggleDarkMode}>
                        <img src={light} alt='dark-icon' className="mr-4" />
                    </button>
                ) : (
                    <button onClick={toggleDarkMode}>
                        <img src={dark} alt='dark-icon' className="mr-4" />
                    </button>
                )}
                <button className='w-[139px] h-[46px] bg-customBlue text-white font-raleway rounded-lg'>Contact Us</button>
            </div>

            <button className="lg:hidden" onClick={toggleMenu}>
                <img src={toggle} alt="toggle" />
            </button>

            {isOpen && (
                <div className="lg:hidden fixed right-0 top-[88px] w-[60%] h-[calc(100vh-88px)] bg-white shadow-md z-40 overflow-y-auto dark:bg-neutral-900">
                    <div className='flex justify-center items-center space-x-4 p-4 '>
                        {darkMode ? (
                            <button className='space-x-2 font-bold flex justify-center items-center' onClick={toggleDarkMode}>
                                <img src={light} alt='dark-icon' className="mr-4" /> 
                                <p className='p-2 border rounded-lg bg-darkGray text-neutral-900 font-raleway'>Dark Mode</p>
                            </button>
                        ) : (
                            <button className='space-x-2 font-bold flex justify-center items-center' onClick={toggleDarkMode}>
                                <img src={dark} alt='dark-icon' className="mr-4" /> 
                                <p className='p-2 border rounded-lg bg-customBlue text-darkGray font-raleway'>Light Mode</p>
                            </button>
                        )}
                    </div> 
                    <ul className='flex flex-col space-y-5 p-4 text-[18px] leading-[24px] dark:text-darkGray font-normal font-euclid'>
                        <Link to='/' onClick={toggleMenu}><li>Home</li></Link>
                        <Link to='/About' onClick={toggleMenu}><li>About us</li></Link>
                        <Link to='/Services' onClick={toggleMenu}><li>Services</li></Link>
                        <Link to='/Projects' onClick={toggleMenu}><li>Our Projects</li></Link>
                        <li onClick={toggleMenu}>Contact</li>
                    </ul>
                    <button onClick={toggleMenu} className="pl-2">
                        <img src={close} alt="close toggle" style={{ filter: darkMode ? 'invert(1)' : 'none' }}/>
                    </button>
                </div>
            )}
        </nav>
    )
}