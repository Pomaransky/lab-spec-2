import { Component } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UnitInterface } from './models/app.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  units: UnitInterface[] = [
    {
      label: 'Metry na centymetry',
      multiply: true,
      figureForCalculation: 100,
      resultUnit: 'cm',
    },
    {
      label: 'Centymetry na metry',
      multiply: false,
      figureForCalculation: 100,
      resultUnit: 'm',
    },
  ];

  selectedUnit: UnitInterface = this.units[0];
  inputValue = 0;
  outPutValue = new BehaviorSubject<number>(0.0);
  resultUnit = new BehaviorSubject<string>('cm');

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

  changeValue(event: any): void {
    this.converter(this.selectedUnit, event.value);
  }

  converter(unit: UnitInterface, value: number): void {
    if (unit.multiply) {
      this.outPutValue.next(value * unit.figureForCalculation);
    } else {
      this.outPutValue.next(value / unit.figureForCalculation);
    }
  }
}
