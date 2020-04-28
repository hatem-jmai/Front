import { Component, OnInit, ViewChild } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import * as jspdf from 'jspdf';
import html2canvas from  'html2canvas' ;
import { Dossier } from 'src/app/entities/dossier';
import { DatePipe, formatDate } from '@angular/common';
import { Pays_destination } from 'src/app/entities/pays_destination';

export interface PeriodicElement {
 
}


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
dossier:Dossier;
mission:Dossier;
pays=[];
organismes=[];
//pays_destination:string='';
villes=[];
Destination:Pays_destination;
ville_destination:string='';
//organisme_etranger:string='selectionner une statut';
  constructor(private router:Router,private Myservice:DashboardService) { }

  ngOnInit() {
    this.getAllPays();
    this.getAllOrganismesEtrangers();
    this.dossier = new Dossier();
    this.dossier.annee=2020;
    this.dossier.type_visite="mission";
    
  }
/*
  changerFormatDate(){
    
    this.dateArriveVisite=formatDate(this.dossier.date_arrive_visite, 'dd-MM-yyyy','en-US');
    this.dateDeb=formatDate(this.dossier.date_deb, 'dd-MM-yyyy','en-US');
    this.dateFin=formatDate(this.dossier.date_fin, 'dd-MM-yyyy','en-US');
    this.dateLimiteReponce=formatDate(this.dossier.date_limite_reponce, 'dd-MM-yyyy','en-US');

    var momentVariable = moment(this.dateArriveVisite, 'MM-DD-YYYY');  
    var stringvalue = momentVariable.format('YYYY-MM-DD');  

  }
*/
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
  createVisiteMession(){
    console.log(this.dossier);
    
    this.Myservice.createDossier(this.dossier).subscribe((data:any) =>{
      console.log(data),
      error => console.log(error),
      this.mission = new Dossier();
      this.mission=data;
      console.log(this.mission);
    });
    //this.registerForm.reset();
  }

   suivant(){
    this.createVisiteMession();
    //this.router.navigateByUrl('/dashboard/noteM');
  }

captureScreen()  
{  console.log("ahla")
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

}
