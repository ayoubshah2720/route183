import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettlementsComponent } from './settlements.component';
import { SettlementsDetailComponent } from './settlements-detail/settlements-detail.component';

const routes: Routes = [
  { path: '', component: SettlementsComponent },
  { path: 'settlementsDetail', component: SettlementsDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettlementsRoutingModule { }
