import {FC} from "react";

// Icons
import {TbWorldWww} from "react-icons/tb";

interface IProps {
    address: string,
    caption: string
}

const LinkToSite: FC<IProps> = ({address, caption}) => {
    return (
        <div className="w-full flex justify-center items-center gap-5 mb-5 cursor-pointer">
            <TbWorldWww fontSize={22}/>
            <a target='_blank'
               rel='noopener noreferrer' href={address}>{caption}</a>
        </div>
    )
}
export default LinkToSite