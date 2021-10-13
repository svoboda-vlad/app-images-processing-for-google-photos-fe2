import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParametersDefaultEditComponent } from './parameters-default-edit.component';

describe('ParametersDefaultEditComponent', () => {
  let component: ParametersDefaultEditComponent;
  let fixture: ComponentFixture<ParametersDefaultEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParametersDefaultEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParametersDefaultEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
