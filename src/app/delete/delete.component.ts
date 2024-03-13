import {Component, OnInit} from '@angular/core';
import {NgForOf} from "@angular/common";
import {HttpClient} from "@angular/common/http";
import {MatButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {PostService} from "../services/post.service";

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
export class DeleteComponent implements OnInit{
  list:Array<any>=[]
  constructor(private http:HttpClient,private postService:PostService) {
  }
  ngOnInit() {
    this.postService.findAll().subscribe(reponse=>{
      console.log(reponse)
      this.list=reponse;
      console.log(this.list)
    })
  }
  delete(id:any){

    if (confirm('are you sure '+id)){

      this.postService.delete(id).subscribe(reponse=>{
        console.log(reponse)
        if (reponse){
          alert("deleted")
        }
      })

    }
  }

}
