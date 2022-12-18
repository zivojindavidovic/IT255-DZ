import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Post } from '../models/post';
import { Room } from '../room/room.model';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-forma',
  templateUrl: './forma.component.html',
  styleUrls: ['./forma.component.css']
})
export class FormaComponent {
  rooms: Room[];
  title: any;  
  klimaValue: string;
  barValue: string;
  saunaValue: string;
  hotelsForm: FormGroup = new FormGroup({
    type : new FormControl('', [Validators.required, Validators.minLength(6)])
  });


  constructor(private fb: FormBuilder, private _postService: PostService){
    this.rooms = [
      new Room("1sobna", '3 sprat'),
      new Room("3sobna", '5 sprat'),
      new Room("2sobna", '1 sprat'),
    ]
  }

  addRoom(type: HTMLInputElement, floor: HTMLInputElement): boolean {
    console.log(`Dodavanje sobe: ${type.value} na spratu: ${floor.value}`);
    this.rooms.push(new Room(type.value, floor.value));
    type.value = '';
    floor.value = '';
    return false;
  }

  get type(){return this.hotelsForm.get("type")}
}
