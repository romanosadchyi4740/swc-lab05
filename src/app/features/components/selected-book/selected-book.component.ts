import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Book} from "../../../core/interfaces/book.model";
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
  @Output() edit = new EventEmitter<string>();
  @Output() delete = new EventEmitter<string>();

  onEditButtonClick() {
    this.edit.emit(this.book.id);
  }

  onDeleteButtonClick() {
    console.log(this.book.id);
    this.delete.emit(this.book.id);
  }
}
