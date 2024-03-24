import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutComponent } from './rout.component';

describe('RoutComponent', () => {
  let component: RoutComponent;
  let fixture: ComponentFixture<RoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoutComponent]
    });
    fixture = TestBed.createComponent(RoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
