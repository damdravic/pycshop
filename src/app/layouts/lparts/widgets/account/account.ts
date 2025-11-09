import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-account',
  imports: [],
  templateUrl: './account.html',
  styleUrl: './account.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Account {


  accountMenuDisplay: boolean = false;


  accountDisplayToggle() {
    this.accountMenuDisplay = !this.accountMenuDisplay
  }




}
