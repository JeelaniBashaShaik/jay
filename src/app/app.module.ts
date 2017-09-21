import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';

import { WeatherService } from './services/weather.service';
import { ApiService } from './services/api.service';
import {MdRadioModule} from '@angular/material';
import { MaterialModule } from '@angular/material';
import {MdButtonModule,MdToolbarModule,MdSelectModule,MdTabsModule,MdInputModule, MdCheckboxModule,MdCardModule,MdGridListModule} from '@angular/material';
import { TranslateComponent } from './translate/translate.component';
import { NewsComponent } from './news/news.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    TranslateComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpModule,MdToolbarModule,MdTabsModule,MaterialModule,MdSelectModule,MdInputModule,MdButtonModule,MdGridListModule,MdCheckboxModule,BrowserAnimationsModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers: [WeatherService,ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
