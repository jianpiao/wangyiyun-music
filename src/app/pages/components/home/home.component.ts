import { Component, OnInit } from '@angular/core';
import {
  Banner,
  GetHotTags,
  Personalized,
  ArtistList,
  AlbumNewest,
  TopListDj,
  TopPlaylist
} from 'src/app/services/data.type/common.type';
import { ServiceService } from 'src/app/services/service.service';
import { Router } from '@angular/router';

interface PlaylistType {
  img: string;
  name: string;
  data: Array<TopPlaylist>;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  banners: Banner[] = []; // 轮播图
  hotTags: GetHotTags[]; // 热门标签
  personalized: Personalized[]; // 推荐歌单
  artistList: ArtistList[]; // 艺人列表
  albumNewest: AlbumNewest[];  // 最新专辑
  toplistDj: TopListDj[];  // 热门dj
  playlistType: PlaylistType[] = [
    {
      img: './assets/images/top.jpg',
      name: '云音乐飙升榜',
      data: [],
    },
    {
      img: './assets/images/new.jpg',
      name: '云音乐新歌榜',
      data: [],
    },
    {
      img: './assets/images/create.jpg',
      name: '网易云原创音乐榜',
      data: [],
    },
  ];

  public loadingRank: boolean = true;  // 榜单加载
  public loadingPlaylist: boolean = true;  // 歌单加载
  public loadingAlbum: boolean = true;  // 专辑加载


  constructor(public service: ServiceService, private router: Router) { }

  ngOnInit() {
    this.getBanner();
    this.getHotTags();
    this.getPersonalSheetList();
    this.getArtistList();
    this.getAlbumNewest();
    this.getTopListDj();
    this.getTopPlaylist(0);
    this.getTopPlaylist(2);
    this.getTopPlaylist(3);
  }

  // 获取轮播图
  getBanner(): void {
    this.service.home.getBanners().subscribe(banners => {
      this.banners = banners;
    })
  }

  // 获取热门歌单标签
  getHotTags(): void {
    this.service.sheet.getHotTags().subscribe(tags => {
      this.hotTags = tags.filter((e, i) => i < 5);
    })
  }

  // 获取推荐歌单
  getPersonalSheetList(): void {
    this.service.sheet.getPersonalSheetList().subscribe(result => {
      this.personalized = result.filter((e, i) => i < 8);
      this.loadingPlaylist = false;
    })
  }

  // 获取歌单列表
  topPlaylist(cat: string = '全部', limit: number = 8) {
    this.loadingPlaylist = true
    this.service.sheet.topPlaylist({ order: 'hot', limit, cat }).subscribe(res => {
      console.log("获取歌单列表:", res)
      res.playlists = res.playlists.map(e => {
        e.picUrl = e.coverImgUrl;
        return e;
      })
      this.personalized = res.playlists;
      this.loadingPlaylist = false
    })
  }


  // 入驻歌手
  getArtistList(): void {
    this.service.home.getArtistList().subscribe(artist => {
      console.log("artist:", artist)
      this.artistList = artist.filter((item, index) => index < 5);
    })
  }

  // 获取最新专辑
  getAlbumNewest(): void {
    this.service.album.getAlbumNewest().subscribe(albums => {
      this.albumNewest = albums.filter((item, index) => index < 8);
      this.loadingAlbum = false;
    })
  }

  // 电台 - 新晋电台榜/热门电台榜
  getTopListDj(): void {
    this.service.home.getTopListDj().subscribe(toplist => {
      this.toplistDj = toplist.filter((item, index) => index < 5);
    })
  }

  // 排行榜
  getTopPlaylist(idx: number): void {
    this.service.home.getTopPlaylist({ idx }).subscribe(playlist => {
      playlist = playlist.filter((item, index) => index < 10);
      switch (idx) {
        case 0:
          this.playlistType[1].data = playlist;
          break;
        case 2:
          this.playlistType[2].data = playlist;
          break;

        default:
          this.playlistType[0].data = playlist;
          break;
      }
      this.loadingRank = false;
    })
  }

