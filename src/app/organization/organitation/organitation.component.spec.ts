import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganitationComponent } from './organitation.component';

describe('OrganitationComponent', () => {
  let component: OrganitationComponent;
  let fixture: ComponentFixture<OrganitationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganitationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganitationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
