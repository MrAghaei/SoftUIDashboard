// src/components/Sidebar.jsx (or .tsx)
import React from 'react';
import { FaHome, FaUser, FaShoppingCart, FaSignInAlt } from 'react-icons/fa';
import SidebarSection from './SidebarSection';
import SidebarItem from './SidebarItem';

const Sidebar = () => {
    return (
        <div className="fixed bg-gray-100 p-8 w-72 h-full shadow-md text-secondary-text overflow-y-scroll">
            <div className="p-4 flex items-center space-x-3">
                <FaHome size={24} />
                <p className="text-xl font-semibold">Soft UI Dashboard</p>
            </div>
            <nav className="mt-4">
                <ul>
                    <SidebarSection icon={FaUser} title="Dashboards">
                        <SidebarItem title="Default" />
                        <SidebarItem title="Automotive" />
                        <SidebarItem title="Smart Home" />
                        <SidebarItem title="Virtual Reality" />
                        <SidebarItem title="CRM" />
                    </SidebarSection>

                    <p className='font-bold pb-1 pt-5'>PAGES</p>

                    <SidebarSection icon={FaUser} title="Pages">
                        <SidebarItem title="Profile" />
                        <SidebarItem title="Users" />
                        <SidebarItem title="Account" />
                        <SidebarItem title="Projects" />
                        <SidebarItem title="Pricing Page" />
                        <SidebarItem title="Messages" />
                        <SidebarItem title="RTL" />
                        <SidebarItem title="Widgets" />
                        <SidebarItem title="Charts" />
                        <SidebarItem title="Sweet Alerts" />
                        <SidebarItem title="Notifications" />
                    </SidebarSection>

                    <SidebarSection icon={FaUser} title="Applications">
                        <SidebarItem title="Kanban" />
                        <SidebarItem title="Wizard" />
                        <SidebarItem title="DataTables" />
                        <SidebarItem title="Calendar" />
                        <SidebarItem title="Analytics" />
                    </SidebarSection>

                    <SidebarSection icon={FaShoppingCart} title="Ecommerce">
                        <SidebarItem title="Overview" />
                        <SidebarItem title="Products" />
                        <SidebarItem title="Orders" />
                        <SidebarItem title="Referral" />
                    </SidebarSection>

                    <SidebarSection icon={FaSignInAlt} title="Authentication">
                        <SidebarItem title="Sign In" />
                        <SidebarItem title="Sign Up" />
                        <SidebarItem title="Reset Password" />
                        <SidebarItem title="Lock" />
                        <SidebarItem title="2-step Verification" />
                        <SidebarItem title="Error" />
                    </SidebarSection>
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;
