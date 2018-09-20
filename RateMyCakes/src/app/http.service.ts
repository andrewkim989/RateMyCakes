import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient) { }

  getAll(){
    return this._http.get("/cakes");
  }

  createCake(newcake){
    return this._http.post("/cakes", newcake);
  }

  getCake(cake) {
    return this._http.get("/cakes/" + cake._id);
  }

  reviewCake(cake, review) {
    return this._http.post("/cakes/" + cake._id, review);
  }
}
