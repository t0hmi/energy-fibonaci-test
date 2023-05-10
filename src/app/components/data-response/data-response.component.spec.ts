import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataResponseComponent } from './data-response.component';

describe('DataResponseComponent', () => {
  let component: DataResponseComponent;
  let fixture: ComponentFixture<DataResponseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataResponseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
