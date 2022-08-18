import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Bookedit } from '../interfaces/book.register';
@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  private API_SERVER = 'http://localhost:8080/api/libro/';

  constructor(private httpClient: HttpClient) {}

  public getAllbook(
    page: number,
    sortBy: string,
    size: number,
    sorttype: string
  ): Observable<any> {
    let params = new HttpParams();
    params = params.append('page', String(page));
    if (sortBy != '') {
      params = params.append('sortBy', String(sortBy));
      params = params.append('sorttype', String(sorttype));
    }
    params = params.append('size', String(size));
    let url = this.API_SERVER + 'books';
    return this.httpClient.get<any>(url, { params });
  }

  public saveBook(book: any): Observable<any> {
    return this.httpClient.post(this.API_SERVER, book);
  }

  editbook(book: Bookedit): Observable<Bookedit> {
    let httpheaders = new HttpHeaders().set('Content-type', 'application/Json');
    let options = {
      headers: httpheaders,
    };
    let direction = this.API_SERVER + 'booksupdate/' + book.id;
    return this.httpClient.put<Bookedit>(direction, book, options);
  }

  BookDelete(bookid: String): Observable<number> {
    return this.httpClient.delete<number>(this.API_SERVER + 'delete/' + bookid);
  }
}
