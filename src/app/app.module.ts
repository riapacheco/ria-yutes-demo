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
import { TooltipService } from './services/tooltip.service';
import { TooltipComponent } from './components/tooltip/tooltip.component';
import {
  HighlightModule,
  HIGHLIGHT_OPTIONS,
  HighlightOptions,
} from 'ngx-highlightjs';
import { AccordionComponent } from './components/accordion/accordion.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    BrowserModule, 
    FormsModule, 
    CommonModule, 
    FormsModule,
    AppRoutingModule,
    HighlightModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent, 
    HelloComponent, 
    SidebarComponent,
    HomeComponent,
    YutesFileComponent,
    UtilitiesComponent,
    ColorsComponent,
    ButtonsComponent,
    TooltipComponent,
    AccordionComponent
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    StatesService,
    TooltipService,
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: <HighlightOptions>{
        lineNumbers: true,
        coreLibraryLoader: () => import('highlight.js/lib/core'),
        themePath: 'node_modules/highlight.js/styles/github.css',
        languages: {
          typescript: () => import('highlight.js/lib/languages/typescript'),
          css: () => import('highlight.js/lib/languages/css'),
          xml: () => import('highlight.js/lib/languages/xml'),
        },
      },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
