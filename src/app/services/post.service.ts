import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private baseUrl = "http://localhost:3000/rooms";

  constructor(private _httpClient: HttpClient) { }

  public getPosts() : Observable<Post[]>{
    return this._httpClient.get<Post[]>(this.baseUrl).pipe(
      map((data: any[]) => data.map((item: any) => 
      this._createPostFromObject(item))),
    )
  }
  public createPost(post: Post): Observable<Post>{
    return this._httpClient.post(this.baseUrl, post).pipe(
      map((data: any) => this._createPostFromObject(data)), 
    );
  }
  public getPost(id: number): Observable<Post>{
    return this._httpClient.get(this.baseUrl + '/' + id).pipe(
      map((data: any) => this._createPostFromObject(data)),
    );
  }
  private _createPostFromObject(item: Post){
    return new Post(item.type, item.floor, item.price, item.id);
  }

  public removePost(id: number): Observable<Post>{
    return this._httpClient.delete(this.baseUrl + '/' + id).pipe(
      map((data: any) => this._createPostFromObject(data)),
    )
  }

}
