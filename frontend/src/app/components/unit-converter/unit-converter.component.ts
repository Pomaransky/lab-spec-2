import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UnitInterface } from 'src/app/models/app.model';
import { lengthUnits } from 'src/app/units/units';

@Component({
  selector: 'app-unit-converter',
  templateUrl: './unit-converter.component.html',
  styleUrls: ['./unit-converter.component.scss'],
})
export class UnitConverterComponent {
  @Input() units = lengthUnits;
  selectedUnit: UnitInterface = this.units[0];
  inputValue = 0;
  outPutValue: BehaviorSubject<number> = new BehaviorSubject<number>(0.0);
  resultUnit: BehaviorSubject<string> = new BehaviorSubject<string>('cm');
  constructor() {
    this.outPutValue.subscribe({
      next: (val) => val,
    });
    this.resultUnit.subscribe({
      next: (unit) => unit,
    });
  }

  changeUnits(event: any): void {
    this.converter(this.selectedUnit, 0);
    this.inputValue = 0;
    this.resultUnit.next(event.value.resultUnit);
  }

  converter(unit: UnitInterface, value: number): void {
    if (unit.multiply) {
      this.outPutValue.next(value * unit.figureForCalculation);
    } else {
      this.outPutValue.next(value / unit.figureForCalculation);
    }
  }

  changeValue(event: any): void {
    this.converter(this.selectedUnit, event.value);
  }
}
