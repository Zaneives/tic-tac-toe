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
      /* border: 0px; */
      padding: 0;
      margin: 0;
      font-size: 2em;
      line-height: 1px;
      transition: 1s;
    }
    .grey {
      background-color: palegreen;
    }
    .blue {
      background-color: blue;
    }
    .green {
      background-color: orange;
    }
  `]
})
export class SquareComponent {

  @Input() value: "X" | "O"


}
