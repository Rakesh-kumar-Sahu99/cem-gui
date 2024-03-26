import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from './top-bar/top-bar.component';
import { MenuComponent } from './menu/menu.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { RouterModule, Routes } from '@angular/router';
import { GridComponent } from './grid/grid.component';
import { AgGridAngular } from 'ag-grid-angular';
import { DataServiceListComponent } from '../data-management/data-service-list/data-service-list.component';
import { DataSourceListComponent } from '../data-management/data-source-list/data-source-list.component';
import { DataServiceFormComponent } from '../data-management/data-service-form/data-service-form.component';

const routes: Routes = [
  { path: 'dataSource', component: DataSourceListComponent },
  { path: 'dataService', component: DataServiceListComponent },
  // { path: 'dataService', component: DataServiceFormComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' } // Redirect to dataService by default
];

@NgModule({
  declarations: [
    TopBarComponent,
    MenuComponent,
    GridComponent
  ],
  exports:[
    MenuComponent,
    TopBarComponent,
    GridComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    MatToolbarModule,
    MatSelectModule,
    AgGridAngular,
    RouterModule.forRoot(routes)
  ]
})
export class CoreModule { }
