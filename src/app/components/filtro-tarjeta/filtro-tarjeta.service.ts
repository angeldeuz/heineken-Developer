import { Injectable } from '@angular/core';
import axios from 'axios';
import { BbeCards } from './filtro-tarjeta.component';

@Injectable({
  providedIn: 'root'
})
export class FiltroTarjetaService {

  constructor() { }
  url = 'https://greencardweb20190907024801.azurewebsites.net';

  public getCards() {
    return axios.get<BbeCards>(this.url + '/api/CardsBbe/List')
      .then(function (response) {
        // handle success
        return response.data;
      })
      .catch(function (error) {
        // handle error
        console.log('------ GET:ERROR ----- axios error at /api/CardsBbe/List--');
        console.log(error);
        return error;
      })
      .finally(function () {
        // always executed
        return console.log('----- GET:FINALLY ----- axios end at /api/CardsBbe/List--');
      });
  }

}
