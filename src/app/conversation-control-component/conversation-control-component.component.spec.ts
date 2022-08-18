import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversationControlComponentComponent } from './conversation-control-component.component';

describe('ConversationControlComponentComponent', () => {
  let component: ConversationControlComponentComponent;
  let fixture: ComponentFixture<ConversationControlComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConversationControlComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConversationControlComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
