import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {
  CdkDragDrop,
  CdkDragEnter,
  CdkDragMove,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

import {Task} from '../../../task'
@Component({
  selector: 'app-show-all-faqs',
  templateUrl: './show-all-faqs.component.html',
  styleUrls: ['./show-all-faqs.component.scss']
})
export class ShowAllFaqsComponent implements OnInit {
  open=false
  constructor() { }

  ngOnInit(): void {
  }

  movies = [
    {Categname:'Diffrentiator' , faqs:[{fadName:"faq1"}]},
    {Categname:'Time Tracking' , faqs:[{fadName:"faq2"}, {fadName:"faq3"}]},
    {Categname:'shesha' , faqs:[{fadName:"faq4"} , {fadName:"faq5"} , {fadName:"faq5"}]},

  ];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
  }



}
