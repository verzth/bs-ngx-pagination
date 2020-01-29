# ngx-bootstrap-pagination
[![GitHub version](https://badge.fury.io/gh/verzth%2Fngx-bootstrap-pagination.svg)](https://badge.fury.io/gh/verzth%2Fngx-bootstrap-pagination)
[![npm version](https://badge.fury.io/js/%40verzth%2Fngx-bootstrap-pagination.svg)](https://badge.fury.io/js/%40verzth%2Fngx-bootstrap-pagination)


Typescript Library for Angular 7 Pagination which is compatible with Laravel pagination json data with some additional.

### Dependencies
- @angular/core
- @angular/common
- bootstrap 4

### Installation
```
npm i @verzth/ngx-bootstrap-pagination
```
or
```
npm i --save @verzth/ngx-bootstrap-pagination
```

### How to Use:
1. Add **NgxBootstrapPaginationModule** in your app module imports.
   ```
   @NgModule({
   .....
    imports: [
      ...
      NgxBootstrapPaginationModule
      ...
    ]
   .....
   })
   export class YourModule {}
   ```

2. Use component **ngx-bootstrap-pagination** to implement the module.
3. Provide callback for action where page changed, just put
   the function in event binding **pageChange**, don't forget to add $event on first parameter.
4. Provide json data list in **[(data)]** property/event binding (Two-way binding).

Sample
   ```
   <ngx-bootstrap-pagination [(data)]="list" (pageChange)="pageChange($event)" (perPageChange)="perPageChange($event)" [selectPerPage]="true|false" [selectPerPageValues]="[]" [inputPage]="true|false"></ngx-bootstrap-pagination>
   ```
   
#### Data Config Format:
   ```
    {
        current_page: number,
        first_page_url: string,
        from: number,
        last_page: number,
        last_page_url: string,
        next_page_url: string,
        path: string,
        per_page: number,
        prev_page_url: string,
        to: number,
        total: number
    }
   ```
