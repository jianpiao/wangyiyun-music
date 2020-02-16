import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterRoutingModule } from './router-routing.module';
import { HomeComponent } from '../pages/components/home/home.component';
// import module
import { ElModule } from 'element-angular'
import { ShareModule } from '../share/share.module';
import { PlaylistComponent } from '../pages/components/playlist/playlist/playlist.component';
import { DiscoverComponent } from '../pages/components/discover/discover/discover.component';
import { AlbumComponent } from '../pages/components/album/album/album.component';
import { UserComponent } from '../pages/components/user/user/user.component';
import { SongComponent } from '../pages/components/song/song/song.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { MvComponent } from '../pages/components/mv/mv/mv.component';
import { DjComponent } from '../pages/components/dj/dj/dj.component';
import { ArtistComponent } from '../pages/components/artist/artist/artist.component';
import { HotSongsComponent } from '../pages/components/artist/components/hotSongs/hot-songs/hot-songs.component';
import { AllAlbumComponent } from '../pages/components/artist/components/all-album/all-album/all-album.component';
import { RelativeMvComponent } from '../pages/components/artist/components/relative-mv/relative-mv/relative-mv.component';
import { ArtistDescComponent } from '../pages/components/artist/components/artist-desc/artist-desc/artist-desc.component';
import { NewAlbumComponent } from '../pages/nav/new-album/new-album/new-album.component';
import { NavPlaylistComponent } from '../pages/nav/nav-playlist/nav-playlist/nav-playlist.component';
import { LoginComponent } from '../pages/components/login/login.component';
import { NavSingerComponent } from '../pages/nav/nav-singer/nav-singer/nav-singer.component';
import { NavDjComponent } from '../pages/nav/nav-dj/nav-dj/nav-dj.component';
import { NavRankComponent } from '../pages/nav/nav-rank/nav-rank/nav-rank.component';
import { FollowsComponent } from '../pages/components/user/components/follows/follows/follows.component';
import { FollowedsComponent } from '../pages/components/user/components/followeds/followeds/followeds.component';
import { IndexComponent } from '../pages/components/user/components/index/index/index.component';


@NgModule({
  declarations: [
    HomeComponent,
    PlaylistComponent,
    DiscoverComponent,
    AlbumComponent,
    UserComponent,
    SongComponent,
    MvComponent,
    DjComponent,
    ArtistComponent,
    HotSongsComponent,
    AllAlbumComponent,
    RelativeMvComponent,
    ArtistDescComponent,
    NewAlbumComponent,
    NavPlaylistComponent,
    LoginComponent,
    NavSingerComponent,
    NavDjComponent,
    NavRankComponent,
    FollowsComponent,
    FollowedsComponent,
    IndexComponent,
  ],
  imports: [
    CommonModule,
    ElModule.forRoot(),
    ShareModule,
    /** 导入 ng-zorro-antd 模块 **/
    NgZorroAntdModule,
  ],
  exports: [RouterRoutingModule]
})
export class RouterModule { }
