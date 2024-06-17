// src/components/SidebarItem.jsx (or .tsx)
import React, {useState} from 'react';


const SidebarItem = ({items} ) => {
    const [isOpen, setIsOpen] = useState(false);

    items.map(item=> (
        <ul key={item} className="block cursor-pointer p-2 transition-colors duration-300 ease-in-out">
            {item}
            <li className={`pl-8 overflow-hidden transition-max-height duration-300 ease-in-out ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
                {item.children}
            </li>
        </ul>
    ))


}
export default SidebarItem;
