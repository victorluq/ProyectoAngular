import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntrohabilidadesComponent } from './introhabilidades.component';

describe('IntrohabilidadesComponent', () => {
  let component: IntrohabilidadesComponent;
  let fixture: ComponentFixture<IntrohabilidadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntrohabilidadesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntrohabilidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
