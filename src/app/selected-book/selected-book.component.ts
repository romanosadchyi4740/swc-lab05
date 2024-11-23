import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Book} from "../book/book.model";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-selected-book',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './selected-book.component.html',
  styleUrl: './selected-book.component.scss'
})
export class SelectedBookComponent {
  @Input({ required: true }) book!: Book;
  @Output() delete = new EventEmitter<string>();

  onDeleteButtonClick() {
    console.log(this.book.id);
    this.delete.emit(this.book.id);
  }
  // @Input({ required: true }) name!: string;
  // isAddingTask = false;

  // constructor(private tasksService: TasksService) {}

  // get selectedUserTasks() {
  //   return this.tasksService.getUserTasks(this.userId);
  // }
}
