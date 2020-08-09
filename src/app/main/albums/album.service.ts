import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ApiEndpointsEnum} from '../../models/constants/ApiEndpoints.enum';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(private http: HttpClient) { }
  getAlbumList(): Observable<any[]> {
    return this.http.get<any[]>(ApiEndpointsEnum.ALBUMS_ENDPOINT);
  }
  getPhotoList(): Observable<any[]> {
    return this.http.get<any[]>(ApiEndpointsEnum.PHOTOS_ENDPOINT);
  }
}
