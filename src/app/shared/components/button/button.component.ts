import { FunctionCall } from '@angular/compiler';
import { Component, Input, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() btnTitle:string='';
  @Input() btnClick!:()=>any;
  @Input() btnstyle:any;

  x:number = 9; // define type in compiler time
  cc!:any;

  /*
cc =10;
  */
  constructor() { }

  ngOnInit(): void {
  }

}
