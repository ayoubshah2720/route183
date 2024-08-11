import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PropertiesRoutingModule } from './properties-routing.module';
import { PropertiesComponent } from './properties.component';
import { PropertyDetailComponent } from './property-detail/property-detail.component';


@NgModule({
  declarations: [
    PropertiesComponent,
    PropertyDetailComponent
  ],
  imports: [
    CommonModule,
    PropertiesRoutingModule
  ]
})
export class PropertiesModule { }
