import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {ProductType} from "../types/product.type";

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  constructor(private http: HttpClient) { }
  searching(query: string): Observable<ProductType[]> {
    return this.http.get<ProductType[]>('https://testologia.ru/tea?search=' + query);
  }
}
    // const params = new HttpParams().set('search', query);
    // return this.http.get<ProductType[]>('https://testologia.ru/tea', {params});
