import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Buy} from '../model/buymodel';

@Injectable({
  providedIn: 'root'
})
export class SrvServiceService {
  
  buys: Buy[] = [];
  buyadd: Buy[] = [];
  buyedit: Buy[] = [];
  link = 'http://localhost:3000/purchases/';
  options = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  constructor(public http: HttpClient) {
  }

  async getBuys() {
    this.buys = [];
    
   const data = await this.http
     .get(this.link)
     .toPromise();

    for (const index in data) {
       this.buys.push(data[index]);
    }

    this.buys.sort(( a, b ) =>  a.status - b.status);
    
  }

  async addBuy(buy: Buy) {
    return this.http.post(this.link, buy, this.options).toPromise();
  }

  async removeBuy(id: number) {
    let linkdel = this.link + id;
    return this.http.request('delete', linkdel, {body: {id}}).toPromise();
  }

  async editBuy(buy: Buy) {
    let link = this.link + buy.id;
    return this.http.put(link, buy, this.options).toPromise();
  }

  async statusBuy(status: Buy) {
   
    let link = this.link + status.id;
    return this.http.put(link, status, this.options).toPromise();

   
  }

  

  
}
