import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelroomsComponent } from './modelrooms.component';

describe('ModelroomsComponent', () => {
  let component: ModelroomsComponent;
  let fixture: ComponentFixture<ModelroomsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelroomsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModelroomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
