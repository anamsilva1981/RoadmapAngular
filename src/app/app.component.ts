import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public addValue: number = 10;

  public add(){
    this.addValue += 1;
  }  
}
