import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoomComponent } from './room/room.component';
import { BarcomponentComponent } from './barcomponent/barcomponent.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DiComponent } from './di/di.component';
import { RoomServiceService } from './services/room-service.service';
import { Room } from './models/room';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    RoomComponent,
    BarcomponentComponent,
    DiComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [RoomServiceService, Room],
  bootstrap: [AppComponent]
})
export class AppModule { }
