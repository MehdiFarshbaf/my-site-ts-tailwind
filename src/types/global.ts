import {IconType} from "react-icons";
import {ReactElement, ReactNode, SVGProps} from "react";

export interface INavListType {
    id: number,
    label: string,
    area: string
}

export interface IService {
    id: string | number,
    title: string,
    description: string,
    icon?: IconType | ReactNode | ReactElement | SVGProps<SVGSVGElement> | JSX.Element | any
}

export interface ISkills {
    id: number | string,
    title: string,
    percent: number
}

export interface IInfo {
    id: string | number,
    label: string,
    description: string,
    icon?: IconType | ReactNode | ReactElement | SVGProps<SVGSVGElement> | JSX.Element | any
}

export interface IError {
    status: number,
    data: any
}

export interface IProject {
    id: string | number,
    name: string,
    description: string,
    image: any,
    path: string,
    link: string,
    caption: string,
    descriptionLink: string|null
}