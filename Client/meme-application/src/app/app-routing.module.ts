import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MemeGridComponent } from './main-container/meme-grid/meme-grid.component';
import { CreateMemeComponent } from './main-container/create-meme/create-meme.component';
import { EditMemeComponent } from './main-container/edit-meme/edit-meme.component';
import { ExploreComponent } from './main-container/explore/explore.component';

const routes: Routes = [
  { path: '', component: MemeGridComponent, pathMatch: 'full' },
  { path: 'create-meme', component: CreateMemeComponent },
  { path: 'edit-meme/:id', component: EditMemeComponent },
  { path: 'explore', component: ExploreComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
