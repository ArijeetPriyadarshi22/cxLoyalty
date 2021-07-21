export interface IflightSearchDetails{
    _id: string;
    from_city_id: string;
    to_city_id:string;
    depart: string;
    arrive: string;
    startDate:Date;
    endDate:Date;
    duration:string;
    stop : string,
    basicEconomyPrice: number,
    mainCabinPrice: number,
    economyPrice: number,
    basicEconomySeatLeft: string,
    mainCabinSeatLeft : string,
    economySeatLeft: string
}