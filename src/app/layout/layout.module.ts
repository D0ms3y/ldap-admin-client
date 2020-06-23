import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HeaderComponent } from './header/header.component'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { MatListModule } from '@angular/material/list'
import { MatMenuModule } from '@angular/material/menu'
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav'
import { MatSliderModule } from '@angular/material/slider'
import { MatToolbarModule } from '@angular/material/toolbar'
import { SidebarComponent } from './sidebar/sidebar.component'
import { RouterModule } from '@angular/router'
import { ContentComponent } from './content/content.component'
import { FlexLayoutModule } from '@angular/flex-layout'
import { LayoutModule as CDKLayouModule } from '@angular/cdk/layout'
import { SidenavService } from './sidenav.service'



@NgModule({
  declarations: [HeaderComponent, SidebarComponent, ContentComponent],
  imports: [
    CommonModule,
    RouterModule,
    CDKLayouModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatSliderModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    ContentComponent
  ],
  providers: [SidenavService]
})
export class LayoutModule { }
