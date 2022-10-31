import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EduagregarComponent } from './eduagregar.component';

describe('EduagregarComponent', () => {
  let component: EduagregarComponent;
  let fixture: ComponentFixture<EduagregarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EduagregarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EduagregarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
