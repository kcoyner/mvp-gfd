/*
 * signup.component.ts
 */

import  { Component, OnInit } from '@angular/core';
import  { FormGroup } from '@angular/forms';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html'
})

export class SignupComponent implements OnInit {
    myForm: FormGroup;

    ngOnInit() {

    }
}
