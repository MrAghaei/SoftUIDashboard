import React, { ReactNode, useState } from 'react';

interface SidebarItemInputDataModel {
    items: string[];
    children: ReactNode;
}

interface SidebarItemInputModel {
    data: SidebarItemInputDataModel;
}

const SidebarItem: React.FC<SidebarItemInputModel> = ({ data }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {data.items.map(item => (
                <div key={item}>
                    <ul
                        className="block cursor-pointer p-2 transition-colors duration-300 ease-in-out"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {item}
                    </ul>
                    <ul className={`pl-8 overflow-hidden transition-max-height duration-300 ease-in-out ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
                        {data.children}
                    </ul>
                </div>

            ))}
        </>
    );
};

export default SidebarItem;
