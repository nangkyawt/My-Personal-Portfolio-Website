import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/components/home/home.component';
import { AboutmeComponent } from './core/components/aboutme/aboutme.component';
import { ContactComponent } from './core/components/contact/contact.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'nangkyawthsuhlaing',
    pathMatch: 'full',
  },
  {
    path: 'nangkyawthsuhlaing',
    component: HomeComponent,
  },
  {
    path: '**',
    redirectTo: 'nangkyawthsuhlaing',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
