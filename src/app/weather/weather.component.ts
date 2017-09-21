import { Component, OnInit } from '@angular/core';
import { WeatherService } from './../services/weather.service';
import { ApiService } from './../services/api.service';
import { Observable } from 'rxjs/Rx';
import { WeatherModel } from './../models/weather';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

    weatherData:WeatherModel = new WeatherModel();
    city1weatherDataNow:any;
    city1sunrise:any;
    city1sunset:any;
    city1weatherIconUrl:string;
    city1dataAvailable:boolean;
    city2weatherDataNow:any;
    city2sunrise:any;
    city2sunset:any;
    city2weatherIconUrl:string;
    city2dataAvailable:boolean;
    myDate: Date;
     weatherForecast=[];
  constructor(private _weatherService: WeatherService,private _apiService:ApiService) { }

  ngOnInit() {
  this.fetchWeather();
this._apiService.fetchWeather().subscribe(data=>{
 
  this.weatherData = data;
  for(var i=0;i<10;i++){
    this.weatherForecast.push(this.weatherData.list[i]);
  }

})

  }

 

  fetchWeather(){
    this._apiService.fetchWeatherNow('guntakal').subscribe(data=>{
      this.city1weatherDataNow = data;
      //console.log(this.city1weatherDataNow);
      this.city1dataAvailable = true;
      this.city1sunrise = this.convertUtcToNormalTime(this.city1weatherDataNow.sys.sunrise);
      this.city1sunset = this.convertUtcToNormalTime(this.city1weatherDataNow.sys.sunset);
      this.city1weatherIconUrl = 'http://openweathermap.org/img/w/'+this.city1weatherDataNow.weather[0].icon+'.png';
      //console.log(this.city1weatherIconUrl);
    })

     this._apiService.fetchWeatherNow('chennai').subscribe(data=>{
      this.city2weatherDataNow = data;
      //console.log(this.city1weatherDataNow);
      this.city2dataAvailable = true;
      this.city2sunrise = this.convertUtcToNormalTime(this.city2weatherDataNow.sys.sunrise);
      this.city2sunset = this.convertUtcToNormalTime(this.city2weatherDataNow.sys.sunset);
      this.city2weatherIconUrl = 'http://openweathermap.org/img/w/'+this.city2weatherDataNow.weather[0].icon+'.png';
      //console.log(this.city1weatherIconUrl);
    })

  }


convertUtcToNormalTime(utcTime):any{
    var date = new Date(utcTime*1000);
// Hours part from the timestamp
var hours = date.getHours();
// Minutes part from the timestamp
var minutes = "0" + date.getMinutes();
// Seconds part from the timestamp
var seconds = "0" + date.getSeconds();

// Will display time in 10:30:23 format
var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
return formattedTime;
}

}
