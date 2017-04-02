import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';

// Must export the config
export const firebaseConfig = {
  apiKey: 'AIzaSyA5x-tG9eDE2WBZfUjjHKN4KKxXb57uqw0',
  authDomain: 'businesscontacts-7fdd0.firebaseapp.com',
  databaseURL: 'https://businesscontacts-7fdd0.firebaseio.com',
  storageBucket: 'businesscontacts-7fdd0.appspot.com',
  messagingSenderId: '1000931417326'
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule, 
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
