import {Component} from '@angular/core';
import {PostService} from './data-access/post.service';
import {Observable} from 'rxjs';
import {Post} from './data-access/post.model';
import {map, tap} from 'rxjs/operators';
import {EntityAction} from '@ngrx/data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public posts$: Observable<Post[]>;
  public loading$: Observable<boolean>;
  public loaded$: Observable<boolean>;
  public error$: Observable<Error>;

  constructor(private readonly postService: PostService) {
    this.posts$ = this.postService.entities$;
    this.loading$ = this.postService.loading$;
    this.loaded$ = this.postService.loaded$;
    this.error$ = this.postService.errors$.pipe(
      map((entityAction: EntityAction) => entityAction.payload.error),
      tap((error: Error) => alert(error.message))
    );
  }

  public load() {
    this.postService.load();
  }

  public loadWithError() {
    this.postService.load({
      error: new Error('Mocked error for load'),
    });
  }

  public update(post: Post) {
    this.postService.update({
      ...post,
      body: `Updated body ${Math.random()}`
    });
  }

  public updateWithError(post: Post) {
    this.postService.update({
      ...post,
      body: `Updated body ${Math.random()}`
    }, {
      error: new Error('Mocked error for update'),
    });
  }

  public delete(post: Post) {
    this.postService.delete(post);
  }

  public deleteWithError(post: Post) {
    this.postService.update(post, {
      error: new Error('Mocked error for update'),
    });
  }

  public clear() {
    this.postService.clearCache();
  }
}
