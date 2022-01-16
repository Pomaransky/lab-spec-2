import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitConverterComponent } from './unit-converter.component';
import localePl from '@angular/common/locales/pl';
import { ɵregisterLocaleData, ɵunregisterLocaleData } from '@angular/core';

describe('UnitConverterComponent', () => {
  let component: UnitConverterComponent;
  let fixture: ComponentFixture<UnitConverterComponent>;

  beforeAll(() => {
    ɵregisterLocaleData(localePl);
  });

  afterAll(() => ɵunregisterLocaleData());

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UnitConverterComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
