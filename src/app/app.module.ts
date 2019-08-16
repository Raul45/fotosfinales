import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './components/menu/menu.component';
import { PagesModule } from './pages.module';
import { DataService } from './services/data.service'; 
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    
  ],
  imports: [
    BrowserModule,
    PagesModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
