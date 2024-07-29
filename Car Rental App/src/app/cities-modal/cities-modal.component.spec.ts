import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CitiesModalComponent } from './cities-modal.component';

describe('CitiesModalComponent', () => {
  let component: CitiesModalComponent;
  let fixture: ComponentFixture<CitiesModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CitiesModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitiesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
