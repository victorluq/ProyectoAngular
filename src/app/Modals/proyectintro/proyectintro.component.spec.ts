import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectintroComponent } from './proyectintro.component';

describe('ProyectintroComponent', () => {
  let component: ProyectintroComponent;
  let fixture: ComponentFixture<ProyectintroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectintroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProyectintroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
