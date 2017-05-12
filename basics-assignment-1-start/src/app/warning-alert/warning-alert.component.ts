import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.warning',
  template: `
  This is the Warning Alert.
  `,
  styleUrls: ['./warning-alert.component.css']
})
export class WarningAlertComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
