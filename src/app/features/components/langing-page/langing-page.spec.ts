import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LangingPage } from './langing-page';

describe('LangingPage', () => {
  let component: LangingPage;
  let fixture: ComponentFixture<LangingPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LangingPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LangingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
