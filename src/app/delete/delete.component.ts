import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";
import {HttpClient} from "@angular/common/http";
import {MatButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-delete',
  standalone: true,
  imports: [
    NgForOf,
    MatButton,
    MatIcon
  ],
  templateUrl: './delete.component.html',
  styleUrl: './delete.component.css'
})
export class DeleteComponent {
  list:Array<any>=[]
  constructor(private http:HttpClient) {
  }
  ngOnInit() {
    this.http.get<any>('https://jsonplaceholder.typicode.com/posts').subscribe(reponse=>{
      console.log(reponse)
      this.list=reponse;
      console.log(this.list)
    })
  }
  delete(id:any){

    if (confirm('are you sure '+id)){

      this.http.delete<any>('https://jsonplaceholder.typicode.com/posts/'+id).subscribe(reponse=>{
        console.log(reponse)
        if (reponse){
          alert("deleted")
        }
      })

    }
  }

}
