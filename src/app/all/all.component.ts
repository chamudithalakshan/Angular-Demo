import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-all',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './all.component.html',
  styleUrl: './all.component.css'
})
export class AllComponent implements OnInit{
  list:Array<any>=[]
constructor(private http:HttpClient) {
}
  ngOnInit()  {
  this.http.get<any>('https://jsonplaceholder.typicode.com/posts').subscribe(reponse=>{
    console.log(reponse)
    this.list=reponse;
    console.log(this.list)
  })
  }
}
