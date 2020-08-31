import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Artists } from "../models/artists.model";
import { Observable, of } from "rxjs";
import { catchError, tap, map } from "rxjs/operators";

const apiUrl = "http://localhost:1337/artists";

@Injectable({
  providedIn: "root",
})
export class ArtistsService {
  constructor(private http: HttpClient) {}

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  public getArtists() {
    return this.http
      .get<Artists[]>(apiUrl)
      .pipe(catchError(this.handleError("getArtists", [])));
  }

  public getArtistsById(id: string): Observable<Artists> {
    const url = `${apiUrl}/${id}`;
    return this.http
      .get<Artists>(url)
      .pipe(catchError(this.handleError<Artists>(`getArtistsById id=${id}`)));
  }
}
