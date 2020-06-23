import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { DefaultCardComponent } from './default-card/default-card.component'
import { MatCardModule } from '@angular/material/card'

@NgModule({
  declarations: [DefaultCardComponent],
  imports: [
    CommonModule,
    MatCardModule
  ],
  exports: [
    DefaultCardComponent
  ]
})

export class CardsModule { }
