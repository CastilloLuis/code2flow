import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  /**
   * String received from parent component that represents the text displayed in alert
   */
  @Input() alertText: string


  /**
   * String received from parent component that represents alert type (only danger)
  */
  @Input() type: string


  /**
   * Boolean variable that handle the dismiss action of the alert
  */
  private dismissAlert: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  private dissmissAlert = () => this.dismissAlert = true;

}
