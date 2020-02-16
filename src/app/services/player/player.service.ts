import { Injectable } from '@angular/core';
import { Song } from '../data.type/common.type';
import { SongsService } from '../songs/songs.service';



@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  song: Song = {
    id: null,
    url: null,
    size: null,
    name: null,
    artist: null,
    picUrl: null,
  };
  start: boolean = false;
  songList: Array<Song> = [];

  constructor() {
    // this.song.url = 'http://m7.music.126.net/20191224110837/924feed2003a319d92ef473e1a5d39a3/ymusic/0fd6/4f65/43ed/a8772889f38dfcb91c04da915b301617.mp3';
  }

}
