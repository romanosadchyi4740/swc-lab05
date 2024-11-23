import {Component, inject, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {BookService} from "../services/book.service";
import {Book} from "../book/book.model";

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
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
