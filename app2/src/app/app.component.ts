import { Component } from '@angular/core';

// @ts-ignore
import {heartbeat$} from 'navbar';

@Component({
  selector: 'app2-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app2';
  heartbeat$ = heartbeat$;

  buttonClicked() {
      console.log('button clicked');
  }
}
