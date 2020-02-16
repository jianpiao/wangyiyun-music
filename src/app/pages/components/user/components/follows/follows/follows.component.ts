import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-follows',
  templateUrl: './follows.component.html',
  styleUrls: ['./follows.component.scss']
})
export class FollowsComponent implements OnInit {
  @Input() follows: any = [];
  @Input() total: number = 0;
  constructor(
    public router: Router
  ) { }

  ngOnInit() {
  }

  // 跳转到用户页面
  toUser(item, index: number = 0) {
    this.router.navigate(['user'], { queryParams: { id: item.userId, index } })
  }

}
