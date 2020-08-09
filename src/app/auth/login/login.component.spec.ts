import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {ToastrModule} from 'ngx-toastr';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Store} from '@ngrx/store';
import {TestStore} from '../../test-util/test.store';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule, ToastrModule.forRoot(), ReactiveFormsModule, FormsModule],
      providers: [
        { provide: Store, useClass: TestStore }   // use test store instead of ngrx store
      ],
      declarations: [ LoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('email should be undefined', () => {
    expect(component.email).toBeUndefined();
  });
  it('user list should be toBeUndefined', () => {
    expect(component.userList).toBeUndefined();
  });
});
