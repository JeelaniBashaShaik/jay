export class WeatherModel{
    city:City;
    list:Array<ListVariable>=[];
}

export class City{
    id:number;
    name:string;
    country:string;
}
export class Coord{
    lat:number;
    lon:number;
}

export class Weather{
    description:string;
    icon:string;
    main:string;
    id:number;
}

export class MainTemp{
    temp:number;
    temp_max:number;
    temp_min:number;
    humidity:number;
    pressure:number;
}

export class Clouds{
    all:number;
}

export class ListVariable{
    clouds:Clouds;
    main:MainTemp;
    weather:Weather;
    dt_txt:string;
}