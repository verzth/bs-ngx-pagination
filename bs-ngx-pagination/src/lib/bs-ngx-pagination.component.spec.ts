import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BsNgxPaginationComponent } from './bs-ngx-pagination.component';

describe('BsNgxPaginationComponent', () => {
  let component: BsNgxPaginationComponent;
  let fixture: ComponentFixture<BsNgxPaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BsNgxPaginationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BsNgxPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
