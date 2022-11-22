import { Component, HostBinding, Input, OnInit } from '@angular/core';
import {Room} from './room.model';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit{
  @HostBinding('attr.class') cssClass = 'row';
  @Input() room: Room;

  constructor(){
    this.room = new Room(
      '2sobna',
      '5'
    );
  }

  ngOnInit() {
  }
}
