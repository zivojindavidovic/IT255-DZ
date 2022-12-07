import { Component } from '@angular/core';
import { Room } from './room/room.model';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  rooms: Room[];
  title: any;  
  klimaValue: string;
  barValue: string;
  saunaValue: string;
  hotelsForm: FormGroup = new FormGroup({
    type : new FormControl('', [Validators.required, Validators.minLength(6)])
  });


  constructor(private fb: FormBuilder){
    this.rooms = [
      new Room("1sobna", '3 sprat'),
      new Room("3sobna", '5 sprat'),
      new Room("2sobna", '1 sprat'),
    ]
    //this.createForm();
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
