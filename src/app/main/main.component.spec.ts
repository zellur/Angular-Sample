import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainComponent } from './main.component';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [ MainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   component.currentUser = {
  //     name : 'so',
  //     company: {
  //       name: 'name'
  //     },
  //     website: 'web',
  //     id: 1
  //   };
  //   expect(component).toBeTruthy();
  // });
});
