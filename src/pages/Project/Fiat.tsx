import {useLocation} from "react-router-dom";
import ProjectLayout from "../../layouts/ProjectLayout/ProjectLayout";

const Fiat = () => {

    // variables
    const location = useLocation()
    const {project} = location.state

    return (
        <ProjectLayout project={project}>
            <p className="description">دومین کاری که توو شرکت ویستا دست گرفتم صرافی ثانیه بود. اولین بارم بود که
                میخواستم ی کار دو زبانه بزنم. این صرافی واقع در کشور استرالیا هستش. متاسفانه این پروژه به مشکل برخورد و
                نشد که کامل باشه (بیشتر بخاطر بک اند)</p>
        </ProjectLayout>)
}
export default Fiat