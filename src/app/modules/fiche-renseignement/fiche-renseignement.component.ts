import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fiche-renseignement',
  templateUrl: './fiche-renseignement.component.html',
  styleUrls: ['./fiche-renseignement.component.scss']
})
export class FicheRenseignementComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  suivant(){
    this.router.navigateByUrl('/dashboard/rappel-rapport');
  }
}
