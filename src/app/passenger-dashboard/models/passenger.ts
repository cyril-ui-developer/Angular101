
interface Child{
    name:string,
    age:number
}
export interface Passenger {
    id:number,
    name:string,
    checkedIn:boolean,
    checkInDate?: number,
    //children:Child[] | null
    baggage: string
}