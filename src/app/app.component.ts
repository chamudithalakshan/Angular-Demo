import {Component, NgModule} from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {HousingListComponent} from "./housing-list/housing-list.component";
import {NavbarComponent} from "./navbar/navbar.component";
import {HomeComponent} from "./home/home.component";
import {CommonModule, DatePipe} from "@angular/common";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButton} from "@angular/material/button";
import {HttpClientModule} from "@angular/common/http";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatSnackBar, MatSnackBarModule} from "@angular/material/snack-bar";
import {PostService} from "./services/post.service";
import {LoadingComponent} from "./loading/loading.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HousingListComponent, NavbarComponent, RouterLink, RouterLinkActive, HomeComponent, CommonModule, ReactiveFormsModule, DatePipe, FormsModule, MatButton, HttpClientModule, MatSnackBarModule, LoadingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {


  birthday = new Date();
  title = 'my-app';
  registrationForm = new FormGroup({
    userName: new FormControl(''),
    password: new FormControl('')


  });



}
