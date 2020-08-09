import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumsComponent } from './albums.component';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('AlbumsComponent', () => {
  let component: AlbumsComponent;
  let fixture: ComponentFixture<AlbumsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [ AlbumsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  // it('should be greater then 0', () => {
  //   const initialValue = component.photoist.length;
  //   component.getUserALbumList();
  //   const newVal = component.photoist.length;
  //   expect(newVal).toBeGreaterThan(initialValue);
  // });
});
