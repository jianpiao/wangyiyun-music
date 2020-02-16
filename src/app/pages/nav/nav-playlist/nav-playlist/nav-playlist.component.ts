import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';
import { GetHotTags } from 'src/app/services/data.type/common.type';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-nav-playlist',
  templateUrl: './nav-playlist.component.html',
  styleUrls: ['./nav-playlist.component.scss']
})
export class NavPlaylistComponent implements OnInit {
  hotTags: GetHotTags[]; // 热门标签
  playlists: any = [];
  selectedTag: string = '全部';
  currentPage: number = 1;
  total: number = 0;
  tags: any = {
    all: {},
    sub: [],
    categories: []
  };
  public loading: boolean = false; // 加载状态

  constructor(
    public service: ServiceService,
    public router: Router
  ) { }

  ngOnInit() {
    this.playlistCatlist();
    this.topPlaylist();
  }

  // 获取热门歌单标签
  getHotTags(): void {
    this.service.sheet.getHotTags().subscribe(tags => {
      console.log("热门歌单标签：", tags)
    })
  }

  playlistCatlist(): void {
    this.service.sheet.playlistCatlist().subscribe(res => {
      console.log("歌单分类", res)
      res.categories = Object.values(res.categories).map(item => item)
      this.tags = res;
    })
  }

  // 获取最新数据
  topPlaylist(cat: string = '全部', limit: number = 50) {
    this.loading = true;
    this.service.sheet.topPlaylist({ order: 'hot', limit, cat }).subscribe(res => {
      console.log("获取最新歌单列表:", res)
      this.total = res.total;
      this.playlists = res.playlists;
      this.loading = false;
    })
  }

  // 选择歌单类型
  selectTag(item) {
    this.selectedTag = item.name;
    this.topPlaylist(item.name);
  }

  // 跳转到播放列表
  toPlaylist(item) {
    this.router.navigate(['playlist'], { queryParams: { id: item.id } })
  }

  // 分页
  nzPageIndexChange(page: number) {
    console.log('page:', page)
    this.topPlaylist(this.selectedTag, page * 50);
  }
}
