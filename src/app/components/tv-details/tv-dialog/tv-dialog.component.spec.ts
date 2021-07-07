import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvDialogComponent } from './tv-dialog.component';

describe('TvDialogComponent', () => {
  let component: TvDialogComponent;
  let fixture: ComponentFixture<TvDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TvDialogComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TvDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
