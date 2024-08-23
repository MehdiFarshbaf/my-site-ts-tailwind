import {FC} from "react";

// Types
import {ISkills} from "../../types/global";

interface IProps {
    info: ISkills
}

const Chart: FC<IProps> = ({info}) => {
    return (
        <div key={info.id} className="w-full mb-4">
            <div className="w-full flex justify-between items-center mb-1.5">
                <span className="font-medium text-lg">{info.title}</span>
                <span className="font-medium text-lg">{`${info.percent}%`}</span>
            </div>
            <div className="w-full relative h-1.5 bg-lightgray">
                <div
                    style={{width: `${info.percent}%`}}
                    className="absolute top-0 left-0 w-1/2 bg-red h-full rounded-br-md rounded-tr-md"/>
            </div>
        </div>
    )
}
export default Chart