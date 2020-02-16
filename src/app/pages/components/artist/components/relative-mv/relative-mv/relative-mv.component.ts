import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-relative-mv',
  templateUrl: './relative-mv.component.html',
  styleUrls: ['./relative-mv.component.scss']
})
export class RelativeMvComponent implements OnInit {
  @Input() mvs:any=[];

  constructor() { }

  ngOnInit() {
  }

  // 跳转到mv页面
  toMv(id:number){
    
  }
}
