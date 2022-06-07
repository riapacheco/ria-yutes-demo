import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule, 
    FormsModule, 
    CommonModule, 
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent, 
    HelloComponent, 
    SidebarComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
