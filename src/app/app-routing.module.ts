import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 {
  path: '',
  redirectTo: '/home',
  pathMatch: 'full'
 },
 {
  path: 'home',
  component: HomeComponent,
  loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
 }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
