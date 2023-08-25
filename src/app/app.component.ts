import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular';

  name:String='';


  onclick(){
    this.name='';
  }
  submit(event:Event){
    this.name=(event.target as HTMLInputElement).value;
  }
}
