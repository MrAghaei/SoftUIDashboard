import { FaBoxOpen } from "react-icons/fa6";
import { BiSolidMessageSquareDetail } from "react-icons/bi";
import { IoIosSettings } from "react-icons/io";
import {useState} from "react";



function Profilebar(){
    const [profileBarToggle, setProfileBarToggle] = useState('1')
    function whichProfileBarIconsIsActive(): string{
        switch (profileBarToggle) {
            case '1':
                return "translate-x-0";
            case '2':
                return "translate-x-[130px]";
            case '3':
                return "translate-x-[280px]";
            default:
                return "1";
        }
    }
    return(
        <div className='w-full p-4 pr-40 pl-96 flex flex-col size relative items-center text-primary-text z-20'>
            <div className='h-80 w-full rounded-3xl bg-gradient-to-r from-primary-light to-primary-dark'></div>
            <div className='w-11/12 h-32 bg-white bg-opacity-70 backdrop-blur-lg rounded-3xl shadow-2xl -translate-y-16 p-5 flex items-center justify-between'>
                <div className='flex gap-5 items-center'>
                    <div>
                        <img src='/src/assets/profile-image.jpg' className='size-20 rounded-2xl'/>
                    </div>
                    <div>
                        <p className='font-bold'>Mohammad Aghaei</p>
                        <p className='font-bold'>CEO / Co-founder</p>
                    </div>
                </div>
                <div className='flex gap-10 relative pt-20 pb-20 '>
                    <div className='flex cursor-pointer gap-2 items-center text-xl' onClick={()=>setProfileBarToggle('1')}>
                        <FaBoxOpen/>
                        <p>App</p>
                    </div>
                    <div className='flex cursor-pointer gap-2 items-center text-xl' onClick={()=>setProfileBarToggle('2')}>
                        <BiSolidMessageSquareDetail />
                        <p>Messages</p>
                    </div>
                    <div className='flex cursor-pointer gap-2 items-center text-xl' onClick={()=>setProfileBarToggle('3')}>
                        <IoIosSettings />
                        <p>Settings</p>
                    </div>
                    <div>
                        <span className={`absolute bg-white w-32 h-10 -left-8 top-[77px] rounded-2xl shadow-2xl -z-10 transition-transform ${whichProfileBarIconsIsActive()}`}></span>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Profilebar