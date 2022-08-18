import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendMessageComponentComponent } from './send-message-component.component';

describe('SendMessageComponentComponent', () => {
  let component: SendMessageComponentComponent;
  let fixture: ComponentFixture<SendMessageComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SendMessageComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SendMessageComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
