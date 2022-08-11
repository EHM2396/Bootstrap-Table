import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { DataTablesModule } from 'angular-datatables';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [BrowserModule, FormsModule, DataTablesModule, HttpClientModule],
  declarations: [AppComponent, HelloComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
