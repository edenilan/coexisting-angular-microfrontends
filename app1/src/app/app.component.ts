import { Component } from '@angular/core';
import { assetUrl } from 'src/single-spa/asset-url';

// @ts-ignore
import {heartbeat$, restartHeartbeat} from 'navbar';

@Component({
  selector: 'app1-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app1';
  yoshiUrl = assetUrl("yoshi.png");
  heartbeat$ = heartbeat$;
    constructor() {
        restartHeartbeat();
    }
}
