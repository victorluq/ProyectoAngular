import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectagregarComponent } from './proyectagregar.component';

describe('ProyectagregarComponent', () => {
  let component: ProyectagregarComponent;
  let fixture: ComponentFixture<ProyectagregarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectagregarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProyectagregarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
