import AboutMe from "../../components/home/AboutMe/AboutMe";
import MyServices from "../../components/home/MyServices/MyServices";
import MySkills from "../../components/home/MySkills/MySkills";
import ContactMe from "../../components/home/ContactMe/ContactMe";
import MyProjects from "../../components/home/MyProjects/MyProjects";

const Home = () => {
    return (
        <>
            <AboutMe/>
            <MyServices/>
            <MySkills/>
            <MyProjects/>
            <ContactMe/>
        </>
    )
}
export default Home