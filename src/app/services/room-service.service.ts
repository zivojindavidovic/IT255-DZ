import { Injectable } from '@angular/core';
import { Room } from '../models/room';

@Injectable({
  providedIn: 'root'
})
export class RoomServiceService {

  constructor(private room: Room) { 
    this.room = room;
  }
  getPrice(numberOfNights: number) : Room{
    this.room.price = numberOfNights * 100;
    return this.room;
  }
}
