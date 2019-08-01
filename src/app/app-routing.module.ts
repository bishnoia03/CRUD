import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubpartComponent } from './subpart/subpart.component';
import { TableComponent } from './table/table.component';
import { ModalComponent } from './modal/modal.component';
const routes: Routes = [
  { path: 'modal', component: ModalComponent },
  { path: 'table',      component: TableComponent },

  { path: '**', component: SubpartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
