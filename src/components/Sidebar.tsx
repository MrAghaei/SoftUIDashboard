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
    const PagesClassNames = "bg-white shadow-2xl rounded-2xl"

    return (
        <div className="fixed bg-gray-100 p-8 w-72 h-full shadow-md text-secondary-text overflow-y-scroll z-30">
            <div className="p-4 flex items-center space-x-3">
                <FaHome size={24} />
                <p className="text-xl font-semibold">Soft UI Dashboard</p>
            </div>
            <nav className="mt-4">
                <ul>
                    <SidebarSection
                        icon={FaUser}
                        data={{
                            title: 'Dashboards',
                            isInitiallyOpen: false,
                            className: '',
                            children: <SidebarItem items={DashboardItems} />
                        }}
                    />

                    <p className='font-bold pb-1 pt-5'>PAGES</p>

                    <SidebarSection
                        icon={FaUser}
                        data={{
                            title: 'Pages',
                            isInitiallyOpen: false,
                            className: PagesClassNames,
                            children: <SidebarItem items={PagesItems} />
                        }}
                    />

                    <SidebarSection
                        icon={FaUser}
                        data={{
                            title: 'Applications',
                            isInitiallyOpen: false,
                            className: '',
                            children: <SidebarItem items={ApplicationItems} />
                        }}
                    />

                    <SidebarSection
                        icon={FaShoppingCart}
                        data={{
                            title: 'Ecommerce',
                            isInitiallyOpen: false,
                            className: '',
                            children: <SidebarItem items={EcommerceItems} />
                        }}
                    />

                    <SidebarSection
                        icon={FaSignInAlt}
                        data={{
                            title: 'Authentication',
                            isInitiallyOpen: false,
                            className: '',
                            children: <SidebarItem items={AuthenticationItems} />
                        }}
                    />
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;
