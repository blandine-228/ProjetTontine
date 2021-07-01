import { RegisterComponent } from './register/register.component';
import { LogedmenuComponent } from './logedmenu/logedmenu.component';
import { PeriodiciteComponent } from './periodicite/periodicite.component';
import { ProfilComponent } from './profil/profil.component';
import { TontineComponent } from './tontine/tontine.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from "@angular/common";
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { CompteComponent } from './compte/compte.component';
import { OperationComponent } from './operation/operation.component';
import { TirageComponent } from './tirage/tirage.component';
import { CotisationComponent } from './cotisation/cotisation.component';
import { RetraitComponent } from './retrait/retrait.component';
import { MoncompteComponent } from './moncompte/moncompte.component';




const routes: Routes = [
  {
    path:'',component:LogedmenuComponent,children : [
      {
        path:'home',component:HomeComponent
      },
      {
        path:'compte',component:CompteComponent
      },
      {
        path:'operation',component:OperationComponent
      },
      {
        path:'retrait',component:RetraitComponent
      },
      {
        path:'cotisation',component:CotisationComponent
      },      
      { 
        path:'tontine',component:TontineComponent
      },
      { 
        path:'tirage',component:TirageComponent
      },
      {
        path:'profil',component:ProfilComponent
      },
      {
        path:'periodicite',component:PeriodiciteComponent
      },
      {
        path:'moncompte',component:MoncompteComponent
      },
      {
        path:'utilisateur',component:UtilisateurComponent
      }
    ]
  },
  
  {
    path:'login',component:LoginComponent
  }, 
  {
    path:'register',component:RegisterComponent
  } 
];

@NgModule({
  imports: [CommonModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
