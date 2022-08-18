import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversationThreadComponentComponent } from './conversation-thread-component.component';

describe('ConversationThreadComponentComponent', () => {
  let component: ConversationThreadComponentComponent;
  let fixture: ComponentFixture<ConversationThreadComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConversationThreadComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConversationThreadComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
