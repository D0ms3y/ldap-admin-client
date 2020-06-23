import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatCardModule } from '@angular/material/card';
import { UserCardComponent } from './user-card/user-card.component';
import { CardsModule } from '../cards/cards.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { StatisticCardComponent } from './statistic-card/statistic-card.component';

@NgModule({
  declarations: [DashboardComponent, UserCardComponent, StatisticCardComponent],
  imports: [
    CommonModule,
    CardsModule,
    FlexLayoutModule,
    MatIconModule,
    MatTableModule
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule { }
