import MyProjects from "../../components/home/MyProjects/MyProjects";
import Section from "../../components/Section/Section";
import {FC, ReactElement, ReactNode} from "react";

// Types
import {IProject} from "../../types/global";
import ImageProject from "../../components/ImageProject/ImageProject";
import LinkToSite from "../../components/LinkToSite/LinkToSite";

interface IProps {
    children: ReactElement | ReactNode,
    project: IProject
}

const ProjectLayout: FC<IProps> = ({children, project}) => {
    return (
        <>
            <Section title={project?.name} subTitle={project?.caption}>
                <ImageProject image={project.image}/>
                {project.descriptionLink && <LinkToSite address={project.link} caption={project.descriptionLink}/>}
                {children}
            </Section>
            <MyProjects/>
        </>
    )
}
export default ProjectLayout