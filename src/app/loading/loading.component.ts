import { Component } from '@angular/core';
import {MatProgressSpinner} from "@angular/material/progress-spinner";
import {LoadingService} from "../services/loading.service";
import {AsyncPipe, NgIf} from "@angular/common";

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [
    MatProgressSpinner,
    NgIf,
    AsyncPipe
  ],
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.css'
})
export class LoadingComponent {
constructor(public loadingService:LoadingService) {

}

}
