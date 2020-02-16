import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';
import { Song, TracksDetail, Personalized } from 'src/app/services/data.type/common.type';
import { ActivatedRoute, Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss']
})
export class PlaylistComponent implements OnInit {
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
  commentTotal: number; // 评论总数
  hotComments: any[] = []; // 热门评论
  comments: any[] = []; // 评论
  personalized: Personalized[]; // 热门歌单

  private description: string[] = [];

  constructor(
    private service: ServiceService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private notification: NzNotificationService) {

  }

  ngOnInit() {
    this.getPlaylistDetail();
    this.getHotPlaylist();
  }

  // 获取歌单列表详情
  getPlaylistDetail() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.service.sheet.getSheetListDetail(params.id).subscribe(playlist => {
        this.playlistDetail = playlist;
        if (playlist.description) {
          this.description = playlist.description.split("\n");
        }
      });

      // 获取评论
      this.getPlaylistComments(params.id);
    })
  }

  // 获取歌单评论
  getPlaylistComments(id: number, offset?: number, before?: number) {
    this.service.sheet.getSheetListComments({ id, offset: offset, limit: 20, before }).subscribe(res => {
      this.commentTotal = res.total;
      this.comments = res.comments;
      if (this.hotComments.length == 0) {
        this.hotComments = res.hotComments;
      }
    })
  }

  // 获取热门歌单
  getHotPlaylist() {
    this.service.sheet.getPersonalSheetList().subscribe(result => {
      this.personalized = result.filter((e, i) => i < 5);
    })
  }

  // 评论分页
  pageIndexChange(page: number) {
    this.activatedRoute.queryParams.subscribe(params => {
      this.getPlaylistComments(params.id, page - 1);
    })
  }

  // 跳转到个人用户
  jumpUser(id: number) {
    this.router.navigate(['user'], { queryParams: { id } })
  }

  // 跳转到推荐歌单
  toPlaylist(id: number) {
    this.router.navigate(['playlist'], { queryParams: { id } });
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
