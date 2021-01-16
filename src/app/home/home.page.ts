import { Component, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}
  messages=[
    {
      user:'satya',
      createdAt:155090856000,
      msg:'Hey, Whats uo mate?'
    },
    {
      user:'sai',
      createdAt:155090956000,
      msg:'Working on the IOnic Mission, u?'
    },
    {
      user:'satya',
      createdAt:155091056000,
      msg:'Doing some new program'
    },
  ];
  currentuser='satya';
  newMsg="";
  @ViewChild(IonContent) content:IonContent

  sendMessage()
  {
    this.messages.push({
      user:'satya',
      createdAt:new Date().getTime(),
      msg:this.newMsg

    });
    this.newMsg='';
    setTimeout(()=>{
      this.content.scrollToBottom(200);
    });
    
  }

}
