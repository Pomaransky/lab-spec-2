import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UnitInterface } from 'src/app/models/app.model';

@Component({
  selector: 'app-unit-converter',
  templateUrl: './unit-converter.component.html',
  styleUrls: ['./unit-converter.component.scss'],
})
export class UnitConverterComponent implements OnInit {
  @Input() units!: UnitInterface[];
  selectedUnit!: UnitInterface;
  inputValue = 0;
  resultValue: BehaviorSubject<number> = new BehaviorSubject<number>(0.0);
  resultUnit: BehaviorSubject<string> = new BehaviorSubject<string>('cm');

  ngOnInit(): void {
    this.resultUnit.next(this.units[0].resultUnit);
  }

  changeUnits(event: any): void {
    this.converter(this.selectedUnit, 0);
    this.inputValue = 0;
    this.resultUnit.next(event.value.resultUnit);
  }

  converter(unit: UnitInterface, value: number): void {
    if (unit.multiply) {
      this.resultValue.next(value * unit.figureForCalculation);
    } else {
      this.resultValue.next(value / unit.figureForCalculation);
    }
  }

  changeValue(event: any): void {
    this.converter(this.selectedUnit, event.value);
  }
}
