import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { PlayerService } from 'src/app/services/player/player.service';
import { ServiceService } from 'src/app/services/service.service';
import { Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd';


@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  @ViewChild('audio', { static: true }) private audio: ElementRef;
  public audioEl: HTMLAudioElement;
  private showSheet: boolean = false;
  private currentTime: number = 0;

  constructor(
    public playerService: PlayerService,
    public service: ServiceService,
    public router: Router,
    private notification: NzNotificationService) {

  }

  ngOnInit() {
    this.audioEl = this.audio.nativeElement;
  }

  // 缓存成功可以播放的时候
  onCanplay() {
    this.playerService.start ? this.play() : this.pause();
  }

  // 
  private play() {
    this.audioEl.play();
    this.playerService.start ? null : this.playerService.start = true;
  }

  // 
  private pause() {
    this.playerService.start ? this.playerService.start = false : null;
    this.audioEl.pause();
  }

  // 暂停/播放
  onPlayState(state: string) {
    console.log(this.audioEl.currentTime)
    if (this.service.player.song.url) {
      state == 'play' ? this.pause() : this.play()
    } else {
      this.notification.blank(
        '警告',
        '暂时无法播放歌曲'
      );

    }

  }
  // 上一首
  onLast() {
    if (this.service.player.songList.length > 0) {
      this.changeCurrentSong(0);
    } else {
      this.notification.blank(
        '警告',
        '无法切换，暂时无播放的歌曲'
      );
    }
  }

  // 下一首
  onNext() {
    if (this.service.player.songList.length > 0) {
      this.changeCurrentSong(1)
    } else {
      this.notification.blank(
        '警告',
        '无法切换，暂时无播放的歌曲'
      );
    }
  }

  // 
  onEnd() {
    this.onNext();
  }

  // 改变当前播放的歌曲
  changeCurrentSong(type: number) {
    const list = this.playerService.songList;
    const index = list.findIndex(e => this.playerService.song.id == e.id)
    if (type == 0) {
      this.playerService.song = list[index - 1] ? list[index - 1] : list[list.length - 1]
    } else {
      this.playerService.song = list[index + 1] ? list[index + 1] : list[0]
    }
    this.setPlay(this.playerService.song.id);
  }

  setPlay(id: number) {
    // 获取播放连接
    this.service.song.getSongUrl(id).subscribe(song => {
      this.service.player.song.url = song.url;
      this.service.player.song.size = song.size;

      // 获取歌词
      this.service.song.getLyric(id).subscribe(lyric => {
        this.service.player.song.lyric = lyric;
      })
    })

    this.play();
  }

  // 显示歌单
  onShowSheet() {
    this.showSheet = !this.showSheet;
  }


  // 播放选中的歌曲
  playItem(item) {
    this.playerService.song = item;
    this.setPlay(item.id);
  }

  // 跳转到歌曲详情
  toSongDetail(item) {
    console.log(item)
    if (this.showSheet) {
      this.showSheet = false;
    }
    this.router.navigate(['song'], { queryParams: { id: item.id } })
  }
}
