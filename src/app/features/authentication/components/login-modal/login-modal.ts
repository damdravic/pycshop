import { CommonModule } from '@angular/common';
import { Component, ElementRef, EventEmitter, inject, Output, ViewChild } from '@angular/core';
import {  FormsModule, NgForm} from '@angular/forms'
import { Auth } from '../../auth';
import { Store } from '@ngrx/store';
import { AuthActions } from '../../store/auth.actions';
import { response } from 'express';

@Component({
  selector: 'app-login-modal',
  imports: [ CommonModule , FormsModule],
  templateUrl: './login-modal.html',
  styleUrl: './login-modal.css',
})
export class LoginModal {


 @Output() closeModal = new EventEmitter<void>()
 
 private authService = inject(Auth);
 private store = inject(Store);

 onClose(){
  this.closeModal.emit();
 }

 onSubmit(loginForm :  NgForm) {


  if(loginForm.invalid) return;

  this.store.dispatch(AuthActions.loginAuth({credentials : loginForm.value}))
 
}

}
