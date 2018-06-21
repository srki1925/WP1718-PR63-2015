import { Usertype } from "./usertype.enum";

export interface ICar{
    driverId : number,
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
    userType: Usertype
}