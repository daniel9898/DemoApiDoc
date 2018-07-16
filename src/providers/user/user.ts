import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CustomhttpProvider } from '../customhttp/customhttp';

@Injectable()
export class UserProvider {

  constructor(private miHttp: CustomhttpProvider) { }

  getAll(endPoint: string){
    return this.miHttp.runGet(endPoint);
  }

  save(endPoint: string, data: any){
    return this.miHttp.runPost(endPoint, data);
  }

  signIn(endPoint: string, data: any){
    return this.miHttp.runPost(endPoint, data);
  }

  update(endPoint: string, user: any){
    return this.miHttp.runUpdate(endPoint,user._id, user);
  }

  delete(endPoint: string, user: any){
    return this.miHttp.runDelete(endPoint,user._id, user);
  }


}
