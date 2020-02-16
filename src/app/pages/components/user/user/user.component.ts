import { Component, OnInit } from '@angular/core';
import { TracksDetail, AlbumDetail, Song } from 'src/app/services/data.type/common.type';
import { ServiceService } from 'src/app/services/service.service';
import { ActivatedRoute, Router } from '@angular/router'

interface Userinfo {
  level: number;
  listenSongs: number;
  profile: {
    nickname: string;
    city: number;
    gender: number;
    avatarUrl: string;
    userId: number;
    signature: string;
    birthday: number;
    province: number;
  }
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  public id: number;
  private active = [
    { title: '动态', num: 0 },
    { title: '关注', num: 0 },
    { title: '粉丝', num: 0 },
  ]
  public userinfo: Userinfo = {
    level: null,
    listenSongs: null,
    profile: {
      nickname: null,
      city: null,
      gender: null,
      avatarUrl: null,
      userId: null,
      signature: null,
      birthday: null,
      province: null,
    }
  };
  // 用户dj
  public userDj: any = {
    count: 0,
    programs: []
  };
  // 选中组件
  selectedNav: number = 3;

  // 用户歌单
  public userFavoPlaylist: any[] = [];
  public userCreatePlaylist: any[] = [];

  public description: string[] = [];
  public showDescription: boolean = false;
  public follows: any = [];  // 关注
  public followeds: any = [];  // 粉丝

  constructor(
    private service: ServiceService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.getUserDetail();

  }

  // 获取用户详情
  getUserDetail() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.id = params.id;
      // 获取用户详情
      this.service.user.getUserDetail(params.id).subscribe(res => {
        console.log("用户详情：", res);
        this.userinfo = res;
        this.active[0].num = res.profile.eventCount;
        this.active[1].num = res.profile.follows;
        this.active[2].num = res.profile.followeds;
      })

      // 获取用户关注列表
      this.getUserFollow(params.id);
      // 获取用户粉丝列表
      this.getUserFolloweds(params.id);
      // 获取用户动态
      this.getUserEvent(params.id);
      // 用户关注的电台
      this.getUserDj(params.id);
      // 获取用户歌单
      this.getUserPlaylist(params.id);
      // 选中导航
      this.selectedNav = params.index || 0;
    })
  }

  // 获取用户关注列表
  getUserFollow(uid: number, offset: number = 0, limit: number = 30) {
    this.service.user.getUserFollow({ uid, offset, limit }).subscribe(res => {
      console.log("关注列表", res)
      this.follows = res;
    })
  }

  // 获取用户粉丝列表
  getUserFolloweds(uid: number, lasttime: number = 0, limit: number = 30) {
    this.service.user.getUserFolloweds({ uid, lasttime, limit }).subscribe(res => {
      console.log("粉丝列表", res)
      this.followeds = res;
    })
  }

  // 获取用户动态
  getUserEvent(uid: number, lasttime: number = 0, limit: number = 30) {
    this.service.user.getUserEvent({ uid, lasttime, limit }).subscribe(res => {
      console.log("获取用户动态", res)
    })
  }

  // 获取用户电台
  getUserDj(uid: number) {
    this.service.user.getUserDj(uid).subscribe(res => {
      console.log("用户电台：", res);
    })
  }

  // 获取用户歌单
  getUserPlaylist(uid: number) {
    this.service.user.getUserPlaylist(uid).subscribe(res => {
      console.log("获取用户歌单:", res);
      this.userFavoPlaylist = [];
      this.userCreatePlaylist = [];
      for (const item of res) {
        if (this.userinfo.profile.userId == item.creator.userId) {
          this.userFavoPlaylist.push(item);
        } else {
          this.userCreatePlaylist.push(item);
        }
      }
    })
  }

  // 跳转到歌单详情页面
  toPlaylist(item) {
    this.router.navigate(['playlist'], { queryParams: { id: item.id } });
  }

  // 切换导航
  changeNav(index: number) {
    this.activatedRoute.queryParams.subscribe(params => {
      this.router.navigate(['user'], { queryParams: { id: params.id, index } })
    })
  }

  // 粉丝分页
  changPage(page: number) {
    // 待开发
    console.log("粉丝分页page", page);
  }
}
