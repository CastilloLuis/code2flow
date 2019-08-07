import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlowChartsTableComponent } from './components/flow-charts-table/flow-charts-table.component';
import { HeaderComponent } from './components/header/header.component';
import { AlertComponent } from './components/alert/alert.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FlowChartPageComponent } from './pages/flow-chart-page/flow-chart-page.component';

// App routes.
const appRoutes: Routes = [
  {path: '', component: FlowChartPageComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    FlowChartsTableComponent,
    HeaderComponent,
    AlertComponent,
    SidebarComponent,
    FlowChartPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
