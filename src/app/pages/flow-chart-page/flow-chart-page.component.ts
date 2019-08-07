import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-flow-chart-page',
  templateUrl: './flow-chart-page.component.html',
  styleUrls: ['./flow-chart-page.component.css'],
  providers: [UserService]
})
export class FlowChartPageComponent implements OnInit {


  /**
   * Object that represents the user "logged"
  */
  loggedUser: User = undefined;


  /**
   * Quantity of allowedCharts depending if its premium or not.
  */
  private allowedCharts: number = undefined;


  /**
   * Variable to handle the "fetch" simulation.
  */  
  private loaded: boolean = false;

  constructor(private httpService: UserService) { }

  ngOnInit() {
    this.loggedUser = this.httpService.getUser();
    this.allowedCharts = this.loggedUser.premium ? 8 : 3;
    setTimeout(() => this.loaded = true, 1000);
  }

}
