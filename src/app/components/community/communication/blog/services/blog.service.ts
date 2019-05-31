import {Observable} from 'rxjs';
import { Injectable } from '@angular/core';
import {Post} from '../model/post';
import {HttpHeaders, HttpClient} from '@angular/common/http';


import {Blog} from '../model/blog';
import {PostCategory} from '../model/post-category';

@Injectable()
export class BlogService {

  private headers: HttpHeaders;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Accept', 'application/json');
  }

  /* ------------------------------------------------ */
  /* Blog                                             */
  /* ------------------------------------------------ */
  public getListBlog(): Observable<Blog[]> {
    return this.http.get<Blog[]>('http://localhost:8081/api/v1/blogs/');
  }

  public getBlog(uuid: string): Observable<Blog> {
    return this.http.get<Blog>(`http://localhost:8081/api/v1/blogs/${uuid}`);
  }

  public saveBlog(body: Object): Observable<Blog> {
    const options = { headers: this.headers };

    return this.http.post<Blog>('http://localhost:8081/api/v1/blogs', body, options);
  }


  /* ------------------------------------------------ */
  /* Post Category                                    */
  /* ------------------------------------------------ */
  public getPostCategory(uuid: string): Observable<PostCategory> {
    var url = 'http://localhost:8081/api/v1/post-categories/' + uuid;
    return this.http.get<PostCategory>(url);
  }

  public createPostCategory = (body:Object): Observable<PostCategory> => {
    // let bodyString = JSON.stringify(body); // Stringify payload
    // let headers      = new HttpHeaders({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    // let options       = new RequestOptions({ headers: headers }); // Create a request option
    //
    // return this.http.post(this.commentsUrl, body, options) // ...using post request
    //   .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
    //   .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    return null;
  }

  public updateBlogCategory = (body:Object): Observable<PostCategory> => {
    // let bodyString = JSON.stringify(body); // Stringify payload
    // let headers      = new HttpHeaders({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    // let options       = new RequestOptions({ headers: headers }); // Create a request option
    //
    // return this.http.put(`${this.commentsUrl}/${body['id']}`, body, options) // ...using put request
    //   .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
    //   .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    return null;
  }

  public deleteBlogCategory = (uuid:string) => {
    // return this.http.delete(`${this.commentsUrl}/${uuid}`)
    //   .map((res:Response) => res.json())
    //   .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  /* ------------------------------------------------ */
  /* Post                                             */
  /* ------------------------------------------------ */
  public getPost(uuidBlog: string): Observable<Post> {
    return this.http.get<Post>(`http://localhost:8081/api/v1/posts/${uuidBlog}`);
  }

  public getListPostNewest(uuidBlog: string): Observable<Post[]> {
    console.log(uuidBlog);
    return this.http.get<Post[]>(`http://localhost:8081/api/v1/posts/post-newest/${uuidBlog}`);
  }

  public savePost(body: Object): Observable<Post> {
    const options = { headers: this.headers };

    return this.http.post<Post>('http://localhost:8081/api/v1/posts', body, options);
  }
}
