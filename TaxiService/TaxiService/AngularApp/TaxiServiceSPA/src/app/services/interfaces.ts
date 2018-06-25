import { Usertype } from "./usertype.enum";

export interface ICar{
    driver : string,
    year: number,
    registration: string,
    carNumber: number,
    carType: CarType
}

export enum CarType{
    sedan,
    van,
    undefined
} 

export interface INewUser{
    username: string,
    password: string,
    email: string,
    name: string,
    lastname: string,
    jmbg: string,
    phone: number,
    carNumber: number,
    userType: Usertype,
    blocked: boolean
}

export interface IBasicUser{
    username:string,
    email: string,
    type: Usertype,
    phone: number,
    blocked: boolean
}

export interface IComment{
    description: string,
    time: string,
    rating: number
}

export interface ILocation{
    lat:number,
    long:number,
    address: string
}

export interface IRide{
    id: number,
    location: ILocation,
    destination: ILocation,
    customer: string,
    driver: string,
    dispatcher:string,
    fare: number,
    comment: IComment,
    time:string,
    status: RideStatus
}

export enum RideStatus{
    ordered,
    processed,
    waiting,
    accepted,
    cancelled,
    sucessful,
    failed
}

export interface ApiRequest{
    userHash:string,
    data:object | number | string
}