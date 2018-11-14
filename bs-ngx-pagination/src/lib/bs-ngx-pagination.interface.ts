export default interface Pagination {
  current_page: number;
  per_page: number;
  from: number;
  to: number;
  total: number;
  last_page: number;
  first_page_url: string;
  next_page_url: string;
  prev_page_url: string;
  last_page_url: string;
  path: string;
  data: any;
}
