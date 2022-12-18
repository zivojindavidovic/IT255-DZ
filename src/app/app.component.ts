import { Component } from '@angular/core';
import { Room } from './room/room.model';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { PostService } from './services/post.service';
import { Post } from './models/post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

}
