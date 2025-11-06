import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardForProduct } from './card-for-product';

describe('CardForProduct', () => {
  let component: CardForProduct;
  let fixture: ComponentFixture<CardForProduct>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardForProduct]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardForProduct);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
