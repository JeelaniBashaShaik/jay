import { Component, OnInit } from '@angular/core';
import { ApiService } from './../services/api.service';
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  toiNews=[];
  hinduNews=[];
  techRadar=[];
  sportBible=[];
  theVerge=[];
  theNextWeb=[];
  constructor(private _apiService:ApiService) { }

  ngOnInit() {
    this._apiService.fetchNews('the-times-of-india').subscribe(data=>{
      
      this.toiNews = data.articles;
      for(var i=0;i<this.toiNews.length;i++){
       this.toiNews[i].publishedAt = new Date(this.toiNews[i].publishedAt).toLocaleString('en-CA', {hour12:true});
      }
    })
    this._apiService.fetchNews('the-hindu').subscribe(data=>{
    
      this.hinduNews = data.articles;
      for(var i=0;i<this.hinduNews.length;i++){
       this.hinduNews[i].publishedAt = new Date(this.hinduNews[i].publishedAt).toLocaleString('en-CA', {hour12:true});
      }
    })
    this._apiService.fetchNews('techradar').subscribe(data=>{
      
      this.techRadar = data.articles;
      for(var i=0;i<this.techRadar.length;i++){
       this.techRadar[i].publishedAt = new Date(this.techRadar[i].publishedAt).toLocaleString('en-CA', {hour12:true});
      }
    })

this._apiService.fetchNews('the-sport-bible').subscribe(data=>{
      
      this.sportBible = data.articles;
      for(var i=0;i<this.sportBible.length;i++){
       this.sportBible[i].publishedAt = new Date(this.sportBible[i].publishedAt).toLocaleString('en-CA', {hour12:true});
      }
    })
    this._apiService.fetchNews('the-verge').subscribe(data=>{
      
      this.theVerge = data.articles;
      for(var i=0;i<this.theVerge.length;i++){
       this.theVerge[i].publishedAt = new Date(this.theVerge[i].publishedAt).toLocaleString('en-CA', {hour12:true});
      }
    })
    this._apiService.fetchNews('new-scientist').subscribe(data=>{
      
      this.theNextWeb = data.articles;
      for(var i=0;i<this.theNextWeb.length;i++){
       this.theNextWeb[i].publishedAt = new Date(this.theNextWeb[i].publishedAt).toLocaleString('en-CA', {hour12:true});
      }
    })
  }
  }
 
  


