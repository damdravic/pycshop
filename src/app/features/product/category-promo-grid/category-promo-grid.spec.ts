import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryPromoGrid } from './category-promo-grid';

describe('CategoryPromoGrid', () => {
  let component: CategoryPromoGrid;
  let fixture: ComponentFixture<CategoryPromoGrid>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoryPromoGrid]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryPromoGrid);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
