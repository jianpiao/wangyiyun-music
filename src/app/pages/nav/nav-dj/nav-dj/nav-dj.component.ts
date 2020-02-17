import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-dj',
  templateUrl: './nav-dj.component.html',
  styleUrls: ['./nav-dj.component.scss']
})
export class NavDjComponent implements OnInit {
  public hotDj: any = [];
  public currentPage: number = 1;
  public total: number = 240;
  public loading: boolean = true;

  constructor(
    public service: ServiceService,
    public router: Router
  ) { }

  ngOnInit() {
    // this.getDjBanner();
    this.getHotDj();
  }

  // 获取dj轮播图
  getDjBanner() {
    this.service.dj.getDjBanner().subscribe(res => {
      console.log("获取的数据是：", res)
    })
  }

  // 获取热门dj
  getHotDj(page: number = 1) {
    this.loading = true;
    this.service.dj.getHotDj({ offset: page - 1, limit: page * 30 }).subscribe(res => {
      console.log("获取的热门dj是：", res)
      this.hotDj = res;
      this.loading = false;
    })
  }

  // 跳转到dj
  toDj(id: number) {
    this.router.navigate(['dj'], { queryParams: { id } })
  }

  // 分页
  nzPageIndexChange(page: number) {
    this.getHotDj(page);
  }

}
