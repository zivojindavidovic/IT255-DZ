import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarcomponentComponent } from './barcomponent.component';

describe('BarcomponentComponent', () => {
  let component: BarcomponentComponent;
  let fixture: ComponentFixture<BarcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarcomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
