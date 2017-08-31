/*
 * signin.component.ts
 */

import  { Component } from '@angular/core';
import  { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html'
})

export class SigninComponent {
    myFormSignin: FormGroup;

    onSubmit(){
        console.log(this.myFormSignin);
        this.myFormSignin.reset();
    }

    ngOnInit() {
        this.myFormSignin = new FormGroup({
            email: new FormControl(null, [
              Validators.required,
              Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
            ]),
            password: new FormControl(null, Validators.required)
        })
    }
}
