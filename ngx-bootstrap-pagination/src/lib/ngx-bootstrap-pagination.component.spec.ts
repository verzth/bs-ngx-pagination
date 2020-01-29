import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxBootstrapPaginationComponent } from './ngx-bootstrap-pagination.component';

describe('NgxBootstrapPaginationComponent', () => {
  let component: NgxBootstrapPaginationComponent;
  let fixture: ComponentFixture<NgxBootstrapPaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxBootstrapPaginationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxBootstrapPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
