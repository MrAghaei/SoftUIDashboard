// src/components/SidebarSection.jsx (or .tsx)
import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

const SidebarSection = ({ icon: Icon, title, children, isInitiallyOpen = false, }) => {
    const [isOpen, setIsOpen] = useState(isInitiallyOpen);

    return (
        <>
            <li
                className="p-4 cursor-pointer flex items-center justify-between bg-white shadow-2xl rounded-2xl transition-colors duration-300 ease-in-out"
                onClick={() => { setIsOpen(!isOpen)}}
            >
                <div className="flex items-center space-x-2">
                    <Icon />
                    <span>{title}</span>
                </div>
                {isOpen ? <FiChevronUp /> : <FiChevronDown />}
            </li>
            <ul className={`pl-8 overflow-hidden transition-max-height duration-300 ease-in-out ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
                {children}
            </ul>
        </>
    );
};

export default SidebarSection;
