import {GUID} from "../shared/guid.model";

export interface BookDto {
  id: GUID;
  title: string;
  price: number;
  numberInStock: number;
  language: string;
  authorIds: string[];
  genreIds: string[];
  paymentIds: string[];
}
