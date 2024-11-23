// import {GUID} from "../shared/guid.model";

export interface Book {
  id: string;
  title: string;
  price: number;
  numberInStock: number;
  language: string;
  authorIds: string[];
  genreIds: string[];
  paymentIds: string[];
}
