import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { ServicesModule, API_CONFIG } from '../services.module';
import {
  Getdata,
  Banner,
  GetHotTags,
  Personalized,
  ArtistList,
  AlbumNewest,
  TopListDj,
  TopPlaylist,
  Song
} from '../data.type/common.type'
import { map } from 'rxjs/internal/operators';
import queryString from 'query-string';


type ArtistListParams = {
  offset: number;
  limit: number;
  cat: number;
}

type TopListDjParams = {
  offset: number;
  limit: number;
  type: string;
}

type TopPlaylistParams = {
  idx: number;
}


const defaultArtistListParams: ArtistListParams = {
  offset: 0,
  limit: 10,
  cat: 5001
}

const defaultTopListDjParams: TopListDjParams = {
  offset: 0,
  limit: 10,
  type: 'hot'
}

const defaultTopPlaylist: TopPlaylistParams = {
  idx: 1,
}

@Injectable({
  providedIn: ServicesModule
})
export class HomeService {

  constructor(private http: HttpClient, @Inject(API_CONFIG) private uri: string) { }

  // 获取轮播图
  getBanners(): Observable<Banner[]> {
    return this.http.get(this.uri + 'banner')
      .pipe(map((res: { banners: Banner[] }) => res.banners))
  }

  // 入驻歌手
  getArtistList(args: ArtistListParams = defaultArtistListParams): Observable<ArtistList[]> {
    const params = new HttpParams({ fromString: queryString.stringify(args) });
    return this.http.get(this.uri + 'artist/list', { params })
      .pipe(map((res: { artists: ArtistList[] }) => res.artists))
  }

  // 电台 - 新晋电台榜/热门电台榜
  getTopListDj(args: TopListDjParams = defaultTopListDjParams): Observable<TopListDj[]> {
    const params = new HttpParams({ fromString: queryString.stringify(args) })
    return this.http.get(this.uri + 'dj/toplist', { params })
      .pipe(map((res: { toplist: TopListDj[] }) => res.toplist))
  }

  // 排行榜
  getTopPlaylist(args: TopPlaylistParams = defaultTopPlaylist): Observable<TopPlaylist[]> {
    const params = new HttpParams({ fromString: queryString.stringify(args) })
    return this.http.get(this.uri + 'top/list', { params })
      .pipe(map((res: { playlist: TopPlaylist }) => res.playlist['tracks']))
  }

  getAllTopPlaylist(): Observable<TopPlaylist[]> {
    return this.http.get(this.uri + 'toplist')
      .pipe(map((res: any) => res['list']))
  }

}
