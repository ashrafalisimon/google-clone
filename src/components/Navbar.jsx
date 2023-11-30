import React from 'react';
import { Link } from 'react-router-dom';
import GoogleLogo from '../assets/google.png';
import Search from './Search';

const Navbar = ({ darkTheme, setDarkTheme }) => {
    return (
        <div className='p-5 pb-0 flex flex-wrap sm:justify-between justify-center items-center border-b dark:border-gray-700 border-gray-200 '>
            <div  className="flex justify-between items-center space-x-5 w-screen ">
                <Link to='/'>
                    <span className='flex items-center'>
                        <img height='50px' width='50px' src={GoogleLogo} alt="" />
                        <span className='text-3xl font-medium dark:text-gray-200 text-gray-900'>Google</span>
                    </span>
                </Link>
                <button type='button' onClick={() => setDarkTheme(!darkTheme)} className='text-xl dark:bg-gray-50 dark:text-gray-900 bg-white border rounded-lg px-2 py-1 hover:shadow-lg'>
                    {darkTheme ? '💡 Light' : '🌙 Dark'}
                </button>
            </div>
            <Search/>
        </div>
    );
};

export default Navbar;