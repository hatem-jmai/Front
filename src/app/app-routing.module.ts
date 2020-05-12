import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { PostsComponent } from './modules/posts/posts.component';
import { LoginComponent } from './shared/components/login/login.component';
import { NotemissionComponent } from './modules/notemission/notemission.component';
import { FicheRenseignementComponent } from './modules/fiche-renseignement/fiche-renseignement.component';
import { DefaultModule } from './layouts/default/default.module';
import { SignUpComponent } from './shared/components/sign-up/sign-up.component';
import { SignInComponent } from './shared/components/sign-in/sign-in.component';
import { RappelRapportComponent } from './modules/rappel-rapport/rappel-rapport.component';
import { BorderouComponent } from './modules/borderou/borderou.component';
import { ListeDossiersComponent } from './modules/liste-dossiers/liste-dossiers.component';


const routes: Routes = [{
  
    path: 'dashboard',
  component: DefaultComponent,
  children: [
    {path: 'dossiervisite',component: DashboardComponent},
    {path: 'noteM',component: NotemissionComponent},
    {path: 'fiche',component: FicheRenseignementComponent},
    {path: 'posts',component: PostsComponent},
    {path: 'borderau',component:BorderouComponent},
    {path: 'rappel-rapport',component:RappelRapportComponent},
   //{path: 'borderau',component:BorderouComponent},
   //{path: 'rappel-rapport',component:RappelRapportComponent}
   {path: 'liste-dossierVisite',component:ListeDossiersComponent}
  ]
},

{ path: 'sign-in', component: SignInComponent},
{ path: '', component: SignInComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
