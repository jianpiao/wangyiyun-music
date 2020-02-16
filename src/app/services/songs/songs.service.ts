import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { API_CONFIG } from '../services.module';
import { Observable, throwError } from 'rxjs';
import { Song, Lyric, SamePlayList, CommentParams } from '../data.type/common.type';
import { map, retry, catchError } from 'rxjs/internal/operators';
import { PlayerService } from '../player/player.service';
import queryString from 'query-string';
import { SongDetail } from '../data.type/song.type';
import { NzNotificationService } from 'ng-zorro-antd';

interface LyricResponse {
  lrc: {
    lyric: string;
  },
  tlyric: {
    lyric: string;
  }
}


interface Songs extends Song {
  album: string;
}

const defaultCommentParams: CommentParams = {
  offset: 0,
  limit: 20,
  id: 0,
  before: 0,
}


@Injectable({
  providedIn: 'root'
})
export class SongsService {
  song: Songs = {
    id: null,
    url: null,
    size: null,
    name: null,
    album: null,
    artist: null,
    picUrl: null,
    lyric: [],
  };

  constructor(
    public http: HttpClient,
    @Inject(API_CONFIG) private uri: string,
    public player: PlayerService,
    private notification: NzNotificationService) { }

  // 获取歌曲详情
  getSongDetail(id: number = 47230): Observable<SongDetail> {
    const params = new HttpParams().set('ids', id.toString());
    return this.http.get(this.uri + 'song/detail', { params })
      .pipe(map((res: SongDetail) => res['songs'][0]))
  }

  // 获取歌曲播放链接
  getSongUrl(id: number = 1405283464): Observable<Song> {
    const params = new HttpParams().set('id', id.toString());
    return this.http.get(this.uri + 'song/url', { params })
      .pipe(
        map((res: { data: Song }) => res.data[0]),
        retry(3),
        catchError(this.handleError)
      )
  }

  //错误处理
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
      this.notification.create(
        'error',
        '错误警告',
        error.error.message
      );
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
      this.notification.create(
        'error',
        `错误警告 ${error.status}`,
        error.error.message
      );
    }
    // return an observable with a user-facing error message
    return throwError(
      '发生了一些错误，请及时处理！');
  };

  // 获取歌词
  getLyric(id: number = 1405283464): Observable<Lyric[]> {
    const params = new HttpParams().set('id', id.toString());
    return this.http.get(this.uri + 'lyric', { params })
      .pipe(map((res: LyricResponse) => this.filterLyric(res)))
  }

  // 过滤歌词
  filterLyric(lyric: LyricResponse): Array<Lyric> {
    // 处理没有歌词的纯音乐
    if (lyric.lrc && lyric.lrc.lyric) {
      let lyricArr = lyric.lrc.lyric.split('\n');
      const timeExp = /\[(\d{2}):(\d{2}).(\d{2,3})\]/;
      let arr = [];
      lyricArr.forEach((e, i) => {
        if (e.trim()) {
          const line = timeExp.exec(e);
          if (line) {
            const thridTime = line[3] || '00';
            const len = thridTime.length > 2 ? parseInt(thridTime) : parseInt(thridTime) * 10;
            arr.push({
              lyric: e.replace(timeExp, '').trim(),
              time: Number(line[1]) * 60 * 1000 + Number(line[2]) * 1000 + len
            })
          }
        }
      });
      return arr;
    } else {
      return [
        { lyric: '', time: 0 },
        { lyric: '纯音乐', time: 0 }
      ]
    }
  }

  // 获取歌曲评论
  getComment(args: CommentParams = defaultCommentParams): Observable<any> {
    const params = new HttpParams({ fromString: queryString.stringify(args) })
    return this.http.get(this.uri + 'comment/music', { params })
      .pipe(map((res: any) => res))
  }

  // 获取相似歌单
  getSamePlayList(id: number): Observable<SamePlayList[]> {
    const params = new HttpParams().set('id', id.toString());
    return this.http.get(this.uri + 'simi/playlist', { params })
      .pipe(map((res: SamePlayList[]) => {
        return res['playlists'].map(item => {
          return {
            id: item.id,
            name: item.name,
            nickname: item.creator.nickname,
            userId: item.creator.userId,
            coverImgUrl: item.coverImgUrl
          }
        })
      }))
  }

  // 获取相似歌曲
  getSameSong(id: number): Observable<Song[]> {
    const params = new HttpParams().set('id', id.toString());
    return this.http.get(this.uri + 'simi/song', { params })
      .pipe(map((res: Song[]) => {
        return res['songs'].map(item => {
          return {
            id: item.id,
            url: null,
            size: null,
            name: item.name,
            album: item.album.name,
            artist: item.artists[0].name,
            picUrl: item.album.picUrl,
          }
        })
      }))
  }

}
