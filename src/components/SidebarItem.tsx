// src/components/SidebarItem.jsx (or .tsx)
import React from 'react';

const SidebarItem = ({items} ) => (
    items.map(item=> (
        <li className="p-2 hover:bg-gray-100 transition-colors duration-300 ease-in-out">
            {item}
        </li>
    ))

);

export default SidebarItem;
