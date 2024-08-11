import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettlementsRoutingModule } from './settlements-routing.module';
import { SettlementsComponent } from './settlements.component';
import { SettlementsDetailComponent } from './settlements-detail/settlements-detail.component';
import { SettlementTableComponent } from './settlement-table/settlement-table.component';


@NgModule({
  declarations: [
    SettlementsComponent,
    SettlementsDetailComponent,
    SettlementTableComponent
  ],
  imports: [
    CommonModule,
    SettlementsRoutingModule
  ]
})
export class SettlementsModule { }
