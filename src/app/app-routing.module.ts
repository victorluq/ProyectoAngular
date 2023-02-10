import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbouteditComponent } from './aboutedit/aboutedit.component';
import { ContactoeditarComponent } from './contactoeditar/contactoeditar.component';
import { EdueditComponent } from './eduedit/eduedit.component';
import { ErrorComponent } from './error/error.component';
import { ExpeeditComponent } from './expeedit/expeedit.component';
import { FootereditComponent } from './footeredit/footeredit.component';
import { HbackeditarComponent } from './hbackeditar/hbackeditar.component';
import { HfronteditarComponent } from './hfronteditar/hfronteditar.component';
import { HintroeditarComponent } from './hintroeditar/hintroeditar.component';
import { HsofteditarComponent } from './hsofteditar/hsofteditar.component';
import { IndexComponent } from './index/index.component';
import { IntroeditComponent } from './introedit/introedit.component';
import { PintroeditarComponent } from './pintroeditar/pintroeditar.component';
import { ProyeditarComponent } from './proyeditar/proyeditar.component';


const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'expeedit/:id', component: ExpeeditComponent},
  {path: 'eduedit/:id', component: EdueditComponent},
  {path: 'introedit/:id', component: IntroeditComponent},
  {path: 'aboutedit/:id', component: AbouteditComponent},
  {path: 'hfronteditar/:id', component: HfronteditarComponent},
  {path: 'hbackeditar/:id', component: HbackeditarComponent},
  {path: 'hsofteditar/:id', component: HsofteditarComponent},
  {path: 'hintroeditar/:id', component: HintroeditarComponent},
  {path: 'pintroeditar/:id', component: PintroeditarComponent},
  {path: 'proyeditar/:id', component: ProyeditarComponent},
  {path: 'contactoeditar/:id', component: ContactoeditarComponent},
  {path: 'footeredit/:id', component: FootereditComponent},
  {path:'', redirectTo: "/index", pathMatch: 'full'},
  {path: '**' , component:ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
