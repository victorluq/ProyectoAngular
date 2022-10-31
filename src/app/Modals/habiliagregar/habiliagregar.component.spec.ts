import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabiliagregarComponent } from './habiliagregar.component';

describe('HabiliagregarComponent', () => {
  let component: HabiliagregarComponent;
  let fixture: ComponentFixture<HabiliagregarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HabiliagregarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HabiliagregarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
