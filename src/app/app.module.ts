import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [

  ],
  imports: [
    BrowserModule,
    FormsModule,
    BookComponent,
    CommonModule

  ],
  providers: []
})
export class AppModule { }
