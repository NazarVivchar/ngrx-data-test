import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  EntityCollectionDataService,
  DefaultDataService,
  HttpUrlGenerator,
  Logger,
} from '@ngrx/data';

import { Observable } from 'rxjs';
import {Post} from './post.model';

@Injectable()
export class PostDataService extends DefaultDataService<Post> {
  constructor(http: HttpClient, httpUrlGenerator: HttpUrlGenerator, logger: Logger) {
    super('Post', http, httpUrlGenerator);
    logger.log('Created custom Post EntityDataService');
  }

  getAll(): Observable<Post[]> {
    return super.getAll();
  }

  getById(id: string | number): Observable<Post> {
    return super.getById(id);
  }
}
