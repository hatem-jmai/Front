import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Dossier } from 'src/app/entities/dossier';
import { DashboardService } from '../dashboard.service';
import { Note } from 'src/app/entities/note';

@Component({
  selector: 'app-notemission',
  templateUrl: './notemission.component.html',
  styleUrls: ['./notemission.component.scss']
})
export class NotemissionComponent implements OnInit {
note:Note=new Note();
sujet:string;
  constructor(private route:Router,private Myservice:DashboardService) { }

  ngOnInit() {
    this.Myservice.myDossier.subscribe(dossier => {
      console.log(dossier),
      this.sujet=dossier.sujet;
      this.note.dossier_id=dossier.id;
      this.note.type=dossier.type_visite;
      console.log(dossier.id);
    });
    
  }

  suivant(){
    this.newNote();
    this.route.navigateByUrl('/dashboard/fiche');
  }
  newNote(){
    console.log(this.note);
    this.Myservice.newNote(this.note).subscribe(data => {
      console.log(data),
      error => console.log(error);
    });
  }
  /* getNote(){
    this.Myservice.getNote(this.note.dossier_id).subscribe(data => {
      console.log(data),
      error => console.log(error);
    });
  } */
}
