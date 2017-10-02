import { Component } from '@angular/core';
import {NgForm} from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng course 2';
  curval = 5;
  parentcount = 0;

  onValueChange(count:number){
    this.parentcount = count;
  }
}
