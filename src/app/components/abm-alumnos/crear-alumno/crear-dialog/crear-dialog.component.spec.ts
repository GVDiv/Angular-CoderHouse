import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearDialogComponent } from './crear-dialog.component';

describe('CrearDialogComponent', () => {
  let component: CrearDialogComponent;
  let fixture: ComponentFixture<CrearDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
