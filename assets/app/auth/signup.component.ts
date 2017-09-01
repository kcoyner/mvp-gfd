/*
 * signup.component.ts
 */

import  { Component, OnInit } from '@angular/core';
import  { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from './auth.service';
import { User } from  './user.model';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html'
})

export class SignupComponent implements OnInit {
    myForm: FormGroup;

    constructor(private authService: AuthService) {}
    // Need this here to get access to AuthService.
    // For this injection to work, this AuthService needs to be provided
    // it could be provided here in this component, but then it would be
    // limited to this component.  Better to make it widely available by
    // injecting a single instance of AuthService project-wide into
    // app.module.ts.

    onSubmit(){
        const user = new User(
          this.myForm.value.email,
          this.myForm.value.password,
          this.myForm.value.firstName,
          this.myForm.value.lastName
        );
        this.authService.signup(user)
          .subscribe(
            data => console.log(data),
            error => console.error(error)
          );
        this.myForm.reset();
    }

    ngOnInit() {
        this.myForm = new FormGroup({
            firstName: new FormControl(null, Validators.required),
            lastName: new FormControl(null, Validators.required),
            email: new FormControl(null, [
              Validators.required,
              Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
            ]),
            password: new FormControl(null, Validators.required)
        });
    }
}
