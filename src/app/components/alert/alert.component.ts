import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  @Input() alertText: string
  @Input() type: string

  private dismissAlert: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  private dissmissAlert = () => this.dismissAlert = true;

}
