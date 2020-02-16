import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  @Input() userDj: any;
  @Input() userinfo: any;
  @Input() userFavoPlaylist: any[] = [];
  @Input() userCreatePlaylist: any[] = [];


  constructor(
    public router: Router
  ) { }

  ngOnInit() {
  }

  // 跳转到歌单详情页面
  toPlaylist(item) {
    this.router.navigate(['playlist'], { queryParams: { id: item.id } });
  }

}
