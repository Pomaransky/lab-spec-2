import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InputNumberModule } from 'primeng/inputnumber';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TabViewModule } from 'primeng/tabview';

import { AppComponent } from './app.component';
import { UnitConverterComponent } from './components/unit-converter/unit-converter.component';

@NgModule({
  declarations: [AppComponent, UnitConverterComponent],
  imports: [
    BrowserModule,
    InputNumberModule,
    FormsModule,
    DropdownModule,
    TabViewModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
