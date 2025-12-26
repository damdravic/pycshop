import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthActions } from './features/authentication/store/auth.actions';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class App implements OnInit{

  protected readonly title = signal('pycshop');

  private store = inject(Store);


  ngOnInit(): void {
   this.store.dispatch(AuthActions.loadMe());
  }



}
