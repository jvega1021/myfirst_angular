import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //Tag para referenciar el selector HTML5
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  name : String
  url : String
  brothers : String[]
  showBrother : Boolean

  constructor(){
  	this.name = 'Jonathan'
  	this.url = 'https://www.desarrolloweb.com/'
  	this.brothers = ['Milena','Freddy','Isaac']
  }

  showBrothers(){
  	this.showBrother = !this.showBrother;
  }

  
  newBrother(brother){
    this.brothers.push(brother.value);
    brother.value = '';
    return false;
  }

}
