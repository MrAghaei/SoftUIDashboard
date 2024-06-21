import React from "react";

interface SideBarSubItemInputDataModel {
    items: string[];
}
interface SideBarSubItemInputModel {
    data: SideBarSubItemInputDataModel;
}
const SideBarSubItem: React.FC<SideBarSubItemInputModel> = ({ data }) => {
    return (
        <div >
            <ul className="block cursor-pointer p-2 transition-colors duration-300 ease-in-out">
                {data.items}
            </ul>
        </div>
    );
};

export default SideBarSubItem;
