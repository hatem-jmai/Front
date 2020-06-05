import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardService } from '../dashboard.service';
import { TableauSuivi } from 'src/app/entities/tableauSuivi';
import { cadreINS } from 'src/app/entities/cadreINS';
@Component({
  selector: 'app-tableau-suivi',
  templateUrl: './tableau-suivi.component.html',
  styleUrls: ['./tableau-suivi.component.scss']
})
export class TableauSuiviComponent implements OnInit {
  tableau_suivi:Array<TableauSuivi>=[];
  suivi:TableauSuivi;
  cadres=[];
  tab=[];
  constructor(private router:Router,private Myservice:DashboardService) { }

  ngOnInit() {
    this.Myservice.getTableauSuivi().subscribe(data => {
      console.log(data);
      for (let key in data){
        if(data.hasOwnProperty(key)){
          for(let cadre of data[key].cadre_participe){
            console.log(cadre);
            this.suivi=new TableauSuivi();
            this.suivi.nom=cadre.nom;
            this.suivi.prenom=cadre.prenom;
            this.suivi.grade=cadre.grade;
            this.suivi.fonction=cadre.fonction;
            this.suivi.direction=cadre.direction;
            this.suivi.nature=data[key].nature;
            this.suivi.nbr_participant_ins=data[key].nbr_participant_ins;
            this.suivi.nbr_participant_sp=data[key].nbr_participant_sp;
            this.suivi.objectif_visite=data[key].objectif_visite;
            this.suivi.organisme_etranger_lib=data[key].organisme_etranger_lib;
            this.suivi.pays_destination_lib=data[key].pays_destination_lib;
            this.suivi.ville=data[key].ville;
            this.suivi.sujet=data[key].sujet;
            this.suivi.type_visite=data[key].type_visite;
            this.suivi.date_arrive_visite=data[key].date_arrive_visite;
            this.suivi.date_deb=data[key].date_deb;
            this.suivi.date_fin=data[key].date_fin;
            this.suivi.frais_residence=data[key].frais_residence;
            this.suivi.frais_transport=data[key].frais_transport;
            this.tab.push(this.suivi);
          }
        }
      } 
    });
    console.log(this.tab);
  }
 

}
