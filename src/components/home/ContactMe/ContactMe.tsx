import {useState} from "react";
import {toast} from "react-toastify";
import http from './../../../helpers/API'
import {handleShowErrorMessage} from "../../../helpers/functions";
import Section from "../../Section/Section";
import styles from './ContactMe.module.scss'
import {contactInfoList} from "../../../helpers/data";
import ContactInfo from "../../ContactInfo/ContactInfo";

const ContactMe = () => {

    // variables
    const [loading, setLoading] = useState<boolean>(false)
    const [name, setName] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [subject, setSubject] = useState<string>("")
    const [description, setDescription] = useState<string>("")

    const handleSendMessage = async () => {
        setLoading(true)
        try {
            const {data}: {
                data: {
                    success: boolean,
                    message: string
                }
            } = await http.post("/message", {name, email, subject, description})
            if (data.success) {
                toast.success(data.message)
                setEmail("")
                setDescription("")
                setName("")
                setEmail("")
                setSubject("")
            }
            setLoading(false)
        } catch (err) {
            setLoading(false)
            await handleShowErrorMessage(err)
        }
    }

    return (
        <Section title="با من تماس بگیر" subTitle="در تماس باشید" area="Contacts">
            <div className={`${styles.container} w-full gap-12 flex justify-center items-start md:flex-col-reverse`}>
                <div className='w-full'>
                    <h2 className='sub-title'>به من پیام بزن</h2>
                    <div className="field">
                        <input className="myInputs" value={name} onChange={e => setName(e.target.value)} type="text"
                               placeholder="نام"/>
                        <input className="myInputs" type="email"
                               value={email}
                               onChange={e => setEmail(e.target.value)}
                               placeholder="ایمیل"/>
                    </div>
                    <div className="field">
                        <input className="myInputs" type="text"
                               value={subject}
                               onChange={e => setSubject(e.target.value)}
                               placeholder="عنوان"/>
                    </div>
                    <div>
                        <textarea name="" id="" cols={30} placeholder="توضیحات"
                                  className="rtl text-right w-full p-3 resize-none text-lg mb-4 outline-none border border-lightgray rounded rounded-2"
                                  value={description}
                                  onChange={e => setDescription(e.target.value)}
                                  rows={8}/>
                    </div>
                    <div className="buttonContainer">
                        <button disabled={loading} onClick={() => handleSendMessage()} className='button'>ارسال پیام
                        </button>
                    </div>
                </div>
                <div className='w-100'>
                    <h2 className='sub-title'>در تماس باشید</h2>
                    <p className="description text-base text-justify font-normal">خوشحال میشم با انتقادات و پیشنهادات
                        خودتون منو راهنمایی کنید.</p>
                    <div className="w-full my-2.5">
                        {contactInfoList.map(info => <ContactInfo key={info.id} info={info}/>)}
                    </div>
                </div>
            </div>
        </Section>
    )
}
export default ContactMe