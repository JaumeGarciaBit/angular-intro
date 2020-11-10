import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComonentComponent } from './main-comonent/main-comonent.component';
import { CommentsComponentComponent } from './comments-component/comments-component.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComonentComponent,
    CommentsComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [MainComonentComponent, CommentsComponentComponent]
})
export class AppModule { }
