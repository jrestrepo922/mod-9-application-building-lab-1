import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMessageComponentComponent } from './user-message-component.component';

describe('UserMessageComponentComponent', () => {
  let component: UserMessageComponentComponent;
  let fixture: ComponentFixture<UserMessageComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserMessageComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserMessageComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
