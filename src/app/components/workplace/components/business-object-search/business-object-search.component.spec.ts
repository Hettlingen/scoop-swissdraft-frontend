import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessObjectSearchComponent } from './business-object-search.component';

describe('BusinessObjectSearchComponent', () => {
  let component: BusinessObjectSearchComponent;
  let fixture: ComponentFixture<BusinessObjectSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessObjectSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessObjectSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
