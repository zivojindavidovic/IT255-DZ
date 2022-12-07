import { Component, OnInit } from '@angular/core';
import { Room } from '../models/room';
import { RoomServiceService } from '../services/room-service.service';

@Component({
  selector: 'app-di',
  templateUrl: './di.component.html',
  styleUrls: ['./di.component.css']
})
export class DiComponent implements OnInit{

  constructor(private roomService: RoomServiceService){
    this.roomService = roomService;
  }
  rp: Room = this.roomService.getPrice(10);
  ngOnInit(): void {
    
  }

}
