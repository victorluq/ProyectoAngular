import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilmodalComponent } from './perfilmodal.component';

describe('PerfilmodalComponent', () => {
  let component: PerfilmodalComponent;
  let fixture: ComponentFixture<PerfilmodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilmodalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfilmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
