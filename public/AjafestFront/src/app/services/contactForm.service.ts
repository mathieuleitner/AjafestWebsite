import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class ContactFormService {
  private alias = "https://mailthis.to/madmat";
  constructor(private http: HttpClient) {}

  PostMessages(input: any) {
    return this.http.post(this.alias, input, { responseType: "text" }).pipe(
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
