import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nav-singer',
  templateUrl: './nav-singer.component.html',
  styleUrls: ['./nav-singer.component.scss']
})
export class NavSingerComponent implements OnInit {
  // 侧栏列表
  public sliderTitle: any[] = [
    {
      title: '推荐',
      data: [
        {
          code: '1001',
          name: '热门歌手'
        }, {
          code: '5001',
          name: '入驻歌手'
        }
      ]
    },
    {
      title: '华语',
      data: [
        {
          code: '1001',
          name: '华语男歌手'
        }, {
          code: '1002',
          name: '华语女歌手'
        }, {
          code: '1003',
          name: '华语组合/乐队'
        }
      ]
    }, {
      title: '欧美',
      data: [
        {
          code: '2001',
          name: '欧美男歌手'
        }, {
          code: '2002',
          name: '欧美女歌手'
        }, {
          code: '2003',
          name: '欧美组合/乐队'
        }
      ]
    }, {
      title: '日本',
      data: [
        {
          code: '6001',
          name: '日本男歌手'
        }, {
          code: '6002',
          name: '日本女歌手'
        }, {
          code: '6003',
          name: '日本组合/乐队'
        }
      ]
    }, {
      title: '韩国',
      data: [
        {
          code: '7001',
          name: '韩国男歌手'
        }, {
          code: '7002',
          name: '韩国女歌手'
        }, {
          code: '7003',
          name: '韩国组合/乐队'
        }
      ]
    }, {
      title: '其他',
      data: [
        {
          code: '4001',
          name: '其他男歌手'
        }, {
          code: '4002',
          name: '其他女歌手'
        }, {
          code: '4003',
          name: '其他组合/乐队'
        }
      ]
    }
  ]
  public selectedName: string = '热门歌手';  // 选中的侧栏项的名称
  public list: any[] = [];  // 数据列表
  public loading: boolean = true;  // 加载状态
  public currentPage: number = 1;
  public total: number = 240;
  public cat: string = '1001';

  constructor(
    public service: ServiceService,
    public router: Router,
    public activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      if (params.name && params.cat) {
        this.selectedName = params.name;
        this.getArtistList(params.cat);
        this.cat = params.cat;
      } else {
        this.getArtistList();
      }
    })
  }

  // 歌手榜
  getArtist() {
    this.service.artist.getArtist().subscribe(res => {
      console.log("歌手榜：", res)
    })
  }

  // 歌手分类
  getArtistList(cat: string = '1001', offset: number = 0, limit: number = 30, initial: string = null) {
    this.loading = true;
    this.service.artist.getArtistList({ cat, offset: offset * limit, limit, initial }).subscribe(res => {
      console.log("歌手分类:", res)
      this.list = res;
      this.loading = false;
    })
  }

  // 选中code
  selecteCode(row) {
    this.list = [];
    this.router.navigate(['navSinger'], { queryParams: { nav: 4, cat: row.code, name: row.name } })
  }

  // 跳转到用户界面
  jumpArtist(id: number) {
    this.router.navigate(['artist'], { queryParams: { id } })
  }

  // 跳转到用户信息界面
  jumpUser(id: number) {
    this.router.navigate(['user'], { queryParams: { id } })
  }

  // 分页
  nzPageIndexChange(page: number) {
    this.getArtistList(this.cat, page);
  }

}
