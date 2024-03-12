import { Component } from '@angular/core';
import {MatFormField, MatFormFieldModule} from "@angular/material/form-field";
import {MatInput, MatInputModule} from "@angular/material/input";
import {MatButton, MatButtonModule} from "@angular/material/button";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-new',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
  templateUrl: './new.component.html',
  styleUrl: './new.component.css'
})
export class NewComponent {
  constructor(private http:HttpClient,_snackBar: MatSnackBar) {
  }
form =new FormGroup({
  id:new FormControl('',Validators.required),
  userId:new FormControl('',Validators.required),
  title:new FormControl('',Validators.required),
  body:new FormControl('',Validators.required)
})
  createData(){
    console.log(this.form)
    this.http.post <any>('https://jsonplaceholder.typicode.com/posts',{
      id:this.form.get('id')?.value,
      userId:this.form.get('userId')?.value,
      title:this.form.get('title')?.value,
      body:this.form.get('body')?.value

    }).subscribe(reponse=>{
      console.log(reponse)
      if (reponse){
      alert("saved")
      }

    })
  }
}
