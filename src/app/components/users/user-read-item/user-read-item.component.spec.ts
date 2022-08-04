import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserReadItemComponent } from './user-read-item.component';

describe('UserReadItemComponent', () => {
  let component: UserReadItemComponent;
  let fixture: ComponentFixture<UserReadItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserReadItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserReadItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
