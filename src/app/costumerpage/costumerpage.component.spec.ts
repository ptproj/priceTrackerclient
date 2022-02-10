import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostumerpageComponent } from './costumerpage.component';

describe('CostumerpageComponent', () => {
  let component: CostumerpageComponent;
  let fixture: ComponentFixture<CostumerpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CostumerpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CostumerpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
