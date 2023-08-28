import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  name:String='';

  onclick(){
    this.name='';
  }
  
  submit(event:Event){
    this.name=(event.target as HTMLInputElement).value;
  }

}
