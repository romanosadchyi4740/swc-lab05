import {Component, EventEmitter, Input, Output} from '@angular/core';
import {SharedModule} from "../shared/shared.module";
import {Book} from "./book.model";

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [
    SharedModule
  ],
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss'
})
export class BookComponent {
  @Input({ required: true }) book!: Book;
  @Input({required: true}) selected!: boolean;
  @Output() select = new EventEmitter<string>();

  // get imagePath() {
  //   return 'assets/users/' + this.book.avatar;
  // }

  onSelectBook() {
    console.log(this.book.id);
    this.select.emit(this.book.id);
  }
}
