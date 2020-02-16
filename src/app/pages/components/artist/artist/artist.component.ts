import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit {
  public selectedNav: number = 0;
  public hotArtist: any = [];
  public hotSongs: any = [];
  public hotAlbums: any = [];
  public mvs: any = [];
  public artistDesc: any = [];
  public id: number;
  public loading: boolean = false;
  public artist: any = {
    id: '',
    name: '',
    picUrl: '',
    alias: []
  };

  constructor(
    public service: ServiceService,
    public router: Router,
    public activatedRouter: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getData();
  }

  // 获取数据
  getData() {
    this.activatedRouter.queryParams.subscribe(params => {
      const id = params.id;
      this.id = id;
      this.loading = true;
      this.getArtistSimi(id);
      // 默认获取艺人信息
      this.getArtists(id);
      // 选择选中的类型
      // this.changeNav(params.index && parseInt(params.index))
      this.selectedNav = params.index && parseInt(params.index) || 0;
    })
  }

  // 获取热门歌手
  getArtistSimi(id: number) {
    this.service.artist.getToplistArtist().subscribe(res => {
      this.hotArtist = res.filter((item, index) => index < 6);
    });
  }

  // 获取歌手单曲 
  getArtists(id: number) {
    this.service.artist.getArtists(id).subscribe(res => {
      this.artist = res.artist;
      this.hotSongs = res.hotSongs;
      this.loading = false;
    })
  }

  // 获取所有专辑
  getAllAlnum(id: number) {
    this.service.artist.getArtistAlbum({ id, limit: 50, offset: 0 }).subscribe(res => {
      this.hotAlbums = res.hotAlbums;
      this.loading = false;
    })
  }

  // 获取mv
  getArtistMv(id: number) {
    this.service.artist.getArtistMv(id).subscribe(res => {
      this.mvs = res.mvs;
      this.loading = false;
    })
  }

  // 获取描述
  getArtistDesc(id: number) {
    this.service.artist.getArtistDesc(id).subscribe(res => {
      this.artistDesc = res;
      this.loading = false;
    })
  }

  // 切换导航
  changeNav(index: number = 0) {
    this.selectedNav = index;
    const id = this.id;
    this.loading = true;
    this.router.navigate(['artist'], { queryParams: { id, index } });
    switch (index) {
      case 0:
        this.getArtists(id);
        break;
      case 1:
        this.getAllAlnum(id);
        break;
      case 2:
        this.getArtistMv(id);
        break;
      default:
        this.getArtistDesc(id);
        break;
    }
  }

  // 跳转到歌手页面
  toArtist(id: any) {
    console.log('id', id);
    this.router.navigate(['artist'], { queryParams: { id } });
  }
}
