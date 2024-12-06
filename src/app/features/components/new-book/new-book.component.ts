import {Component, EventEmitter, inject, Output} from '@angular/core';
import {BookService} from "../../../core/services/book.service";
import {FormsModule} from "@angular/forms";
import {guid} from "../../../shared/guid.model";

@Component({
  selector: 'app-new-book',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './new-book.component.html',
  styleUrl: './new-book.component.scss'
})
export class NewBookComponent {
  @Output() close = new EventEmitter<void>();
  enteredTitle = '';
  enteredPrice = '';
  enteredNumberInStock = '';
  enteredLanguage = '';
  enteredDescription = '';
  enteredUrl = '';
  private bookService = inject(BookService);

  onCancel() {
    this.close.emit();
  }

  onSubmit() {
    this.bookService.createBook(
      {
        id: guid("3248e17f-4ca8-4d06-945e-bed84042d0db"),
        title: this.enteredTitle,
        price: +this.enteredPrice,
        numberInStock: +this.enteredNumberInStock,
        language: this.enteredLanguage,
        imgUrl: this.enteredUrl,
        description: this.enteredDescription,
        authorIds: [],
        genreIds: [],
        paymentIds: [],
      },
    ).subscribe(() => console.log("creating new book"));
    this.close.emit();
  }
}
