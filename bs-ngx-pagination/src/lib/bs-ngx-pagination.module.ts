import { NgModule } from '@angular/core';
import { BsNgxPaginationComponent } from './bs-ngx-pagination.component';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [BsNgxPaginationComponent],
  imports: [
    CommonModule
  ],
  exports: [BsNgxPaginationComponent]
})
export class BsNgxPaginationModule { }
