// icons
// @ts-ignore
import {FaCode, FaMobileAlt, FaPaintBrush, FaUser} from "react-icons/fa";
import {MdEmail, MdOutlineLightbulb} from "react-icons/md";

// images
import emzaCafe from '../assets/images/emzaCafe.jpeg'
import profile2 from '../assets/images/profile-3.jpeg'
import profile3 from '../assets/images/profile-4.jpeg'
import fiat from '../assets/images/logoGold.png'
import shop from '../assets/images/shop.jfif'

// types
import {IInfo, INavListType, IProject, IService, ISkills} from "../types/global";

export const navList: INavListType[] = [
    {id: 4, label: "ارتباط با من", area: "Contacts"},
    {id: 3, label: "نمونه کارها", area: "Projects"},
    {id: 2, label: "مهارت ها", area: "Skills"},
    {id: 1, label: "خدمات", area: "Services"},
    {id: 0, label: "درباره من", area: "About"}
]

export const contactInfoList: IInfo[] = [
    {
        id: 0,
        label: 'نام:',
        description: 'مهدی فرشباف',
        icon: <FaUser/>,
    }, {
        id: 1,
        label: 'موبایل:',
        description: '0903-9067633',
        icon: <FaMobileAlt/>,
    }, {
        id: 2,
        label: 'ایمیل:',
        description: 'mehdifarshbaf92@mail.com',
        icon: <MdEmail/>,
    }
]

export const myServices: IService[] = [
    {
        id: 0,
        title: 'Web Design',
        description: 'تبدیل سایت شما از قالب فیگما به خروجی React',
        icon: <FaPaintBrush className="icon"/>
    },
    {
        id: 1,
        title: 'Optimized for Any Device',
        description: 'ارائه سایت به شکلی کاملا ریسپانسیو',
        icon: <MdOutlineLightbulb className='icon'/>
    },
    {
        id: 2,
        title: 'Apps Design',
        description: 'ارائه قالب های آماده فروشگاهی، صرافی، پنل های مدیریت ...',
        icon: <FaCode className='icon'/>
    }
]
export const skillsList: ISkills[] = [
    {
        id: 0,
        title: 'HTML',
        percent: 85
    }, {
        id: 1,
        title: 'CSS',
        percent: 80
    }, {
        id: 2,
        title: 'JavaScript',
        percent: 80
    }, {
        id: 3,
        title: 'ReactJS',
        percent: 80
    }, {
        id: 4,
        title: 'NextJS',
        percent: 70
    }, {
        id: 5,
        title: 'TypeScript',
        percent: 70
    }, {
        id: 6,
        title: 'TailWind',
        percent: 50
    }, {
        id: 7,
        title: 'Git',
        percent: 60
    }, {
        id: 8,
        title: 'NodeJS(express)',
        percent: 68
    }]

export const projectList: IProject[] = [
    {
        id: 0,
        name: 'Emza Cafe',
        description: 'خرید و سفارش آنلاین قهوه و انواع محصولات مربوطه',
        image: emzaCafe,
        link: "https://emza-group.ir/",
        path: "/project/emza-cafe",
        caption: "خرید و سفارش قهوه و محصولات مربوطه",
        descriptionLink: "مشاهده سایت کافه امضا"
    }, {
        id: 1,
        name: 'Salmode',
        description: 'سفارش آنلاین انواع پوشاک',
        image: profile2,
        link: "https://salmode.farshbaf-dev.ir/",
        path: "/project/salmode",
        caption: "مشاهده ی سایت سال مد",
        descriptionLink: "مشاهده ی سایت سال مد"
    }, {
        id: 2,
        name: 'Portfolio',
        description: 'سایت شخصی برای معرفی شخص',
        image: profile3,
        link: "https://farshbaf-dev.ir/",
        path: "/project/portfolio",
        caption: "مشاهده ی سایت امضا کافه",
        descriptionLink: null
    }, {
        id: 3,
        name: 'Money Exchange',
        description: 'صرافی ثانیه (استرالیا)',
        image: fiat,
        link: "https://www.sanieh.com.au/",
        path: "/project/fiat",
        caption: "مشاهده ی سایت صرافی ثانیه",
        descriptionLink: "مشاهده ی صرافی ثانیه"
    }, {
        id: 4,
        name: 'full-stack shop',
        description: 'فول استک فروشگاهی',
        image: shop,
        link: "https://panel-shop.farshbaf-dev.ir/",
        path: "/project/full-stack-shop",
        caption: "مشاهده پنل مدیریت فروشگاه",
        descriptionLink: "مشاهده ی پنل مدیران برای فروشگاه"
    }
]