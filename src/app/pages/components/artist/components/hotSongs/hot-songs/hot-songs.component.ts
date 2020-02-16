import { Component, OnInit, Input } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';
import { NzNotificationService } from 'ng-zorro-antd';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hot-songs',
  templateUrl: './hot-songs.component.html',
  styleUrls: ['./hot-songs.component.scss']
})
export class HotSongsComponent implements OnInit {
  @Input() songs: any = [];

  constructor(
    public service: ServiceService,
    private notification: NzNotificationService,
    public router: Router) { }

  ngOnInit() {

  }

  // 播放歌单
  handlePlay(song: any) {
    this.service.player.songList = this.songs;
    if (this.songs.length > 0) {
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

  // 跳转到歌曲详情
  toSong(id: number) {
    this.router.navigate(['song'], { queryParams: { id } })
  }

  // 跳转到艺人详情
  toArtist(id: number) {
    this.router.navigate(['artist'], { queryParams: { id } })
  }

  // 跳转到专辑详情
  toAlbum(id: number) {
    this.router.navigate(['album'], { queryParams: { id } });
  }

}
