import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'code2flow';
  alertText: string = 'Youve reached limit of 3 flowcharts on the Free Plan'
}
