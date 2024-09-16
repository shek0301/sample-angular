import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../Models/User';

@Injectable({
  providedIn: 'root'
})
export class CusBuiService {
  apdata!:Array<User>
  constructor(private http:HttpClient) {
    this.http.get("https://reqres.in/api/users?page=1").subscribe((response:any)=>{
      this.apdata = response.data

    });


  }

  toUpper(apdata:Array<User>){
    for(let i=0; i<this.apdata.length;i++)
      {
        this.apdata[i].first_name = this.apdata[i].first_name?.toUpperCase();
      }

  }
  
  get(url:string):Observable<object>{
    return this.http.get(url);
  }

  post(url:string,data:object):Observable<object>{
    return this.http.post(url,data);
  }


}
