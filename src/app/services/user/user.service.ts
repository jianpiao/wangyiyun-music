import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { API_CONFIG } from '../services.module';
import { map } from 'rxjs/internal/operators';
import { CommentParams } from '../data.type/common.type';
import queryString from 'query-string';


interface UserParams2 {
  offset: number,
  limit: number,
  uid: number,
}

interface UserParams {
  uid: number;
  limit: number;
  lasttime: number;
}

const defaultUserParams2: UserParams = {
  uid: null,
  limit: 30,
  lasttime: null,
}

const defaultUserParams: UserParams2 = {
  offset: 0,
  limit: 30,
  uid: 0,
}



@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    public http: HttpClient,
    @Inject(API_CONFIG) private uri: string
  ) { }

  // 获取用户详情
  getUserDetail(id: number = 32953014): Observable<any> {
    const params = new HttpParams().set('uid', id.toString());
    return this.http.get(this.uri + 'user/detail', { params })
      .pipe(map((res: any) => res))
  }

  // 获取用户关注列表
  getUserFollow(args: UserParams2 = defaultUserParams): Observable<any> {
    const params = new HttpParams({ fromString: queryString.stringify(args) });
    return this.http.get(this.uri + 'user/follows', { params })
      .pipe(map((res: any) => res.follow))
  }

  // 获取用户粉丝列表
  getUserFolloweds(args: UserParams = defaultUserParams2): Observable<any> {
    const params = new HttpParams({ fromString: queryString.stringify(args) });
    return this.http.get(this.uri + 'user/followeds', { params })
      .pipe(map((res: any) => res.followeds))
  }

  // 获取用户动态
  getUserEvent(args: UserParams = defaultUserParams2): Observable<any> {
    const params = new HttpParams({ fromString: queryString.stringify(args) });
    return this.http.get(this.uri + 'user/event', { params })
      .pipe(map((res: any) => res))
  }

  // 获取用户电台
  getUserDj(id: number = 32953014): Observable<any> {
    const params = new HttpParams().set('uid', id.toString());
    return this.http.get(this.uri + 'user/dj', { params })
      .pipe(map((res: any) => res))
  }

  // 获取用户歌单
  getUserPlaylist(id: number = 32953014): Observable<any> {
    const params = new HttpParams().set('uid', id.toString());
    return this.http.get(this.uri + 'user/playlist', { params })
      .pipe(map((res: any) => res.playlist));
  }
}
