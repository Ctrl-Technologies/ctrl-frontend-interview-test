import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiKey, apiUrl } from '../../app/app-settings'

/*
  Check https://www.openweathermap.org/current
  and also check src/app/app-settings for details
*/
@Injectable()
export class ApiProvider {


  constructor(public http: HttpClient) {
    console.log('Hello ApiProvider Provider');
  }
  weatherApiOnline(){
    return this.http.get("");
  }

  getWeatherByCity(city) {
    return this.http.get('');

    
  }

  getWeatherByCityAndCountry(country, city){
    return this.http.get('')
  }
}
