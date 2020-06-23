import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrganitationComponent } from './organitation/organitation.component';



@NgModule({
  declarations: [OrganitationComponent],
  imports: [
    CommonModule
  ],
  exports: [
    OrganitationComponent
  ]
})
export class OrganizationModule { }
