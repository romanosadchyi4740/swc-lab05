import {GUID} from "../../shared/guid.model";

export interface BookDto {
  id: GUID;
  title: string;
  price: number;
  numberInStock: number;
  language: string;
  imgUrl: string;
  description: string;
  authorIds: GUID[];
  genreIds: GUID[];
  paymentIds: GUID[];
}
