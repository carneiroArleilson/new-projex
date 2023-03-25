import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalConfirmOrderComponent } from './modal-confirm-order.component';

describe('ModalConfirmOrderComponent', () => {
  let component: ModalConfirmOrderComponent;
  let fixture: ComponentFixture<ModalConfirmOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalConfirmOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalConfirmOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
