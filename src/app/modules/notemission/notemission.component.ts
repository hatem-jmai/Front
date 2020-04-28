import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notemission',
  templateUrl: './notemission.component.html',
  styleUrls: ['./notemission.component.scss']
})
export class NotemissionComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }

  suivant(){
this.route.navigateByUrl('/dashboard/fiche');
  }

}
