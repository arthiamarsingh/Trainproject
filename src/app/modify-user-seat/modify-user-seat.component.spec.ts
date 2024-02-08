import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyUserSeatComponent } from './modify-user-seat.component';

describe('ModifyUserSeatComponent', () => {
  let component: ModifyUserSeatComponent;
  let fixture: ComponentFixture<ModifyUserSeatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModifyUserSeatComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModifyUserSeatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
