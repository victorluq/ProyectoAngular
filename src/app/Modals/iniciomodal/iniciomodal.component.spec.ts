import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IniciomodalComponent } from './iniciomodal.component';

describe('IniciomodalComponent', () => {
  let component: IniciomodalComponent;
  let fixture: ComponentFixture<IniciomodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IniciomodalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IniciomodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
