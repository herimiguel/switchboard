import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'switchboard app';
  switches = [ true, true, true, true, true, true, true, true];
  switchOff(i) {
    this.switches[i] = !this.switches[i];
  }
}
