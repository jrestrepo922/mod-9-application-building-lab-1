import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SenderMessageComponentComponent } from './sender-message-component.component';

describe('SenderMessageComponentComponent', () => {
  let component: SenderMessageComponentComponent;
  let fixture: ComponentFixture<SenderMessageComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SenderMessageComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SenderMessageComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
