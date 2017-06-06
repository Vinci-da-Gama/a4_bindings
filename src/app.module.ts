import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ConverterStyle } from './app.convertstyle';
import { CurrencySelectorComponent } from './components/selector-dir.component';
import { FixedNumberPipe } from './pipes/numberFixed.pipe';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, ConverterStyle, CurrencySelectorComponent, FixedNumberPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
