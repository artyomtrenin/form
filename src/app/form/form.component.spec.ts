import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormComponent } from './form.component';
import {FormBuilder} from '@angular/forms';

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;
  let button: HTMLButtonElement;
  let log: HTMLInputElement;
  let pas: HTMLElement;
  // let logReq: HTMLElement;
  // let pasReq: HTMLElement;
  // let pasLen: HTMLElement;
  // let form: HTMLFormElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormComponent ],
      providers: [{provide: FormBuilder}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    button = fixture.nativeElement.querySelector('button');
    log = fixture.nativeElement.querySelector('#log');
    pas = fixture.nativeElement.querySelector('#pas');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('button should be disabled', () => {
    expect(button.disabled).toBeTrue();
  });

  it('button should be enabled with valid form', () => {
    component.form.patchValue({login: 'aaaa'});
    component.form.patchValue({password: '123456'});
    fixture.detectChanges();
    expect(button.disabled).toBeFalse();
  });

  it('button should be disabled with invalid password', () => {
    component.form.patchValue({login: 'aaaa'});
    component.form.patchValue({password: '12345'});
    fixture.detectChanges();
    expect(button.disabled).toBeTrue();
  });

  it('button should be disabled with invalid login', () => {
    component.form.patchValue({password: '123456'});
    fixture.detectChanges();
    expect(button.disabled).toBeTrue();
  });

  it('should be login require error', () => {
    console.log(fixture.nativeElement.querySelector('#logReq')); // null
    component._login?.markAllAsTouched();
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('#logReq')).not.toBeNull();
  });

  it('should be password require error', () => {
    console.log(fixture.nativeElement.querySelector('#pasReq')); // null
    component._password?.markAllAsTouched();
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('#pasReq')).not.toBeNull();
  });

  it('should be password length error', () => {
    console.log(fixture.nativeElement.querySelector('#pasLen')); // null
    component.form.patchValue({password: '123'});
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('#pasLen')).not.toBeNull();
  });
});
