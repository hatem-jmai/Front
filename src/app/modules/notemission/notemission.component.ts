import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Dossier } from 'src/app/entities/dossier';
import { DashboardService } from '../dashboard.service';
import { dateFormat } from 'highcharts';

@Component({
  selector: 'app-notemission',
  templateUrl: './notemission.component.html',
  styleUrls: ['./notemission.component.scss']
})
export class NotemissionComponent implements OnInit {
sujet:string;
documents:string;
content:string;
dossier1:Dossier=new Dossier();
  constructor(private route:Router,private Myservice:DashboardService) { }

  ngOnInit() {
    this.Myservice.myDossier.subscribe(dossier => {
      console.log(dossier),
      this.dossier1 = dossier;
      this.sujet=this.dossier1.sujet;
    });
    
  }

  suivant(){
      this.route.navigateByUrl('/dashboard/fiche');
  }

}
