// import {GUID} from "../shared/guid.model";

export interface Book {
  id: string;
  title: string;
  price: number;
  numberInStock: number;
  language: string;
  imgUrl: string;
  description: string;
  authorIds: string[];
  genreIds: string[];
  paymentIds: string[];
}
