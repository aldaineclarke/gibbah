import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversationListingComponent } from './conversation-listing.component';

describe('ConversationListingComponent', () => {
  let component: ConversationListingComponent;
  let fixture: ComponentFixture<ConversationListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConversationListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConversationListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
