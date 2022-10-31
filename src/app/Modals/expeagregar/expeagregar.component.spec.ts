import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpeagregarComponent } from './expeagregar.component';

describe('ExpeagregarComponent', () => {
  let component: ExpeagregarComponent;
  let fixture: ComponentFixture<ExpeagregarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpeagregarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpeagregarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
