// src/components/Sidebar.jsx (or .tsx)
import React from 'react';
import { FaHome, FaUser, FaShoppingCart, FaSignInAlt } from 'react-icons/fa';
import SidebarSection from './SidebarSection';
import SidebarItem from './SidebarItem';

const Sidebar = () => {
    const DashboardItems: string[] = ['Default','Automotive', 'Smart Home', 'Virtual Reality', 'CRM'];
    const PagesItems: string[] = ['Profile','Users', 'Account', 'Projects', 'Pricing Page', 'Messages', 'RTL', 'Widgets', 'Charts', 'Sweet Alerts', 'Notifications'];
    const ApplicationItems: string[] = ['Kanban','Wizard', 'DataTables', 'Calendar', 'Analytics'];
    const EcommerceItems: string[] = ['Overview','Products', 'Orders', 'Referral'];
    const AuthenticationItems: string[] = ['Sign In','Sign Up', 'Reset Password', 'Lock', '2-step Verification', 'Error'];
    return (
        <div className="fixed bg-gray-100 p-8 w-72 h-full shadow-md text-secondary-text overflow-y-scroll z-30">
            <div className="p-4 flex items-center space-x-3">
                <FaHome size={24} />
                <p className="text-xl font-semibold">Soft UI Dashboard</p>
            </div>
            <nav className="mt-4">
                <ul>
                    <SidebarSection icon={FaUser} title="Dashboards">
                        <SidebarItem items={DashboardItems} />
                    </SidebarSection>

                    <p className='font-bold pb-1 pt-5'>PAGES</p>

                    <SidebarSection icon={FaUser} title="Pages">
                        <SidebarItem items={PagesItems} />
                    </SidebarSection>

                    <SidebarSection icon={FaUser} title="Applications">
                        <SidebarItem items={ApplicationItems} />
                    </SidebarSection>

                    <SidebarSection icon={FaShoppingCart} title="Ecommerce">
                        <SidebarItem items={EcommerceItems} />
                    </SidebarSection>

                    <SidebarSection icon={FaSignInAlt} title="Authentication">
                        <SidebarItem items={AuthenticationItems} />
                    </SidebarSection>
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;
