import {FC} from "react";

// Types
import {IInfo} from "../../types/global";

interface IProps {
    info: IInfo
}

const ContactInfo: FC<IProps> = ({info}) => {
    return (
        <div key={info.id} className="w-full flex justify-end items-center h-[65px] border-b border-red">
            <div className="font-light mr-7">
                <p className="text-right rtl">{info.label}</p>
                <p className="text-right rtl ">{info.description}</p>
            </div>
            <div className="text-2xl text-red">
                {info.icon}
            </div>
        </div>
    )
}
export default ContactInfo