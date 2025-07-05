import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrdtCrmComponent } from './prdt-crm.component';

describe('PrdtCrmComponent', () => {
  let component: PrdtCrmComponent;
  let fixture: ComponentFixture<PrdtCrmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrdtCrmComponent]
    });
    fixture = TestBed.createComponent(PrdtCrmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
