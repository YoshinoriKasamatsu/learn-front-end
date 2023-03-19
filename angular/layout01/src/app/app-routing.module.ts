import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page01Component } from './page/page01/page01.component';
import { Page02Component } from './page/page02/page02.component';
import { Page03Component } from './page/page03/page03.component';
import { Page04Component } from './page/page04/page04.component';

const routes: Routes = [
  { path: '', component: Page01Component },
  { path: 'page01', component: Page01Component },
  { path: 'page02', component: Page02Component },
  { path: 'page03', component: Page03Component },
  { path: 'page04', component: Page04Component },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
