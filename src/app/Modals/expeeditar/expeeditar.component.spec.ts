import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpeeditarComponent } from './expeeditar.component';

describe('ExpeeditarComponent', () => {
  let component: ExpeeditarComponent;
  let fixture: ComponentFixture<ExpeeditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpeeditarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpeeditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
