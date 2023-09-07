import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {

  showSecret: boolean = false;
  log: Date[] = []

  onToggleDetails() {
    this.showSecret = !this.showSecret;
    this.log.push(new Date());
  }
  
}
