import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  constructor(private route:Router,private Myservice:DashboardService) { }

  ngOnInit() {
  }
  suivant(){
    this.route.navigateByUrl('/dashboard/borderou');
  }

}
