import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <button class="grey" *ngIf="!value">{{value}}</button>
    <button class="green" *ngIf="value == 'X'">{{value}}</button>
    <button class="blue" *ngIf="value == 'O'">{{value}}</button>
  `,
  styles: [`
    button {      
      /* width: max-content; */
      width: 100%;
      height: 100%;
    }
    .grey {
      background-color: goldenrod;
      font-size: 30px;
    }
    .blue {
      background-color: blue;
      font-size: 60px;
    }
    .green {
      background-color: green;
      font-size: 60px;
    }
  `]
})
export class SquareComponent {

  @Input() value: "X" | "O"


}
