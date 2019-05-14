import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './core/nav-bar/nav-bar.component';
import { FooterComponent } from './core/footer/footer.component';
import { MainContainerComponent } from './main-container/main-container.component';
import { MemeGridComponent } from './main-container/meme-grid/meme-grid.component';
import { MemeCardComponent } from './main-container/meme-grid/meme-card/meme-card.component';
import { CreateMemeComponent } from './main-container/create-meme/create-meme.component';
import { EditMemeComponent } from './main-container/edit-meme/edit-meme.component';
import { FilterPipe } from './pipes/filter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    MainContainerComponent,
    MemeGridComponent,
    MemeCardComponent,
    CreateMemeComponent,
    EditMemeComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
