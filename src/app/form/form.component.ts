import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  form!: FormGroup;

  constructor(private fb: FormBuilder) {
    this._createForm();
  }

  private _createForm(): void {
    this.form = this.fb.group({
      login: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get _login(): AbstractControl | null {
    return this.form.get('login');
  }

  get _password(): AbstractControl | null {
    return this.form.get('password');
  }

  ngOnInit(): void {
  }

}
