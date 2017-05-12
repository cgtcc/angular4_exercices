import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.success',
  template: `
  This is the Success Alert.
  `,  
  styleUrls: ['./success-alert.component.css']
})
export class SuccessAlertComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
