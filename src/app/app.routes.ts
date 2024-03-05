import { Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ContactComponent} from './contact/contact.component';
import {MainComponent} from "./main/main.component";


export const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'contact', component: ContactComponent }
];
