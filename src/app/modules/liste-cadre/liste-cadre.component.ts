import { Component, OnInit,ViewChild  } from '@angular/core';
import { MatTableDataSource,MatSort,MatPaginator } from '@angular/material';
import { Router } from '@angular/router';
import { DashboardService } from '../dashboard.service';
import {MatDialog} from  '@angular/material/dialog' ;
import { SignInComponent } from 'src/app/shared/components/sign-in/sign-in.component';
import { SignUpComponent } from 'src/app/shared/components/sign-up/sign-up.component';
import { AjoutecadreComponent } from '../ajoutecadre/ajoutecadre.component';

@Component({
  selector: 'app-liste-cadre',
  templateUrl: './liste-cadre.component.html',
  styleUrls: ['./liste-cadre.component.scss']
})
export class ListeCadreComponent implements OnInit {

  constructor(private router:Router,private Myservice:DashboardService, public dialog:MatDialog) { 
    this.filteredCadres = this.cadres;
    this.listFilter = '';
  }

  openDialog () {
    const dialogRef = this.dialog.open(AjoutecadreComponent);

    dialogRef.afterClosed (). subscribe ( result => {
       console .log ( `Dialog result: $ {result} ` );
    });
  }

 
  startindex =0;
  endindex=5;

  
  items=[];
  id:number;
  pageTitle = 'liste Cadre Ins ';
    _listFilter = '';
    
    filteredCadres= [];
    cadres= [];
    
  
  
  ngOnInit() {
    this.Myservice.getAllCadres().subscribe(data => {
      console.log(data);
      for (let key in data)
      if(data.hasOwnProperty(key))
      this.cadres.push(data[key]);
      console.log(this.cadres)
    });
    
  }
  

  updateindex(pageIndex){
  this.startindex= pageIndex * 5;
  this.endindex= this.startindex + 5;
  console.log(this.startindex)
  console.log(this.endindex)
  }


  getarray(length){
    return new Array(length);

  }
  
    get listFilter(): string {
        return this._listFilter;
    }
 
    set listFilter(value: string) {
        this._listFilter = value;
        this.filteredCadres = this.listFilter ? this.doFilter(this.listFilter) : this.cadres;
    }
 
    edit(element: any){
      console.log(element.target.value);
      this.Myservice.id_cadre=element.target.value;
 
   
  }

 
    doFilter(filterBy: string):any  [] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.cadres.filter((cadreINS: any) =>
        cadreINS.nom.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }
 
  
}

