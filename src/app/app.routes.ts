import { Routes } from '@angular/router';
import {BooksListPageComponent} from "./features/components/books-list-page/books-list-page.component";
import {DetailsComponent} from "./features/components/details/details.component";

export const routes: Routes = [
  {
    path: '',
    component: BooksListPageComponent,
    title: 'Home Page'
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
    title: 'Details Page'
  }
];
