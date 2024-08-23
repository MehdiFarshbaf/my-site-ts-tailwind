import {useLocation} from "react-router-dom";
import ProjectLayout from "../../layouts/ProjectLayout/ProjectLayout";

const Protfolio = () => {

    // variables
    const location = useLocation()
    const {project} = location.state

    return (
        <ProjectLayout project={project}>
            <p className="description">این که سایت شخصی خودم هم هست. ی سایت خیلی خیلی ساده ولی به نظر خودم زیبا، که
                برای پیاده سازیش از html و css و React استفاده شده.</p>
            <p className="description">هر شخص دیگری میتونه در این سایت به معرفی خودش و مهارت هاش و نمونه کارهاش
                بپردازه. برای راحتی دوستان لینک git هم به زودی میذارم تا هر کسی که دوست داشته باشه و بخواهد ی نمونه
                ازش داشته باشه و به راحتی خودشو معرفی کنه</p>
            <p className="description"></p>
        </ProjectLayout>
    )
}
export default Protfolio