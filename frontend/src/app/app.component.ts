import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UnitInterface } from './models/app.model';
import { lengthUnits, weightUnits } from './units/units';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  weightUnits = weightUnits;
  lengthUnits = lengthUnits;
}
