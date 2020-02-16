import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { API_CONFIG } from '../services.module';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators';
import { GetHotTags, Personalized, Song, Tracks, TracksDetail, CommentParams } from '../data.type/common.type';
import queryString from 'query-string';


const defaultCommentParams: CommentParams = {
  offset: 0,
  limit: 20,
  id: 0,
  before: 0,
}

interface TopPlaylist {
  limit: number,
  order: string,
  cat: string
}

const TopPlaylistParams = {
  limit: 50,
  order: 'hot',
  cat: '全部'
}

@Injectable({
  providedIn: 'root'
})
export class SheetService {

  constructor(public http: HttpClient, @Inject(API_CONFIG) private uri: string) { }

  // 获取热门歌单
  getHotTags(): Observable<GetHotTags[]> {
    return this.http.get(this.uri + 'playlist/hot')
      .pipe(map((res: { tags: GetHotTags[] }) => res.tags))
  }

  // 获取歌单列表
  getPersonalSheetList(): Observable<Personalized[]> {
    return this.http.get(this.uri + 'personalized')
      .pipe(map((res: { result: Personalized[] }) => res.result))
  }

  // 获取歌单列表
  getSheetList(id: number) {
    const params = new HttpParams().set('id', id.toString())
    return this.http.get(this.uri + 'playlist/detail', { params })
      .pipe(map((res: { playlist: Tracks }) => res.playlist.tracks))
  }

  // 获取歌单列表详情
  getSheetListDetail(id: number) {
    const params = new HttpParams().set('id', id.toString())
    return this.http.get(this.uri + 'playlist/detail', { params })
      .pipe(map((res: { playlist: TracksDetail }) => res.playlist))
  }

  // 获取歌单评论
  getSheetListComments(args: CommentParams = defaultCommentParams): Observable<any> {
    const params = new HttpParams({ fromString: queryString.stringify(args) })
    return this.http.get(this.uri + 'comment/playlist', { params })
      .pipe(map((res: any) => res))
  }

  // 歌单分类
  playlistCatlist(): Observable<any> {
    return this.http.get(this.uri + 'playlist/catlist')
      .pipe(map((res: any) => res))
  }

  // 歌单 ( 网友精选碟 )
  topPlaylist(args: TopPlaylist = TopPlaylistParams): Observable<any> {
    const params = new HttpParams({ fromString: queryString.stringify(args) })
    return this.http.get(this.uri + 'top/playlist', { params })
      .pipe(map((res: any) => res))
  }
}
