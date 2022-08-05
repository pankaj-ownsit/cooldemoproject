import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxprimetimeComponent } from './ngxprimetime.component';

describe('NgxprimetimeComponent', () => {
  let component: NgxprimetimeComponent;
  let fixture: ComponentFixture<NgxprimetimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxprimetimeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxprimetimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
