# bs-ngx-pagination.js
Typescript Library for Angular 7 Pagination which is compatible with Laravel pagination json data with some additional.

### Dependencies
- @angular/core
- @angular/common
- bootstrap

### Installation
```
npm i bs-ngx-pagination
```
or
```
npm i --save bs-ngx-pagination
```

### How to Use:
1. Add **BsNgxPaginationModule** in your app module imports.
   ```
   @NgModule({
   .....
    imports: [
      ...
      BsNgxPaginationModule
      ...
    ]
   .....
   })
   export class YourModule {}
   ```

2. Use component **bs-ngx-pagination** to implement the module.
3. Provide callback for action where page changed, just put
   the function in event binding **pageChange**, don't forget to add $event on first parameter.
4. Provide json data list in **[(data)]** property/event binding (Two-way binding).

Sample
   ```
   <bs-ngx-pagination [(data)]="list" (pageChange)="pageChange($event)" (perPageChange)="perPageChange($event)" [selectPerPage]="true|false" [selectPerPageValues]="[]" [inputPage]="true|false"></bs-ngx-pagination>
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

Bootstrap pagination for Angular v1.x available in this repository [Angular Laravel Pagination JS](https://github.com/verzth/angular-laravel-pagination.js)
