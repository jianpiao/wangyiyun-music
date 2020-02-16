import { Component, OnInit, ViewChild } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Song, SamePlayList } from 'src/app/services/data.type/common.type';
import { CommentsComponent } from 'src/app/share/components/comments/comments/comments.component';
import { SongDetail } from 'src/app/services/data.type/song.type';


// 歌曲详情默认参数
const defaultSongDetail: SongDetail = {
  id: null,
  name: null,
  dt: null,
  mv: null,
  ar: {
    id: null,
    name: null,
  },
  al: {
    id: null,
    name: null,
    picUrl: null
  },
  lyric: [],
}

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.scss']
})
export class SongComponent implements OnInit {
  song: SongDetail = defaultSongDetail; // 歌曲信息
  commentTotal: number; // 评论总数
  hotComments: any[] = []; // 热门评论
  comments: any[] = []; // 评论
  showAllLyric: boolean = false; // 是否展开全部歌词
  sameSong: Song[] = []; // 相似歌曲
  samePlayList: SamePlayList[] = []; // 相似歌单
  currentPage: number = 1;
  lyric: string[] = [];

  // 测试组件传值
  @ViewChild('comment', { static: false }) commentEl: CommentsComponent;

  constructor(
    public service: ServiceService,
    public router: Router,
    public activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.getSong();
  }

  // 获取歌曲信息
  getSong() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.service.song.getSongDetail(params.id).subscribe(detail => {
        this.song = detail;
        if (detail.ar[0]) {
          this.song.ar = detail.ar[0];
        }
        // 获取歌词
        this.service.song.getLyric(params.id).subscribe(lyric => {
          this.song.lyric = lyric;
          this.lyric = lyric.map(item => item.lyric);
        })
        console.log("歌曲详情", this.song);
      })

      // 获取评论
      this.getComments(params.id, 0);

      // 获取相似歌单
      this.service.song.getSamePlayList(params.id).subscribe((playlist: SamePlayList[]) => {
        this.samePlayList = playlist;
      })

      // 获取相似的歌曲
      this.service.song.getSameSong(params.id).subscribe(songs => {
        this.sameSong = songs;
      })
    })
  }

  // 获取歌曲评论列表
  getComments(id: number, offset: number, before?: number) {
    this.service.song.getComment({ id, offset: offset, limit: 20, before }).subscribe(res => {
      console.log(res)
      this.commentTotal = res.total;
      this.comments = res.comments;
      if (this.hotComments.length == 0) {
        this.hotComments = res.hotComments;
      }
    })
  }

  // 播放歌曲
  playSong() {
    const item = this.song;
    this.service.song.getSongUrl(item.id).subscribe(url => {
      console.log(url)
      const item = this.song;
      this.service.player.song = {
        id: item.id,
        url: url.url,
        size: item.dt,
        name: item.name,
        artist: item.ar.name,
        picUrl: item.al.picUrl,
        lyric: item.lyric,
      }
    })

    // 开始播放
    this.service.player.start = true;
  }

  // 跳转到歌单列表也年
  toPlayList(item) {
    this.router.navigate(['playlist'], { queryParams: { id: item.id } });
  }

  // 改变分页
  pageIndexChange(page: number) {
    // 获取评论
    this.activatedRoute.queryParams.subscribe(params => {
      this.getComments(params.id, page - 1);
    })
  }

  // 跳转到专辑详情
  toAlbum(id: number) {
    this.router.navigate(['album'], { queryParams: { id } })
  }

  // 跳转到mv页面
  toMv() {
    this.router.navigate(['mv'], { queryParams: { id: this.song.id } })
  }

  // 跳转到用户详情页面
  toUser(id: number) {
    this.router.navigate(['user'], { queryParams: { id: id } });
  }

  // 跳转到艺人页面
  toArtist(id: number) {
    this.router.navigate(['artist'], { queryParams: { id } });
  }
}
