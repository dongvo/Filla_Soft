import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes =[
    { 
      path: '', 
      loadChildren: './home/home.module#HomeModule', 
      pathMatch: 'full' 
    },
    { 
      path: 'project',
      loadChildren: './layouts/project-layout/project-layout.module#ProjectLayoutModule'
    },
    { 
      path: 'manage',
      loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
    },
    { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
