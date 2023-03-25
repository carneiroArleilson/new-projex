import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalRemoveProductComponent } from './modal-remove-product.component';

describe('ModalRemoveProductComponent', () => {
  let component: ModalRemoveProductComponent;
  let fixture: ComponentFixture<ModalRemoveProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalRemoveProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalRemoveProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