  // 播放单曲
  playSong(item: TopPlaylist): void {
    let temp: any = item;
    this.setSong(item.id, item.name, temp.dt, temp.ar[0].name, temp.al.picUrl);
  }

  setSong(id: number, name: string, size: number, artist: string, picUrl: string) {
    // 获取播放连接
    this.service.song.getSongUrl(id).subscribe(song => {
      this.service.player.song = {
        id: id,
        name: name,
        url: song.url,
        size: size,
        artist: artist,
        picUrl: picUrl,
      };

      const list = this.service.player.songList;
      if (!list.find(e => e.id == id)) {
        this.service.player.songList.push(this.service.player.song);
      }
      // 获取歌词
      this.service.song.getLyric(id).subscribe(lyric => {
        this.service.player.song.lyric = lyric;
      })
    })

    // 开始播放歌曲
    this.service.player.start = true;
  }

  onSelectChange(e): void {

  }

  // 
  selectBannerItem(item, index): void {
    if (item.targetId != 0) {
      this.jumpPage('album', item.targetId)
    } else {
      window.open(item.url)
    }
  }

  // 播放歌单
  playSheet(item) {
    this.service.sheet.getSheetList(item.id).subscribe(res => {
      this.service.player.songList = [];
      res.forEach((e: any) => {
        this.service.player.songList.push({
          id: e.id,
          name: e.name,
          url: '.',
          size: e.dt,
          artist: e.ar[0].name,
          picUrl: e.al.picUrl,
        })
      });
      if (res.length > 0) {
        let item: any = res[0];
        this.setSong(item.id, item.name, item.dt, item.ar[0].name, item.al.picUrl)
      }
    })
  }

  // 播放专辑
  playAlbum(item) {
    this.service.album.getAlbumList(item.id).subscribe(album => {
      console.log("album", album)
      this.service.player.songList = [];
      album.forEach((e: any) => {
        this.service.player.songList.push({
          id: e.id,
          name: e.name,
          url: '.',
          size: e.dt,
          artist: e.ar[0].name,
          picUrl: e.al.picUrl,
        })
      });
      if (album.length > 0) {
        let item: any = album[0];
        this.setSong(item.id, item.name, item.dt, item.ar[0].name, item.al.picUrl)
      }
    })
  }

  // 跳转到播放列表
  toPlaylist(item) {
    this.jumpPage('playlist', item.id)
  }

  // 跳转到用户页面
  toUser(item) {
    this.jumpPage('user', item.id)
  }

  // 跳转到专辑页面
  toAlbum(item) {
    this.jumpPage('album', item.id)
  }

  // 跳转页面
  jumpPage(router: string, id: number) {
    this.router.navigate([router], { queryParams: { id } })
  }

  // 跳转歌曲详情
  toSong(item) {
    this.jumpPage('song', item.id)
  }

  // 跳转到艺人页面
  jumpAritst(item, index: number) {
    this.router.navigate(['artist'], { queryParams: { id: item.id, index } })
  }

  // 跳转到用户页面
  jumpUser(item) {
    this.router.navigate(['user'], { queryParams: { id: item.accountId } })
  }

  // 跳转到歌单列表
  jumpPlaylist() {
    this.router.navigate(['navPlaylist'], { queryParams: { nav: 2 } })
  }

  // 跳转到新碟上架页面
  jumpAlbum() {
    this.router.navigate(['navAlbum'], { queryParams: { nav: 5 } })
  }

  // 跳转到榜单页面
  jumpRank() {
    this.router.navigate(['navRank'], { queryParams: { nav: 1 } })
  }

  // 跳转到歌手页面
  jumpSinger() {
    this.router.navigate(['navSinger'], { queryParams: { nav: 4 } })
  }
}
