import { Component, OnInit } from '@angular/core';
import { AlbumDetail, Song } from 'src/app/services/data.type/common.type';
import { ServiceService } from 'src/app/services/service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {
  albumDetail: AlbumDetail = {
    id: 0,
    songs: [],
    album: {
      artist: {
        id: 0,
        name: '',
        picUrl: '',
      },
      company: '',
      name: '',
      size: 0,
      description: '',
      publishTime: 0,
      picUrl: '',
      info: {
        commentCount: 0,
        shareCount: 0,
      }
    }
  };
  public hotAlbums: any; // 热门专辑
  public description: string[] = []; // 简介内容
  public showDescription: boolean = false; // 是否展开全部介绍

  commentTotal: number; // 评论总数
  hotComments: any[] = []; // 热门评论
  comments: any[] = []; // 评论

  constructor(
    private service: ServiceService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.getAlbumDetail();
  }

  // 获取专辑详情
  getAlbumDetail() {
    this.activatedRoute.queryParams.subscribe(params => {

      // 专辑详情
      this.service.album.getAlbumDetail(params.id).subscribe(album => {
        console.log("album", album)
        if (album.songs.length > 0) {
          const al = JSON.parse(JSON.stringify(album));
          // 热门专辑
          this.getAllAlnum(al.songs[0].ar[0].id);

          album.songs = album.songs.map((item: any) => {
            return {
              id: item.id,
              name: item.name,
              url: '.',
              size: item.dt,
              artist: item.ar[0].name,
              picUrl: item.al.picUrl,
            }
          })
        }
        this.albumDetail = album;
        this.description = album.album.description.split('\n');
      });

      // 获取评论
      this.getAlbumComments(params.id);
    })
  }

  // 获取热门专辑
  getAllAlnum(id: number) {
    this.service.artist.getArtistAlbum({ id, limit: 50, offset: 0 }).subscribe(res => {
      this.hotAlbums = res.hotAlbums.filter((item, index) => index < 10);
    })
  }

  // 获取专辑评论
  getAlbumComments(id: number, offset: number = 0, before?: number) {
    this.service.album.getAlbumComments({ id, offset: offset * 20, limit: 20, before }).subscribe(res => {
      console.log("评论列表", res)
      this.commentTotal = res.total;
      this.comments = res.comments;
      if (this.hotComments.length == 0) {
        this.hotComments = res.hotComments;
      }
    })
  }

  // 评论分页
  pageIndexChange(page: number) {
    this.activatedRoute.queryParams.subscribe(params => {
      this.getAlbumComments(params.id, page - 1);
    })
  }

  // 播放歌单
  handlePlay(song: Song) {
    this.service.player.songList = this.albumDetail.songs;
    if (this.albumDetail.songs.length > 0) {
      this.playSong(song.id, song.name, song.size, song.artist, song.picUrl);
    }
  }

  // 播放歌曲
  playSong(id: number, name: string, size: number, artist: string, picUrl: string) {
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

  // 播放第一首歌
  playFirstSong() {
    const song = this.albumDetail.songs[0];
    this.playSong(song.id, song.name, song.size, song.artist, song.picUrl);
  }

  // 跳转到歌手页面
  toArtist(id: number, index: number = 0) {
    this.router.navigate(['/artist'], { queryParams: { id, index } })
  }

  // 跳转到专辑页面
  toAlbum(id: number) {
    this.router.navigate(['album'], { queryParams: { id } });
  }
}
