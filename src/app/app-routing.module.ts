import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharactersComponent } from './characters/characters.component';
import { DetailComponent } from './detail/detail.component';
import { Error404Component } from './error404/error404.component'

const routes: Routes = [
  {path: 'characters', component: CharactersComponent},
  {path: 'detail/:id', component: DetailComponent},
  { path: '',   redirectTo: '/characters', pathMatch: 'full' },
  { path: '**', component: Error404Component },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
