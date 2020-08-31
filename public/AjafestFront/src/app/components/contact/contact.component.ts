import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { ContactFormService } from "../../services/contactForm.service";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
})
export class ContactComponent implements OnInit {
  contactForm;
  constructor(
    private formBuilder: FormBuilder,
    private contactFormService: ContactFormService
  ) {
    this.contactForm = this.formBuilder.group({
      name: "",
      email: "",
      message: "",
    });
  }

  ngOnInit(): void {}

  onSubmit(form) {
    this.contactFormService.PostMessages(form).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.warn(error.responseText);
        console.log({ error });
      }
    );
  }
}
