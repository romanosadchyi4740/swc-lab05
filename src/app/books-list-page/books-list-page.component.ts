import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {BookComponent} from "../book/book.component";
import {SelectedBookComponent} from "../selected-book/selected-book.component";
import {Book} from "../book/book.model";
import {BookService} from "../services/book.service";
import {NewBookComponent} from "../new-book/new-book.component";

@Component({
  selector: 'app-books-list-page',
  standalone: true,
  imports: [
    BookComponent,
    SelectedBookComponent,
    NewBookComponent
  ],
  templateUrl: './books-list-page.component.html',
  styleUrl: './books-list-page.component.scss'
})
export class BooksListPageComponent implements OnInit {
  books: Book[] = [];
  isCreatingBook = false;

  constructor(private bookService: BookService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.bookService.getBooks().subscribe((data) => {
      this.books = data;
    });
  }

  sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  selectedBookId?: string;

  get selectedBook() {
    return this.books.find((book) => book.id === this.selectedBookId);
  }

  onSelectBook(id: string) {
    this.selectedBookId = id;
  }

  onDeleteBook(id: string) {
    this.bookService.deleteBook(id).subscribe(() => console.log(id));
    console.log("deleting book");
    this.bookService.getBooks().subscribe((data) => {
      this.sleep(50).then(() => {
        this.books = data;
        this.cdr.detectChanges();
      });
    });
  }

  onStartAddBook() {
    this.isCreatingBook = true;
  }

  onCloseAddBook() {
    this.isCreatingBook = false;

    this.bookService.getBooks().subscribe((data) => {
      this.books = data;
      this.cdr.detectChanges();
    });
  }
}
