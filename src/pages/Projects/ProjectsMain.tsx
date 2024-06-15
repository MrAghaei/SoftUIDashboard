import Sidebar from "../../components/Sidebar.tsx";
import Profilebar from "../../components/Profilebar.tsx";
import ProjectCard from "./ProjectCard.tsx";

function ProjectsMain(){
    return(
        <div className='grid'>
            <Sidebar/>
            <Profilebar/>
            <div className='flex flex-col gap-2 items-start pl-96'>
                <p className='text-2xl text-primary-text'>Some of Our Awesome Projects</p>
                <p className='text-secondary-text'>This is the paragraph where you can write more details about your projects. Keep you user engaged by providing meaningful information.</p>
            </div>
            <div className='grid gap-5 grid-cols-3 grid-rows-2 pl-96 mt-10 mb-10'>
                <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/>
            </div>
        </div>



    )
}
export default ProjectsMain