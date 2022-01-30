import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostumerloginComponent } from './costumerlogin.component';

describe('CostumerloginComponent', () => {
  let component: CostumerloginComponent;
  let fixture: ComponentFixture<CostumerloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CostumerloginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CostumerloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
