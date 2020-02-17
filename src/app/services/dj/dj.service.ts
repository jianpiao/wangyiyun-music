import { Injectable, Inject } from '@angular/core';
import { API_CONFIG } from '../services.module';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators';
import queryString from 'query-string';

interface Params {
  offset: number;
  limit: number;
}

const defaultParams: Params = {
  offset: 0,
  limit: 30
}

@Injectable({
  providedIn: 'root'
})
export class DjService {

  constructor(private http: HttpClient, @Inject(API_CONFIG) private uri: string) { }

  // 获取电台轮播图
  getDjBanner(): Observable<any> {
    return this.http.get(this.uri + 'dj/banner')
      .pipe(map((res: any) => res))
  }

  // 电台 - 新晋电台榜/热门电台榜
  getHotDj(args: Params = defaultParams): Observable<any> {
    const params = new HttpParams({ fromString: queryString.stringify(args) })
    return this.http.get(this.uri + 'dj/hot', { params })
      .pipe(map((res: any) => res.djRadios))
  }
}
