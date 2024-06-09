// src/components/Sidebar.jsx (or Sidebar.tsx)
import React, { useState } from 'react';
import { FaHome, FaUser, FaShoppingCart, FaSignInAlt } from 'react-icons/fa';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

const Sidebar = () => {
    const [isPagesOpen, setIsPagesOpen] = useState(false);
    const [isApplicationsOpen, setIsApplicationsOpen] = useState(false);
    const [isEcommerceOpen, setIsEcommerceOpen] = useState(false);
    const [isAuthOpen, setIsAuthOpen] = useState(false);
    const [isDashboardsOpen, setIsDashbaordsOpen] = useState(false);


    return (
        <div className="fixed p-8 w-72 h-full bg-white shadow-md text-secondary-text">
            <div className="p-4 flex items-center space-x-3">
                <FaHome size={24} />
                <p className="text-xl font-semibold">Soft UI Dashboard</p>
            </div>
            <nav className="mt-4">
                <ul>
                    <li className="p-4 hover:bg-gray-100 cursor-pointer flex items-center justify-between"
                        onClick={() => setIsDashbaordsOpen(!isDashboardsOpen)}>
                        <div className="flex items-center space-x-2">
                            <FaUser/>
                            <span>Dashboards</span>
                        </div>
                        {isPagesOpen ? <FiChevronUp/> : <FiChevronDown/>}
                    </li>
                    {isDashboardsOpen && <ul className="pl-8">
                        <li className="p-2 hover:bg-gray-100">Default</li>
                        <li className="p-2 hover:bg-gray-100">Automotive </li>
                        <li className="p-2 hover:bg-gray-100">Smart Home</li>
                        <li className="p-2 hover:bg-gray-100">Virtual Reality</li>
                        <li className="p-2 hover:bg-gray-100">CRM</li>
                    </ul>}
                    <p className='font-bold pb-1 pt-5'>PAGES</p>

                    <li className="p-4 cursor-pointer flex items-center justify-between bg-white shadow-2xl rounded-2xl"
                        onClick={() => setIsPagesOpen(!isPagesOpen)}>
                        <div className="flex items-center space-x-2">
                            <FaUser/>
                            <span>Pages</span>
                        </div>
                        {isPagesOpen ? <FiChevronUp/> : <FiChevronDown/>}
                    </li>
                    {isPagesOpen && (
                        <ul className="pl-8">
                            <li className="p-2 hover:bg-gray-100">Profile</li>
                            <li className="p-2 hover:bg-gray-100">Users</li>
                            <li className="p-2 hover:bg-gray-100">Account</li>
                            <li className="p-2 hover:bg-gray-100">Projects</li>
                            <li className="p-2 hover:bg-gray-100">Pricing Page</li>
                            <li className="p-2 hover:bg-gray-100">Messages</li>
                            <li className="p-2 hover:bg-gray-100">RTL</li>
                            <li className="p-2 hover:bg-gray-100">Widgets</li>
                            <li className="p-2 hover:bg-gray-100">Charts</li>
                            <li className="p-2 hover:bg-gray-100">Sweet Alerts</li>
                            <li className="p-2 hover:bg-gray-100">Notifications</li>
                        </ul>
                    )}

                    <li className="p-4 cursor-pointer flex items-center justify-between" onClick={() => setIsApplicationsOpen(!isApplicationsOpen)}>
                        <div className="flex items-center space-x-2">
                            <div className='bg-white rounded p-2 shadow-2xl'>
                                <FaUser />
                            </div>
                            <span>Applications</span>
                        </div>
                        {isApplicationsOpen ? <FiChevronUp /> : <FiChevronDown />}
                    </li>
                    {isApplicationsOpen && (
                        <ul className="pl-8">
                            {/* Add applications submenu items here */}
                            <li className="p-2 hover:bg-gray-100">Item 1</li>
                            <li className="p-2 hover:bg-gray-100">Item 2</li>
                        </ul>
                    )}

                    <li className="p-4 hover:bg-gray-100 cursor-pointer flex items-center justify-between" onClick={() => setIsEcommerceOpen(!isEcommerceOpen)}>
                        <div className="flex items-center space-x-2">
                            <FaShoppingCart />
                            <span>Ecommerce</span>
                        </div>
                        {isEcommerceOpen ? <FiChevronUp /> : <FiChevronDown />}
                    </li>
                    {isEcommerceOpen && (
                        <ul className="pl-8">
                            {/* Add ecommerce submenu items here */}
                            <li className="p-2 hover:bg-gray-100">Item 1</li>
                            <li className="p-2 hover:bg-gray-100">Item 2</li>
                        </ul>
                    )}

                    <li className="p-4 hover:bg-gray-100 cursor-pointer flex items-center justify-between" onClick={() => setIsAuthOpen(!isAuthOpen)}>
                        <div className="flex items-center space-x-2">
                            <FaSignInAlt />
                            <span>Authentication</span>
                        </div>
                        {isAuthOpen ? <FiChevronUp /> : <FiChevronDown />}
                    </li>
                    {isAuthOpen && (
                        <ul className="pl-8">
                            {/* Add authentication submenu items here */}
                            <li className="p-2 hover:bg-gray-100">Sign In</li>
                            <li className="p-2 hover:bg-gray-100">Sign Up</li>
                        </ul>
                    )}
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;
