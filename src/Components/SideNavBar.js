import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Users, Briefcase, Repeat, Clock, CreditCard, Bell, Settings, HelpCircle, Menu, Search, User } from 'react-feather';

const SideNavBar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const location = useLocation();

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    if(!isSidebarOpen){
        return(
          <>
           <div className='fixed custom-gray-green -top-3 md:top-0 left-0 p-2 flex rounded-md my-2 items-start list-none h-[9%] md:h-screen pb-10 md:pb-0'>
             <div className='flex flex-row-reverse md:flex-col justify-between items-center mt-1 md:mt-5 text-white w-screen md:w-16'>

                <img src='https://upload.wikimedia.org/wikipedia/commons/5/59/Hamburger_icon_white.svg' alt='hamburger' 
                className='w-6 mr-5 md:mr-2 cursor-pointer md:pb-2 pr-[3px]' onClick={() => toggleSidebar()} />

               <div className=' flex flex-row md:flex-col '>
               <NavItem className='text-white' to="/" currentPath={location.pathname} icon={<Home size={20} />}></NavItem>
                <NavItem to="/history" currentPath={location.pathname} icon={<Clock size={20} />}></NavItem>
                <NavItem to="/wallet" currentPath={location.pathname} icon={<CreditCard size={20} />}></NavItem>
                            
                <NavItem to="/account" currentPath={location.pathname} icon={<User size={20} />}></NavItem>
               </div>

            </div>
           </div>
           <div className='  mx-0 md:mx-12 h-screen'>
            
           </div>
        </>
        )
    }

    return (
        <>
        <div className=" fixed flex flex-col h-[70px] md:h-[112vh] custom-gray-green text-white w-screen md:w-64  rounded-md my-0 md:my-2">
            <div className='flex justify-between mt-0 md:mt-5'>
            <img src='https://carboncell.io/assets/img/logo2.png' alt='app-logo' className=' w-[29%] md:w-2/5 mt-4 md:mt-1 mx-3' />
                <img src='https://upload.wikimedia.org/wikipedia/commons/5/59/Hamburger_icon_white.svg' alt='hamburger' className='w-6 cursor-pointer m-2 md:m-0 mr-3 pr-[3px]' onClick={() => toggleSidebar()} />
            </div>
            

                <div>
                    <div className="items-center justify-between h-20  hidden md:flex">
                        <button
                            className="text-white p-3 focus:outline-none md:hidden"
                            onClick={toggleSidebar}
                        >
                            <Menu size={24} />
                        </button>
                       
                        <div className='w-11/12 flex bg-gray-green px-1 m-2 mb-0 rounded-md justify-between'>
                            <Search size={20} className="m-2"/>
                            <input className="hidden md:block bg-gray-green w-full rounded-full text-white outline-none hover:outline-none" placeholder='Search' />
                        </div>
                    </div>
                    

                    <div className="flex flex-col flex-grow h-full mb-3">
                        <ul className=" hidden md:flex flex-col justify-between h-[93%] gap-2 mt-4 text-white">
                            <div>
                                <NavItem className='text-white' to="/" currentPath={location.pathname} icon={<Home size={20} />}>Home</NavItem>
                                <NavItem to="/organization" currentPath={location.pathname} icon={<Users size={20} />}>Organization</NavItem>
                                <NavItem to="/assets" currentPath={location.pathname} icon={<Briefcase size={20} />}>Assets</NavItem>
                                <NavItem to="/trade" currentPath={location.pathname} icon={<Repeat size={20} />}>Trade</NavItem>
                                <NavItem to="/history" currentPath={location.pathname} icon={<Clock size={20} />}>History</NavItem>
                                <NavItem to="/wallet" currentPath={location.pathname} icon={<CreditCard size={20} />}>Wallet</NavItem>
                            </div>
                            <div className=' flex flex-col justify-around' >
                               <div className='flex flex-col justify-start '>
                               <NavItem to="/notifications" currentPath={location.pathname} icon={<Bell size={20} />}>Notifications</NavItem>
                                <NavItem to="/support" currentPath={location.pathname} icon={<HelpCircle size={20} />}>Support</NavItem>
                                <NavItem to="/settings" currentPath={location.pathname} icon={<Settings size={20} />}>Settings</NavItem>
                              
                               </div>

                               <div  className=' bg-gray-green mx-2 rounded-md justify-end'>
                               <NavItem to="/account" currentPath={location.pathname} icon={<User size={20} />}>Aatharv Koundinya</NavItem>

                               </div>
                            </div>
                        </ul>
                    </div>
                </div>
                
        </div>

        <div className=' h-screen mx-0 md:mx-32'>
            
        </div>
        </>
    );
}


const NavItem = ({ to, currentPath, children, icon }) => {
    const isActive = currentPath === to;
    const baseClasses = 'flex items-center justify-between px-4 py-2 transition-colors duration-200';

    return (
        <li>
            <Link
                to={to}
                className={`${baseClasses} ${isActive ? 'text-green-500' : 'text-white'} hover:text-green-500 mx-2 my-1`}
            >
                <div className="flex items-center">
                    {icon && <div className="mr-2">{icon}</div>}
                    <span>{children}</span>
                </div>
            </Link>
        </li>
    );
};

export default SideNavBar;
