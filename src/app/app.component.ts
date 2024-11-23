import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from "./header/header.component";
import {BookComponent} from "./book/book.component";
import {SelectedBookComponent} from "./selected-book/selected-book.component";
import {BookService} from "./services/book.service";
import {Book} from "./book/book.model";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  books: Book[] = [];

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.bookService.getBooks().subscribe((data) => {
      this.books = data;
    });
  }

  selectedBookId?: string;

  get selectedBook() {
    return this.books.find((book) => book.id === this.selectedBookId);
  }

  onSelectBook(id: string) {
    this.selectedBookId = id;
  }
}
