import { NgModule } from '@angular/core';
import { NgxBootstrapPaginationComponent } from './ngx-bootstrap-pagination.component';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [NgxBootstrapPaginationComponent],
  imports: [
    CommonModule
  ],
  exports: [NgxBootstrapPaginationComponent]
})
export class NgxBootstrapPaginationModule { }
