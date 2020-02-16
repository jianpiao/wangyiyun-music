import { Component, OnInit, Input } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-album',
  templateUrl: './all-album.component.html',
  styleUrls: ['./all-album.component.scss']
})
export class AllAlbumComponent implements OnInit {
  @Input() albums: any = [];

  constructor(
    public service: ServiceService,
    public router: Router
  ) { }

  ngOnInit() {

  }

  // 跳转到专辑页面
  toAlbum(id: number) {
    this.router.navigate(['album'], { queryParams: { id } });
  }

}
