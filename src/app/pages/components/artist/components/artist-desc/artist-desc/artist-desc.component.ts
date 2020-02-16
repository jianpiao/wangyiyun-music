import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-artist-desc',
  templateUrl: './artist-desc.component.html',
  styleUrls: ['./artist-desc.component.scss']
})
export class ArtistDescComponent implements OnInit {
  @Input() artistDesc = {
    briefDesc: '',
    introduction: []
  };
  @Input() name: string = '';
  constructor() { }

  ngOnInit() {
  }

}
