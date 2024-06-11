// src/components/Sidebar.jsx (or Sidebar.tsx)
import React, { useState } from 'react';
import { FaHome, FaUser, FaShoppingCart, FaSignInAlt } from 'react-icons/fa';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

const Sidebar = () => {
    const [isPagesOpen, setIsPagesOpen] = useState(false);
    const [isApplicationsOpen, setIsApplicationsOpen] = useState(false);
    const [isEcommerceOpen, setIsEcommerceOpen] = useState(false);
    const [isAuthOpen, setIsAuthOpen] = useState(false);

    return (
        <div className="fixed bg-gray-100 p-8 w-72 h-full shadow-md text-secondary-text overflow-y-scroll">
            <div className="p-4 flex items-center space-x-3">
                <FaHome size={24} />
                <p className="text-xl font-semibold">Soft UI Dashboard</p>
            </div>
            <nav className="mt-4">
                <ul>
                    <li className="p-4 hover:bg-gray-100 cursor-pointer flex items-center justify-between transition-colors duration-300 ease-in-out"
                        onClick={() => setIsDashboardsOpen(!isDashboardsOpen)}>
                        <div className="flex items-center space-x-2">
                            <FaUser />
                            <span>Dashboards</span>
                        </div>
                        {isDashboardsOpen ? <FiChevronUp /> : <FiChevronDown />}
                    </li>
                    <ul className={`pl-8 overflow-hidden transition-max-height duration-300 ease-in-out ${isDashboardsOpen ? 'max-h-screen' : 'max-h-0'}`}>
                        <li className="p-2 hover:bg-gray-100 transition-colors duration-300 ease-in-out">Default</li>
                        <li className="p-2 hover:bg-gray-100 transition-colors duration-300 ease-in-out">Automotive</li>
                        <li className="p-2 hover:bg-gray-100 transition-colors duration-300 ease-in-out">Smart Home</li>
                        <li className="p-2 hover:bg-gray-100 transition-colors duration-300 ease-in-out">Virtual Reality</li>
                        <li className="p-2 hover:bg-gray-100 transition-colors duration-300 ease-in-out">CRM</li>
                    </ul>
                    <p className='font-bold pb-1 pt-5'>PAGES</p>

                    <li className="p-4 cursor-pointer flex items-center justify-between bg-white shadow-2xl rounded-2xl transition-colors duration-300 ease-in-out"
                        onClick={() => setIsPagesOpen(!isPagesOpen)}>
                        <div className="flex items-center space-x-2">
                            <FaUser />
                            <span>Pages</span>
                        </div>
                        {isPagesOpen ? <FiChevronUp /> : <FiChevronDown />}
                    </li>
                    <ul className={`pl-8 overflow-hidden transition-max-height duration-300 ease-in-out ${isPagesOpen ? 'max-h-screen' : 'max-h-0'}`}>
                        <li className="p-2 hover:bg-gray-100 transition-colors duration-300 ease-in-out">Profile</li>
                        <li className="p-2 hover:bg-gray-100 transition-colors duration-300 ease-in-out">Users</li>
                        <li className="p-2 hover:bg-gray-100 transition-colors duration-300 ease-in-out">Account</li>
                        <li className="p-2 hover:bg-gray-100 transition-colors duration-300 ease-in-out">Projects</li>
                        <li className="p-2 hover:bg-gray-100 transition-colors duration-300 ease-in-out">Pricing Page</li>
                        <li className="p-2 hover:bg-gray-100 transition-colors duration-300 ease-in-out">Messages</li>
                        <li className="p-2 hover:bg-gray-100 transition-colors duration-300 ease-in-out">RTL</li>
                        <li className="p-2 hover:bg-gray-100 transition-colors duration-300 ease-in-out">Widgets</li>
                        <li className="p-2 hover:bg-gray-100 transition-colors duration-300 ease-in-out">Charts</li>
                        <li className="p-2 hover:bg-gray-100 transition-colors duration-300 ease-in-out">Sweet Alerts</li>
                        <li className="p-2 hover:bg-gray-100 transition-colors duration-300 ease-in-out">Notifications</li>
                    </ul>

                    <li className="p-4 cursor-pointer flex items-center justify-between transition-colors duration-300 ease-in-out" onClick={() => setIsApplicationsOpen(!isApplicationsOpen)}>
                        <div className="flex items-center space-x-2">
                            <div className='bg-white rounded p-2 shadow-2xl'>
                                <FaUser />
                            </div>
                            <span>Applications</span>
                        </div>
                        {isApplicationsOpen ? <FiChevronUp /> : <FiChevronDown />}
                    </li>
                    <ul className={`pl-8 overflow-hidden transition-max-height duration-300 ease-in-out ${isApplicationsOpen ? 'max-h-screen' : 'max-h-0'}`}>
                        <li className="p-2 hover:bg-gray-100 transition-colors duration-300 ease-in-out">Kanban</li>
                        <li className="p-2 hover:bg-gray-100 transition-colors duration-300 ease-in-out">Wizard</li>
                        <li className="p-2 hover:bg-gray-100 transition-colors duration-300 ease-in-out">DataTables</li>
                        <li className="p-2 hover:bg-gray-100 transition-colors duration-300 ease-in-out">Calendar</li>
                        <li className="p-2 hover:bg-gray-100 transition-colors duration-300 ease-in-out">Analytics</li>
                    </ul>

                    <li className="p-4 cursor-pointer flex items-center justify-between transition-colors duration-300 ease-in-out" onClick={() => setIsEcommerceOpen(!isEcommerceOpen)}>
                        <div className="flex items-center space-x-2">
                            <div className='bg-white rounded p-2 shadow-2xl'>
                                <FaShoppingCart />
                            </div>
                            <span>Ecommerce</span>
                        </div>
                        {isEcommerceOpen ? <FiChevronUp /> : <FiChevronDown />}
                    </li>
                    <ul className={`pl-8 overflow-hidden transition-max-height duration-300 ease-in-out ${isEcommerceOpen ? 'max-h-screen' : 'max-h-0'}`}>
                        <li className="p-2 hover:bg-gray-100 transition-colors duration-300 ease-in-out">Overview</li>
                        <li className="p-2 hover:bg-gray-100 transition-colors duration-300 ease-in-out">Products</li>
                        <li className="p-2 hover:bg-gray-100 transition-colors duration-300 ease-in-out">Orders</li>
                        <li className="p-2 hover:bg-gray-100 transition-colors duration-300 ease-in-out">Referral</li>
                    </ul>

                    <li className="p-4 hover:bg-gray-100 cursor-pointer flex items-center justify-between transition-colors duration-300 ease-in-out" onClick={() => setIsAuthOpen(!isAuthOpen)}>
                        <div className="flex items-center space-x-2">
                            <div className='bg-white rounded p-2 shadow-2xl'>
                                <FaSignInAlt />
                            </div>
                            <span>Authentication</span>
                        </div>
                        {isAuthOpen ? <FiChevronUp /> : <FiChevronDown />}
                    </li>
                    <ul className={`pl-8 overflow-hidden transition-max-height duration-300 ease-in-out ${isAuthOpen ? 'max-h-screen' : 'max-h-0'}`}>
                        <li className="p-2 hover:bg-gray-100 transition-colors duration-300 ease-in-out">Sign In</li>
                        <li className="p-2 hover:bg-gray-100 transition-colors duration-300 ease-in-out">Sign Up</li>
                        <li className="p-2 hover:bg-gray-100 transition-colors duration-300 ease-in-out">Reset Password</li>
                        <li className="p-2 hover:bg-gray-100 transition-colors duration-300 ease-in-out">Lock</li>
                        <li className="p-2 hover:bg-gray-100 transition-colors duration-300 ease-in-out">2-step Verification</li>
                        <li className="p-2 hover:bg-gray-100 transition-colors duration-300 ease-in-out">Error</li>
                    </ul>
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;
