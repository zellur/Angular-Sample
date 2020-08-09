import { Component, OnInit } from '@angular/core';
import {AlbumService} from './album.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  currentUser: any;
  albumList: any[] = [];
  photoist: any[] = [];
  constructor(private albumService: AlbumService) { }

  ngOnInit(): void {
    this.getCurrentUser();
    this.getUserALbumList();
  }
  getCurrentUser(): void {
    this.currentUser = JSON.parse(sessionStorage.getItem('user'));
  }
  getUserALbumList(): void {
    this.albumService.getAlbumList().subscribe(
      response => {
        for (const item of response) {
          if (item.userId === this.currentUser.id) {
            this.albumList.push(item);
          }
        }
      }
    );
  }

  viewPhoto(item: any): void{
    this.photoist = [];
    this.albumService.getPhotoList().subscribe(
      response => {
        for (const i of response) {
          if (i.albumId === item.id) {
            this.photoist.push(i);
          }
        }
      }
    );
  }
}
