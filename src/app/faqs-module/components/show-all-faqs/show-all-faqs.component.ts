import { Component, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem
} from "@angular/cdk/drag-drop";
import {Task} from '../../../task'
@Component({
  selector: 'app-show-all-faqs',
  templateUrl: './show-all-faqs.component.html',
  styleUrls: ['./show-all-faqs.component.scss']
})
export class ShowAllFaqsComponent implements OnInit {

  unassignedTasks: Task[] = [
    {
      id: '1',
      title: 'Task 1',
    },
    {
      id: '2',
      title: 'Task 2',
    },
    {
      id: '3',
      title: 'Task 3',
    }
  ];


  constructor() { }

  ngOnInit(): void {
  }




  drop(event: CdkDragDrop<Task[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}