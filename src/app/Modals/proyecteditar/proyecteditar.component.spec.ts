import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyecteditarComponent } from './proyecteditar.component';

describe('ProyecteditarComponent', () => {
  let component: ProyecteditarComponent;
  let fixture: ComponentFixture<ProyecteditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyecteditarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProyecteditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
