import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuynewComponent } from './buynew.component';

describe('BuynewComponent', () => {
  let component: BuynewComponent;
  let fixture: ComponentFixture<BuynewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuynewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuynewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
