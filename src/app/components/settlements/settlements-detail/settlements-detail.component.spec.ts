import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettlementsDetailComponent } from './settlements-detail.component';

describe('SettlementsDetailComponent', () => {
  let component: SettlementsDetailComponent;
  let fixture: ComponentFixture<SettlementsDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SettlementsDetailComponent]
    });
    fixture = TestBed.createComponent(SettlementsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
