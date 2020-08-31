import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { catchError } from "rxjs/operators";

const apiUrl = "http://localhost:1337/benevole-page";

@Injectable({
  providedIn: "root",
})
export class BenevolePageService {
  constructor(private http: HttpClient) {}

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  public getBenevolePage() {
    return this.http
      .get(apiUrl)
      .pipe(catchError(this.handleError("get Benevole Page", [])));
  }
}
