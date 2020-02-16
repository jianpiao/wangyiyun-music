import { Injectable, Inject } from '@angular/core';
import { ServicesModule, API_CONFIG } from './services.module';
import { HomeService } from './home/home.service';
import { SongsService } from './songs/songs.service';
import { PlayerService } from './player/player.service';
import { SheetService } from './sheet/sheet.service';
import { AlbumService } from './album/album.service';
import { UserService } from './user/user.service';
import { ArtistService } from './artist/artist.service';

@Injectable({
  providedIn: ServicesModule
})
export class ServiceService {

  constructor(
    public home: HomeService,
    public song: SongsService,
    public player: PlayerService,
    public sheet: SheetService,
    public album: AlbumService,
    public user: UserService,
    public artist: ArtistService) {

  }


}
