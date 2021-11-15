import { Component, OnInit } from '@angular/core';
import { NewservService } from '../newserv.service';

@Component({
  selector: 'app-person2',
  templateUrl: './person2.component.html',
  styleUrls: ['./person2.component.css']
})
export class Person2Component implements OnInit {
  image="assets/1234.jpg";
  sendername:any;
  person2name="Ragav";
  person1lastseen:any;
  sen="none";
  
    constructor(private person2:NewservService) {
      this.sendername=person2.chatservice;
     }
  
    ngOnInit(): void {
    }
  message(a:any){
    let sendermessageobject = {
       person2name:"Ragav",
       mess: a,
       time:new Date()
    }
    this.sendername.push(sendermessageobject);
      this.person2.chatservice(this.sendername)
  
  }

  fun(){
    this.sen="block"
  }
  ngonDestroy(){
  
  }
  }
  