import { Component, OnInit, ViewChild } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import * as jspdf from 'jspdf';
import html2canvas from  'html2canvas' ;
import * as html2pdf from 'html2pdf.js';
import { Dossier } from 'src/app/entities/dossier';
import { DatePipe, formatDate } from '@angular/common';
import { Pays_destination } from 'src/app/entities/pays_destination';
import { Direction_centrale } from 'src/app/entities/direction_centrale';
import { cadreINS } from 'src/app/entities/cadreINS';
import { conditionallyCreateMapObjectLiteral } from '@angular/compiler/src/render3/view/util';

export interface PeriodicElement {
 
}


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
dossier:Dossier= new Dossier();
mission:Dossier;
pays=[];
Allcadres=[];
directions=[];
organismes=[];
programmes=[];
cadre1=[];
cadre2=[];
cadre3=[];
cadre4=[];
cadre5=[];
villes=[];
Destination:Pays_destination;
Direction:Direction_centrale;
cadreINS1=[];
cadreINS2=[];
cadreINS3=[];
cadreINS4=[];
cadreINS5=[];
//idSelect=0;
id="0";
fonction1:string;
fonction2:string;
fonction3:string;
fonction4:string;
fonction5:string;
grade1:string;
grade2:string;
grade3:string;
grade4:string;
grade5:string;
dossier1:Dossier;
frais_residence_ins:boolean;
frais_transport_ins:boolean;
tab=[];
direction1:string;
direction2:string;
direction3:string;
direction4:string;
direction5:string;

  constructor(private router:Router,private Myservice:DashboardService) { }

  ngOnInit() {
    if(this.Myservice.id_dossier != null){
      this.getAllDirections();
      this.getAllPays();
      this.getAllOrganismesEtrangers();
      this.getAllProgrammes();
      this.getDossier();
    }
    
    else{
      this.dossier.direction="";
    this.dossier.pays_destination_libelle="";
    this.dossier.statut="";
    this.dossier.organisme_etranger_libelle="";
    this.dossier.programme_libelle="";
    this.dossier.ville="";
    this.dossier.annee=2020;
    this.dossier.type_visite="mission";
    this.dossier.frais_transport=false;
    this.dossier.frais_residence=false;
    this.fonction1="";
    this.fonction2="";
    this.grade1="";
    this.grade2="";
    this.getAllDirections();
    this.getAllPays();
    this.getAllOrganismesEtrangers();
    this.getAllProgrammes();
    }
    
    
    
  }
  Next(){
    this.router.navigateByUrl('/dashboard/noteM');
  }
