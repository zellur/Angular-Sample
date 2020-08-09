import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosComponent } from './todos.component';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {Store} from '@ngrx/store';
import {TestStore} from '../../test-util/test.store';

describe('TodosComponent', () => {
  let component: TodosComponent;
  let fixture: ComponentFixture<TodosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [
        { provide: Store, useClass: TestStore }   // use test store instead of ngrx store
      ],
      declarations: [ TodosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should be defined', () => {
    expect(component.getUserInfo).toBeDefined();
  });
  it('should be undefined', () => {
    expect(component.row).toBeUndefined();
  });
  it('should current user defined', () => {
    component.getUserInfo();
    expect(component.currentUser).toBeDefined();
  });
});
