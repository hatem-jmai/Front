import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dossier } from '../entities/dossier';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http:HttpClient) { }

  createDossier(dossier: Dossier):Observable<object>{
    return this.http.post('http://localhost:8000/dossiervisite/new',dossier);
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
    return this.http.get('http://localhost:8000/cadreINS');
  }

  


}
