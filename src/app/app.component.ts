import { Component } from '@angular/core';
import {lorem} from 'faker';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  randomText =lorem.sentence();
   
  enterText='';

  onInput(value:string){
   this.enterText=(value);
  }

  compare(randomLetter:string,enteredLetter:string){
    if(!enteredLetter){
      return 'pending';
    }

    return randomLetter === enteredLetter ?'correct':"incorrect";

  }

 

  onButtonClick(){
    const letters='abcdefghijklmnopqrstuvwxyz';
    const symbols ='!@#$%^&*()_+';

    
  }
  
  }

