import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabilieditarComponent } from './habilieditar.component';

describe('HabilieditarComponent', () => {
  let component: HabilieditarComponent;
  let fixture: ComponentFixture<HabilieditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HabilieditarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HabilieditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
