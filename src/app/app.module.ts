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
import { Route, RouterModule, Routes } from '@angular/router';
import { NewcomponentComponent } from './newcomponent/newcomponent.component';
import { FormaComponent } from './forma/forma.component';
import { RestComponent } from './rest/rest.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: NewcomponentComponent},
  {path: 'bar', component: BarcomponentComponent},
  {path: 'di', component: DiComponent},
  {path: 'forma', component: FormaComponent},
  {path: 'rest', component: RestComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    RoomComponent,
    BarcomponentComponent,
    DiComponent,
    NewcomponentComponent,
    FormaComponent,
    RestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [RoomServiceService, Room],
  bootstrap: [AppComponent]
})
export class AppModule { }
