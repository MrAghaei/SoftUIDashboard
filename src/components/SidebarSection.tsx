import React, { useState, ReactNode, FC } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

interface SidebarSectionInputDataModel {
    className?: string;
    title: string;
    children: ReactNode;
    isInitiallyOpen: boolean;
}

interface SidebarSectionInputModel {
    data: SidebarSectionInputDataModel;
    icon: React.ElementType;
}

const SidebarSection: FC<SidebarSectionInputModel> = ({ data, icon: Icon }) => {
    const [isOpen, setIsOpen] = useState(data.isInitiallyOpen);

    return (
        <>
            <li
                className={`p-4 cursor-pointer flex items-center justify-between transition-colors duration-300 ease-in-out ${data.className}`}
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="flex items-center space-x-2">
                    <Icon />
                    <span>{data.title}</span>
                </div>
                {isOpen ? <FiChevronUp /> : <FiChevronDown />}
            </li>
            <ul className={`pl-8 overflow-hidden transition-max-height duration-300 ease-in-out ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
                {data.children}
            </ul>
        </>
    );
};

export default SidebarSection;
