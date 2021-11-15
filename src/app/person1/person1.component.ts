import { Component, HostListener, OnInit } from '@angular/core';
import { NewservService } from '../newserv.service';

@Component({
  selector: 'app-person1',
  templateUrl: './person1.component.html',
  styleUrls: ['./person1.component.css']
})
export class Person1Component implements OnInit {
image="assets/pp.png";
sendername:any;
person1name="praveen";
person1lastseen:any;
sen='none';


  constructor(private person1:NewservService) {
    this.sendername=person1.chatservice;
   }

  ngOnInit(): void {
  }
message(a:any){
  let sendermessageobject = {
     person1name:"praveen",
     mess: a,
     time:new Date()
  }
  this.sendername.push(sendermessageobject);
    this.person1.chatservice(this.sendername)

}


fun(){
  this.sen="block";
  
}
ngonDestroy(){

}
}
