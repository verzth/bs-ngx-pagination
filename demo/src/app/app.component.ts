import { Component } from '@angular/core';
import Pagination from '../../../bs-ngx-pagination/src/lib/bs-ngx-pagination.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'demo';
  data = {
    from: 1,
    to: 100,
    per_page: 25,
    total: 1000,
    current_page: 1,
    last_page: 10,
    select_per_page: true
  } as Pagination;
  public pageChange(page) {
    console.log(page);
  }
  public perPageChange(count) {
    console.log(count);
  }
}