selected(){
  console.log(this.dossier.pays_destination_libelle);
  this.Destination=new Pays_destination();
  this.Destination.pays_destination_libelle=this.dossier.pays_destination_libelle;
  this.Myservice.getAllVilles(this.Destination).subscribe(data=>{
    console.log(data),
    error => console.log(error);
    if (this.villes.length> 0) {
      this.villes.splice(0,this.villes.length);
    };
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        this.villes.push(data[key]);
      }
    }
  });
}
getCadreParDirection(event : any){
  this.id=event.target.id;
  let cadres=[];
  this.Direction=new Direction_centrale();
  this.Direction.libelle_direction=event.target.value;
  this.Myservice.getCadreParDirection(this.Direction).subscribe(data=>{
    console.log(data),
    error => console.log(error);
    if (cadres.length> 0) {
      cadres.splice(0,cadres.length);
    };
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
          cadres.push(data[key]);
      }
    }
    switch(this.id){
      case "1" : this.cadre1 = cadres;
                 break;
      case "2" : this.cadre2 = cadres;
                 break;
      case "3" : this.cadre3 = cadres;
                 break;
      case "4" : this.cadre4 = cadres;
                 break;
      case "5" : this.cadre5 = cadres;
                 break;           
    } 
  });
}
getCadre(event: any){
  let id = event.target.id;
  let cadre = [];
  let cadreins = [];
  //if(id == this.id){
    switch(id){
      case "1" : cadreins = this.cadre1;
                 break;
      case "2" : cadreins = this.cadre2;
                 break;
      case "3" : cadreins = this.cadre3;
                 break;
      case "4" : cadreins = this.cadre4;
                 break;
      case "5" : cadreins = this.cadre5;
                 break;           
    } 
    for (let i=0;i<cadreins.length;i++) {
      if (cadreins[i].id == event.target.value) {
          cadre.push(cadreins[i].id);
          cadre.push(cadreins[i].fonction);
          cadre.push(cadreins[i].grade);
          switch(id){
            case "1" : this.cadreINS1 = cadre;
                       break;
            case "2" : this.cadreINS2 = cadre;
                       break;
            case "3" : this.cadreINS3 = cadre;
                       break;
            case "4" : this.cadreINS4 = cadre;
                       break;
            case "5" : this.cadreINS5 = cadre;
                       break;           
          } 
         //this.idSelect = cadreins[i].id;
          //console.log(this.cadreINS5[0]);
      }
    } 
  //}
}
getAllDirections(){
  this.Myservice.getAllDirections().subscribe(data=>{
    console.log(data),
    error => console.log(error);
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        this.directions.push(data[key]);
      }
    }
  });
}
  getAllPays(){
    this.Myservice.getAllPays().subscribe(data=>{
      console.log(data),
      error => console.log(error);
      for (const key in data) {
        if (data.hasOwnProperty(key)) {
          this.pays.push(data[key]);
        }
      }
    });
  }
  getAllOrganismesEtrangers(){
    this.Myservice.getAllOrganismesEtrangers().subscribe(data=>{
      console.log(data),
      error => console.log(error);
      for (const key in data) {
        if (data.hasOwnProperty(key)) {
          this.organismes.push(data[key]);
        }
      }
    });
  }
  getAllProgrammes(){
    this.Myservice.getAllProgrammes().subscribe(data=>{
      console.log(data),
      error => console.log(error);
      for (const key in data) {
        if (data.hasOwnProperty(key)) {
          this.programmes.push(data[key]);
        }
      }
    });
  }
  getAllCadres(){
    this.Myservice.getAllCadres().subscribe(data=>{
      console.log(data),
      error => console.log(error);
      for (const key in data) {
        if (data.hasOwnProperty(key)) {
          this.Allcadres.push(data[key]);
        }
      }
    });
  }
  remplirCadre_id(cadreINS :Array<any>,cadreDossier :Array<any>){
    if(cadreINS.length>0)
      cadreDossier.push(cadreINS[0]) ;   
  }
  createVisiteMission(){
    console.log(this.dossier);
    this.remplirCadre_id(this.cadreINS1,this.dossier.cadre_id);
    this.remplirCadre_id(this.cadreINS2,this.dossier.cadre_id);
    this.remplirCadre_id(this.cadreINS3,this.dossier.cadre_id);
    this.remplirCadre_id(this.cadreINS4,this.dossier.cadre_id);
    this.remplirCadre_id(this.cadreINS5,this.dossier.cadre_id);
    console.log(this.dossier.cadre_id);  
    this.Myservice.createDossier(this.dossier).subscribe((data:any) =>{
      console.log(data),
      error => console.log(error),
      this.Myservice.setDossier(this.dossier);

    });
    //this.registerForm.reset();
  }
  
   suivant(){
   this.createVisiteMission();
    this.router.navigateByUrl('/dashboard/noteM');
  }
  getDossier(){
    let obj1:cadreINS;
    let obj2:cadreINS;
    let obj3:cadreINS;
    let obj4:cadreINS;
    let obj5:cadreINS;
    this.Myservice.getDossier(this.Myservice.id_dossier).subscribe(data=>{
      console.log(data),
      error => console.log(error);
      for (const key in data) {
        if (data.hasOwnProperty(key)) {
          this.dossier.statut=data[key].statut;
          this.dossier.sujet=data[key].sujet;
          this.dossier.pays_destination_libelle=data[key].pays_destination_id;
          this.dossier.nature=data[key].nature;
          this.dossier.organisme_etranger_libelle=data[key].organisme_etranger_id;
          this.dossier.nbr_participant_sp=data[key].nb_participant_sp;
          this.dossier.nbr_participant_ins=data[key].nb_participant_ins;
          this.dossier.langues=data[key].langues;
          this.dossier.frais_transport=data[key].frais_transport;
          this.dossier.frais_residence=data[key].frais_residence;
          this.dossier.date_limite_reponce=data[key].date_limite_reponce;
          this.dossier.date_deb=data[key].date_deb;
          this.dossier.date_fin=data[key].date_fin;
          this.dossier.date_arrive_invitation=data[key].date_arrive_visite;
          console.log(data[key].ville);
          console.log(data[key].programme_libelle);
          console.log(data[key].direction);
          this.dossier.ville=data[key].ville;
          console.log(this.dossier.ville);
          this.dossier.programme_libelle=data[key].programme_libelle;
          this.dossier.direction=data[key].direction;
            
            obj1=data[key].cadre_participe[0];
            obj2=data[key].cadre_participe[1];
            obj3=data[key].cadre_participe[2];
            obj4=data[key].cadre_participe[3];
            obj5=data[key].cadre_participe[4];
            
            if(obj1 != null){
              this.direction1=obj1.direction;
              this.cadre1.push(obj1);
            }
            if(obj2 != null){
              this.direction2=obj2.direction;
              this.cadre2.push(obj2);
            }
            if(obj3 != null){
              this.direction3=obj3.direction;
              this.cadre3.push(obj3);
            }
            if(obj4 != null){
              this.direction4=obj4.direction;
              this.cadre4.push(obj4);
            }
            if(obj5 != null){
              this.direction5=obj5.direction;
              this.cadre5.push(obj5);
            }
            
          
          if(this.dossier.frais_residence == false)
            this.frais_residence_ins=true;
          if(this.dossier.frais_transport== false)
            this.frais_transport_ins=true;  
        }
      }
    });
  }

  captureScreen()  
  {  
    var data = document.getElementById('contentToConvert');  
    html2canvas(data).then(canvas => {  
      // Few necessary setting options  
      var imgWidth = 208;   
      var pageHeight = 295;    
      var imgHeight = canvas.height * imgWidth / canvas.width;  
      var heightLeft = imgHeight;  

      const contentDataURL = canvas.toDataURL('image/png')  
      let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF  
      var position = 0;  
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)  
      pdf.save('MYPdf.pdf'); // Generated PDF   
    });  
  }  

  download(){
    const options= {
      name:'dossierVisite.pdf',
      image: { type: 'jpeg'},
      html2canvas: {},
      jsPDF:{orientation:'landscape'}
    }

    const element:Element = document.getElementById('dossier');
    html2pdf()
        .from(element)
        .set(options)
        .save()
  }

}
