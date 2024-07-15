import { Routes } from '@angular/router';
import { HomeComponent } from './feature/home/home.component';
import { ListCepComponent } from './feature/list-cep/list-cep.component';

export const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'cep',
    component: ListCepComponent
  }
];
