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
    CarNumber: number,
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

export interface ILocation{
    lat:number,
    lng:number,
    address: string
}

export interface IDriver{
    username:string,
    cartype:CarType,
    location:ILocation,
    Free:boolean
}

export interface IRide{
    Id: number,
    Location: ILocation,
    Destination: ILocation,
    Customer: string,
    Driver: string,
    Dispatcher:string,
    Fare: number,
    Comment: IComment,
    Time:string,
    Status: RideStatus
    CarType: CarType
}

export interface IRideRequest{
    location:ILocation,
    destination:ILocation,
    driver:string,
    cartype:CarType,
    rideid:number,
    fare:number
}

export interface IComment{
    description: string,
    time: string,
    rating: number,
    rideid:number,
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