import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

// 用户信息
interface Userinfo{
  nickname:string;
  userId:number;
  avatarUrl:string;
}

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  @Input() commentTotal; // 评论总数
  @Input() hotComments; // 热门评论
  @Input() comments; // 最新评论
  @Input() currentPage; // 当前分页位置
  @Output() pageIndexChange = new EventEmitter(); // 改变分页事件

  constructor(public router:Router) {

   }

  ngOnInit() {

  }

  // 改变分页位置
  nzPageIndexChange(page: number) {
    console.log("分页", page)
    this.pageIndexChange.emit(page)
  }

  // 跳转到用户个人信息页面
  toUser(item:Userinfo){
    this.router.navigate(['user'], { queryParams: { id: item.userId } })
  }
}
