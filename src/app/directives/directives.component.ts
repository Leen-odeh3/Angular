import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {

  content: string ='Secret Password = tuna';
  showSecret: boolean = false;
  time: number = new Date().getTime();

  Log: number[] = [];
  items= 5;

  toggle() {
   this.Log.push(this.time);
    this.showSecret = !this.showSecret;
  }

  getColor(i: number): string {
    if (i >= this.items) {
      return 'blue';
    } else {
      return 'white';
    }
  }
}
