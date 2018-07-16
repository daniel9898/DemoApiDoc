import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class CustomhttpProvider {

  url: string = 'https://tplab4.herokuapp.com/';
  token: string;

  constructor(public http: HttpClient) {
    //this.token =  JSON.parse(localStorage.getItem('user')).token;
  }

  runGet(endPoint: string){
  	return this.http.get(`${this.url}${endPoint}`);        
  }

  runPost(endPoint: string, data: any){
    return this.http.post(`${this.url}${endPoint}`, data);
  }

  runDelete(endPoint: string, id: any, user: any){
    return this.http.put(`${this.url}${endPoint}/${id}`, user);
  }

  runUpdate(endPoint: string, id: any, user: any){
    return this.http.put(`${this.url}${endPoint}/${id}`, user);
  }

  runPostFormData(endPoint: string, file: any){
    return this.http.post(`${this.url}${endPoint}`, file);
  }

  private getHeaders(){
    return { headers: new HttpHeaders({'Authorization': 'Bearer '+this.token,'Content-Type': 'application/json'}) };
  }

}
