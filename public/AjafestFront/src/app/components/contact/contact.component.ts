import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { BenevoleFormsService } from "../../services/benevoleForms.service";
// import { ContactFormService } from "../../services/contactForm.service";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
})
export class ContactComponent implements OnInit {
  validated = false;
  contactForm = new FormGroup({
    name: new FormControl("", Validators.required),
    email: new FormControl("", [
      Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9-]+.[a-z]{2,4}$"),
    ]),
    message: new FormControl("", Validators.required),
  });

  constructor(
    // private contactFormService: ContactFormService,
    private benevoleFormsService: BenevoleFormsService
  ) {}

  ngOnInit(): void {}

  get name() {
    return this.contactForm.get("name");
  }

  get email() {
    return this.contactForm.get("email");
  }

  get message() {
    return this.contactForm.get("message");
  }

  onSubmit(contactForm) {
    // this.contactFormService.PostMessages(contactForm).subscribe(
    //   (response) => {
    //     console.log(response);
    //   },
    //   (error) => {
    //     console.warn(error.responseText);
    //     console.log({ error });
    //   }
    // );
    {
      this.benevoleFormsService.PostMessages(contactForm).subscribe();
      this.validated = true;
    }
  }
}
