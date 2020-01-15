import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-syntax',
  templateUrl: './syntax.component.html',
  styleUrls: ['./syntax.component.scss']
})
export class SyntaxComponent implements OnInit {
  title = 'ng-app-sample';
  btnDisabled = false;
  today = Date.now();
  txtDisplayed = false;
  products = [
    {
      name: 'P1',
      price: 12
    },
    {
      name: 'P2',
      price: 10
    },
    {
      name: 'P3',
      price: 15
    }
  ];
  constructor() { }

  ngOnInit() {
  }

  actionBtn(event): void {
    console.log('Btn click', event);
    // edit btn status
    this.btnDisabled = !this.btnDisabled;
  }

  displayText(event): void {
    this.txtDisplayed = true;
  }

}
