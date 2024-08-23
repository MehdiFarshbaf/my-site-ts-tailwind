import {Link} from "react-router-dom";
import {FC} from "react";

// Types
import {IProject} from "../../types/global";

interface IProps {
    project: IProject
}

const ProjectCard: FC<IProps> = ({project}) => {
    return (
        <Link to={project.path} state={{project}} key={project.id}
              className="group flex justify-center items-center text-white text-center bg-[#222] rounded-md px-6 py-7 transition-all duration-300 ease-in
              hover:bg-red">
            <div className="flex flex-col items-center justify-center transition-all duration-300 ease-in
            transform group-hover:scale-[1.05]">
                <img src={project.image} alt="project image" className="h-44 w-44 object-cover border-4 border-red rounded-full
                group-hover:border-white
                transition-all duration-300 ease-in"/>
                <p className="text-2xl font-medium mt-2.5 mb-2">{project.name}</p>
                <p>{project.description}</p>
            </div>
        </Link>
    )
}
export default ProjectCard