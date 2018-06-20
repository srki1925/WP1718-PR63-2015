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