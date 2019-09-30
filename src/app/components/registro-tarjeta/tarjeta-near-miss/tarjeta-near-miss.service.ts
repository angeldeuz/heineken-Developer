import { Injectable } from '@angular/core';
import axios from 'axios';
@Injectable({
  providedIn: 'root'
})
export class TarjetaNearMissService {

  constructor() { }

  url = 'https://greencardweb20190907024801.azurewebsites.net';

  public setNMCard(filledCard) {
    console.log('--- setBbeCard ---');
    console.log("----------- filledCard como lo recibo -------------");
    console.log(filledCard);
    let data = JSON.stringify(filledCard);
    console.log("----------- data con json stringify -------------");
    console.log(data);
    return axios.post(this.url + '/api/CardsBbe/AddCardBbeNS', data, {
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      }
    }).then(function (response) {
      // handle success
      console.log('------ POST:SUCCESS ----- axios error at /api/CardsBbe/AddCardBbe ----');
      console.log(response.data);
      return response.data;
    })
      .catch(function (error) {
        // handle error
        console.log('------ POST:ERROR ----- axios error at /api/CardsBbe/AddCardBbe ----');
        return error;
      })
      .finally(function () {
        // always executed
        return console.log('----- POST:FINALLY ----- axios end at /api/CardsBbe/AddCardBbe ----');
      });
  }
}
