import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as html2pdf from 'html2pdf.js';
import { Dossier } from 'src/app/entities/dossier';
import { DashboardService } from '../dashboard.service';
import * as moment from 'moment';
@Component({
  selector: 'app-fiche-renseignement',
  templateUrl: './fiche-renseignement.component.html',
  styleUrls: ['./fiche-renseignement.component.scss']
})
export class FicheRenseignementComponent implements OnInit {
  dossier:Dossier;
  id_cadres=[];
  id_participant:number;
  gradeFonction:string="";
  cadres=[];
  date_deb:any;
  date_fin:any;
  diffInDays:any;
  frais_trans_no:boolean;
  frais_trans_yes:boolean;
  frais_res_no:boolean;
  frais_res_yes:boolean;
    constructor(private router:Router,private Myservice:DashboardService) { }

    ngOnInit() {
      this.Myservice.myDossier.subscribe(data => {
        console.log(data),
        this.dossier = data;
        this.id_cadres=this.dossier.cadre_id;
        console.log(this.id_cadres);
      });
      this.getCadres();
      this.duree();
      this.frais();
    }
    getCadres(){
      for(let i=0;i<this.id_cadres.length;i++){
          this.Myservice.getCadre(this.id_cadres[i]).subscribe((data:any) =>{
            console.log(data),
            error => console.log(error),
            this.cadres.push(data[0]);
            console.log(this.cadres);
          });
      }
      console.log(this.cadres);
    }
    grade_fonction(){
      let i=0;
      while (this.cadres[i].id != this.id_participant && i<this.cadres.length){
        i++;
      }
      this.gradeFonction=this.cadres[i].fonction+"/"+this.cadres[i].grade;
      console.log(this.gradeFonction);
    }
    duree(){
      this.date_deb = moment(this.dossier.date_deb);
      this.date_fin = moment(this.dossier.date_fin);
      this.diffInDays = Math.abs(this.date_deb.diff(this.date_fin, 'days')); 
    }
    frais(){
      if(this.dossier.frais_transport == true)
          this.frais_trans_yes=true;
      else
          this.frais_trans_no=true;

      if(this.dossier.frais_residence)
        this.frais_res_yes=true;
      else
      this.frais_res_no=true;
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
 
