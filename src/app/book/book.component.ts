import { Component } from '@angular/core';
import { bookModel } from '../models/book.model';
import { OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-book',
  standalone: true,
  templateUrl: './book.component.html',
  styleUrl: './book.component.css',
  imports: [CommonModule,FormsModule]
})
export class BookComponent implements OnInit{
 
  newBook: string = ' ';
  newAuthor: string = ' ';
  

  books: bookModel[] = [];
  ngOnInit(): void {
    console.log("Initialised")
    let savedBooks=localStorage.getItem("books");
    this.books=savedBooks ? JSON.parse(savedBooks) : [];
  }
  
  addBook(){
    console.log("Added")
    if (this.newBook && this.newAuthor) {
      let newBookArray : bookModel= {
        id: Date.now(),
        title: this.newBook,
        author: this.newAuthor,
      };
      console.log("Ethiii");
      this.books.push(newBookArray);
      this.newAuthor='';
      this.newBook='';
      localStorage.setItem("books",JSON.stringify(this.books))
    }
  }

  deleteBook(index:number) {
    this.books.splice(index,1);
    localStorage.setItem("books",JSON.stringify(this.books))

  }

  retrieveBook()
  {
    let allBooks=localStorage.getItem("books");
    this.books=allBooks ? JSON.parse(allBooks):[];
  }
}
