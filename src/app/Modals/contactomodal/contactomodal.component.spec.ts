import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactomodalComponent } from './contactomodal.component';

describe('ContactomodalComponent', () => {
  let component: ContactomodalComponent;
  let fixture: ComponentFixture<ContactomodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactomodalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactomodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
