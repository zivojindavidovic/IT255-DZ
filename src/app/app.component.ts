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
  rooms: Room[];
  title: any;  
  klimaValue: string;
  barValue: string;
  saunaValue: string;
  hotelsForm: FormGroup = new FormGroup({
    type : new FormControl('', [Validators.required, Validators.minLength(6)])
  });
  public posts: Post[];
  public postForm: FormGroup;


  constructor(private fb: FormBuilder, private _postService: PostService){
    this.rooms = [
      new Room("1sobna", '3 sprat'),
      new Room("3sobna", '5 sprat'),
      new Room("2sobna", '1 sprat'),
    ]
    //this.createForm();
    this._postService.getPosts().subscribe((data) => {
      this.posts = data;
    })
    this.initForm();
  }
  public initForm() {
    this.postForm = new FormGroup({
      id: new FormControl('1', Validators.required),
      type: new FormControl('', Validators.required),
      floor: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required)
    })
  }

  public submitForm(){
    let id = this.postForm.get('id')?.value;
    let type = this.postForm.get('type')?.value;
    let floor = this.postForm.get('floor')?.value;
    let price = this.postForm.get('price')?.value;
    let post = new Post(type, floor, price, id);
    this.createPost(post);
  }

  public createPost(post: Post) {
    this._postService.createPost(post).subscribe((data) => {
      this.posts.unshift(data);
    })
  }

  public getPost(id: number){
    this._postService.getPost(id).subscribe((data) =>{
      alert(JSON.stringify(data));
    })
  }

  public deletePost(id: number){
    this._postService.removePost(id).subscribe((data) => {
      this._removePostFromList(id);
      alert("Post Obrisan");
    })
  }
  private _removePostFromList(id: number) {
    let ind = this.posts.findIndex(post => post.id = id);
    this.posts.splice(ind, 1);
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
