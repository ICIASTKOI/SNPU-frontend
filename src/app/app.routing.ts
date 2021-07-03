import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { OnePageComponent } from './examples/one-page/one-page.component';

const routes: Routes =[
    { path: '', redirectTo: 'main', pathMatch: 'full' },
    { path: 'main', component: OnePageComponent }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: false
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
