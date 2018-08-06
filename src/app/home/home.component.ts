import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { Observer } from 'rxjs/Observer';
import { Subscription } from 'rxjs/Rx';
import { ServerService } from '../server.service';
import { Response } from '@angular/http';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy {
 numbersub:Subscription;
 customsub:Subscription;
 servers=[{name:"server1",capacity:2},
 {name:"server2",capacity:25},
 {name:"server3",capacity:72},];
  constructor(private serverService:ServerService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
  const myNumber=Observable.interval(2000);
   this.numbersub= myNumber.subscribe(
      (number:number)=>{
        console.log(number);

      }
    );
const myObserverable=Observable.create((observer:Observer<string>)=>
{
  setTimeout(()=>{
    observer.next("first package");
  },2000);
  setTimeout(()=>{
    observer.next("first package");
  },5000);
  setTimeout(()=>{
    observer.complete();
  },6000);
});
this.customsub=myObserverable.subscribe(
  (data:string)=>{console.log(data);},
  (error:string)=>{console.log(error);},
  ()=>{console.log('completed');}
);  
}
ngOnDestroy(){
  this.numbersub.unsubscribe();
  this.customsub.unsubscribe();
}
  gotouser(){
    this.router.navigate(['/user'],{relativeTo:this.route});
  }
  addServer(){
    this.serverService.storeServers(this.servers)
    .subscribe(
      (response)=>(console.log(response)),
      (error)=>(console.log(error))
    );
  }
  getServer(){
    this.serverService.getServers()
    .subscribe(
      (servers:any[])=>
        console.log(servers)
      ,
      (error)=>(console.log(error))
    );
  }
}