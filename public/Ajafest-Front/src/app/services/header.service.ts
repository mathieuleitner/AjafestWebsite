import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { Header } from "../models/header.model";

const apiUrl = "http://localhost:1337/header";

@Injectable({
  providedIn: "root",
})
export class HeaderService {
  constructor(private http: HttpClient) {}

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  public getHeader() {
    return this.http.get<Header>(apiUrl).pipe(
      tap((header) => console.log(header)),
      catchError(this.handleError("getHeader", []))
    );
  }

  public getLogos() {
    return this.http.get<{ url: string }>("http://localhost:1337/logos").pipe(
      tap((logos) => console.log("get logo")),
      catchError(this.handleError("getLogo", []))
    );
  }
}
