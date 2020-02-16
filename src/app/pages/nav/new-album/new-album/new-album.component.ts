import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';
import { AlbumNewest } from 'src/app/services/data.type/common.type';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-album',
  templateUrl: './new-album.component.html',
  styleUrls: ['./new-album.component.scss']
})
export class NewAlbumComponent implements OnInit {
  albumNewest: AlbumNewest[];  // 最新专辑
  selectedTag: string = '全部';
  topAlbum: AlbumNewest[];
  currentPage: number = 1;
  toAlbumTotal: number = 0;

  public loadingAll: boolean = true;
  public loadingHot: boolean = true;

  constructor(public service: ServiceService,
    public router: Router) { }

  ngOnInit() {
    this.getAlbumNewest();
    this.getTopAlbum();
  }

  // 跳转到专辑详情页面
  toAlbum(item: any) {
    this.router.navigate(['album'], { queryParams: { id: item.id } });
  }

  // 获取最新专辑
  getAlbumNewest(): void {
    this.service.album.getAlbumNewest().subscribe(albums => {
      this.albumNewest = albums.filter((item, index) => index < 10);
      this.loadingHot = false;
    })
  }

  // 新碟上架
  getTopAlbum(offset: number = 0, limit: number = 30) {
    this.loadingAll = true;
    this.service.album.getTopAlbum({ offset: offset * limit, limit }).subscribe(res => {
      this.topAlbum = res.albums;
      this.toAlbumTotal = res.total;
      this.loadingAll = false;
    })
  }

  // 选中标签
  selectTag(item: string) {
    this.selectedTag = item;
  }

  // 分页
  nzPageIndexChange(page: number) {
    this.getTopAlbum(page)
  }

}
