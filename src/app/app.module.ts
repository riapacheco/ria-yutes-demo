import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './views/home/home.component';
import { YutesFileComponent } from './views/yutes-file/yutes-file.component';
import { UtilitiesComponent } from './views/utilities/utilities.component';
import { ColorsComponent } from './views/colors/colors.component';
import { ButtonsComponent } from './views/buttons/buttons.component';
import { StatesService } from './services/states.service';

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
    SidebarComponent,
    HomeComponent,
    YutesFileComponent,
    UtilitiesComponent,
    ColorsComponent,
    ButtonsComponent
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    StatesService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
