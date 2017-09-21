import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { WeatherModel } from './../models/weather';
@Injectable()
export class WeatherService {

  constructor(private http:Http) { }


  //1264527
  fetchWeather():Observable<WeatherModel>{
   return this.http.get('https://api.openweathermap.org/data/2.5/forecast?id=1270670&apikey=0391eb5b9075f872d2e355a3f5ee3f1c&units=metric').map(res=>res.json());
  }

  fetchWeatherIcon(iconId):Observable<any>{
    return this.http.get('http://openweathermap.org/img/w/'+iconId+'.png');
  }
}
