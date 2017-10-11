// todo: split
import { Injectable } from '@angular/core';

/** Provides default values for Pagination and pager components */
@Injectable()
export class PaginationConfig {
  public main: any = {
    maxSize: 6,
    itemsPerPage: 10,
    boundaryLinks: false,
    directionLinks: true,
    firstText: 'First',
    previousText: '«',
    nextText: '»',
    lastText: 'Last',
    pageBtnClass: '',
    rotate: true
  };
  public pager: any = {
    itemsPerPage: 15,
    previousText: '« Previous',
    nextText: 'Next »',
    pageBtnClass: '',
    align: true
  };
}
