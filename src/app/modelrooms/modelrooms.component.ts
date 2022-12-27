import { Component } from '@angular/core';
import { Rooms } from '../models/rooms';
import { RoomService } from '../services/room.service';

@Component({
  selector: 'app-modelrooms',
  templateUrl: './modelrooms.component.html',
  styleUrls: ['./modelrooms.component.css']
})
export class ModelroomsComponent {

  rooms: Rooms[]

  constructor (private roomService: RoomService) {}

  ngOnInit(){
    this.getRooms();
  }

  getRooms(){
    this.roomService.getRooms().subscribe(rooms => this.rooms = rooms);
  }

}
