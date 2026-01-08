import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { LoginModal } from "../../../../features/authentication/components/login-modal/login-modal";
import { Store } from '@ngrx/store';
import { Customer } from '../../../../features/authentication/models/customer';
import { Observable } from 'rxjs';
import { selectAuthentificatedCustomer, selectAuthState } from '../../../../features/authentication/store/auth.selectors';
import { ProfileModal } from '../../../../features/authentication/components/profile-modal/profile-modal';

@Component({
  selector: 'app-account',
  imports: [CommonModule, LoginModal, ProfileModal],
  templateUrl: './account.html',
  styleUrl: './account.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Account implements OnInit {
logout() {
throw new Error('Method not implemented.');
}



  @ViewChild('loginModal') loginModal !: ElementRef<HTMLDialogElement>;
  @ViewChild('profileModal') profileModal !: ElementRef<HTMLDialogElement>;

  private store = inject(Store);

  customer$ !: Observable<Customer | null>;

  accountMenuDisplay: boolean = false;



  ngOnInit(): void {
    this.customer$ = this.store.select(selectAuthentificatedCustomer);
  }


  //open authView modal
  openModal() {
    this.loginModal.nativeElement.showModal();
  }

  //open profile modal
  openProfileModal() {
    this.profileModal.nativeElement.showModal();
  }

  //close authView modal
  closeModal() {
    this.loginModal.nativeElement.close();
    console.log('modal closed');
  }

  //close profile modal
  closeProfileModal() {
    this.profileModal.nativeElement.close();
  }

}
