import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MemeGridComponent } from './main-container/meme-grid/meme-grid.component';



const routes: Routes = [
  { path: '', component: MemeGridComponent, pathMatch: 'full' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
