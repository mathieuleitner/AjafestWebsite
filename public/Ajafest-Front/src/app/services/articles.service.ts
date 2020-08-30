import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Articles } from "../models/articles.model";
import { Observable, of } from "rxjs";
import { catchError, tap } from "rxjs/operators";

const apiUrl = "http://localhost:1337/articles";

@Injectable({
  providedIn: "root",
})
export class ArticlesService {
  constructor(private http: HttpClient) {}

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  public getArticles() {
    return this.http.get<Articles[]>(apiUrl).pipe(
      tap((articles) => console.log("get articles")),
      catchError(this.handleError("getArticles", []))
    );
  }

  public getArticleBySlug(slug: string) {
    const url = `${apiUrl}/?slug=${slug}`;
    return this.http.get(url).pipe(
      tap((_) => console.log(`fetched Articles id=${slug}`)),
      catchError(this.handleError(`getArticlesById id=${slug}`))
    );
  }
}
