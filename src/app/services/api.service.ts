import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { WeatherModel } from './../models/weather';
@Injectable()
export class ApiService {

  constructor(private http:Http) { }

  fetchWeather():Observable<WeatherModel>{
   return this.http.get('https://api.openweathermap.org/data/2.5/forecast?id=1264527&apikey=0391eb5b9075f872d2e355a3f5ee3f1c&units=metric').map(res=>res.json());
  }

  fetchWeatherNow(city):Observable<any>{
    return this.http.get('https://api.openweathermap.org/data/2.5/weather?q='+city+'&units=metric&apikey=0391eb5b9075f872d2e355a3f5ee3f1c').map(res=>res.json());
  }
  
  fetchNews(sourceTitle):Observable<any>{
    return this.http.get('https://newsapi.org/v1/articles?source='+sourceTitle+'&sortBy=top&apiKey=2d99d74987364e95aaf013993c90327c').map(res=>res.json());
  }

  translateText(targetLanguage,queryWord):Observable<any>{
    return this.http.get('https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl='+targetLanguage+'&dt=t&q='+queryWord).map(res=>res.json());
  }


}
