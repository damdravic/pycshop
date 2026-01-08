
import { Component, ElementRef, EventEmitter, inject, OnInit, Output, ViewChild } from '@angular/core';
import {  FormsModule, NgForm } from '@angular/forms'
import { Auth } from '../../auth';
import { Store } from '@ngrx/store';
import { AuthActions } from '../../store/auth.actions';
import { response } from 'express';
import { CommonModule } from '@angular/common';

type AuthView ='login'| 'register' | 'forget-password';

@Component({
  selector: 'app-login-modal',
  imports: [FormsModule, CommonModule],
  templateUrl: './login-modal.html',
  styleUrl: './login-modal.css',
})
export class LoginModal implements OnInit {
  ngOnInit(): void {
    this.authView = 'login';
  }


 @Output() closeModal = new EventEmitter<void>()
 
 authView : AuthView = 'login';
 

 private authService = inject(Auth);
 private store = inject(Store);

 onClose(){
  this.authView = 'login';
  this.closeModal.emit();
 }




onSubmitLogin(loginForm : NgForm){
  console.log('Login Form Values:', loginForm.value);
  if(loginForm.invalid) return;
  this.store.dispatch(AuthActions.loginAuth({credentials : loginForm.value}))
}

onSubmitRegister(registerForm : NgForm){
 
}
onSubmitForgetPass(forgetPassForm : NgForm){

}



 login(){
  this.authView = 'login';
 }
 register(){
  this.authView = 'register';
 }
  forgetPassword(){
  this.authView = 'forget-password';
  }


}
