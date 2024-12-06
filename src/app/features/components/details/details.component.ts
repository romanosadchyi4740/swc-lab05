import {Component, inject, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {BookService} from "../../../core/services/book.service";
import {Book} from "../../../core/interfaces/book.model";
import {CurrencyPipe} from "@angular/common";
import {StarPipe} from "../../../core/pipes/star.pipe";

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [
    CurrencyPipe,
    StarPipe
  ],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent implements OnInit {
  route: ActivatedRoute = inject(ActivatedRoute);
  bookId = "";
  book?: Book;

  constructor(private bookService: BookService) {
    this.bookId = this.route.snapshot.params["id"];
  }

  ngOnInit(): void {
    this.bookService.getBookById(this.bookId).subscribe(data =>
      this.book = data);
  }
}
