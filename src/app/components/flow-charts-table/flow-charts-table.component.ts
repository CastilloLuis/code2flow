import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-flow-charts-table',
  templateUrl: './flow-charts-table.component.html',
  styleUrls: ['./flow-charts-table.component.css']
})
export class FlowChartsTableComponent implements OnInit {


  /**
   * Object that represent the mock data of the "logged" user.
  */
  @Input() user: User = undefined;

  constructor() { }

  ngOnInit() {
    console.log('User for table', this.user)
  }

}
