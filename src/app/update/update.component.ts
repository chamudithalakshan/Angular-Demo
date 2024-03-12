import { Component } from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {HttpClient} from "@angular/common/http";
import {MatButton} from "@angular/material/button";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-update',
  standalone: true,
  imports: [
    FormsModule,
    MatFormField,
    MatInput,
    MatLabel,
    MatButton,
    ReactiveFormsModule
  ],
  templateUrl: './update.component.html',
  styleUrl: './update.component.css'
})
export class UpdateComponent {
  searchId='';

  constructor(private http:HttpClient,_snackBar: MatSnackBar) {
  }
  form =new FormGroup({
    id:new FormControl('',Validators.required),
    userId:new FormControl('',Validators.required),
    title:new FormControl('',Validators.required),
    body:new FormControl('',Validators.required)
  })
  updateData(){
    console.log(this.form)
    this.http.put <any>('https://jsonplaceholder.typicode.com/posts/'+this.searchId,{
      id:this.form.get('id')?.value,
      userId:this.form.get('userId')?.value,
      title:this.form.get('title')?.value,
      body:this.form.get('body')?.value

    }).subscribe(reponse=>{
      console.log(reponse)
      if (reponse){
        alert("updated")
      }

    })
  }
  loadData(){

    this.http.get<any>('https://jsonplaceholder.typicode.com/posts?id='+this.searchId).subscribe(reponse=>{
      this.form.patchValue({
        id:reponse[0].id,
        userId:reponse[0].userId,
        title:reponse[0].title,
        body:reponse[0].body,
      })

    })
  }
}
