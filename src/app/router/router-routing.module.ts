import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../pages/components/home/home.component';
import { AlbumComponent } from '../pages/components/album/album/album.component';
import { DiscoverComponent } from '../pages/components/discover/discover/discover.component';
import { PlaylistComponent } from '../pages/components/playlist/playlist/playlist.component';
import { UserComponent } from '../pages/components/user/user/user.component';
import { SongComponent } from '../pages/components/song/song/song.component';
import { MvComponent } from '../pages/components/mv/mv/mv.component';
import { DjComponent } from '../pages/components/dj/dj/dj.component';
import { ArtistComponent } from '../pages/components/artist/artist/artist.component';
import { NewAlbumComponent } from '../pages/nav/new-album/new-album/new-album.component';
import { NavPlaylistComponent } from '../pages/nav/nav-playlist/nav-playlist/nav-playlist.component';
import { NavSingerComponent } from '../pages/nav/nav-singer/nav-singer/nav-singer.component';
import { NavDjComponent } from '../pages/nav/nav-dj/nav-dj/nav-dj.component';
import { NavRankComponent } from '../pages/nav/nav-rank/nav-rank/nav-rank.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }, {
    path: 'home',
    component: HomeComponent
  }, {
    path: 'album',
    component: AlbumComponent
  }, {
    path: 'discover',
    component: DiscoverComponent
  }, {
    path: 'playlist',
    component: PlaylistComponent
  }, {
    path: 'user',
    component: UserComponent,
  }, {
    path: 'song',
    component: SongComponent
  }, {
    path: 'mv',
    component: MvComponent
  }, {
    path: 'dj',
    component: DjComponent
  }, {
    path: 'artist',
    component: ArtistComponent,
  }, {
    path: 'navAlbum',
    component: NewAlbumComponent,
  }, {
    path: 'navPlaylist',
    component: NavPlaylistComponent,
  }, {
    path: 'navSinger',
    component: NavSingerComponent
  }, {
    path: 'navDj',
    component: NavDjComponent
  }, {
    path: 'navRank',
    component: NavRankComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RouterRoutingModule { }
