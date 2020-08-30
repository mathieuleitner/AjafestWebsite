import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { Pages } from "../models/pages.model";

const apiUrl = "http://localhost:1337/pages";

@Injectable({
  providedIn: "root",
})
export class PagesService {
  constructor(private http: HttpClient) {}

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  public getPageBySlug(slug: string): Observable<Pages> {
    const url = `${apiUrl}?slug=${slug}`;
    return this.http.get<Pages>(url).pipe(
      tap((_) => console.log(`fetched Pages title=${slug}`)),
      catchError(this.handleError<Pages>(`getLineupsById page=${slug}`))
    );
  }
}
