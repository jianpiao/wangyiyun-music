import { Injectable, Inject } from '@angular/core';
import { API_CONFIG } from '../services.module';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators';
import queryString from 'query-string';

interface TopArtistParams {
  limit: number;
  offset: number;
}

const defaultTopArtistParams: TopArtistParams = {
  limit: 50,
  offset: 0
}

// 歌手专辑
interface ArtistAlbum extends TopArtistParams {
  id: number;
}

const defaultArtistAlbum: ArtistAlbum = {
  limit: 50,
  offset: 0,
  id: 6452
}

// 歌手分类
interface ArtistList extends TopArtistParams {
  cat: string,
  initial: string
}

const defaultArtistListParams: ArtistList = {
  cat: '',
  limit: 30,
  offset: 0,
  initial: null
}

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  constructor(
    public http: HttpClient,
    @Inject(API_CONFIG) private uri: string,
  ) { }

  // 获取热门歌手
  getToplistArtist(args: TopArtistParams = defaultTopArtistParams): Observable<any> {
    const params = new HttpParams({ fromString: queryString.stringify(args) });
    return this.http.get(this.uri + 'top/artists', { params })
      .pipe(map((res: any) => res.artists))
  }

  // 获取歌手单曲
  getArtists(id: number = 6452): Observable<any> {
    const params = new HttpParams().set('id', id.toString());
    return this.http.get(this.uri + 'artists', { params })
      .pipe(map((res: any) => res))
  }

  // 获取歌手 mv
  getArtistMv(id: number = 6452): Observable<any> {
    const params = new HttpParams().set('id', id.toString());
    return this.http.get(this.uri + 'artist/mv', { params })
      .pipe(map((res: any) => res))
  }

  // 获取歌手专辑
  getArtistAlbum(args: ArtistAlbum = defaultArtistAlbum): Observable<any> {
    const params = new HttpParams({ fromString: queryString.stringify(args) });
    return this.http.get(this.uri + 'artist/album', { params })
      .pipe(map((res: any) => res))
  }

  // 获取歌手描述
  getArtistDesc(id: number = 6452): Observable<any> {
    const params = new HttpParams().set('id', id.toString());
    return this.http.get(this.uri + 'artist/desc', { params })
      .pipe(map((res: any) => res))
  }

  // 获取相似歌手
  getArtistSimi(id: number = 6452): Observable<any> {
    const params = new HttpParams().set('id', id.toString());
    return this.http.get(this.uri + 'simi/artist', { params })
      .pipe(map((res: any) => res))
  }

  // 歌手分类列表
  getArtistList(args: ArtistList = defaultArtistListParams): Observable<any> {
    const params = new HttpParams({ fromString: queryString.stringify(args) });
    return this.http.get(this.uri + 'artist/list', { params })
      .pipe(map((res: any) => res.artists))
  }

  // 歌手榜
  getArtist(): Observable<any> {
    return this.http.get(this.uri + 'toplist/artist')
      .pipe(map((res: any) => res.list))
  }
}
