import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-followeds',
  templateUrl: './followeds.component.html',
  styleUrls: ['./followeds.component.scss']
})
export class FollowedsComponent implements OnInit {
  @Input() followeds: any = [];
  @Input() total: number = 0;
  public currentPage: number = 1;
  @Output() changPage: EventEmitter<number> = new EventEmitter<number>();

  constructor(
    public router: Router
  ) { }

  ngOnInit() {
  }

  // 切换页面
  nzPageIndexChange(page: number) {
    this.changPage.emit(page);
  }

  // 跳转到用户页面
  toUser(item, index: number = 0) {
    this.router.navigate(['user'], { queryParams: { id: item.userId, index } })
  }

}
