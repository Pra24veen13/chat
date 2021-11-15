import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewservService {
chatservice:any;
  constructor() {
    this.chatservice=[];
   }

person1toperson2(array:any)
{
  this.chatservice=array;
}
}
