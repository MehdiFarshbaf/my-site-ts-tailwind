import Section from "../../Section/Section";
import {skillsList} from "../../../helpers/data";
import Chart from "../../Chart/Chart";

const MySkills = () => {
    return (
        <Section title="مهارت های من" subTitle="چیزی که میدانم" area="Skills">
            <div className="w-full flex justify-between items-start md:flex-col-reverse md:gap-5">
                <div className="w-[48%] md:w-full">
                    {skillsList.map(skill => (
                        <Chart key={skill.id} info={skill}/>
                    ))}
                </div>
                <div className="w-[48%] md:w-full">
                    <h4 className='sub-title'>مهارت ها و تجربیات من</h4>
                    <p className="description">نزدیک به دو سال در شرکت جوان فکران داده گستر پویا(ویستا) کار کردم. یکسال
                        و چند ماه حظوری و چند ماهی دور کاری. خیلی خب بود، همه چی از اونجا شروع کرد، تیم UI کار رو در
                        فیگما اماده میکرد و بچه های بک و فرانت و موبایل جدا جدا مشغول میشدیم. حظور تمام تیم ها کنار هم
                        باعث شد خیلی از مهارت ها رو از همونجا یاد بگیرم و ...</p>
                </div>
            </div>
        </Section>
    )
}
export default MySkills