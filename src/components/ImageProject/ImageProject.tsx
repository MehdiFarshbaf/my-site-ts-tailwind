import {FC} from "react";

interface IProps {
    image: any
}

const ImageProject: FC<IProps> = ({image}) => {
    return (
        <div className="w-full flex justify-center items-center mb-8">
            <img className="w-[300px] h-[300px]  rounded-lg border-red border-2 object-cover" src={image} alt=""/>
        </div>
    )
}
export default ImageProject