import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {HousingListComponent} from "./housing-list/housing-list.component";
import {NavbarComponent} from "./navbar/navbar.component";
import {HomeComponent} from "./home/home.component";
import {CommonModule, DatePipe} from "@angular/common";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HousingListComponent, NavbarComponent, RouterLink, RouterLinkActive, HomeComponent, CommonModule, ReactiveFormsModule, DatePipe, FormsModule],
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
