import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewUsersSeatsComponent } from './view-users-seats.component';

describe('ViewUsersSeatsComponent', () => {
  let component: ViewUsersSeatsComponent;
  let fixture: ComponentFixture<ViewUsersSeatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewUsersSeatsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewUsersSeatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
