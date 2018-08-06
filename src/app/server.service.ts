import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import 'rxjs/Rx';
@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(private http:Http) { }
  storeServers(servers:any[]){
  return this.http.post('https://gaurav-project-c0817.firebaseio.com/akash.json',servers);
  }
  getServers(){
    return this.http.get('https://jsonplaceholder.typicode.com/photos')
    .map(
        (response:Response)=>{
          const data=response.json();
          return data;
      }
    )
    
  }
}
