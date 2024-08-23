import {useLocation} from "react-router-dom";

import ProjectLayout from "../../layouts/ProjectLayout/ProjectLayout";

const EmzaCafe = () => {

    // variables
    const location = useLocation()
    const {project} = location.state

    return (
        <ProjectLayout project={project}>
            <p className="description">
                واقعا دوست داشتم فرانت این پروژه رو به من بدن، وقتی استارت این کارو زدم خیلی خوشحال بود. پر از چالش های
                جالب بود برام
            </p>
            <p className="description">ی سایت فروشگاهی برای محصولات مربوط به قهوه، تعداد شعبه هست که با انتخاب هر کدوم
                میشه محصولات اون شعبه رو دید. یا سفارش قهوه داد. یکی از نکات جالبش این بود که وقتی میخواستی قهوه سفارش
                بدی میتونی ی جمله ای رو انتخاب کنی که روی لیوانت چاپ بشه.</p>
            <p className="description">
                برای پیاده سازی این کار از html و css خالی استفاده کردم به همراه Mantine دوست داشتنی. اصلا بدون Mantine
                نمیشه کار کرد.
            </p>
        </ProjectLayout>
    )
}
export default EmzaCafe