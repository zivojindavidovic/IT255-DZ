import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Post } from '../models/post';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-rest',
  templateUrl: './rest.component.html',
  styleUrls: ['./rest.component.css']
})
export class RestComponent {

  public posts: Post[];
  public postForm: FormGroup;

  constructor(private fb: FormBuilder, private _postService: PostService){
   
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
}
