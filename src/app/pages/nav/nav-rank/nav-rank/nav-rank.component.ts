import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TracksDetail } from 'src/app/services/data.type/common.type';
import { NzNotificationService } from 'ng-zorro-antd';

@Component({
  selector: 'app-nav-rank',
  templateUrl: './nav-rank.component.html',
  styleUrls: ['./nav-rank.component.scss']
})
export class NavRankComponent implements OnInit {
  public allList: any = [];
  public list: any = [];
  public selectedSlider: number = 0;
  commentTotal: number; // 评论总数
  hotComments: any[] = []; // 热门评论
  comments: any[] = []; // 评论
  playlistDetail: TracksDetail = {
    id: 0,
    tracks: [],
    creator: {
      userId: 0,
      avatarUrl: '',
      nickname: '',
    },
    coverImgUrl: '',
    description: '',
    name: '',
    shareCount: 0,
    commentCount: 0,
    playCount: 0,
    createTime: 0,
    subscribedCount: 0,
    tags: []
  };
  private description: string[] = [];
  public loading: boolean = true; // 加载框

  constructor(public service: ServiceService,
    public activatedRoute: ActivatedRoute,
    public router: Router,
    private notification: NzNotificationService) { }

  ngOnInit() {
    // 获取歌单详情
    this.activatedRoute.queryParams.subscribe(params => {
      if (params.idx) {
        this.getPlaylistDetail(params.idx)
        // 获取榜单列表
        this.getAllTopPlaylist();
      } else {
        // 获取榜单列表
        this.getAllTopPlaylist(1);
      }
    })
  }

  // 排行榜
  getTopPlaylist(idx: number): void {
    this.service.home.getTopPlaylist({ idx }).subscribe(playlist => {
      console.log("获取排行榜到数据：", playlist)
      this.list = playlist;
    })
  }

  // 获取所有榜单
  getAllTopPlaylist(status: number = 0) {
    this.service.home.getAllTopPlaylist().subscribe(res => {
      this.allList = res;

      // 如果url地址的id不存在则区榜单列表第一个的id
      if (status == 1) {
        this.getPlaylistDetail(res[0] && res[0].id)
      }
    })
  }

  // 获取歌单列表详情
  getPlaylistDetail(id: number) {
    this.loading = true;
    this.service.sheet.getSheetListDetail(id).subscribe(playlist => {
      this.playlistDetail = playlist;
      if (playlist.description) {
        this.description = playlist.description.split("\n");
      }
    });

    // 获取评论
    this.getPlaylistComments(id);
  }


  // 获取歌单评论
  getPlaylistComments(id: number, offset?: number, before?: number) {
    this.service.sheet.getSheetListComments({ id, offset: offset, limit: 20, before }).subscribe(res => {
      this.commentTotal = res.total;
      this.comments = res.comments;
      if (this.hotComments.length == 0) {
        this.hotComments = res.hotComments;
      }
      this.loading = false;
    })
  }

  // 选中侧栏
  selectItem(item, index: number) {
    this.selectedSlider = index;
    this.getPlaylistDetail(item.id);
    this.router.navigate(['navRank'], { queryParams: { nav: 1, idx: item.id } })
  }

  // 评论分页
  pageIndexChange(page: number) {
    this.activatedRoute.queryParams.subscribe(params => {
      this.getPlaylistComments(params.id, page - 1);
    })
  }

  // 获取id
  // rangId(val: string) {
  //   const data = {
  //     '云音乐新歌榜': 0,
  //     '云音乐热歌榜': 1,
  //     '网易原创歌曲榜': 2,
  //     '云音乐飙升榜': 3,
  //     '云音乐电音榜': 4,
  //     'UK排行榜周榜': 5,
  //     '美国Billboard周榜': 6,
  //     'KTV嗨榜': 7,
  //     'iTunes榜': 8,
  //     'Hit FM Top榜': 9,
  //     '日本Oricon周榜': 10,
  //     '韩国Melon排行榜周榜': 11,
  //     '韩国Mnet排行榜周榜': 12,
  //     '韩国Melon原声周榜': 13,
  //     '中国TOP排行榜(港台榜)': 14,
  //     '中国TOP排行榜(内地榜)': 15,
  //     '香港电台中文歌曲龙虎榜': 16,
  //     '华语金曲榜': 17,
  //     '中国嘻哈榜': 18,
  //     '法国 NRJ EuroHot 30周榜': 19,
  //     '台湾Hito排行榜': 20,
  //     'Beatport全球电子舞曲榜': 21,
  //     '云音乐ACG音乐榜': 22,
  //     '云音乐说唱榜': 23,
  //     '云音乐古典音乐榜': 24,
  //     '抖音排行榜': 26,
  //     '新声榜': 27,
  //     '云音乐韩语榜': 28,
  //     '英国Q杂志中文版周榜': 29,
  //     '电竞音乐榜': 30,
  //     '云音乐欧美热歌榜': 31,
  //     '云音乐欧美新歌榜': 32,
  //     '说唱TOP榜': 33,
  //   };
  //   return data[val] || 0;
  // }

  // 跳转到个人用户
  jumpUser(id: number) {
    this.router.navigate(['user'], { queryParams: { id } })
  }

  // 播放第一首歌
  playFirstSong() {
    if (this.playlistDetail.tracks.length > 0) {
      const song = this.playlistDetail.tracks[0];
      const art = song.ar.map(item => item.name)
      this.playSong(song.id, song.name, song.dt, art, song.al.picUrl);
    } else {
      this.notification.create(
        'error',
        `错误警告`,
        '没有播放的歌曲'
      );
    }
  }

  // 播放歌单
  handlePlay(song: any) {
    this.service.player.songList = this.playlistDetail.tracks;
    if (this.playlistDetail.tracks.length > 0) {
      const art = song.ar.map(item => item.name)
      this.playSong(song.id, song.name, song.dt, art, song.al.picUrl);
    }
  }

  // 播放歌曲
  playSong(id: number, name: string, size: number, artist: string, picUrl: string) {
    // 获取播放连接
    this.service.song.getSongUrl(id).subscribe(song => {
      if (song.url) {
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
      } else {
        this.notification.create(
          'error',
          `错误警告`,
          '付费歌曲，无法播放'
        );
      }
    })

    // 开始播放歌曲
    this.service.player.start = true;
  }

  // 跳转到歌曲详情页面
  toSong(id: number) {
    console.log('歌曲详情', id)
    this.router.navigate(['song'], { queryParams: { id } });
  }

  // 跳转到歌手页面
  toArtist(id: number) {
    console.log('歌手页面', id)
    this.router.navigate(['artist'], { queryParams: { id } });
  }

  // 跳转到专辑页面
  toAlbum(id: number) {
    console.log("专辑页面:", id)
    this.router.navigate(['album'], { queryParams: { id } });
  }

  // 收藏
  favorite() {
    this.notification.create(
      'success',
      `提示`,
      '收藏功能，等待开发'
    );
  }

  // 分享
  share() {
    this.notification.create(
      'success',
      `提示`,
      '分享功能，等待开发'
    );
  }

  // 发私信
  sentMessage() {
    this.notification.create(
      'success',
      `提示`,
      '发送私信功能，等待开发'
    );
  }
}
