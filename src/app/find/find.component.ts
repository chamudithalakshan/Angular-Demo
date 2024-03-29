import { Component } from '@angular/core';
import {MatFormField, MatFormFieldModule} from "@angular/material/form-field";
import {MatInput, MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {NgForOf} from "@angular/common";
import {PostService} from "../services/post.service";

@Component({
  selector: 'app-find',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    NgForOf
  ],
  templateUrl: './find.component.html',
  styleUrl: './find.component.css'
})
export class FindComponent {
searchId='';
  list:Array<any>=[]
constructor(private http:HttpClient,private postService:PostService) {
}
  loadData(){

    this.postService.find(this.searchId).subscribe(reponse=>{
      console.log(reponse)
      this.list=reponse;
      console.log(this.list)
    })
  }
}
