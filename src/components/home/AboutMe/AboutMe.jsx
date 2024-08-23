import Section from "../../Section/Section";

//images
import profile from '../../../assets/images/profile.jpeg'

//cv
import cv from './../../../assets/cv/MyResume-MehdiFarshbaf.pdf'

const AboutMe = () => {
    return (
        <Section title="درباره ی من" subTitle="من کی هستم" area="About">
            <div className="w-full flex flex-row  items-center justify-end gap-11 sm:flex-col ">
                <img src={profile} className=" rounded-lg object-cover h-[400px] w-[400px] sm:w-full"
                     alt="profile image"/>
                <div>
                    <h4 className="sub-title">من مهدی هستم</h4>
                    <p className="description">سلام، وقت بخیر. من مهدی فرشباف هستم. برنامه
                        نویس و توسعه دهنده ی React.
                        حدود دو سال هست که وارد دنیای برنامه نویسی شدم و عاشق این کار هستم.</p>
                    <p className="description">در این مدت تعدادی پروژه ی فروشگاهی و صرافی و ... زدم، الان هم دارم تمام
                        تلاشمو میکنم تا بر NodeJS مسلط تر بشم تا بتونم بک اند هم بزنم.</p>
                    <div className="buttonContainer">
                        <a href={cv} download="MyExampleDoc" target='_blank'>
                            <button className='button'>دانلود رزومه</button>
                        </a>
                    </div>
                </div>
            </div>
        </Section>
    )
}
export default AboutMe