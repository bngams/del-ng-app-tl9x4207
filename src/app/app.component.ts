import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
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

  actionBtn(event): void {
    console.log('Btn click', event);
    // edit btn status
    this.btnDisabled = !this.btnDisabled;
  }

  displayText(event): void {
    this.txtDisplayed = true;
  }
}
