
function ProjectCard(){
    return(
        <div className='bg-white shadow-2xl rounded-2xl w-96 h-60 p-5'>
            <div className='flex flex-row items-center gap-5'>
                <img src='/src/assets/logo-slack.svg' className='bg-primary-text rounded-2xl size-14'/>
                <div className='flex gap-2 flex-col'>
                    <p className='text-2xl text-primary-text'>Slack Bot</p>
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
        </div>
    )
}

export default ProjectCard