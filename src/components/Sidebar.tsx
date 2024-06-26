import React from 'react';
import { FaHome, FaUser, FaShoppingCart, FaSignInAlt } from 'react-icons/fa';
import SidebarSection from './SidebarSection';
import SidebarItem from './SidebarItem';
import SideBarSubItem from "./SideBarSubItem.tsx";

const Sidebar = () => {
    const DashboardItems: string[] = ['Default','Automotive', 'Smart Home', 'Virtual Reality', 'CRM'];
    const PagesItems: string[] = ['Profile','Users', 'Account', 'Projects', 'Pricing Page', 'Messages', 'RTL', 'Widgets', 'Charts', 'Sweet Alerts', 'Notifications'];
    const ApplicationItems: string[] = ['Kanban','Wizard', 'DataTables', 'Calendar', 'Analytics'];
    const EcommerceItems: string[] = ['Overview','Products', 'Orders', 'Referral'];
    const AuthenticationItems: string[] = ['Sign In','Sign Up', 'Reset Password', 'Lock', '2-step Verification', 'Error'];
    const PagesClassNames = "bg-white shadow-2xl rounded-2xl"

    //subitems
    const ProfileSubItems: string[] = ['Profile Overview','Teams', 'All Projects'];
    const UsersSubItems: string[] = ['Reports','New User'];

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
                            children: <SidebarItem data={{items: DashboardItems, children: null}} />
                        }}
                    />

                    <p className='font-bold pb-1 pt-5'>PAGES</p>

                    <SidebarSection
                        icon={FaUser}
                        data={{
                            title: 'Pages',
                            isInitiallyOpen: false,
                            className: PagesClassNames,
                            children: <SidebarItem data={{items: PagesItems, children: <SideBarSubItem data={{items: ProfileSubItems}}/>}} />
                        }}
                    />

                    <SidebarSection
                        icon={FaUser}
                        data={{
                            title: 'Applications',
                            isInitiallyOpen: false,
                            className: '',
                            children: <SidebarItem data={{items: ApplicationItems, children: <SideBarSubItem data={{items: UsersSubItems}}/>}} />
                        }}
                    />

                    <SidebarSection
                        icon={FaShoppingCart}
                        data={{
                            title: 'Ecommerce',
                            isInitiallyOpen: false,
                            className: '',
                            children: <SidebarItem data={{items: EcommerceItems, children: <SideBarSubItem data={{items: ProfileSubItems}}/>}} />
                        }}
                    />

                    <SidebarSection
                        icon={FaSignInAlt}
                        data={{
                            title: 'Authentication',
                            isInitiallyOpen: false,
                            className: '',
                            children: <SidebarItem data={{items: AuthenticationItems, children: <SideBarSubItem data={{items: ProfileSubItems}}/>}} />
                        }}
                    />
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;
