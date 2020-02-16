import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  list: Array<string> = ['发现音乐', '我的音乐'];
  tabActive: number = 0;
  navList: Array<string> = ['推荐', '排行榜', '歌单', '主播电台', '歌手', '新碟上架'];
  selectedNav: number = 0;

  constructor(
    public router: Router,
    public activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.selectedNav = params.nav || 0;
    })
  }

  selectTab(item, index): void {
    this.tabActive = index;
  }

  // 改变导航
  changeNav(index: number = 0) {
    this.selectedNav = index;
    switch (index) {
      case 0:
        this.routerTo('home')
        break;
      case 1:
        this.routerTo('navRank')
        break;
      case 2:
        this.routerTo('navPlaylist')
        break;
      case 3:
        this.routerTo('navDj')
        break;
      case 4:
        this.routerTo('navSinger')
        break;
      case 5:
        this.routerTo('navAlbum')
        break;
      default:
        // this.routerTo('home')
        break;
    }

  }

  // 导航跳转
  routerTo(name: string) {
    this.router.navigate([name], { queryParams: { nav: this.selectedNav } })
  }

  // 返回首页
  toHome() {
    this.router.navigate(['home'])
  }
}
