import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagesProcessingComponent } from './images-processing.component';

describe('ImagesProcessingComponent', () => {
  let component: ImagesProcessingComponent;
  let fixture: ComponentFixture<ImagesProcessingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagesProcessingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagesProcessingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
