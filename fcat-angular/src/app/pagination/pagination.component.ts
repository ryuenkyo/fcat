import {
  Component, OnInit, Input, Output, EventEmitter
} from '@angular/core';
import {PaginationConfig} from "./pagination.config";

export interface PageChangedEvent {
  itemsPerPage:number;
  page:number;
}

@Component({
  selector: 'my-pagination',
  template: `   
   <!--<ul class="pagination">
     <li *ngIf="boundaryLinks" ng-class="{disabled: noPrevious()}"><a  (click)="selectPage(1)">{{getText('first')}}</a></li>
     <li *ngIf="directionLinks" ng-class="{disabled: noPrevious()}"><a  (click)="selectPage(page - 1)">{{getText('previous')}}</a></li>
     <li *ngFor="let page of userListPage.pages" [class]="{active: page.active}"><a  (click)="selectPage(page.number)">{{page.text}}</a></li>
     <li *ngIf="directionLinks" ng-class="{disabled: noNext()}"><a href ng-click="selectPage(page + 1)">{{getText('next')}}</a></li>
     <li *ngIf="boundaryLinks" ng-class="{disabled: noNext()}"><a href ng-click="selectPage(totalPages)">{{getText('last')}}</a></li>
   </ul>-->
   <ul class="pagination">
     <li  class="pagination-first page-item"
            [class.disabled]="noPrevious()||disabled"><a  (click)="selectPage(1,$event)">{{firstText}}</a></li>
     <li class="pagination-prev page-item" 
            [class.disabled]="noPrevious()||disabled"><a  (click)="selectPage(page - 1,$event)">{{previousText}}</a></li>
     <li *ngFor="let page of pages" [class.active]="page.active"><a  (click)="selectPage(page.number,$event)">{{page.text}}</a></li>
     <li  class="pagination-next page-item" 
            [class.disabled]="noNext()||disabled"><a  (click)="selectPage(page + 1,$event)">{{nextText}}</a></li>
     <li  class="pagination-next page-item" 
            [class.disabled]="noNext()||disabled"><a  (click)="selectPage(totalPages,$event)">{{lastText}}</a></li>
   </ul>`
})
export class PaginationComponent implements OnInit {
  @Input() public maxSize:number; //最多显示分页按钮数
  public perPageOptions = [5, 10, 20, 30, 40, 50];
  @Input() public firstText:string;
  @Input() public previousText:string;
  @Input() public nextText:string;
  @Input() public lastText:string;
  @Input() public disabled:boolean;
  /** if true current page will in the middle of pages list */
  @Input() public rotate:boolean;

  public config:any;
  public pages:any;

  @Output() public pageChanged:EventEmitter<PageChangedEvent> = new EventEmitter<PageChangedEvent>();
  @Output() public numPages:EventEmitter<number> = new EventEmitter<number>();

  protected _itemsPerPage:number;
  protected _totalItems:number;
  protected _totalPages:number;
  protected inited:boolean = false;
  protected _page:number = 1;


  constructor(paginationConfig:PaginationConfig) {
    this.config = paginationConfig.main;
    this.firstText = this.config.firstText;
    this.previousText = this.config.previousText;
    this.nextText = this.config.nextText;
    this.lastText = this.config.lastText;
    this.maxSize = this.config.maxSize;
    this.itemsPerPage = 10;
  }

  ngOnInit():void {
    this.totalPages = this.calculateTotalPages();
    // this class
    this.pages = this.getPages(this.page, this.totalPages);
    this.inited = true;

  }

  /** maximum number of items per page. If value less than 1 will display all items on one page */
  @Input()
  public get itemsPerPage():number {
    return this._itemsPerPage;
  }

  public set itemsPerPage(v:number) {
    this._itemsPerPage = v;
    this.totalPages = this.calculateTotalPages();
  }

  /** total number of items in all pages */
  @Input()
  public get totalItems():number {
    return this._totalItems;
  }

  public set totalItems(v:number) {
    this._totalItems = v;
    this.totalPages = this.calculateTotalPages();
  }

  public get totalPages():number {
    return this._totalPages;
  }

  public set totalPages(v:number) {
    this._totalPages = v;
    this.numPages.emit(v);
    if (this.inited) {
      this.selectPage(this.page);
    }
  }

  public set page(value:number) {
    const _previous = this._page;
    this._page = (value > this.totalPages) ? this.totalPages : (value || 1);

    if (_previous === this._page || typeof _previous === 'undefined') {
      return;
    }

    this.pageChanged.emit({
      page: this._page,
      itemsPerPage: this.itemsPerPage
    });
  }

  public get page():number {
    return this._page;
  }


  getPages(currentPage:number, totalPages:number):any {
    let pages:any[] = [];

    // Default page limits
    let startPage = 1;
    let endPage = totalPages;
    let isMaxSized = typeof this.maxSize !== 'undefined' && this.maxSize < totalPages;

    // recompute if maxSize
    if (isMaxSized) {
      if (this.rotate) {
        // Current page is displayed in the middle of the visible ones
        startPage = Math.max(currentPage - Math.floor(this.maxSize / 2), 1);
        endPage = startPage + this.maxSize - 1;

        // Adjust if limit is exceeded
        if (endPage > totalPages) {
          endPage = totalPages;
          startPage = endPage - this.maxSize + 1;
        }
      } else {
        // Visible pages are paginated with maxSize
        startPage = ((Math.ceil(currentPage / this.maxSize) - 1) * this.maxSize) + 1;

        // Adjust last page if limit is exceeded
        endPage = Math.min(startPage + this.maxSize - 1, totalPages);
      }
    }

    // Add page number links
    for (let num = startPage; num <= endPage; num++) {
      let page = this.makePage(num, num.toString(), num === currentPage);
      pages.push(page);
    }

    // Add links to move between page sets
    if (isMaxSized && !this.rotate) {
      if (startPage > 1) {
        let previousPageSet = this.makePage(startPage - 1, '...', false);
        pages.unshift(previousPageSet);
      }

      if (endPage < totalPages) {
        let nextPageSet = this.makePage(endPage + 1, '...', false);
        pages.push(nextPageSet);
      }
    }

    return pages;
  }

  // Create page object used in template
  protected makePage(num:number, text:string, active:boolean):{number:number, text:string, active:boolean} {
    return { text, number:num, active };
  }

  public selectPage(currentPage:number, event?:Event):void {
    if (event) {
      event.preventDefault();
    }
    if (!this.disabled) {
      if (event && event.target) {
        let target:any = event.target;
        target.blur();
      }
      this.writeValue(currentPage);
     /* if(event.target.parentNode.classList.contains("disabled")){
      }else{
        this.writeValue(currentPage);
      }*/
    }
  }

  public noPrevious():boolean {
    return this.page === 1;
  }
  public noNext():boolean {
    return this.page === this.totalPages;
  }

  public writeValue(value:number):void {
    this.page = value;
    this.pages = this.getPages(this.page, this.totalPages);
  }

  // base class
  protected calculateTotalPages():number {
    let totalPages = this.itemsPerPage < 1
      ? 1
      : Math.ceil(this.totalItems / this.itemsPerPage);
    return Math.max(totalPages || 0, 1);
  }

  getJSON(){
    return "currentPage:"+this.page+"\t"+"pageSize:"+this.itemsPerPage+"\t"
      +"totalItems:"+this.totalItems;
  }
}
