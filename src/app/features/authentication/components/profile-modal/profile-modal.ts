import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-profile-modal',
  imports: [],
  templateUrl: './profile-modal.html',
  styleUrl: './profile-modal.css',
})
export class ProfileModal {

@Output() closeModal = new EventEmitter<void>();



onClose(){
  this.closeModal.emit();
}


}
