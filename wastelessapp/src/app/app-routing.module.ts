import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegistrateComponent} from "./registrate/registrate.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {LoginComponent} from "./login/login.component";
import {AuthGuard} from "./auth/auth.guard";
import {ItemComponent} from "./item/item.component";

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent,canActivate:[AuthGuard]},
  { path: 'registrate', component: RegistrateComponent},
  { path: 'login', component: LoginComponent},
  {path:'item',component:ItemComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
