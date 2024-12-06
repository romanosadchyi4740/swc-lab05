import {Component, EventEmitter, inject, Input, Output} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {BookService} from "../../../core/services/book.service";
import {guid} from "../../../shared/guid.model";
import {Book} from "../../../core/interfaces/book.model";

@Component({
  selector: 'app-edit-book',
  standalone: true,
    imports: [
        FormsModule
    ],
  templateUrl: './edit-book.component.html',
  styleUrl: './edit-book.component.scss'
})
export class EditBookComponent {
  @Input({ required: true }) book!: Book;
  @Output() close = new EventEmitter<void>();
  private bookService = inject(BookService);

  onCancel() {
    this.close.emit();
  }

  onSubmit() {
    this.bookService.updateBook(
      guid(this.book.id),
      {
        id: guid(this.book.id),
        title: this.book.title,
        price: +this.book.price,
        numberInStock: +this.book.numberInStock,
        language: this.book.language,
        imgUrl: this.book.imgUrl,
        description: this.book.description,
        authorIds: this.book.authorIds.map(a => guid(a)),
        genreIds: this.book.genreIds.map(g => guid(g)),
        paymentIds: this.book.paymentIds.map(p => guid(p)),
      },
    ).subscribe(() => console.log("creating new book"));
    this.close.emit();
  }
}
