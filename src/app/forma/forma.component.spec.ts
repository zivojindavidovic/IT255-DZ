import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormaComponent } from './forma.component';

describe('FormaComponent', () => {
  let component: FormaComponent;
  let fixture: ComponentFixture<FormaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
