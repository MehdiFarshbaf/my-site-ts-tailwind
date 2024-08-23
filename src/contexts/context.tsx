import {createContext, FC, useState, Dispatch, SetStateAction, ReactNode} from "react";

interface IProps {
    children: ReactNode
}

interface AuthContextType {
    area: string,
    setArea: Dispatch<SetStateAction<string>>
}

export const AuthContext = createContext<AuthContextType>({
    area: "", setArea: () => {
    }
})

export const AuthContextProvider: FC<IProps> = ({children}) => {

    //variables
    const [area, setArea] = useState<string>("")

    //functions

    return (
        <AuthContext.Provider value={{area, setArea}}>{children}</AuthContext.Provider>
    )
};

