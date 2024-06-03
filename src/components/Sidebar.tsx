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
        <div className="fixed w-64 h-full bg-white shadow-md">
            <div className="p-4 flex items-center space-x-3">
                <FaHome size={24} />
                <span className="text-xl font-semibold">Soft UI Dashboard PRO</span>
            </div>
            <nav className="mt-4">
                <ul>
                    <li className="p-4 hover:bg-gray-100 flex items-center space-x-2">
                        <FaHome />
                        <span>Dashboards</span>
                    </li>

                    <li className="p-4 hover:bg-gray-100 cursor-pointer flex items-center justify-between" onClick={() => setIsPagesOpen(!isPagesOpen)}>
                        <div className="flex items-center space-x-2">
                            <FaUser />
                            <span>Pages</span>
                        </div>
                        {isPagesOpen ? <FiChevronUp /> : <FiChevronDown />}
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

                    <li className="p-4 hover:bg-gray-100 cursor-pointer flex items-center justify-between" onClick={() => setIsApplicationsOpen(!isApplicationsOpen)}>
                        <div className="flex items-center space-x-2">
                            <FaUser />
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
