import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversationHistoryComponentComponent } from './conversation-history-component.component';

describe('ConversationHistoryComponentComponent', () => {
  let component: ConversationHistoryComponentComponent;
  let fixture: ComponentFixture<ConversationHistoryComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConversationHistoryComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConversationHistoryComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
