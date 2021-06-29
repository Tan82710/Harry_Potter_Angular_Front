import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharactersComponent } from './characters/characters.component';
import { DetailComponent } from './detail/detail.component';
import { Error404Component } from './error404/error404.component';
import { CreateWizardComponent } from './create-wizard/create-wizard.component';
import { DetailNewWizardComponent } from './detail-new-wizard/detail-new-wizard.component';

const routes: Routes = [
  { path: 'characters', component: CharactersComponent },
  { path: 'detail/:id', component: DetailComponent },
  { path: 'createWizard', component: CreateWizardComponent },
  { path: 'wizard/:id', component: DetailNewWizardComponent },
  { path: '',   redirectTo: '/characters', pathMatch: 'full' },
  { path: '**', component: Error404Component },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
