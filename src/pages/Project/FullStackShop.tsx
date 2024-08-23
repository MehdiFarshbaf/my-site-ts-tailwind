import {useLocation} from "react-router-dom";
import ProjectLayout from "../../layouts/ProjectLayout/ProjectLayout";

const FullStackShop = () => {

    // variables
    const location = useLocation()
    const {project} = location.state

    return (
        <ProjectLayout project={project}>
            <p className="description">مدت ها بود که آرزوی اینو داشتم که بتونم بک و فرانت رو خودم بزنم.</p>
            <p className="description">چند ماهی هست روی نود جی اس کار میکردم تا بتونم پروژه های فول استک اولیه رو خودم پیش ببرم.</p>
            <p className="description">توو عید امسال ی سرور نودی گرفتم تا برام ی انگیزه ی بشه که کارهام رو خودم کامل بزنم.</p>
            <p className="description">بلاخره ی بک اولیه برای پروژه های فروشگاهی زدم و روی سرور خودم گذاشتم و این اولین بک اندی هست که خودم زدم و انلاینش کردم. این اولین کار فول استکی خودم هستش. تا اینجای کار پنل مدیریتش رو دارم کار میکنم و هر روز سعی میکنم امکانات بیشتری بهش اضافه کنم و به روز رسانیش کنم</p>
            <p className="description">برای این پروژه غیر از پنل ادمین میخوام اپ موبایل و سایت هم بزنم ولی فعلا اولیت روی پنل ادمین هستش</p>
            <h3 className='sub-title'>درباره پنل مدیریت</h3>
            <p className="description">پنل مدیریت شامل امکاناتی مثل: تعریف دسته بندی، محصولات، بلاگ، مشاهده ی کاربران هستش که به زودی امکانات بیشتری بهش اضافه میشه. از جمله تعرف نقش برای مدیران و تعریف مدیران</p>
            <p className="description">قسمتی در پنل ادمین هست تحت عنوان تنظیمات که الان شامل سوالات متداول هستش. به قسمت هم امکاناتی دیگری شامل تعرف راه های ارتباطی و ... اضافه میشه.</p>
        </ProjectLayout>
    )
}
export default FullStackShop