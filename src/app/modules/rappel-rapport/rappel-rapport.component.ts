import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rappel-rapport',
  templateUrl: './rappel-rapport.component.html',
  styleUrls: ['./rappel-rapport.component.scss']
})
export class RappelRapportComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  suivant(){
    this.router.navigateByUrl('/dashboard/posts');
  }


}
