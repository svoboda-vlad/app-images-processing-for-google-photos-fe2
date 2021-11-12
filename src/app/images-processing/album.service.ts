import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ErrorResponseService } from '../shared/error-response.service';
import { MediaItemsGroup } from './media-item.service';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  public albumsUrl = 'https://photoslibrary.googleapis.com/v1/albums';

  constructor(private http: HttpClient,
    private errorResponseService: ErrorResponseService) { }

  albums(group: MediaItemsGroup, accessToken: string): Observable<Album> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + accessToken,
        'Content-type': 'application/json'
      })
    };
    const album = new Album(group.name);
    const body = {
      "album": album
    }

    return this.http.post<Album>(this.albumsUrl, body, httpOptions)
    .pipe(catchError(this.errorResponseService.handleError));
  }

}

export class Album {
  title: string;
  productUrl?: string;
  id?: string;
  isWriteable?: boolean;

  constructor(title: string, productUrl?: string, id?: string, isWriteable?: boolean) {
    this.title = title;
    this.productUrl = productUrl;
    this.id = id;
    this.isWriteable = isWriteable;
  }
}