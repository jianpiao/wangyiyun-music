import { Injectable, Inject } from '@angular/core';
import { API_CONFIG } from '../services.module';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Song, AlbumNewest, AlbumDetail, CommentParams } from '../data.type/common.type';
import { map } from 'rxjs/internal/operators';
import queryString from 'query-string';

const defaultCommentParams: CommentParams = {
  offset: 0,
  limit: 20,
  id: 0,
  before: 0,
}

interface TopAlbum {
  offset: number;
  limit: number;
}

const defaultTopAlbumParams: TopAlbum = {
  offset: 0,
  limit: 30
}


@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(public http: HttpClient, @Inject(API_CONFIG) private uri: string) { }

  // 最新专辑
  getAlbumNewest(): Observable<AlbumNewest[]> {
    return this.http.get(this.uri + 'album/newest').
      pipe(map((res: { albums: AlbumNewest[] }) => res.albums))
  }

  // 获取专辑内容
  getAlbumList(id: number): Observable<Song[]> {
    const params = new HttpParams().set('id', id.toString());
    return this.http.get(this.uri + 'album', { params })
      .pipe(map((res: { songs: Song[] }) => res.songs))
  }

  // 获取专辑详情
  getAlbumDetail(id: number): Observable<AlbumDetail> {
    const params = new HttpParams().set('id', id.toString());
    return this.http.get(this.uri + 'album', { params })
      .pipe(map((res: AlbumDetail) => res))
  }

  // 获取专辑评论
  getAlbumComments(args: CommentParams = defaultCommentParams): Observable<any> {
    const params = new HttpParams({ fromString: queryString.stringify(args) })
    return this.http.get(this.uri + 'comment/album', { params })
      .pipe(map((res: any) => res))
  }

  // 新碟上架
  getTopAlbum(args: TopAlbum = defaultTopAlbumParams): Observable<any> {
    const params = new HttpParams({ fromString: queryString.stringify(args) });
    return this.http.get(this.uri + 'top/album', { params }).
      pipe(map((res: any) => res))
  }
}
