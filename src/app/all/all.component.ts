import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {NgForOf} from "@angular/common";
import {PostService} from "../services/post.service";

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
  list: Array<any> = [];

  constructor(private http: HttpClient, private postService: PostService) {}

  ngOnInit() {
    this.postService.findAll().subscribe(response => {
      console.log(response);
      this.list = response;
      console.log(this.list);
    });
  }
}
