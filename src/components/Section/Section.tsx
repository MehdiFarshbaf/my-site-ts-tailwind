import {FC, ReactNode, useContext, useEffect, useRef, MutableRefObject} from "react";
import {AuthContext} from "../../contexts/context";


interface IProps {
    children: ReactNode,
    title: string,
    subTitle: string,
    area?: string
}

const Section: FC<IProps> = ({children, area, subTitle, title}) => {

    // variables
    const {area: areaContext} = useContext(AuthContext)
    const titleRef: MutableRefObject<any> = useRef<HTMLElement | null | undefined>()


    useEffect(() => {
        if (areaContext == area) {
            titleRef?.current?.scrollIntoView({behavior: 'smooth'});
        }
    }, [areaContext]);

    return (
        <section className='section' ref={titleRef}>
            <div className="inside">
                <div className="title">
                    <h2 className="font-IranYekan">{title}</h2>
                    <p className='subTitle'>{subTitle}</p>
                    <div className="line"/>
                </div>
                <div className="w-full">
                    {children}
                </div>
            </div>
        </section>
    )
}
export default Section