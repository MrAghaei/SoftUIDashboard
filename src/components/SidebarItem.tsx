// src/components/SidebarItem.jsx (or .tsx)
import React from 'react';

const SidebarItem = ({ title }) => (
    <li className="p-2 hover:bg-gray-100 transition-colors duration-300 ease-in-out">
        {title}
    </li>
);

export default SidebarItem;
