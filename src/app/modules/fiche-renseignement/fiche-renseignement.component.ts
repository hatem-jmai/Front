import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as html2pdf from 'html2pdf.js';
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

    download(){
      const options= {
        name:'ficheRenseignement.pdf',
        image: { type: 'jpeg'},
        html2canvas: {},
        jsPDF:{orientation:'landscape'}
      }
  
      const element:Element = document.getElementById('fiche');
      html2pdf()
          .from(element)
          .set(options)
          .save()
    }

}
 
