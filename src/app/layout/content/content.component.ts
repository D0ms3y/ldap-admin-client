import { Component, OnInit, ViewChild, HostListener } from '@angular/core'
import { MatSidenav } from '@angular/material/sidenav'
import { SidenavService } from '../sidenav.service'
import { BreakpointObserver, BreakpointState, Breakpoints } from '@angular/cdk/layout'
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  @ViewChild('sidenav') sidenav: MatSidenav

  isMobile: boolean

  constructor(private sidenavService: SidenavService,
              private breakpointObserver: BreakpointObserver) { }

  ngAfterViewInit(): void {
    this.sidenavService.init(this.sidenav)
  }

  ngOnInit() {
    this.breakpointObserver.observe([Breakpoints.XSmall, Breakpoints.HandsetPortrait]).subscribe((state: BreakpointState) => {
      if (state.matches) {
        this.isMobile = true
      } else {
        this.sidenavService.open()
        this.isMobile = false
      }
    })
  }

  ngOnDestroy() {
  }

}
