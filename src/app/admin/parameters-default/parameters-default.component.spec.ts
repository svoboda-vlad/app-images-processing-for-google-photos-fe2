import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParametersDefaultComponent } from './parameters-default.component';

describe('ParametersDefaultComponent', () => {
  let component: ParametersDefaultComponent;
  let fixture: ComponentFixture<ParametersDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParametersDefaultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParametersDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
