import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { BehaviorSubject} from 'rxjs';
import { Dossier } from '../entities/dossier';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
private dossier = new BehaviorSubject<Dossier>(new Dossier());
myDossier=this.dossier.asObservable();
id_dossier:any;
  constructor(private http:HttpClient) {};
  setDossier(dossier:Dossier){
    this.dossier.next(dossier);
  }
  
  createDossier(dossier: Dossier):Observable<object>{
    return this.http.post('http://localhost:8000/dossiervisite/new',dossier);
  }
  editDossier(dossier: Dossier):Observable<object>{
    return this.http.put('http://localhost:8000/dossiervisite/edit/'+dossier.id,dossier);
  }

  getAllPays():Observable<object>{
    return this.http.get('http://localhost:8000/paysdestination');
  }
  getAllVilles(Destination:object):Observable<object>{
    return this.http.post('http://localhost:8000/villedestination/villes',Destination);
  }
  getAllOrganismesEtrangers():Observable<object>{
    return this.http.get('http://localhost:8000/organismeEtranger');
  }
  getAllProgrammes():Observable<object>{
    return this.http.get('http://localhost:8000/programmeCooperation/programmes');
  }
  getAllCadres():Observable<object>{
    return this.http.get('http://localhost:8000/cadreINS/cadres');
  }
  getCadreParDirection(Direction:object):Observable<object>{
    return this.http.post('http://localhost:8000/cadreINS/parDirection',Direction);
  }
  getAllDirections():Observable<object>{
    return this.http.get('http://localhost:8000/directionCentrale');
  }
  getCadre(id:any):Observable<object>{
    return this.http.get('http://localhost:8000/cadreINS/'+id);
  }
  getPays(id:any):Observable<object>{
    return this.http.get('http://localhost:8000/paysdestination/'+id);
  }
  getDossierVisite():Observable<any>{
    return this.http.get('http://localhost:8000/dossiervisite');
  }
  getDossier(id:any):Observable<any>{
    return this.http.get('http://localhost:8000/dossiervisite/'+id);
  }

  


}
