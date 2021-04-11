import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactViewComponent } from './contact-view/contact-view.component';
import { MainViewComponent } from './main-view/main-view.component';

const routes: Routes = [ 
  {path: 'main', component: MainViewComponent},
  {path: 'contact', component: ContactViewComponent},
  {path: '**', redirectTo: '/main', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
