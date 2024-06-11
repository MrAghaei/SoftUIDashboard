import { FaBoxOpen } from "react-icons/fa6";
import { BiSolidMessageSquareDetail } from "react-icons/bi";
import { IoIosSettings } from "react-icons/io";



function Profilebar(){
    return(
        <div className='w-full p-4 pr-40 pl-96 flex flex-col size relative items-center text-primary-text'>
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
                <div className='flex gap-10'>
                    <div className='flex cursor-pointer gap-2 items-center text-xl'>
                        <FaBoxOpen/>
                        <p>App</p>
                    </div>
                    <div className='flex cursor-pointer gap-2 items-center text-xl'>
                        <BiSolidMessageSquareDetail />
                        <p>Messages</p>
                    </div>
                    <div className='flex cursor-pointer gap-2 items-center text-xl'>
                        <IoIosSettings />
                        <p>Settings</p>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Profilebar