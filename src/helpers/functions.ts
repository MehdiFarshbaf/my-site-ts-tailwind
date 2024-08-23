import {toast} from "react-toastify";
import {IError} from "../types/global";

export const handleShowErrorMessage = async (error: IError|any): Promise<any> => {
    // console.log(error)
    if (error.status === 422 && error.data.errors) {
        const keys = Object.keys(error.data.errors)
        toast.error(error.data.errors[keys[0]][0])
    }
    toast.error(error.data.message)
}