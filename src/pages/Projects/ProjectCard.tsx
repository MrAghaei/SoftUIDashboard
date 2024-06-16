import { HiDotsVertical } from "react-icons/hi";
function ProjectCard(){
    return(
        <div className='bg-white shadow-2xl rounded-2xl w-[450px] h-60 p-5'>
            <div className='flex flex-row items-center justify-between gap-5'>
                <div className='flex flex-row gap-5'>
                    <img src='/src/assets/logo-slack.svg' className='bg-primary-text rounded-2xl size-14'/>
                    <div className='flex gap-2 flex-col'>
                        <p className='font-semibold text-primary-text'>Slack Bot</p>
                        <div className="flex">
                            <img src="/src/assets/profile-image.jpg"
                                 className="size-5 rounded-full border-2 border-white -ml-2 first:ml-0"/>
                            <img src="/src/assets/profile-image.jpg"
                                 className="size-5 rounded-full border-2 border-white -ml-2"/>
                            <img src="/src/assets/profile-image.jpg"
                                 className="size-5 rounded-full border-2 border-white -ml-2"/>
                            <img src="/src/assets/profile-image.jpg"
                                 className="size-5 rounded-full border-2 border-white -ml-2"/>
                        </div>
                    </div>
                </div>
                <HiDotsVertical className='size-5 text-primary-text cursor-pointer'/>
            </div>
            <p className='text-secondary-text mt-5'>If everything I did failed - which it doesn't, I think that it
                actually succeeds.</p>
            <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mt-4"></div>
            <div className='flex flex-row justify-between mt-5'>
                <div className='flex flex-col'>
                    <p className='text-primary-text'>5</p>
                    <p className='text-secondary-text'>Participants</p>
                </div>
                <div className='flex flex-col'>
                    <p className='text-primary-text'>22.11.21</p>
                    <p className='text-secondary-text'>Due date</p>
                </div>
            </div>

        </div>
    )
}

export default ProjectCard