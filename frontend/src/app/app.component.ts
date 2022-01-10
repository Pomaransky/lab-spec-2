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
    label: 'Metry na kilometry',
      multiply: false,
      figureForCalculation: 1000,
      resultUnit: 'km',
    },
    {
      label: 'Metry na decymetry',
        multiply: true,
        figureForCalculation: 10,
        resultUnit: 'dm',
      },
      {
        label: 'Metry na milimetry',
          multiply: true,
          figureForCalculation: 1000,
          resultUnit: 'mm',
        },
    {
      label: 'Centymetry na metry',
      multiply: false,
      figureForCalculation: 100,
      resultUnit: 'm',
    },
    {
      label: 'Centymetry na kilometry',
      multiply: false,
      figureForCalculation: 100000,
      resultUnit: 'km',
    },
    {
      label: 'Centymetry na decymetry',
      multiply: false,
      figureForCalculation: 10,
      resultUnit: 'dm',
    },
    {
      label: 'Centymetry na milimetry',
      multiply: true,
      figureForCalculation: 10,
      resultUnit: 'mm',
    },
    {
    label: 'Kilometry na centymetry',
      multiply: true,
      figureForCalculation: 100000,
      resultUnit: 'cm',
    },
    {
    label: 'Kilometry na metry',
      multiply: true,
      figureForCalculation: 100,
      resultUnit: 'm',
    },
    {
    label: 'Kilometry na decymetrów',
      multiply: true,
      figureForCalculation: 10000,
      resultUnit: 'dm',
    },
    {
    label: 'Kilometry na milimetry',
      multiply: true,
      figureForCalculation: 1000000,
      resultUnit: 'mm',
    },
    {
    label: 'Milimetry na cm',
      multiply: false,
      figureForCalculation: 10,
      resultUnit: 'cm',
    },
    {
      label: 'Milimetry na decymetry',
        multiply: false,
        figureForCalculation: 100,
        resultUnit: 'dm',
    },
    {
    label: 'Milimetry na metry',
          multiply: false,
          figureForCalculation: 1000,
          resultUnit: 'm',
    },
    {
    label: 'Milimetry na kilometry',
    multiply: false,
    figureForCalculation: 1000000,
    resultUnit: 'km',
    },
    {
      label: 'Decymetry na milimetry',
        multiply: true,
        figureForCalculation: 100,
        resultUnit: 'mm',
      },
      {
        label: 'Decymetry na centymetry',
          multiply: true,
          figureForCalculation: 10,
          resultUnit: 'cm',
        },
        {
          label: 'Decymetry na metry',
            multiply: false,
            figureForCalculation: 10,
            resultUnit: 'm',
          },
          {
            label: 'Decymetry na kilometry',
              multiply: false,
              figureForCalculation: 10000,
              resultUnit: 'km',
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
