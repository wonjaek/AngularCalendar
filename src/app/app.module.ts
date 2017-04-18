import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

//import User Module 
import { MenuModule } from './menu/menu.module';
import { AppRoutingModule } from './app-routing.module';
import { CalendarModule } from './calendar/calendar.module';
import { AdminModule } from './admin/admin.module';

//import InMemoryData
import { MemberData } from './data/member-data';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { NotFoundComponent } from './notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MenuModule,
    AppRoutingModule,
    CalendarModule,
    AdminModule,
    InMemoryWebApiModule.forRoot(MemberData)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
