import {useLocation} from "react-router-dom";
import ProjectLayout from "../../layouts/ProjectLayout/ProjectLayout";

const Salmode = () => {

    // variables
    const location = useLocation()
    const {project} = location.state

    return (
        <ProjectLayout project={project}>
            <p className="description">ی پروژه ی فروشگاهی برای لباس هستش که خودم خوشم میاد ازش.</p>
            <p className="description">برای پیاده سازیش حسابی از Mantine استفاده کردم، از modal و checkbox و radio
                button بگیر تا خیلی از موارد دیگه، همگی از Mantine استفاده کردم. خیلی انعطاف پذیر هستش طوری که تونستم
                رنگ check box و radio هارو مناسب تم برنامه کنم.</p>
            <p className="description">دارم تلاش میکنم تا این سایت را کامل کنم یعنی بک اند هم بزنم و پنل ادمین هم اماده
                کنم.</p>
            <p className="description"></p>
        </ProjectLayout>
    )
}
export default Salmode