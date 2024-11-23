import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../environment/environment.development";
import {Observable} from "rxjs";
import {Book} from "../book/book.model";
import {BookDto} from "../book/bookDto.model";

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private readonly apiUrl = `${environment.apiUrl}Book`;

  constructor(private http: HttpClient) {}

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.apiUrl}`);
  }

  getBookById(bookId: string): Observable<Book> {
    return this.http.get<Book>(`${this.apiUrl}/${bookId}`);
  }

  createBook(book: BookDto): Observable<string> {
    return this.http.post<string>(`${this.apiUrl}`, book);
  }

  updateBook(bookId: string, book: Book): Observable<string> {
    return this.http.put<string>(`${this.apiUrl}/${bookId}`, book);
  }

  deleteBook(bookId: string): Observable<string> {
    return this.http.delete<string>(`${this.apiUrl}/${bookId}`);
  }
}
