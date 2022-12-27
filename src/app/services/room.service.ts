import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rooms } from '../models/rooms';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor(private _httpClient : HttpClient) { }
  private url = 'http://localhost:3000/rooms';

  getRooms(): Observable<Rooms[]>{
    return this._httpClient.get<Rooms[]>(this.url);
  };
}
