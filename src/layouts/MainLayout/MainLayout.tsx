import {FC, ReactNode} from "react";
import Header from "../../components/Header/Header";

interface IProps {
    children: ReactNode
}

const MainLayout: FC<IProps> = ({children}) => {
    return (
        <>
            <Header/>
            {children}
        </>
    )
}
export default MainLayout