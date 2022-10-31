import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
  {path: '', component: IndexComponent},
  //{path: 'dashboard', component: DashboardComponent},
  //{path: 'sobremi/:id', component: SobreMiComponent},
  {path:'', redirectTo: "/index", pathMatch: 'full'},
  {path: '**' , component:ErrorComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
