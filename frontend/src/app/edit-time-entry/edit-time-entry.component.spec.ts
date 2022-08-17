import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTimeEntryComponent } from './edit-time-entry.component';

describe('EditTimeEntryComponent', () => {
  let component: EditTimeEntryComponent;
  let fixture: ComponentFixture<EditTimeEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTimeEntryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditTimeEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
