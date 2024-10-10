import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellproductComponent } from './sellproduct.component';

describe('SellproductComponent', () => {
  let component: SellproductComponent;
  let fixture: ComponentFixture<SellproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SellproductComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
