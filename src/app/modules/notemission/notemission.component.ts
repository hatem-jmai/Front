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
id:number;
valid:boolean=false;
  constructor(private route:Router,private Myservice:DashboardService) { }

  ngOnInit() {
    this.Myservice.myDossier.subscribe(dossier => {
      console.log(dossier),
      this.sujet=dossier.sujet;
      this.note.dossier_id=dossier.id;
      console.log(dossier.id);
      this.getNote(dossier.id);
    });
    
    
  }

  suivant(){
    console.log(this.note);
    console.log(this.valid);
    if(this.valid == true)
      this.editNote();
    else
      this.newNote();
    this.route.navigateByUrl('/dashboard/fiche');
  }

   getNote(id :any){
    this.Myservice.getNote(id).subscribe((data:any) => {
      console.log(data),
      error => console.log(error);
      for (const key in data) {
        if (data.hasOwnProperty(key)) {
          this.note.id=data[key].id;
          this.note.date=data[key].date;
          this.note.description=data[key].description;
          this.note.piece_jointe=data[key].piece_jointe;
        }
      }
      this.valid=true;
    });
  }
  
  
 editNote(){
  this.Myservice.editNote(this.note).subscribe(data => {
    console.log(data),
    error => console.log(error);
  });
} 

newNote(){
  console.log(this.note);
  this.Myservice.newNote(this.note).subscribe(data => {
    console.log(data),
    error => console.log(error);
  });
}
 
}
