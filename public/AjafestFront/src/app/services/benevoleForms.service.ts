import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class BenevoleFormsService {
  private url = "http://localhost:1337/benevole-forms";
  constructor(private http: HttpClient) {}

  PostMessages(input: any) {
    return this.http.post(this.url, input, { responseType: "text" }).pipe(
      map(
        (response) => {
          if (response) {
            return response;
          }
        },
        (error: any) => {
          return error;
        }
      )
    );
  }
}
