(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <div class=\"header\">\n    <app-header></app-header>\n  </div>\n  <div class=\"body\">\n    <div class=\"content\">\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n  <div class=\"footer\">\n    <app-footer></app-footer>\n  </div>\n\n  <!-- 登录 -->\n  <!-- <app-login class=\"mask\"></app-login> -->\n\n  <!-- 底部播放器 -->\n  <app-player></app-player>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/album/album/album.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/album/album/album.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"album\">\n  <div class=\"album-box\">\n    <div class=\"left\">\n      <div class=\"album-header\">\n        <div class=\"album-header-box\">\n          <div class=\"album-pic\">\n            <img class=\"title-img\" [src]=\"albumDetail.album.picUrl\" *ngIf=\"albumDetail.album.picUrl\" width=\"208\"\n              height=\"208\">\n          </div>\n          <div class=\"album-header-right\">\n            <div class=\"album-header-title\">\n              <div class=\"album-header-tag\"></div>\n              <h2> {{albumDetail.album.name}}</h2>\n            </div>\n            <div class=\"album-header-create\">\n              <img [src]=\"albumDetail.album.artist.picUrl\" *ngIf=\"albumDetail.album.artist.picUrl\" alt=\"avatarUrl\"\n                width=\"40\" height=\"40\">\n              <span class=\"album-header-create-key\">歌手: </span>\n              <span class=\"album-header-create-value\" (click)=\"toArtist(albumDetail.album.artist.id)\">\n                {{albumDetail.album.artist.name}}</span>\n            </div>\n            <div class=\"album-publish-time\">\n              <span>发行时间: {{albumDetail.album.publishTime | date:'yyyy-MM-dd'}}</span>\n            </div>\n            <div class=\"album-publish-time\">\n              <span>发行公司: {{albumDetail.album.company}}</span>\n            </div>\n            <!-- 工具栏 -->\n            <div class=\"album-header-tool\">\n              <div>\n                <i nz-icon nzType=\"play-circle\" nzTheme=\"outline\" (click)=\"playFirstSong()\"></i>\n                <span>播放</span>\n              </div>\n              <div>\n                <i nz-icon nzType=\"folder-add\" nzTheme=\"outline\"></i>\n                <span>收藏</span>\n              </div>\n              <div>\n                <i nz-icon nzType=\"share-alt\" nzTheme=\"outline\"></i>\n                <span>分享 ({{albumDetail.album.info.shareCount}})</span>\n              </div>\n              <div>\n                <i nz-icon nzType=\"message\" nzTheme=\"outline\"></i>\n                <span>评论 ({{albumDetail.album.info.commentCount}})</span>\n              </div>\n            </div>\n            <div class=\"album-desc\">\n              <h4>专辑介绍:<br /></h4>\n              <p *ngFor=\"let des of description,let index = index\"\n                [ngStyle]=\"{'display': !showDescription?index<10?'block':'none':'block'}\">{{des}}<br /></p>\n              <el-button type=\"text\" *ngIf=\"description.length>10\" (click)=\"showDescription = !showDescription\">\n                {{showDescription?'收起':'展开'}}\n              </el-button>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <!-- 歌曲列表 -->\n      <div class=\"album-songlist\">\n        <div class=\"album-songlist-header\">\n          <h2>歌曲列表</h2>\n          <span>{{albumDetail.album.size}}首歌</span>\n        </div>\n        <div class=\"album-songlist-table\">\n          <nz-table #basicTable [nzData]=\"albumDetail.songs\" [nzFrontPagination]=\"false\">\n            <thead>\n              <tr>\n                <th>#</th>\n                <th>歌曲标题</th>\n                <th>时长</th>\n                <th>歌手</th>\n                <th>操作</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let data of basicTable.data,let index = index\">\n                <td>{{index}}</td>\n                <td>{{ data.name }}</td>\n                <td>{{ data.size  | date:'mm:ss'}}</td>\n                <td>{{ data.artist }}</td>\n                <td style=\"width: 130px;\">\n                  <span>播放</span>\n                  <button nz-button nzType=\"link\" (click)=\"handlePlay(data)\">\n                    <i class=\"icon-zanting\" style=\"font-size: 1.5rem;\"></i>\n                  </button>\n                </td>\n              </tr>\n            </tbody>\n          </nz-table>\n        </div>\n      </div>\n\n      <!-- 评论组件 -->\n      <app-comments #comment [commentTotal]=\"commentTotal\" [hotComments]=\"hotComments\" [comments]=\"comments\"\n        [currentPage]=\"1\" (pageIndexChange)=\"pageIndexChange($event)\"></app-comments>\n    </div>\n\n    <!-- 右边 -->\n    <div class=\"right\">\n      <!-- 相关推荐 -->\n      <div class=\"commend\">\n        <div class=\"title flex\">\n          <h4>Ta的其他热门专辑</h4>\n          <span (click)=\"toArtist(albumDetail.album.artist.id,1)\">全部></span>\n        </div>\n        <div class=\"artist\">\n          <div class=\"item flex\" *ngFor=\"let item of hotAlbums\">\n            <div class=\"img\">\n              <img [src]=\"item.picUrl\" width=\"50\" height=\"50\" (click)=\"toAlbum(item.id)\">\n            </div>\n            <div class=\"content\">\n              <p (click)=\"toAlbum(item.id)\">{{item.name}}</p>\n              <p>{{item.publishTime | date:'yyyy-MM-dd'}}</p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/artist/artist/artist.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/artist/artist/artist.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"artist\">\n  <div class=\"content\">\n    <div class=\"left\">\n      <!-- 头部信息 -->\n      <div class=\"header\">\n        <div class=\"flex name\">\n          <h1>{{artist.name}}</h1>\n          <span *ngFor=\"let item of artist.alias\">{{item}}</span>\n        </div>\n        <div class=\"img\" [ngStyle]=\"{'background-image': 'url('+artist.picUrl+')'}\">\n          <div class=\"flex private-home\">\n            <i nz-icon nzType=\"user\" nzTheme=\"outline\"></i>\n            <span>个人主页</span>\n          </div>\n          <div class=\"flex favorite\">\n            <i nz-icon nzType=\"folder-add\" nzTheme=\"outline\"></i>\n            <span>收藏</span>\n          </div>\n        </div>\n      </div>\n\n      <!-- 信息切换栏 -->\n      <div class=\"flex nav\">\n        <div class=\"nav-item\" *ngFor=\"let item of ['热门作品','所有专辑','相关mv','艺人介绍'],let index = index\" [ngStyle]=\"{'border-top': index==selectedNav?'2px solid #d13030':'2px solid #fff',\n          'border-bottom':index==selectedNav?'none':'1px solid #eee', \n          'border-left':index==0?'1px solid #eee':'none'}\" (click)=\"changeNav(index)\">\n          <div class=\"name\">\n            {{item}}\n          </div>\n        </div>\n      </div>\n\n      <!-- 导航内容 -->\n      <div class=\"nav-comp\" *ngIf=\"!loading\">\n        <app-hot-songs *ngIf=\"selectedNav==0\" [songs]=\"hotSongs\"></app-hot-songs>\n        <app-all-album *ngIf=\"selectedNav==1\" [albums]=\"hotAlbums\"></app-all-album>\n        <app-relative-mv *ngIf=\"selectedNav==2\" [mvs]=\"mvs\"></app-relative-mv>\n        <app-artist-desc *ngIf=\"selectedNav==3\" [artistDesc]=\"artistDesc\" [name]=\"artist.name\"></app-artist-desc>\n      </div>\n      <div style=\"text-align: center;margin: 20px 0;\">\n        <nz-spin nzSimple *ngIf=\"loading\"></nz-spin>\n      </div>\n\n    </div>\n    <!-- 右边侧栏推荐 -->\n    <div class=\"right\">\n      <div class=\"commend\">\n        <div class=\"title\">\n          <h4>热门歌手</h4>\n        </div>\n        <div class=\"flex artist\">\n          <div class=\"item\" *ngFor=\"let item of hotArtist\">\n            <img [src]=\"item.picUrl\" width=\"50\" height=\"50\" (click)=\"toArtist(item.id)\">\n            <p (click)=\"toArtist(item.id)\">{{item.name}}</p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/artist/components/all-album/all-album/all-album.component.html":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/artist/components/all-album/all-album/all-album.component.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- 所有专辑 -->\n<div class=\"all-album\">\n  <div class=\"list flex\">\n    <div class=\"item\" *ngFor=\"let item of albums,let index = index\" (click)=\"toAlbum(item.id)\">\n      <div class=\"img\">\n        <img [src]=\"item.picUrl\" width=\"120\" height=\"120\" *ngIf=\"item.picUrl\">\n      </div>\n      <p class=\"text-over name\">{{item.name}}</p>\n      <p class=\"text-over publishTime\">{{item.publishTime | date:'yyyy-MM-dd'}}</p>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/artist/components/artist-desc/artist-desc/artist-desc.component.html":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/artist/components/artist-desc/artist-desc/artist-desc.component.html ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"desc\">\n  <div class=\"title flex\">\n    <div class=\"tag\"></div>\n    <h4>{{name}}简介</h4>\n  </div>\n  <div>\n    <p class=\"brief-desc\">{{artistDesc.briefDesc}}</p>\n  </div>\n  <div class=\"other\">\n    <div class=\"intro-item\" *ngFor=\"let item of artistDesc.introduction\">\n      <div class=\"title\">\n        <h4>{{item.ti}}</h4>\n      </div>\n      <div>\n        <p class=\"brief-desc\">{{item.txt}}</p>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/artist/components/hotSongs/hot-songs/hot-songs.component.html":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/artist/components/hotSongs/hot-songs/hot-songs.component.html ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"hot-songs\">\n  <div class=\"pl-songlist\">\n    <div class=\"pl-songlist-header\">\n      <h2>歌曲列表 ({{songs.length}})</h2>\n      <!-- <span>播放次数: <span style=\"font-size: 1.5rem;\"></span> </span> -->\n    </div>\n    <!-- 歌曲表单 -->\n    <div class=\"pl-songlist-table\">\n      <nz-table #basicTable [nzData]=\"songs\" [nzFrontPagination]=\"false\">\n        <thead>\n          <tr>\n            <th></th>\n            <th>歌曲标题</th>\n            <th>时长</th>\n            <th>歌手</th>\n            <th>专辑</th>\n            <!-- <th>操作</th> -->\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let data of basicTable.data,let index = index\">\n            <td style=\"display: flex;\">\n              <span style=\"margin-right: 10px;\">{{index}}</span>\n              <i class=\"icon-zanting\" (click)=\"handlePlay(data)\"></i>\n            </td>\n            <td>\n              <div class=\"td-name\" class=\"td-name\" (click)=\"toSong(data.id)\">\n                {{ data.name }}\n              </div>\n            </td>\n            <td class=\"td-size\">{{ data.dt  | date:'mm:ss'}}</td>\n            <td>\n              <div class=\"td-artist\">\n                <span *ngFor=\"let item of data.ar\" (click)=\"toArtist(item.id)\">\n                  {{ item.name }}\n                </span>\n              </div>\n            </td>\n            <td>\n              <div class=\"td-album\" (click)=\"toAlbum(data.al.id)\">\n                {{ data.al.name }}\n              </div>\n            </td>\n          </tr>\n        </tbody>\n      </nz-table>\n    </div>\n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/artist/components/relative-mv/relative-mv/relative-mv.component.html":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/artist/components/relative-mv/relative-mv/relative-mv.component.html ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- 所有mv -->\n<div class=\"mvs\">\n  <div class=\"list flex\">\n    <div class=\"item\" *ngFor=\"let item of mvs,let index = index\" (click)=\"toMv(item.id)\">\n      <div class=\"img\">\n        <img [src]=\"item.imgurl\" width=\"120\" height=\"120\">\n      </div>\n      <p class=\"text-over name\">{{item.name}}</p>\n      <p class=\"text-over publishTime\">{{item.publishTime | date:'yyyy-MM-dd'}}</p>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/discover/discover/discover.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/discover/discover/discover.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>discover works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/dj/dj/dj.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/dj/dj/dj.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>dj works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/home/home.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/home/home.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"home\">\n  <div class=\"banner\">\n    <!-- 头部轮播图 -->\n    <nz-carousel [nzEffect]=\"effect\" nzAutoPlay [nzAutoPlaySpeed]=\"2000\"\n      style=\"width: 980px;margin: 0 auto;z-index: 10;\">\n      <div nz-carousel-content *ngFor=\"let item of banners,let index = index\">\n        <div class=\"carousel-item carousel-bg\" (click)=\"selectBannerItem(item,index)\">\n          <img [src]=\"item.imageUrl\" height=\"350\" width=\"980\">\n        </div>\n      </div>\n    </nz-carousel>\n    <div style=\"position: absolute;top: 115px;left: 0;right: 0;width: 100%;height: 350px;z-index: 1;\">\n      <nz-carousel [nzEffect]=\"effect\" nzAutoPlay [nzAutoPlaySpeed]=\"2000\">\n        <div nz-carousel-content *ngFor=\"let item of banners,let index = index\">\n          <div class=\"carousel-item carousel-bg\" (click)=\"selectBannerItem(item,index)\">\n            <div class=\"carousel-bg\" [ngStyle]=\"{'background-image': 'url('+item.imageUrl+')'}\"></div>\n          </div>\n        </div>\n      </nz-carousel>\n    </div>\n  </div>\n\n  <div class=\"middle\">\n    <div class=\"middle-left\">\n      <div class=\"hot\">\n        <div class=\"hot-header\">\n          <div class=\"hot-title-first\" (click)=\"topPlaylist()\">\n            热门推荐\n          </div>\n          <div class=\"hot-title\" *ngFor=\"let item of hotTags,let index=index\"\n            [ngStyle]=\"{'border-left': index!=0?'1px solid #eee':''}\" (click)=\"topPlaylist(item.name)\">\n            {{item.name}}\n          </div>\n          <div class=\"hot-more\" (click)=\"jumpPlaylist()\">\n            更多<i class=\"el-icon-arrow-right\"></i>\n          </div>\n        </div>\n        <!-- 加载框 -->\n        <div style=\"text-align: center;margin: 20px 0;\">\n          <nz-spin nzSimple *ngIf=\"loadingPlaylist\"></nz-spin>\n        </div>\n        <!-- 歌单 -->\n        <div class=\"singer-unit\">\n          <div class=\"su-list\">\n            <div class=\"su-item\" *ngFor=\"let item of personalized\" (click)=\"toPlaylist(item)\">\n              <div class=\"fans\" [ngStyle]=\"{'background-image': 'url('+item.picUrl+')'}\">\n                <div>\n                  <span><i class=\"icon-erji\"></i>{{item.playCount | playCount}}</span>\n                  <span><i class=\"icon-zanting\" (click)=\"playSheet(item)\"></i></span>\n                </div>\n              </div>\n              <div class=\"su-name\">\n                {{item.name}}\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <!-- 新碟上架 -->\n      <div class=\"hot\">\n        <div class=\"hot-header\">\n          <div class=\"hot-title-first\">\n            新碟上架\n          </div>\n          <div class=\"hot-more\" (click)=\"jumpAlbum()\">\n            更多<i class=\"el-icon-arrow-right\"></i>\n          </div>\n        </div>\n        <!-- 加载框 -->\n        <div style=\"text-align: center;margin: 20px 0;\">\n          <nz-spin nzSimple *ngIf=\"loadingAlbum\"></nz-spin>\n        </div>\n        <!-- 专辑 -->\n        <div class=\"singer-unit\">\n          <div class=\"su-list\">\n            <div class=\"su-item\" *ngFor=\"let item of albumNewest\" (click)=\"toAlbum(item)\">\n              <div class=\"album-img\" [ngStyle]=\"{'background-image': 'url('+item.picUrl+')'}\">\n                <i class=\"icon-zanting\" (click)=\"playAlbum(item)\"></i>\n              </div>\n              <div class=\"ai-desc\">\n                <p>{{item.name}}</p>\n                <p>{{item.artist.name}}</p>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <!-- 榜单 -->\n      <div class=\"hot\">\n        <div class=\"hot-header\">\n          <div class=\"hot-title-first\">\n            榜单\n          </div>\n          <div class=\"hot-more\" (click)=\"jumpRank()\">\n            更多<i class=\"el-icon-arrow-right\"></i>\n          </div>\n        </div>\n        <!-- 榜单 -->\n        <div class=\"playlist\">\n          <div class=\"playlist-top\" *ngFor=\"let item of playlistType,let index = index\"\n            [ngClass]=\"{'pt-border': index!=0}\">\n            <div class=\"pt-header\">\n              <img [src]=\"item.img\" alt=\"top\">\n              <div class=\"pt-title\">\n                <p>{{item.name}}</p>\n                <p><i class=\"icon-zanting\" style=\"font-size: 30px;\"></i></p>\n              </div>\n            </div>\n            <!-- 加载框 -->\n            <div style=\"text-align: center;margin: 20px 0;\">\n              <nz-spin nzSimple *ngIf=\"loadingRank\"></nz-spin>\n            </div>\n            <div class=\"pt-list\">\n              <div class=\"pt-item\" *ngFor=\"let row of item.data,let indexRow = index\">\n                <div (click)=\"toSong(row)\" class=\"flex\">\n                  <span [ngStyle]=\"{'color': indexRow<3?'red':'#444'}\">{{indexRow }} </span>\n                  <p> {{ row.name}}</p>\n                </div>\n                <div class=\"pt-item-player\">\n                  <i class=\"icon-zanting\" (click)=\"playSong(row)\"></i>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"middle-right\">\n      <!-- 入驻歌手 -->\n      <div class=\"into-singer\">\n        <div class=\"is-header\">\n          <span>入驻歌手</span>\n          <span (click)=\"jumpSinger()\" style=\"cursor: pointer;\">查看全部<i class=\"el-icon-arrow-right\"></i></span>\n        </div>\n        <div class=\"into-list\">\n          <div class=\"inot-item\" *ngFor=\"let item of artistList,let index=index\">\n            <img [src]=\"item.picUrl\" alt=\"image\" (click)=\"jumpAritst(item,0)\">\n            <div class=\"singer-info\">\n              <p class=\"singer-name\" (click)=\"jumpUser(item)\">{{item.name}}</p>\n              <p class=\"singer-num\" (click)=\"jumpAritst(item,1)\">专辑数: <span>{{item.albumSize}}</span></p>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"apply-artist\">\n          <a href=\"https://music.163.com/nmusician/web/index\" target=\"black\" style=\"color: #222;\">申请成为音乐人</a>\n        </div>\n      </div>\n\n      <!-- 热门主播 -->\n      <div class=\"into-singer\">\n        <div class=\"is-header\">\n          <span>热门主播</span>\n        </div>\n        <div class=\"into-list\">\n          <div class=\"inot-item\" *ngFor=\"let item of toplistDj,let index=index\">\n            <img [src]=\"item.picUrl\" alt=\"image\">\n            <div class=\"singer-info\">\n              <p class=\"singer-name text-over\">{{item.name}}</p>\n              <p class=\"singer-num text-over\">{{item.rcmdtext}}</p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/login/login.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/login/login.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"login\">\n  <div class=\"dialog\">\n    <div class=\"input\">\n      <span>手机号</span>\n      <input type=\"text\" placeholder=\"手机号\">\n    </div>\n    <div class=\"input\">\n      <span>密码</span>\n      <input type=\"text\" placeholder=\"手机号\">\n    </div>\n    <div class=\"submit\" (click)=\"submit()\">\n      登录\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/mv/mv/mv.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/mv/mv/mv.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>mv works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/playlist/playlist/playlist.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/playlist/playlist/playlist.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"playlist\">\n  <div class=\"playlist-box\">\n    <div class=\"left\">\n      <div class=\"pl-header\">\n        <div class=\"pl-header-box\">\n          <!-- 歌单图片 -->\n          <div class=\"pl-header-img\">\n            <img class=\"title-img\" [src]=\"playlistDetail.coverImgUrl\" *ngIf=\"playlistDetail.coverImgUrl\" width=\"208\"\n              height=\"208\">\n          </div>\n\n          <!-- 歌单信息 -->\n          <div class=\"pl-header-right\">\n            <div class=\"pl-header-title\">\n              <!-- 歌单名称 -->\n              <div class=\"pl-header-tag\"></div>\n              <h2>{{playlistDetail.name}}</h2>\n            </div>\n            <div class=\"pl-header-create\">\n              <img [src]=\"playlistDetail.creator.avatarUrl\" alt=\"avatarUrl\" *ngIf=\"playlistDetail.creator.avatarUrl\">\n              <span (click)=\"jumpUser(playlistDetail.creator.userId)\">{{playlistDetail.creator.nickname}}</span>\n              <span>创建: {{playlistDetail.createTime | date:'yyyy-MM-dd hh:mm:ss'}}</span>\n            </div>\n            <!-- 工具栏 -->\n            <div class=\"album-header-tool\">\n              <div>\n                <i nz-icon nzType=\"play-circle\" nzTheme=\"outline\" (click)=\"playFirstSong()\"></i>\n                <span (click)=\"playFirstSong()\">播放</span>\n              </div>\n              <div (click)=\"favorite()\">\n                <i nz-icon nzType=\"folder-add\" nzTheme=\"outline\"></i>\n                <span>收藏 ({{playlistDetail.subscribedCount}})</span>\n              </div>\n              <div (click)=\"share()\">\n                <i nz-icon nzType=\"share-alt\" nzTheme=\"outline\"></i>\n                <span>分享({{playlistDetail.shareCount}})</span>\n              </div>\n              <div (click)=\"sentMessage()\">\n                <i nz-icon nzType=\"message\" nzTheme=\"outline\"></i>\n                <span>评论 ({{playlistDetail.commentCount}})</span>\n              </div>\n            </div>\n            <div class=\"pl-header-tags\">\n              <div class=\"pl-header-tags-list\">\n                标签:\n                <div class=\"pl-header-tag\" *ngFor=\"let tag of playlistDetail.tags\">{{tag}}</div>\n              </div>\n              介绍:\n              <span *ngFor=\"let des of description\">{{des}}<br /></span>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <!-- 歌曲列表 -->\n      <div class=\"pl-songlist\">\n        <div class=\"pl-songlist-header\">\n          <h2>歌曲列表 ({{playlistDetail.tracks.length}})</h2>\n          <span>播放次数: <span style=\"font-size: 1.5rem;\">{{playlistDetail.playCount}}</span> </span>\n        </div>\n        <!-- 歌曲表单 -->\n        <div class=\"pl-songlist-table\">\n          <nz-table #basicTable [nzData]=\"playlistDetail.tracks\" [nzFrontPagination]=\"false\">\n            <thead>\n              <tr>\n                <th></th>\n                <th>歌曲标题</th>\n                <th>时长</th>\n                <th>歌手</th>\n                <th>专辑</th>\n                <!-- <th>操作</th> -->\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let data of basicTable.data,let index = index\">\n                <td style=\"display: flex;\">\n                  <span style=\"margin-right: 10px;\">{{index}}</span>\n                  <i class=\"icon-zanting\" (click)=\"handlePlay(data)\"></i>\n                </td>\n                <td>\n                  <div class=\"td-name\" class=\"td-name\" (click)=\"toSong(data.id)\">\n                    {{ data.name }}\n                  </div>\n                </td>\n                <td class=\"td-size\">{{ data.dt  | date:'mm:ss'}}</td>\n                <td>\n                  <div class=\"td-artist\">\n                    <span *ngFor=\"let item of data.ar\" (click)=\"toArtist(item.id)\">\n                      {{ item.name }}\n                    </span>\n                  </div>\n                </td>\n                <td>\n                  <div class=\"td-album\" (click)=\"toAlbum(data.al.id)\">\n                    {{ data.al.name }}\n                  </div>\n                </td>\n              </tr>\n            </tbody>\n          </nz-table>\n        </div>\n      </div>\n\n      <!-- 评论组件 -->\n      <app-comments #comment [commentTotal]=\"commentTotal\" [hotComments]=\"hotComments\" [comments]=\"comments\"\n        [currentPage]=\"1\" (pageIndexChange)=\"pageIndexChange($event)\"></app-comments>\n    </div>\n\n    <!-- 推荐内容 -->\n    <div class=\"right\">\n      <div class=\"song-commend\">\n        <div class=\"sc-header\">\n          <h4>热门歌单</h4>\n        </div>\n        <div class=\"sc-incloud\">\n          <div class=\"sc-incloud-item\" *ngFor=\"let item of personalized\">\n            <div class=\"sc-incloud-left\">\n              <img [src]=\"item.picUrl\" width=\"50\" height=\"50\" (click)=\"toPlaylist(item.id)\">\n            </div>\n            <div class=\"sc-incloud-right\">\n              <div (click)=\"toPlaylist(item.id)\">{{item.name}}</div>\n              <div (click)=\"toPlaylist(item.id)\">{{item.copywriter}}</div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/song/song/song.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/song/song/song.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"song\">\n  <div class=\"song-box\">\n    <div class=\"song-content\">\n      <div class=\"song-content-box\">\n        <!-- 歌曲图片 -->\n        <div class=\"song-pic\">\n          <div>\n            <img [src]=\"song.al.picUrl\" *ngIf=\"song.al.picUrl\" width=\"180\" height=\"180\">\n            <span class=\"song-pic-tag\"></span>\n          </div>\n        </div>\n\n        <!-- 歌曲信息 -->\n        <div class=\"song-info\">\n          <!-- 标题 -->\n          <div class=\"sl-title\">\n            <div class=\"sl-title-tag\"></div>\n            <h2>{{song.name}}</h2>\n            <div class=\"sl-title-mv\" *ngIf=\"song.mv&&song.mv!=0\" (click)=\"toMv()\"></div>\n          </div>\n          <!-- 歌手 -->\n          <div class=\"si-singer\">\n            <span class=\"si-tag\">歌手: </span>\n            <span class=\"si-value\" (click)=\"toArtist(song.ar.id)\">{{song.ar.name}}</span>\n          </div>\n          <!-- 专辑 -->\n          <div class=\"si-album\">\n            <span class=\"si-tag\">所属专辑: </span>\n            <span class=\"si-value\" (click)=\"toAlbum(song.al.id)\">{{song.al.name}}</span>\n          </div>\n          <!-- 工具 -->\n          <div class=\"si-tool\">\n            <div style=\"cursor: pointer;\">\n              <i class=\"icon-zanting\" (click)=\"playSong()\"></i>\n            </div>\n            <div style=\"cursor: pointer;\">\n              <span>收藏</span>\n            </div>\n            <div style=\"cursor: pointer;\">\n              <span>分享</span>\n            </div>\n            <div>\n              <span>评论 ({{commentTotal||''}})</span>\n            </div>\n          </div>\n          <!-- 歌词 -->\n          <div class=\"si-lyric\">\n            <p *ngFor=\"let des of song.lyric,let index = index\"\n              [ngStyle]=\"{'display': !showAllLyric?index<10?'block':'none':'block'}\">{{des.lyric}}<br /></p>\n            <el-button type=\"text\" *ngIf=\"song.lyric&&song.lyric.length>10\" (click)=\"showAllLyric = !showAllLyric\">\n              {{showAllLyric?'收起':'展开'}}\n            </el-button>\n          </div>\n        </div>\n      </div>\n      <!-- 评论组件 -->\n      <div style=\"padding: 0 40px;\">\n        <app-comments #comment [commentTotal]=\"commentTotal\" [hotComments]=\"hotComments\" [comments]=\"comments\"\n          [currentPage]=\"currentPage\" (pageIndexChange)=\"pageIndexChange($event)\"></app-comments>\n      </div>\n\n    </div>\n\n    <!-- 右边侧栏推荐 -->\n    <div class=\"song-commend\">\n      <div class=\"sc-header\">\n        包含这首歌的歌单\n      </div>\n      <div class=\"sc-incloud\">\n        <div class=\"sc-incloud-item\" *ngFor=\"let item of samePlayList\">\n          <div class=\"sc-incloud-left\">\n            <img [src]=\"item.coverImgUrl\" width=\"50\" height=\"50\" (click)=\"toPlayList(item)\">\n          </div>\n          <div class=\"sc-incloud-right\">\n            <div (click)=\"toPlayList(item)\">{{item.name}}</div>\n            <div>by {{item.nickname}}</div>\n          </div>\n        </div>\n      </div>\n      <div class=\"sc-same\">\n        <div class=\"sc-header\">\n          相似歌曲\n        </div>\n        <div class=\"sc-same-item\" *ngFor=\"let item of sameSong\">\n          <div class=\"sc-same-item-left\">\n            <div>{{item.name}}</div>\n            <div>{{item.artist}}</div>\n          </div>\n          <div class=\"sc-same-item-right\">\n            <span><i class=\"icon-zanting\"></i></span>\n            <span>+</span>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/user/components/followeds/followeds/followeds.component.html":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/user/components/followeds/followeds/followeds.component.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"content\">\n  <div class=\"title\">\n    <h2>粉丝数量 ({{followeds.length}})</h2>\n  </div>\n  <div class=\"list flex\">\n    <div class=\"item flex\" *ngFor=\"let item of followeds\">\n      <!-- 用户图片 -->\n      <div class=\"item-left\">\n        <img [src]=\"item.avatarUrl\" width=\"60\" height=\"60\" (click)=\"toUser(item)\">\n      </div>\n      <!-- 中间内容 -->\n      <div class=\"item-middle\">\n        <p class=\"nickname\" (click)=\"toUser(item)\">{{item.nickname}}</p>\n        <div class=\"flex\">\n          <div (click)=\"toUser(item,0)\">\n            <span>动态</span>\n            <span>{{item.eventCount}}</span>\n          </div>\n          <div (click)=\"toUser(item,1)\">\n            <span>关注</span>\n            <span>{{item.follows}}</span>\n          </div>\n          <div (click)=\"toUser(item,2)\">\n            <span>粉丝</span>\n            <span>{{item.followeds}}</span>\n          </div>\n        </div>\n      </div>\n      <!-- 关注按钮 -->\n      <div class=\"item-right\">\n        <div class=\"follow-button\">\n          <i nz-icon nzType=\"plus\" nzTheme=\"outline\"></i>\n          <span>关注</span>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <!-- 分页 -->\n  <div class=\"pagination\">\n    <nz-pagination [nzPageIndex]=\"currentPage\" [nzTotal]=\"total\" [nzPageSize]=\"30\"\n      (nzPageIndexChange)=\"nzPageIndexChange($event)\"></nz-pagination>\n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/user/components/follows/follows/follows.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/user/components/follows/follows/follows.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"content\">\n  <div class=\"title\">\n    <h2>关注 ({{follows.length}})</h2>\n  </div>\n  <div class=\"list flex\">\n    <div class=\"item flex\" *ngFor=\"let item of follows\">\n      <div class=\"item-left\">\n        <img [src]=\"item.avatarUrl\" width=\"60\" height=\"60\" (click)=\"toUser(item)\">\n      </div>\n      <div class=\"item-middle\">\n        <p>\n          <span class=\"nickname\" (click)=\"toUser(item)\">{{item.nickname}}</span>\n        </p>\n        <div class=\"flex\">\n          <div (click)=\"toUser(item,0)\">\n            <span>动态</span>\n            <span>{{item.eventCount}}</span>\n          </div>\n          <div (click)=\"toUser(item,1)\">\n            <span>关注</span>\n            <span>{{item.follows}}</span>\n          </div>\n          <div (click)=\"toUser(item,2)\">\n            <span>粉丝</span>\n            <span>{{item.followeds}}</span>\n          </div>\n        </div>\n      </div>\n      <div class=\"item-right\">\n        <div class=\"follow-button\">\n          <i nz-icon nzType=\"plus\" nzTheme=\"outline\"></i>\n          <span>关注</span>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/user/components/index/index/index.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/user/components/index/index/index.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n  <!-- 电台 -->\n  <div class=\"uc-dj\" *ngIf=\"userDj.count>0\">\n    <div class=\"uc-dj-title\">\n      <h2>{{userinfo.profile.nickname}}的电台({{userDj.count}})</h2>\n    </div>\n    <div class=\"uc-dj-item\" *ngFor=\"let item of userDj.programs\">\n      <div class=\"uc-dj-item-img\">\n        <img src=\"../../../../../../assets/images/logo.jpg\" width=\"60\" height=\"60\">\n      </div>\n      <div class=\"uc-dj-item-name\">\n        <span>\n          名称\n        </span>\n      </div>\n      <div class=\"uc-dj-item-read\">\n        订阅1次\n      </div>\n      <div class=\"uc-dj-item-date\">\n        12期\n      </div>\n    </div>\n  </div>\n\n  <!-- 收藏歌单 -->\n  <div class=\"favo-sheet\" *ngIf=\"userFavoPlaylist.length\">\n    <div class=\"favo-sheet-title\">\n      {{userinfo.profile.nickname}}收藏的歌单 ({{userFavoPlaylist.length}})\n    </div>\n    <div class=\"fs-list\">\n      <div class=\"fs-item\" *ngFor=\"let item of userFavoPlaylist\">\n        <div class=\"fs-box\" [ngStyle]=\"{'background-image': 'url('+item.coverImgUrl+')'}\" (click)=\"toPlaylist(item)\">\n          <div class=\"fs-bottom\">\n            <div class=\"fs-bottom-left\">\n              <i nz-icon nzType=\"customer-service\" nzTheme=\"outline\"></i>\n              <span>{{item.playCount | playCount}}</span>\n            </div>\n            <div class=\"fs-bottom-right\">\n              <i nz-icon nzType=\"play-circle\" nzTheme=\"outline\"></i>\n            </div>\n          </div>\n        </div>\n        <div class=\"fs-desc\" (click)=\"toPlaylist(item)\">\n          {{item.name}}\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <!-- 创建的歌单 -->\n  <div class=\"favo-sheet\" *ngIf=\"userCreatePlaylist.length>0\">\n    <div class=\"favo-sheet-title\">\n      {{userinfo.profile.nickname}}创建的歌单 ({{userCreatePlaylist.length}})\n    </div>\n    <div class=\"fs-list\">\n      <div class=\"fs-item\" *ngFor=\"let item of userCreatePlaylist\">\n        <div class=\"fs-box\" [ngStyle]=\"{'background-image': 'url('+item.coverImgUrl+')'}\" (click)=\"toPlaylist(item)\">\n          <div class=\"fs-bottom\">\n            <div class=\"fs-bottom-left\">\n              <i nz-icon nzType=\"customer-service\" nzTheme=\"outline\"></i>\n              <span>{{item.playCount | playCount}}</span>\n            </div>\n            <div class=\"fs-bottom-right\">\n              <i nz-icon nzType=\"play-circle\" nzTheme=\"outline\"></i>\n            </div>\n          </div>\n        </div>\n        <div class=\"fs-desc\" (click)=\"toPlaylist(item)\">\n          {{item.name}}\n        </div>\n      </div>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/user/user/user.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/user/user/user.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"user\">\n  <div class=\"user-content\">\n    <div class=\"uc-header\">\n      <div class=\"uc-header-left\">\n        <div>\n          <img [src]=\"userinfo.profile.avatarUrl\" *ngIf=\"userinfo.profile.avatarUrl\" alt=\"\" width=\"200\" height=\"200\">\n        </div>\n      </div>\n      <div class=\"uc-header-right\">\n        <!-- 头部信息 -->\n        <div class=\"uc-name\">\n          <h2>{{userinfo.profile.nickname}}</h2>\n          <div class=\"uc-name-lv\">\n            <span class=\"uc-name-lv-tag\"></span>\n            <span class=\"uc-name-lv-lv\">{{userinfo.level}}</span>\n          </div>\n          <div><span class=\"uc-name-tag\"></span></div>\n          <div class=\"uc-name-mf uc-name-msg\">\n            <i nz-icon nzType=\"mail\" nzTheme=\"outline\"></i>\n            <span>发私信</span>\n          </div>\n          <div class=\"uc-name-mf uc-name-follow\">\n            <i nz-icon nzType=\"plus\" nzTheme=\"outline\"></i>\n            <span>关注</span>\n          </div>\n        </div>\n        <!-- 动态信息 -->\n        <div class=\"uc-info\">\n          <div class=\"uc-num\" *ngFor=\"let item of active,let index = index\"\n            [ngStyle]=\"{'margin-left': index!=0?'20px':'0px'}\" (click)=\"changeNav(index)\">\n            <div class=\"uc-item-title\">{{item.num}}</div>\n            <div class=\"uc-item-desc\">{{item.title}}</div>\n          </div>\n        </div>\n        <!-- 个人简介 -->\n        <div class=\"uc-user-desc\">\n          个人介绍:\n          <span>{{userinfo.profile.signature}}</span>\n        </div>\n      </div>\n    </div>\n\n    <!-- 路由 -->\n    <app-index *ngIf=\"selectedNav==0\" [userDj]=\"userDj\" [userinfo]=\"userinfo\" [userFavoPlaylist]=\"userFavoPlaylist\"\n      [userCreatePlaylist]=\"userCreatePlaylist\"></app-index>\n    <app-follows *ngIf=\"selectedNav==1\" [follows]=\"follows\"></app-follows>\n    <app-followeds *ngIf=\"selectedNav==2\" [followeds]=\"followeds\" [total]=\"userinfo.profile.followeds\" (changPage)=\"changPage($event)\"></app-followeds>\n\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/nav/nav-dj/nav-dj/nav-dj.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/nav/nav-dj/nav-dj/nav-dj.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <div class=\"box\">\n    <div class=\"content\">\n      <div class=\"header\">\n        <h1>热门电台</h1>\n      </div>\n      <!-- 加载框 -->\n      <div style=\"text-align: center;margin: 20px auto;\">\n        <nz-spin nzSimple *ngIf=\"loading\"></nz-spin>\n      </div>\n      <div class=\"list flex\">\n        <div class=\"item flex\" *ngFor=\"let item of hotDj\">\n          <div class=\"img\">\n            <img [src]=\"item.picUrl\" width=\"120\" height=\"120\" alt=\"\" (click)=\"toDj(item.id)\">\n          </div>\n          <div class=\"con\">\n            <h2 (click)=\"toDj(item.id)\"> {{item.name}}</h2>\n            <p> {{item.rcmdtext}}</p>\n          </div>\n        </div>\n      </div>\n\n      <!-- 分页 -->\n      <div class=\"pagination\">\n        <nz-pagination [nzPageIndex]=\"currentPage\" [nzTotal]=\"total\" [nzPageSize]=\"30\"\n          (nzPageIndexChange)=\"nzPageIndexChange($event)\"></nz-pagination>\n      </div>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/nav/nav-playlist/nav-playlist/nav-playlist.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/nav/nav-playlist/nav-playlist/nav-playlist.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <div class=\"box\">\n    <!-- 全部新专辑 -->\n    <div class=\"hot\">\n      <div class=\"hot-header\">\n        <div class=\"hot-title-first\">\n          {{selectedTag}}\n        </div>\n        <div class=\"hot-title\" *ngFor=\"let item of tags.sub,let index=index\"\n          [ngStyle]=\"{'border-left': index!=0?'1px solid #eee':''}\" (click)=\"selectTag(item)\">\n          {{item.name}}\n        </div>\n      </div>\n\n      <!-- 加载框 -->\n      <div style=\"text-align: center;margin: 20px 0;\">\n        <nz-spin nzSimple *ngIf=\"loading\"></nz-spin>\n      </div>\n      <!-- 歌单 -->\n      <div class=\"singer-unit\">\n        <div class=\"su-list\">\n          <div class=\"su-item\" *ngFor=\"let item of playlists\" (click)=\"toPlaylist(item)\">\n            <div class=\"fans\" [ngStyle]=\"{'background-image': 'url('+item.coverImgUrl+')'}\">\n              <div>\n                <span><i class=\"icon-erji\"></i>{{item.playCount | playCount}}</span>\n                <span><i class=\"icon-zanting\" (click)=\"playSheet(item)\"></i></span>\n              </div>\n            </div>\n            <div class=\"su-name\">\n              {{item.name}}\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n\n    <!-- 分页 -->\n    <div class=\"pagination\">\n      <nz-pagination [nzPageIndex]=\"currentPage\" [nzTotal]=\"total\" [nzPageSize]=\"30\"\n        (nzPageIndexChange)=\"nzPageIndexChange($event)\"></nz-pagination>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/nav/nav-rank/nav-rank/nav-rank.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/nav/nav-rank/nav-rank/nav-rank.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <div class=\"box\">\n    <div class=\"left\">\n      <div class=\"l-title\">\n        云音乐排行榜\n      </div>\n      <div class=\"l-list\">\n        <div class=\"l-item\" *ngFor=\"let item of allList,let index = index;\"\n          [ngStyle]=\"{'background-color': index==selectedSlider?'#eee':'#f8f8f8'}\" (click)=\"selectItem(item,index)\">\n          <div class=\"flex\">\n            <div class=\"l-img\">\n              <img [src]=\"item.coverImgUrl\" width=\"50\" height=\"50\" alt=\"\">\n            </div>\n            <div class=\"l-con\">\n              <p class=\"l-c-name text-over\">{{item.name}}</p>\n              <p class=\"l-c-freq text-over\">{{item.updateFrequency}}</p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"right\">\n      <div class=\"r-content\">\n        <!-- 加载框 -->\n        <div style=\"text-align: center;margin: 20px 0;\">\n          <nz-spin nzSimple *ngIf=\"loading\"></nz-spin>\n        </div>\n        <!-- 头部简介 -->\n        <div class=\"pl-header\" *ngIf=\"!loading\">\n          <div class=\"pl-header-box\">\n            <!-- 歌单图片 -->\n            <div class=\"pl-header-img\">\n              <img class=\"title-img\" [src]=\"playlistDetail.coverImgUrl\" *ngIf=\"playlistDetail.coverImgUrl\" width=\"208\"\n                height=\"208\">\n            </div>\n\n            <!-- 歌单信息 -->\n            <div class=\"pl-header-right\">\n              <div class=\"pl-header-title\">\n                <!-- 歌单名称 -->\n                <div class=\"pl-header-tag\"></div>\n                <h2>{{playlistDetail.name}}</h2>\n              </div>\n              <div class=\"pl-header-create\">\n                <img [src]=\"playlistDetail.creator.avatarUrl\" alt=\"avatarUrl\" *ngIf=\"playlistDetail.creator.avatarUrl\">\n                <span (click)=\"jumpUser(playlistDetail.creator.userId)\">{{playlistDetail.creator.nickname}}</span>\n                <span>创建: {{playlistDetail.createTime | date:'yyyy-MM-dd hh:mm:ss'}}</span>\n              </div>\n              <!-- 工具栏 -->\n              <div class=\"album-header-tool\">\n                <div>\n                  <i nz-icon nzType=\"play-circle\" nzTheme=\"outline\" (click)=\"playFirstSong()\"></i>\n                  <span (click)=\"playFirstSong()\">播放</span>\n                </div>\n                <div (click)=\"favorite()\">\n                  <i nz-icon nzType=\"folder-add\" nzTheme=\"outline\"></i>\n                  <span>收藏 ({{playlistDetail.subscribedCount}})</span>\n                </div>\n                <div (click)=\"share()\">\n                  <i nz-icon nzType=\"share-alt\" nzTheme=\"outline\"></i>\n                  <span>分享({{playlistDetail.shareCount}})</span>\n                </div>\n                <div (click)=\"sentMessage()\">\n                  <i nz-icon nzType=\"message\" nzTheme=\"outline\"></i>\n                  <span>评论 ({{playlistDetail.commentCount}})</span>\n                </div>\n              </div>\n              <div class=\"pl-header-tags\">\n                <div class=\"pl-header-tags-list\">\n                  标签:\n                  <div class=\"pl-header-tag\" *ngFor=\"let tag of playlistDetail.tags\">{{tag}}</div>\n                </div>\n                介绍:\n                <span *ngFor=\"let des of description\">{{des}}<br /></span>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <!-- 歌曲列表 -->\n        <div class=\"pl-songlist\">\n          <div class=\"pl-songlist-header\">\n            <h2>歌曲列表 ({{playlistDetail.tracks.length}})</h2>\n            <span>播放次数: <span style=\"color:#000\">{{playlistDetail.playCount}}</span> </span>\n          </div>\n          <!-- 歌曲表单 -->\n          <div class=\"pl-songlist-table\">\n            <nz-table #basicTable [nzData]=\"playlistDetail.tracks\" [nzFrontPagination]=\"false\">\n              <thead>\n                <tr>\n                  <th></th>\n                  <th>歌曲标题</th>\n                  <th>时长</th>\n                  <th>歌手</th>\n                  <th>专辑</th>\n                  <!-- <th>操作</th> -->\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let data of basicTable.data,let index = index\">\n                  <td style=\"display: flex;\">\n                    <span style=\"margin-right: 10px;\">{{index}}</span>\n                    <i class=\"icon-zanting\" (click)=\"handlePlay(data)\"></i>\n                  </td>\n                  <td>\n                    <div class=\"td-name\" class=\"td-name\" (click)=\"toSong(data.id)\">\n                      {{ data.name }}\n                    </div>\n                  </td>\n                  <td class=\"td-size\">{{ data.dt  | date:'mm:ss'}}</td>\n                  <td>\n                    <div class=\"td-artist\">\n                      <span *ngFor=\"let item of data.ar\" (click)=\"toArtist(item.id)\">\n                        {{ item.name }}\n                      </span>\n                    </div>\n                  </td>\n                  <td>\n                    <div class=\"td-album\" (click)=\"toAlbum(data.al.id)\">\n                      {{ data.al.name }}\n                    </div>\n                  </td>\n                </tr>\n              </tbody>\n            </nz-table>\n          </div>\n        </div>\n\n        <!-- 评论组件 -->\n        <app-comments #comment [commentTotal]=\"commentTotal\" [hotComments]=\"hotComments\" [comments]=\"comments\"\n          [currentPage]=\"1\" (pageIndexChange)=\"pageIndexChange($event)\"></app-comments>\n      </div>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/nav/nav-singer/nav-singer/nav-singer.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/nav/nav-singer/nav-singer/nav-singer.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <div class=\"box\">\n    <div class=\"left\">\n      <div class=\"l-list\">\n        <div class=\"l-item\" *ngFor=\"let item of sliderTitle\">\n          <h3>{{item.title}}</h3>\n          <ul class=\"l-c\">\n            <li *ngFor=\"let row of item.data\" (click)=\"selecteCode(row)\"\n              [ngStyle]=\"{'color': selectedName==row.name?'#ce1f08':'#333'}\">\n              {{row.name}}</li>\n          </ul>\n        </div>\n      </div>\n    </div>\n    <div class=\"right\">\n      <div class=\"content\">\n        <div class=\"r-header\">\n          <h1>{{selectedName}}</h1>\n        </div>\n        <div class=\"r-list flex\">\n          <!-- 加载框 -->\n          <div style=\"text-align: center;margin: 20px auto;\">\n            <nz-spin nzSimple *ngIf=\"loading\"></nz-spin>\n          </div>\n          <!-- 列表 -->\n          <div class=\"r-item\" *ngFor=\"let item of list,let index = index\">\n            <img [src]=\"item.img1v1Url\" width=\"124\" height=\"124\" alt=\"\" *ngIf=\"index<10\" (click)=\"jumpArtist(item.id)\">\n            <div class=\"flex\">\n              <p (click)=\"jumpArtist(item.id)\">{{item.name}}</p>\n              <div class=\"tag\" (click)=\"jumpUser(item.accountId)\"></div>\n            </div>\n          </div>\n        </div>\n\n        <!-- 分页 -->\n        <div class=\"pagination\">\n          <nz-pagination [nzPageIndex]=\"currentPage\" [nzTotal]=\"total\" [nzPageSize]=\"30\"\n            (nzPageIndexChange)=\"nzPageIndexChange($event)\"></nz-pagination>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/nav/new-album/new-album/new-album.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/nav/new-album/new-album/new-album.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <div class=\"box\">\n    <!-- 热门新碟 -->\n    <div class=\"hot\">\n      <div class=\"hot-header\">\n        <div class=\"hot-title-first\">\n          热门新碟\n        </div>\n      </div>\n      <!-- 加载框 -->\n      <div style=\"text-align: center;margin: 20px 0;\">\n        <nz-spin nzSimple *ngIf=\"loadingHot\"></nz-spin>\n      </div>\n      <!-- 歌单 -->\n      <div class=\"singer-unit\">\n        <div class=\"su-list\">\n          <div class=\"su-item\" *ngFor=\"let item of albumNewest\" (click)=\"toAlbum(item)\">\n            <div class=\"album-img\" [ngStyle]=\"{'background-image': 'url('+item.picUrl+')'}\">\n              <i class=\"icon-zanting\" (click)=\"playAlbum(item)\"></i>\n            </div>\n            <div class=\"ai-desc\">\n              <p class=\"text-over\">{{item.name}}</p>\n              <p class=\"text-over\">{{item.artist.name}}</p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <!-- 全部新专辑 -->\n    <div class=\"hot\">\n      <div class=\"hot-header\">\n        <div class=\"hot-title-first\">\n          {{selectedTag}}新辑\n        </div>\n        <div class=\"hot-h-list flex\">\n          <div class=\"hot-h-item\" *ngFor=\"let item of ['全部','华语','欧美','韩国','日本']\" (click)=\"selectTag(item)\">{{item}}\n          </div>\n        </div>\n      </div>\n      <!-- 加载框 -->\n      <div style=\"text-align: center;margin: 20px 0;\">\n        <nz-spin nzSimple *ngIf=\"loadingAll\"></nz-spin>\n      </div>\n      <!-- 歌单 -->\n      <div class=\"singer-unit\">\n        <div class=\"su-list\">\n          <div class=\"su-item\" *ngFor=\"let item of topAlbum\" (click)=\"toAlbum(item)\">\n            <div class=\"album-img\" [ngStyle]=\"{'background-image': 'url('+item.picUrl+')'}\">\n              <i class=\"icon-zanting\" (click)=\"playAlbum(item)\"></i>\n            </div>\n            <div class=\"ai-desc\">\n              <p class=\"text-over\">{{item.name}}</p>\n              <p class=\"text-over\">{{item.artist.name}}</p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <!-- 分页 -->\n    <div class=\"pagination\">\n      <nz-pagination [nzPageIndex]=\"currentPage\" [nzTotal]=\"toAlbumTotal\" [nzPageSize]=\"30\"\n        (nzPageIndexChange)=\"nzPageIndexChange($event)\"></nz-pagination>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/share/components/comments/comments/comments.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/share/components/comments/comments/comments.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- 评论 -->\n<div class=\"comment\">\n  <div class=\"comment-header\">\n    <h1>评论</h1>\n    <span>共{{commentTotal}}条评论</span>\n  </div>\n  <div class=\"comment-body\">\n    <!-- 精彩评论 -->\n    <div class=\"cb-header\" *ngIf=\"hotComments.length>0\">\n      精彩评论 ({{hotComments.length||0}})\n    </div>\n    <div class=\"cb-content\">\n      <div class=\"cb-item\" *ngFor=\"let item of hotComments,let index = index\"\n        [ngStyle]=\"{'border-top': index==0?'':'1px dotted #a9a9a9'}\">\n        <div class=\"cb-item-left\">\n          <img [src]=\"item.user.avatarUrl\" width=\"60\" height=\"60\" (click)=\"toUser(item.user)\">\n        </div>\n        <div class=\"cb-item-right\">\n          <div class=\"name\">\n            <span class=\"user-name\" (click)=\"toUser(item.user)\">{{item.user.nickname}}</span>\n            <div class=\"is-artist\" *ngIf=\"item.user.userType!=0\"></div>\n            <span class=\"user-vip\" *ngIf=\"item.user.vipRights&&item.user.vipRights.redVipAnnualCount==-1\"><img\n                src=\"../../../../../assets/images/vip.png\" height=\"12\"></span>\n            <span class=\"user-vip\" *ngIf=\"item.user.vipRights&&item.user.vipRights.redVipAnnualCount==1\"><img\n                src=\"../../../../../assets/images/vipy.png\" height=\"12\"></span>\n            <span>:</span>\n            <span class=\"user-content\">{{item.content}}</span>\n            <!-- 回复评论 -->\n            <div class=\"replied\" *ngFor=\"let rep of item.beReplied\">\n              <div class=\"name\">\n                <span class=\"user-name\" (click)=\"toUser(item.user)\">{{rep.user.nickname}}</span>\n                <div class=\"is-artist\" *ngIf=\"rep.user.userType!=0\"></div>\n                <span class=\"user-vip\" *ngIf=\"rep.user.vipRights&&rep.user.vipRights.redVipAnnualCount==-1\"><img\n                    src=\"../../../../../assets/images/vip.png\" height=\"12\"></span>\n                <span class=\"user-vip\" *ngIf=\"rep.user.vipRights&&rep.user.vipRights.redVipAnnualCount==1\"><img\n                    src=\"../../../../../assets/images/vipy.png\" height=\"12\"></span>\n                <span>:</span>\n                <span class=\"user-content\">{{rep.content}}</span>\n              </div>\n            </div>\n          </div>\n          <div class=\"time\">\n            <span class=\"time-span\">{{item.time | date:'yyyy年MM月dd日'}}</span>\n            <div>\n              <span><i nz-icon nzType=\"like\" nzTheme=\"outline\"></i> ({{item.likedCount}})</span>\n              <span>回复</span>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <!-- 最新评论 -->\n    <div class=\"cb-header\">\n      最新评论 ({{commentTotal}})\n    </div>\n    <div class=\"cb-content\">\n      <div class=\"cb-item\" *ngFor=\"let item of comments,let index = index\"\n        [ngStyle]=\"{'border-top': index==0?'':'1px dotted #a9a9a9'}\">\n        <div class=\"cb-item-left\">\n          <img [src]=\"item.user.avatarUrl\" width=\"60\" height=\"60\" (click)=\"toUser(item.user)\">\n        </div>\n        <div class=\"cb-item-right\">\n          <div class=\"name\">\n            <span class=\"user-name\" (click)=\"toUser(item.user)\">{{item.user.nickname}}</span>\n            <div class=\"is-artist\" *ngIf=\"item.user.userType!=0\"></div>\n            <span class=\"user-vip\" *ngIf=\"item.user.vipRights&&item.user.vipRights.redVipAnnualCount==-1\"><img\n                src=\"../../../../../assets/images/vip.png\" height=\"12\"></span>\n            <span class=\"user-vip\" *ngIf=\"item.user.vipRights&&item.user.vipRights.redVipAnnualCount==1\"><img\n                src=\"../../../../../assets/images/vipy.png\" height=\"12\"></span>\n            <span>:</span>\n            <span class=\"user-content\">{{item.content}}</span>\n            <!-- 回复评论 -->\n            <div class=\"replied\" *ngFor=\"let rep of item.beReplied\">\n              <div class=\"name\">\n                <span class=\"user-name\" (click)=\"toUser(item.user)\">{{rep.user.nickname}}</span>\n                <div class=\"is-artist\" *ngIf=\"rep.user.userType!=0\"></div>\n                <span class=\"user-vip\" *ngIf=\"rep.user.vipRights&&rep.user.vipRights.redVipAnnualCount==-1\"><img\n                    src=\"../../../../../assets/images/vip.png\" height=\"12\"></span>\n                <span class=\"user-vip\" *ngIf=\"rep.user.vipRights&&rep.user.vipRights.redVipAnnualCount==1\"><img\n                    src=\"../../../../../assets/images/vipy.png\" height=\"12\"></span>\n                <span>:</span>\n                <span class=\"user-content\">{{rep.content}}</span>\n              </div>\n            </div>\n          </div>\n          <div class=\"time\">\n            <span class=\"time-span\">{{item.time | filterTime}}</span>\n            <div>\n              <span><i nz-icon nzType=\"like\" nzTheme=\"outline\"></i> ({{item.likedCount}})</span>\n              <span>回复</span>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <!-- 分页 -->\n  <div class=\"pagination\">\n    <nz-pagination [nzPageIndex]=\"currentPage\" [nzTotal]=\"commentTotal\" [nzPageSize]=\"20\"\n      (nzPageIndexChange)=\"nzPageIndexChange($event)\"></nz-pagination>\n  </div>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/share/components/footer/footer.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/share/components/footer/footer.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"footer\">\n  <footer>\n    <span>作者 小飘飘/smallzip</span>\n    <span>© 2020 Program coding by Ant pro/Element</span>\n  </footer>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/share/components/header/header.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/share/components/header/header.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <!-- 头部 -->\n  <div class=\"header\">\n    <div class=\"logo\" (click)=\"toHome()\">\n      <img src=\"./assets/images/logo.jpg\">\n      <h2>网易云音乐</h2>\n    </div>\n    <div class=\"tab-list\">\n      <div class=\"tab-item\" *ngFor=\"let item of list,let index = index\" [ngClass]=\"{'tab-active': tabActive==index}\"\n        (click)=\"selectTab(item,index)\">\n        {{item}}\n      </div>\n    </div>\n\n    <!-- 搜索 -->\n    <div class=\"search\">\n      <div class=\"search-icon\">\n        <i class=\"el-icon-search\"></i>\n      </div>\n      <div class=\"search-input\">\n        <input type=\"text\" placeholder=\"音乐/视频/电台/用户\">\n      </div>\n    </div>\n\n    <!-- 登陆 -->\n    <div class=\"login\">\n      <div>登陆</div>\n    </div>\n  </div>\n\n  <!-- 导航 -->\n  <div class=\"nav\" *ngIf=\"tabActive==0\">\n    <div class=\"n-subnav\">\n      <div class=\"n-list\">\n        <div class=\"n-item\" *ngFor=\"let item of navList,let index = index\" (click)=\"changeNav(index)\">\n          <span [ngClass]=\"{'nav-active': selectedNav==index}\">{{item}}</span>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"nav\" *ngIf=\"tabActive==1\">\n    <div class=\"n-subdis\"></div>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/share/components/player/player.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/share/components/player/player.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"player\">\n  <div class=\"tool\">\n    <!-- 上一首-暂停-下一首 -->\n    <div class=\"ctrl\">\n      <i class=\"icon-kuaitui\" (click)=\"onLast()\"></i>\n      <i class=\"icon-zanting\" (click)=\"onPlayState('pause')\" *ngIf=\"!playerService.start\"></i>\n      <i class=\"icon-bofang\" (click)=\"onPlayState('play')\" *ngIf=\"playerService.start\"></i>\n      <i class=\"icon-kuaijin\" (click)=\"onNext()\"></i>\n    </div>\n\n    <!-- 音乐信息-播放条 -->\n    <div class=\"music-info\">\n      <img [src]=\"playerService.song?.picUrl\" *ngIf=\"playerService.song.picUrl\" width=\"40\" height=\"40\" (click)=\"toSongDetail(playerService.song)\">\n      <img src=\"../../../../assets/images/logo.jpg\"  *ngIf=\"!playerService.song.picUrl\" width=\"40\" height=\"40\">\n      <div class=\"slider\">\n        <div *ngIf=\"playerService.song.artist\">{{playerService.song?.artist}} - {{playerService.song?.name}}</div>\n        <audio #audio [src]=\"playerService.song?.url\" (canplay)=\"onCanplay()\" (ended)=\"onEnd()\"\n          controls=\"controls\"></audio>\n      </div>\n    </div>\n\n\n    <!-- 音乐列表 -->\n    <div class=\"sheet\">\n      <i class=\"icon-liebiao\" (click)=\"onShowSheet()\"></i>\n    </div>\n  </div>\n\n  <!-- 歌曲列表-歌词-对话框 -->\n  <div class=\"song-sheet-mask\" (click)=\"onShowSheet()\" *ngIf=\"showSheet\"></div>\n  <div class=\"songs-sheet\" *ngIf=\"showSheet\">\n    <div class=\"songs-sheet-box\">\n      <div class=\"ss-left\">\n        <div class=\"ssl-header\">\n          <div class=\"ssl-header-left\">播放列表({{playerService.songList.length}})</div>\n          <div class=\"ssl-header-right\">清除</div>\n        </div>\n        <div class=\"ssl-list\">\n          <div class=\"ssl-item\" *ngFor=\"let item of playerService.songList,let index=index\"\n            [ngStyle]=\"{'background': playerService.song.id==item.id?'rgba(0,0,0,0.5)':''}\">\n            <div class=\"ssl-item-name\">\n              <i class=\"icon-zanting\" (click)=\"playItem(item)\"></i>\n              <span (click)=\"toSongDetail(item)\">{{item.name}}</span>\n            </div>\n            <div class=\"ssl-item-artist\">\n              <span>{{item.artist}}</span><span>{{item.size | date:'mm:ss'}}</span>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"ss-right\">\n        <div class=\"ssr-header\">\n          歌词\n        </div>\n        <div class=\"ssr-content\">\n          <P *ngFor=\"let item of playerService.song?.lyric\">{{item.lyric}}</P>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\n  width: 100%;\n  margin-bottom: 60px;\n}\n.container .body {\n  display: -webkit-box;\n  display: flex;\n}\n.container .body .content {\n  -webkit-box-flex: 1;\n          flex: 1;\n}\n.container .footer {\n  background-color: #f4f4f4;\n  border-top: 1px solid #ddd;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zbWFsbHppcC9EZXNrdG9wL2FuZ3VsYXIvd2FuZ3lpeXVuLW11c2ljL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7QUNDRjtBRENFO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0FDQ0o7QURDSTtFQUNFLG1CQUFBO1VBQUEsT0FBQTtBQ0NOO0FER0U7RUFDRSx5QkFBQTtFQUNBLDBCQUFBO0FDREoiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW4tYm90dG9tOiA2MHB4O1xyXG5cclxuICAuYm9keSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICAgIC5jb250ZW50IHtcclxuICAgICAgZmxleDogMTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5mb290ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjRmNDtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGRkO1xyXG4gIH1cclxufVxyXG4iLCIuY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDYwcHg7XG59XG4uY29udGFpbmVyIC5ib2R5IHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5jb250YWluZXIgLmJvZHkgLmNvbnRlbnQge1xuICBmbGV4OiAxO1xufVxuLmNvbnRhaW5lciAuZm9vdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjRmNDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkZGQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'first-app';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _share_components_header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./share/components/header/header.component */ "./src/app/share/components/header/header.component.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _share_components_player_player_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./share/components/player/player.component */ "./src/app/share/components/player/player.component.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var element_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! element-angular */ "./node_modules/element-angular/release/element-angular.module.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/locales/zh */ "./node_modules/@angular/common/locales/zh.js");
/* harmony import */ var _angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_9__);







// import module

// 配置ant


Object(_angular_common__WEBPACK_IMPORTED_MODULE_8__["registerLocaleData"])(_angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_9___default.a);
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _share_components_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"],
                _share_components_player_player_component__WEBPACK_IMPORTED_MODULE_5__["PlayerComponent"],
            ],
            imports: [
                element_angular__WEBPACK_IMPORTED_MODULE_7__["ElModule"].forRoot(),
                _core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"],
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
            /** 配置 ng-zorro-antd 国际化（文案 及 日期） **/
            providers: [
                { provide: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NZ_I18N"], useValue: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["zh_CN"] }
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _services_services_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/services.module */ "./src/app/services/services.module.ts");
/* harmony import */ var _share_share_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../share/share.module */ "./src/app/share/share.module.ts");
/* harmony import */ var _router_router_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../router/router.module */ "./src/app/router/router.module.ts");







/**
 * 核心模块
 */
var CoreModule = /** @class */ (function () {
    function CoreModule(parentModule) {
        if (parentModule) {
            throw new Error('CoreModule 只能被appModule引入');
        }
    }
    CoreModule.ctorParameters = function () { return [
        { type: CoreModule, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }] }
    ]; };
    CoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _services_services_module__WEBPACK_IMPORTED_MODULE_4__["ServicesModule"],
                _router_router_module__WEBPACK_IMPORTED_MODULE_6__["RouterModule"],
                _share_share_module__WEBPACK_IMPORTED_MODULE_5__["ShareModule"],
            ],
            exports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _router_router_module__WEBPACK_IMPORTED_MODULE_6__["RouterModule"],
                _share_share_module__WEBPACK_IMPORTED_MODULE_5__["ShareModule"],
            ]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])())
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/pages/components/album/album/album.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/pages/components/album/album/album.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".album {\n  background-color: #f1f1f1;\n}\n.album .album-box {\n  width: 980px;\n  margin: 0 auto;\n  background-color: #fff;\n  border-left: 1px solid #eee;\n  border-right: 1px solid #eee;\n  padding: 0 20px;\n  display: -webkit-box;\n  display: flex;\n}\n.album .left {\n  width: 700px;\n}\n.album .album-header {\n  padding: 20px 0;\n}\n.album .album-header .album-header-box {\n  display: -webkit-box;\n  display: flex;\n}\n.album .album-header .album-header-box .album-pic {\n  width: 208px;\n  height: 208px;\n}\n.album .album-header .album-header-box .album-header-right {\n  padding-left: 20px;\n}\n.album .album-header .album-header-box .album-header-right .album-header-title {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.album .album-header .album-header-box .album-header-right .album-header-title .album-header-tag {\n  background: url('icon.png') no-repeat 0 9999px;\n  width: 54px;\n  height: 24px;\n  background-position: 0 -186px;\n  display: inline-block;\n  overflow: hidden;\n  margin-right: 10px;\n}\n.album .album-header .album-header-box .album-header-right .album-header-create {\n  font-size: 0.9rem;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  margin-top: 15px;\n}\n.album .album-header .album-header-box .album-header-right .album-header-create .album-header-create-key {\n  margin-left: 10px;\n}\n.album .album-header .album-header-box .album-header-right .album-header-create .album-header-create-value {\n  margin-left: 10px;\n  color: #0c73c2;\n  cursor: pointer;\n}\n.album .album-header .album-header-box .album-header-right .album-publish-time {\n  margin-top: 15px;\n  color: #444;\n  font-size: 0.9rem;\n}\n.album .album-header .album-header-box .album-header-right .album-header-tool {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  margin-top: 15px;\n}\n.album .album-header .album-header-box .album-header-right .album-header-tool div {\n  margin-right: 20px;\n  padding: 5px 10px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  border: 1px solid #ccc;\n  background-color: #f4f4f4;\n  border-radius: 3px;\n  cursor: pointer;\n}\n.album .album-header .album-header-box .album-header-right .album-header-tool div span {\n  color: #444;\n  font-size: 0.8rem;\n  margin-left: 5px;\n}\n.album .album-header .album-header-box .album-header-right .album-header-tool div i {\n  font-size: 1rem;\n}\n.album .album-header .album-header-box .album-header-right .album-header-tool div:nth-child(1) {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  background-color: #3483cf;\n  color: #fff;\n}\n.album .album-header .album-header-box .album-header-right .album-header-tool div:nth-child(1) span {\n  color: #fff;\n}\n.album .album-header .album-header-box .album-header-right .album-desc {\n  margin-top: 15px;\n  color: #444;\n  font-size: 0.9rem;\n  word-wrap: break-word;\n}\n.album .album-songlist .album-songlist-header {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  border-bottom: 2px solid #ce1f08;\n  padding: 15px 0;\n}\n.album .album-songlist .album-songlist-header span {\n  color: #666;\n  font-size: 0.9rem;\n}\n.album .right {\n  -webkit-box-flex: 1;\n          flex: 1;\n}\n.album .right .commend {\n  margin: 20px 0 0 20px;\n}\n.album .right .commend .title {\n  margin: 0 0 0 10px;\n  height: 2rem;\n  line-height: 2rem;\n  font-size: 0.8rem;\n  border-bottom: 1px solid #ccc;\n}\n.album .right .commend .title h4 {\n  -webkit-box-flex: 1;\n          flex: 1;\n}\n.album .right .commend .title span {\n  color: #666;\n  cursor: pointer;\n}\n.album .right .commend .artist {\n  flex-wrap: wrap;\n  margin: 15px 0 0 10px;\n  background-color: #fff;\n}\n.album .right .commend .artist .item {\n  margin-bottom: 1rem;\n}\n.album .right .commend .artist .item .img {\n  width: 60px;\n  height: 50px;\n}\n.album .right .commend .artist .item .content {\n  line-height: 25px;\n}\n.album .right .commend .artist .item .content p {\n  width: 140px;\n  font-size: 0.8rem;\n  color: #000;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  margin: 0;\n  padding: 0;\n}\n.album .right .commend .artist .item .content p:nth-child(2) {\n  color: #666;\n  font-size: 0.8rem;\n}\n.album .right .commend .artist .item .content p:nth-child(1):hover {\n  -webkit-text-decoration-color: #000;\n          text-decoration-color: #000;\n  -webkit-text-decoration-line: underline;\n          text-decoration-line: underline;\n  -webkit-text-decoration-style: solid;\n          text-decoration-style: solid;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zbWFsbHppcC9EZXNrdG9wL2FuZ3VsYXIvd2FuZ3lpeXVuLW11c2ljL3NyYy9hcHAvcGFnZXMvY29tcG9uZW50cy9hbGJ1bS9hbGJ1bS9hbGJ1bS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvY29tcG9uZW50cy9hbGJ1bS9hbGJ1bS9hbGJ1bS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0FDQ0Y7QURDRTtFQUNFLFlBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtBQ0NKO0FERUU7RUFDRSxZQUFBO0FDQUo7QURHRTtFQUNFLGVBQUE7QUNESjtBREdJO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0FDRE47QURHTTtFQUNFLFlBQUE7RUFDQSxhQUFBO0FDRFI7QURJTTtFQUNFLGtCQUFBO0FDRlI7QURLUTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNIVjtBRElVO0VBQ0UsOENBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDRlo7QURPUTtFQUNFLGlCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLGdCQUFBO0FDTFY7QURPVTtFQUNFLGlCQUFBO0FDTFo7QURRVTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUNOWjtBRFVRO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUNSVjtBRFlRO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLGdCQUFBO0FDVlY7QURZVTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ1ZaO0FEWVk7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ1ZkO0FEWVk7RUFDRSxlQUFBO0FDVmQ7QURjVTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7QUNaWjtBRGFZO0VBQ0UsV0FBQTtBQ1hkO0FEZ0JRO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtBQ2RWO0FEc0JJO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7RUFDQSxnQ0FBQTtFQUNBLGVBQUE7QUNwQk47QURzQk07RUFDRSxXQUFBO0VBQ0EsaUJBQUE7QUNwQlI7QUQ0QkU7RUFDRSxtQkFBQTtVQUFBLE9BQUE7QUMxQko7QUQ0Qkk7RUFDRSxxQkFBQTtBQzFCTjtBRDRCTTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSw2QkFBQTtBQzFCUjtBRDRCUTtFQUNFLG1CQUFBO1VBQUEsT0FBQTtBQzFCVjtBRDZCUTtFQUNFLFdBQUE7RUFDQSxlQUFBO0FDM0JWO0FEZ0NNO0VBQ0UsZUFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7QUM5QlI7QURnQ1E7RUFDRSxtQkFBQTtBQzlCVjtBRGdDVTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDOUJaO0FEa0NVO0VBQ0UsaUJBQUE7QUNoQ1o7QURrQ1k7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUNoQ2Q7QURtQ1k7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7QUNqQ2Q7QURvQ1k7RUFDRSxtQ0FBQTtVQUFBLDJCQUFBO0VBQ0EsdUNBQUE7VUFBQSwrQkFBQTtFQUNBLG9DQUFBO1VBQUEsNEJBQUE7RUFDQSxlQUFBO0FDbENkIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY29tcG9uZW50cy9hbGJ1bS9hbGJ1bS9hbGJ1bS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hbGJ1bSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcclxuXHJcbiAgLmFsYnVtLWJveCB7XHJcbiAgICB3aWR0aDogOTgwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNlZWU7XHJcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZWVlO1xyXG4gICAgcGFkZGluZzogMCAyMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICB9XHJcblxyXG4gIC5sZWZ0IHtcclxuICAgIHdpZHRoOiA3MDBweDtcclxuICB9XHJcblxyXG4gIC5hbGJ1bS1oZWFkZXIge1xyXG4gICAgcGFkZGluZzogMjBweCAwO1xyXG5cclxuICAgIC5hbGJ1bS1oZWFkZXItYm94IHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgICAgIC5hbGJ1bS1waWMge1xyXG4gICAgICAgIHdpZHRoOiAyMDhweDtcclxuICAgICAgICBoZWlnaHQ6IDIwOHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuYWxidW0taGVhZGVyLXJpZ2h0IHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcblxyXG4gICAgICAgIC8vIOS4k+i+keWQjeensFxyXG4gICAgICAgIC5hbGJ1bS1oZWFkZXItdGl0bGUge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAuYWxidW0taGVhZGVyLXRhZyB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2ljb24ucG5nKSBuby1yZXBlYXQgMCA5OTk5cHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiA1NHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAgLTE4NnB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIOatjOaJi1xyXG4gICAgICAgIC5hbGJ1bS1oZWFkZXItY3JlYXRlIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG5cclxuICAgICAgICAgIC5hbGJ1bS1oZWFkZXItY3JlYXRlLWtleSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5hbGJ1bS1oZWFkZXItY3JlYXRlLXZhbHVlIHtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMGM3M2MyO1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYWxidW0tcHVibGlzaC10aW1lIHtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICAgICAgICBjb2xvcjogIzQ0NDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8g5bel5YW35qCPXHJcbiAgICAgICAgLmFsYnVtLWhlYWRlci10b29sIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcclxuXHJcbiAgICAgICAgICBkaXYge1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNGY0O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjNDQ0O1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaSB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgZGl2Om50aC1jaGlsZCgxKSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzNDgzY2Y7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmFsYnVtLWRlc2Mge1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgICAgICAgIGNvbG9yOiAjNDQ0O1xyXG4gICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgICAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyDmkq3mlL7liJfooahcclxuICAuYWxidW0tc29uZ2xpc3Qge1xyXG4gICAgLmFsYnVtLXNvbmdsaXN0LWhlYWRlciB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNjZTFmMDg7XHJcbiAgICAgIHBhZGRpbmc6IDE1cHggMDtcclxuXHJcbiAgICAgIHNwYW4ge1xyXG4gICAgICAgIGNvbG9yOiAjNjY2O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyAuYWxidW0tc29uZ2xpc3QtdGFibGUge1xyXG4gICAgLy8gfVxyXG4gIH1cclxuXHJcbiAgLy8g5Y+z6L655o6o6I2QXHJcbiAgLnJpZ2h0IHtcclxuICAgIGZsZXg6IDE7XHJcblxyXG4gICAgLmNvbW1lbmQge1xyXG4gICAgICBtYXJnaW46IDIwcHggMCAwIDIwcHg7XHJcbiAgICAgIC8vIOagh+mimFxyXG4gICAgICAudGl0bGUge1xyXG4gICAgICAgIG1hcmdpbjogMCAwIDAgMTBweDtcclxuICAgICAgICBoZWlnaHQ6IDJyZW07XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDJyZW07XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XHJcblxyXG4gICAgICAgIGg0IHtcclxuICAgICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgIGNvbG9yOiAjNjY2O1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLy8g5o6o6I2Q5q2M5omLXHJcbiAgICAgIC5hcnRpc3Qge1xyXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICBtYXJnaW46IDE1cHggMCAwIDEwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuXHJcbiAgICAgICAgLml0ZW0ge1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgICAgICAgIC8vIOWbvueJh1xyXG4gICAgICAgICAgLmltZyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLy8g5YaF5a65XHJcbiAgICAgICAgICAuY29udGVudCB7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xyXG5cclxuICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDE0MHB4O1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcDpudGgtY2hpbGQoMikge1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjNjY2O1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBwOm50aC1jaGlsZCgxKTpob3ZlciB7XHJcbiAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiAjMDAwO1xyXG4gICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbi1saW5lOiB1bmRlcmxpbmU7XHJcbiAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uLXN0eWxlOiBzb2xpZDtcclxuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLmFsYnVtIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcbn1cbi5hbGJ1bSAuYWxidW0tYm94IHtcbiAgd2lkdGg6IDk4MHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZWVlO1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZWVlO1xuICBwYWRkaW5nOiAwIDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uYWxidW0gLmxlZnQge1xuICB3aWR0aDogNzAwcHg7XG59XG4uYWxidW0gLmFsYnVtLWhlYWRlciB7XG4gIHBhZGRpbmc6IDIwcHggMDtcbn1cbi5hbGJ1bSAuYWxidW0taGVhZGVyIC5hbGJ1bS1oZWFkZXItYm94IHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5hbGJ1bSAuYWxidW0taGVhZGVyIC5hbGJ1bS1oZWFkZXItYm94IC5hbGJ1bS1waWMge1xuICB3aWR0aDogMjA4cHg7XG4gIGhlaWdodDogMjA4cHg7XG59XG4uYWxidW0gLmFsYnVtLWhlYWRlciAuYWxidW0taGVhZGVyLWJveCAuYWxidW0taGVhZGVyLXJpZ2h0IHtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xufVxuLmFsYnVtIC5hbGJ1bS1oZWFkZXIgLmFsYnVtLWhlYWRlci1ib3ggLmFsYnVtLWhlYWRlci1yaWdodCAuYWxidW0taGVhZGVyLXRpdGxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5hbGJ1bSAuYWxidW0taGVhZGVyIC5hbGJ1bS1oZWFkZXItYm94IC5hbGJ1bS1oZWFkZXItcmlnaHQgLmFsYnVtLWhlYWRlci10aXRsZSAuYWxidW0taGVhZGVyLXRhZyB7XG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2ljb24ucG5nKSBuby1yZXBlYXQgMCA5OTk5cHg7XG4gIHdpZHRoOiA1NHB4O1xuICBoZWlnaHQ6IDI0cHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgLTE4NnB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbi5hbGJ1bSAuYWxidW0taGVhZGVyIC5hbGJ1bS1oZWFkZXItYm94IC5hbGJ1bS1oZWFkZXItcmlnaHQgLmFsYnVtLWhlYWRlci1jcmVhdGUge1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cbi5hbGJ1bSAuYWxidW0taGVhZGVyIC5hbGJ1bS1oZWFkZXItYm94IC5hbGJ1bS1oZWFkZXItcmlnaHQgLmFsYnVtLWhlYWRlci1jcmVhdGUgLmFsYnVtLWhlYWRlci1jcmVhdGUta2V5IHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG4uYWxidW0gLmFsYnVtLWhlYWRlciAuYWxidW0taGVhZGVyLWJveCAuYWxidW0taGVhZGVyLXJpZ2h0IC5hbGJ1bS1oZWFkZXItY3JlYXRlIC5hbGJ1bS1oZWFkZXItY3JlYXRlLXZhbHVlIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGNvbG9yOiAjMGM3M2MyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uYWxidW0gLmFsYnVtLWhlYWRlciAuYWxidW0taGVhZGVyLWJveCAuYWxidW0taGVhZGVyLXJpZ2h0IC5hbGJ1bS1wdWJsaXNoLXRpbWUge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBjb2xvcjogIzQ0NDtcbiAgZm9udC1zaXplOiAwLjlyZW07XG59XG4uYWxidW0gLmFsYnVtLWhlYWRlciAuYWxidW0taGVhZGVyLWJveCAuYWxidW0taGVhZGVyLXJpZ2h0IC5hbGJ1bS1oZWFkZXItdG9vbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG4uYWxidW0gLmFsYnVtLWhlYWRlciAuYWxidW0taGVhZGVyLWJveCAuYWxidW0taGVhZGVyLXJpZ2h0IC5hbGJ1bS1oZWFkZXItdG9vbCBkaXYge1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNGY0O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5hbGJ1bSAuYWxidW0taGVhZGVyIC5hbGJ1bS1oZWFkZXItYm94IC5hbGJ1bS1oZWFkZXItcmlnaHQgLmFsYnVtLWhlYWRlci10b29sIGRpdiBzcGFuIHtcbiAgY29sb3I6ICM0NDQ7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuLmFsYnVtIC5hbGJ1bS1oZWFkZXIgLmFsYnVtLWhlYWRlci1ib3ggLmFsYnVtLWhlYWRlci1yaWdodCAuYWxidW0taGVhZGVyLXRvb2wgZGl2IGkge1xuICBmb250LXNpemU6IDFyZW07XG59XG4uYWxidW0gLmFsYnVtLWhlYWRlciAuYWxidW0taGVhZGVyLWJveCAuYWxidW0taGVhZGVyLXJpZ2h0IC5hbGJ1bS1oZWFkZXItdG9vbCBkaXY6bnRoLWNoaWxkKDEpIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM0ODNjZjtcbiAgY29sb3I6ICNmZmY7XG59XG4uYWxidW0gLmFsYnVtLWhlYWRlciAuYWxidW0taGVhZGVyLWJveCAuYWxidW0taGVhZGVyLXJpZ2h0IC5hbGJ1bS1oZWFkZXItdG9vbCBkaXY6bnRoLWNoaWxkKDEpIHNwYW4ge1xuICBjb2xvcjogI2ZmZjtcbn1cbi5hbGJ1bSAuYWxidW0taGVhZGVyIC5hbGJ1bS1oZWFkZXItYm94IC5hbGJ1bS1oZWFkZXItcmlnaHQgLmFsYnVtLWRlc2Mge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBjb2xvcjogIzQ0NDtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbn1cbi5hbGJ1bSAuYWxidW0tc29uZ2xpc3QgLmFsYnVtLXNvbmdsaXN0LWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNjZTFmMDg7XG4gIHBhZGRpbmc6IDE1cHggMDtcbn1cbi5hbGJ1bSAuYWxidW0tc29uZ2xpc3QgLmFsYnVtLXNvbmdsaXN0LWhlYWRlciBzcGFuIHtcbiAgY29sb3I6ICM2NjY7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xufVxuLmFsYnVtIC5yaWdodCB7XG4gIGZsZXg6IDE7XG59XG4uYWxidW0gLnJpZ2h0IC5jb21tZW5kIHtcbiAgbWFyZ2luOiAyMHB4IDAgMCAyMHB4O1xufVxuLmFsYnVtIC5yaWdodCAuY29tbWVuZCAudGl0bGUge1xuICBtYXJnaW46IDAgMCAwIDEwcHg7XG4gIGhlaWdodDogMnJlbTtcbiAgbGluZS1oZWlnaHQ6IDJyZW07XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcbn1cbi5hbGJ1bSAucmlnaHQgLmNvbW1lbmQgLnRpdGxlIGg0IHtcbiAgZmxleDogMTtcbn1cbi5hbGJ1bSAucmlnaHQgLmNvbW1lbmQgLnRpdGxlIHNwYW4ge1xuICBjb2xvcjogIzY2NjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmFsYnVtIC5yaWdodCAuY29tbWVuZCAuYXJ0aXN0IHtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBtYXJnaW46IDE1cHggMCAwIDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG4uYWxidW0gLnJpZ2h0IC5jb21tZW5kIC5hcnRpc3QgLml0ZW0ge1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuLmFsYnVtIC5yaWdodCAuY29tbWVuZCAuYXJ0aXN0IC5pdGVtIC5pbWcge1xuICB3aWR0aDogNjBweDtcbiAgaGVpZ2h0OiA1MHB4O1xufVxuLmFsYnVtIC5yaWdodCAuY29tbWVuZCAuYXJ0aXN0IC5pdGVtIC5jb250ZW50IHtcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XG59XG4uYWxidW0gLnJpZ2h0IC5jb21tZW5kIC5hcnRpc3QgLml0ZW0gLmNvbnRlbnQgcCB7XG4gIHdpZHRoOiAxNDBweDtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIGNvbG9yOiAjMDAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuLmFsYnVtIC5yaWdodCAuY29tbWVuZCAuYXJ0aXN0IC5pdGVtIC5jb250ZW50IHA6bnRoLWNoaWxkKDIpIHtcbiAgY29sb3I6ICM2NjY7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xufVxuLmFsYnVtIC5yaWdodCAuY29tbWVuZCAuYXJ0aXN0IC5pdGVtIC5jb250ZW50IHA6bnRoLWNoaWxkKDEpOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiAjMDAwO1xuICB0ZXh0LWRlY29yYXRpb24tbGluZTogdW5kZXJsaW5lO1xuICB0ZXh0LWRlY29yYXRpb24tc3R5bGU6IHNvbGlkO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/components/album/album/album.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/components/album/album/album.component.ts ***!
  \*****************************************************************/
/*! exports provided: AlbumComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlbumComponent", function() { return AlbumComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/service.service */ "./src/app/services/service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AlbumComponent = /** @class */ (function () {
    function AlbumComponent(service, activatedRoute, router) {
        this.service = service;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.albumDetail = {
            id: 0,
            songs: [],
            album: {
                artist: {
                    id: 0,
                    name: '',
                    picUrl: '',
                },
                company: '',
                name: '',
                size: 0,
                description: '',
                publishTime: 0,
                picUrl: '',
                info: {
                    commentCount: 0,
                    shareCount: 0,
                }
            }
        };
        this.description = []; // 简介内容
        this.showDescription = false; // 是否展开全部介绍
        this.hotComments = []; // 热门评论
        this.comments = []; // 评论
    }
    AlbumComponent.prototype.ngOnInit = function () {
        this.getAlbumDetail();
    };
    // 获取专辑详情
    AlbumComponent.prototype.getAlbumDetail = function () {
        var _this = this;
        this.activatedRoute.queryParams.subscribe(function (params) {
            // 专辑详情
            _this.service.album.getAlbumDetail(params.id).subscribe(function (album) {
                console.log("album", album);
                if (album.songs.length > 0) {
                    var al = JSON.parse(JSON.stringify(album));
                    // 热门专辑
                    _this.getAllAlnum(al.songs[0].ar[0].id);
                    album.songs = album.songs.map(function (item) {
                        return {
                            id: item.id,
                            name: item.name,
                            url: '.',
                            size: item.dt,
                            artist: item.ar[0].name,
                            picUrl: item.al.picUrl,
                        };
                    });
                }
                _this.albumDetail = album;
                _this.description = album.album.description.split('\n');
            });
            // 获取评论
            _this.getAlbumComments(params.id);
        });
    };
    // 获取热门专辑
    AlbumComponent.prototype.getAllAlnum = function (id) {
        var _this = this;
        this.service.artist.getArtistAlbum({ id: id, limit: 50, offset: 0 }).subscribe(function (res) {
            _this.hotAlbums = res.hotAlbums.filter(function (item, index) { return index < 10; });
        });
    };
    // 获取专辑评论
    AlbumComponent.prototype.getAlbumComments = function (id, offset, before) {
        var _this = this;
        if (offset === void 0) { offset = 0; }
        this.service.album.getAlbumComments({ id: id, offset: offset * 20, limit: 20, before: before }).subscribe(function (res) {
            console.log("评论列表", res);
            _this.commentTotal = res.total;
            _this.comments = res.comments;
            if (_this.hotComments.length == 0) {
                _this.hotComments = res.hotComments;
            }
        });
    };
    // 评论分页
    AlbumComponent.prototype.pageIndexChange = function (page) {
        var _this = this;
        this.activatedRoute.queryParams.subscribe(function (params) {
            _this.getAlbumComments(params.id, page - 1);
        });
    };
    // 播放歌单
    AlbumComponent.prototype.handlePlay = function (song) {
        this.service.player.songList = this.albumDetail.songs;
        if (this.albumDetail.songs.length > 0) {
            this.playSong(song.id, song.name, song.size, song.artist, song.picUrl);
        }
    };
    // 播放歌曲
    AlbumComponent.prototype.playSong = function (id, name, size, artist, picUrl) {
        var _this = this;
        // 获取播放连接
        this.service.song.getSongUrl(id).subscribe(function (song) {
            _this.service.player.song = {
                id: id,
                name: name,
                url: song.url,
                size: size,
                artist: artist,
                picUrl: picUrl,
            };
            var list = _this.service.player.songList;
            if (!list.find(function (e) { return e.id == id; })) {
                _this.service.player.songList.push(_this.service.player.song);
            }
            // 获取歌词
            _this.service.song.getLyric(id).subscribe(function (lyric) {
                _this.service.player.song.lyric = lyric;
            });
        });
        // 开始播放歌曲
        this.service.player.start = true;
    };
    // 播放第一首歌
    AlbumComponent.prototype.playFirstSong = function () {
        var song = this.albumDetail.songs[0];
        this.playSong(song.id, song.name, song.size, song.artist, song.picUrl);
    };
    // 跳转到歌手页面
    AlbumComponent.prototype.toArtist = function (id, index) {
        if (index === void 0) { index = 0; }
        this.router.navigate(['/artist'], { queryParams: { id: id, index: index } });
    };
    // 跳转到专辑页面
    AlbumComponent.prototype.toAlbum = function (id) {
        this.router.navigate(['album'], { queryParams: { id: id } });
    };
    AlbumComponent.ctorParameters = function () { return [
        { type: src_app_services_service_service__WEBPACK_IMPORTED_MODULE_2__["ServiceService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    AlbumComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-album',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./album.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/album/album/album.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./album.component.scss */ "./src/app/pages/components/album/album/album.component.scss")).default]
        })
    ], AlbumComponent);
    return AlbumComponent;
}());



/***/ }),

/***/ "./src/app/pages/components/artist/artist/artist.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/pages/components/artist/artist/artist.component.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".artist {\n  background-color: #f1f1f1;\n}\n.artist .content {\n  background-color: #fff;\n  width: 980px;\n  margin: 0 auto;\n  display: -webkit-box;\n  display: flex;\n}\n.artist .content .left {\n  -webkit-box-flex: 1;\n          flex: 1;\n  padding: 20px 10px 0 40px;\n}\n.artist .content .left .header .name span {\n  margin-left: 10px;\n}\n.artist .content .left .header .img {\n  width: 100%;\n  height: 300px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: end;\n          align-items: flex-end;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n  padding: 0 20px 20px 0;\n  background-image: url('logo.jpg');\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center center;\n}\n.artist .content .left .header .img .private-home,\n.artist .content .left .header .img .favorite {\n  padding: 5px 10px;\n  margin: 0 10px;\n  border-radius: 5px;\n  color: #fff;\n  background-color: rgba(0, 0, 0, 0.6);\n  cursor: pointer;\n}\n.artist .content .left .header .img .private-home span,\n.artist .content .left .header .img .favorite span {\n  margin-left: 5px;\n}\n.artist .content .left .nav .nav-item {\n  width: 25%;\n  height: 38px;\n  line-height: 40px;\n  text-align: center;\n  color: #444;\n  border-right: 1px solid #eee;\n  cursor: pointer;\n}\n.artist .content .left .nav-comp {\n  width: 680px;\n}\n.artist .content .right {\n  width: 250px;\n}\n.artist .content .right .commend {\n  margin: 20px 0 0 20px;\n}\n.artist .content .right .commend .title {\n  margin: 0 30px 0 0;\n  height: 2rem;\n  line-height: 2rem;\n  font-size: 0.8rem;\n  border-bottom: 1px solid #ccc;\n}\n.artist .content .right .commend .artist {\n  flex-wrap: wrap;\n  margin-top: 15px;\n  background-color: #fff;\n}\n.artist .content .right .commend .artist .item {\n  width: 33%;\n}\n.artist .content .right .commend .artist .item p {\n  width: 50px;\n  font-size: 0.8rem;\n  color: #000;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  cursor: pointer;\n  padding: 5px 0 10px 0;\n}\n.artist .content .right .commend .artist .item p:hover {\n  -webkit-text-decoration-color: #000;\n          text-decoration-color: #000;\n  -webkit-text-decoration-line: underline;\n          text-decoration-line: underline;\n  -webkit-text-decoration-style: solid;\n          text-decoration-style: solid;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zbWFsbHppcC9EZXNrdG9wL2FuZ3VsYXIvd2FuZ3lpeXVuLW11c2ljL3NyYy9hcHAvcGFnZXMvY29tcG9uZW50cy9hcnRpc3QvYXJ0aXN0L2FydGlzdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvY29tcG9uZW50cy9hcnRpc3QvYXJ0aXN0L2FydGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0FDQ0Y7QURDRTtFQUNFLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7QUNDSjtBRENJO0VBQ0UsbUJBQUE7VUFBQSxPQUFBO0VBQ0EseUJBQUE7QUNDTjtBRElVO0VBQ0UsaUJBQUE7QUNGWjtBRE1RO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxzQkFBQTtVQUFBLHFCQUFBO0VBQ0EscUJBQUE7VUFBQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUNBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0NBQUE7QUNKVjtBRE1VOztFQUVFLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLG9DQUFBO0VBQ0EsZUFBQTtBQ0paO0FETVk7O0VBQ0UsZ0JBQUE7QUNIZDtBRFdRO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO0VBQ0EsZUFBQTtBQ1RWO0FEY007RUFDRSxZQUFBO0FDWlI7QURnQkk7RUFDRSxZQUFBO0FDZE47QURnQk07RUFDRSxxQkFBQTtBQ2RSO0FEZ0JRO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLDZCQUFBO0FDZFY7QURrQlE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtBQ2hCVjtBRGtCVTtFQUNFLFVBQUE7QUNoQlo7QURrQlk7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0FDaEJkO0FEbUJZO0VBQ0UsbUNBQUE7VUFBQSwyQkFBQTtFQUNBLHVDQUFBO1VBQUEsK0JBQUE7RUFDQSxvQ0FBQTtVQUFBLDRCQUFBO0FDakJkIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY29tcG9uZW50cy9hcnRpc3QvYXJ0aXN0L2FydGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hcnRpc3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xuXG4gIC5jb250ZW50IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIHdpZHRoOiA5ODBweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgLmxlZnQge1xuICAgICAgZmxleDogMTtcbiAgICAgIHBhZGRpbmc6IDIwcHggMTBweCAwIDQwcHg7XG5cbiAgICAgIC8vIOWQjeensFxuICAgICAgLmhlYWRlciB7XG4gICAgICAgIC5uYW1lIHtcbiAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5pbWcge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogMzAwcHg7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgICBwYWRkaW5nOiAwIDIwcHggMjBweCAwO1xuICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2xvZ28uanBnKTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcblxuICAgICAgICAgIC5wcml2YXRlLWhvbWUsXG4gICAgICAgICAgLmZhdm9yaXRlIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgICAgICAgICAgbWFyZ2luOiAwIDEwcHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIOWvvOiIquagj1xuICAgICAgLm5hdiB7XG4gICAgICAgIC5uYXYtaXRlbSB7XG4gICAgICAgICAgd2lkdGg6IDI1JTtcbiAgICAgICAgICBoZWlnaHQ6IDM4cHg7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIGNvbG9yOiAjNDQ0O1xuICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlZWU7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIOWvvOiIquWGheWuuVxuICAgICAgLm5hdi1jb21we1xuICAgICAgICB3aWR0aDogNjgwcHg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnJpZ2h0IHtcbiAgICAgIHdpZHRoOiAyNTBweDtcblxuICAgICAgLmNvbW1lbmQge1xuICAgICAgICBtYXJnaW46IDIwcHggMCAwIDIwcHg7XG4gICAgICAgIC8vIOagh+mimFxuICAgICAgICAudGl0bGUge1xuICAgICAgICAgIG1hcmdpbjogMCAzMHB4IDAgMDtcbiAgICAgICAgICBoZWlnaHQ6IDJyZW07XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDJyZW07XG4gICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XG4gICAgICAgIH1cblxuICAgICAgICAvLyDmjqjojZDmrYzmiYtcbiAgICAgICAgLmFydGlzdCB7XG4gICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcblxuICAgICAgICAgIC5pdGVtIHtcbiAgICAgICAgICAgIHdpZHRoOiAzMyU7XG5cbiAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICBwYWRkaW5nOiA1cHggMCAxMHB4IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHA6aG92ZXIge1xuICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb24tY29sb3I6ICMwMDA7XG4gICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbi1saW5lOiB1bmRlcmxpbmU7XG4gICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbi1zdHlsZTogc29saWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCIuYXJ0aXN0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcbn1cbi5hcnRpc3QgLmNvbnRlbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICB3aWR0aDogOTgwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmFydGlzdCAuY29udGVudCAubGVmdCB7XG4gIGZsZXg6IDE7XG4gIHBhZGRpbmc6IDIwcHggMTBweCAwIDQwcHg7XG59XG4uYXJ0aXN0IC5jb250ZW50IC5sZWZ0IC5oZWFkZXIgLm5hbWUgc3BhbiB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuLmFydGlzdCAuY29udGVudCAubGVmdCAuaGVhZGVyIC5pbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBwYWRkaW5nOiAwIDIwcHggMjBweCAwO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9sb2dvLmpwZyk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG59XG4uYXJ0aXN0IC5jb250ZW50IC5sZWZ0IC5oZWFkZXIgLmltZyAucHJpdmF0ZS1ob21lLFxuLmFydGlzdCAuY29udGVudCAubGVmdCAuaGVhZGVyIC5pbWcgLmZhdm9yaXRlIHtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIG1hcmdpbjogMCAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5hcnRpc3QgLmNvbnRlbnQgLmxlZnQgLmhlYWRlciAuaW1nIC5wcml2YXRlLWhvbWUgc3Bhbixcbi5hcnRpc3QgLmNvbnRlbnQgLmxlZnQgLmhlYWRlciAuaW1nIC5mYXZvcml0ZSBzcGFuIHtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cbi5hcnRpc3QgLmNvbnRlbnQgLmxlZnQgLm5hdiAubmF2LWl0ZW0ge1xuICB3aWR0aDogMjUlO1xuICBoZWlnaHQ6IDM4cHg7XG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjNDQ0O1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZWVlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uYXJ0aXN0IC5jb250ZW50IC5sZWZ0IC5uYXYtY29tcCB7XG4gIHdpZHRoOiA2ODBweDtcbn1cbi5hcnRpc3QgLmNvbnRlbnQgLnJpZ2h0IHtcbiAgd2lkdGg6IDI1MHB4O1xufVxuLmFydGlzdCAuY29udGVudCAucmlnaHQgLmNvbW1lbmQge1xuICBtYXJnaW46IDIwcHggMCAwIDIwcHg7XG59XG4uYXJ0aXN0IC5jb250ZW50IC5yaWdodCAuY29tbWVuZCAudGl0bGUge1xuICBtYXJnaW46IDAgMzBweCAwIDA7XG4gIGhlaWdodDogMnJlbTtcbiAgbGluZS1oZWlnaHQ6IDJyZW07XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcbn1cbi5hcnRpc3QgLmNvbnRlbnQgLnJpZ2h0IC5jb21tZW5kIC5hcnRpc3Qge1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG4uYXJ0aXN0IC5jb250ZW50IC5yaWdodCAuY29tbWVuZCAuYXJ0aXN0IC5pdGVtIHtcbiAgd2lkdGg6IDMzJTtcbn1cbi5hcnRpc3QgLmNvbnRlbnQgLnJpZ2h0IC5jb21tZW5kIC5hcnRpc3QgLml0ZW0gcCB7XG4gIHdpZHRoOiA1MHB4O1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgY29sb3I6ICMwMDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmc6IDVweCAwIDEwcHggMDtcbn1cbi5hcnRpc3QgLmNvbnRlbnQgLnJpZ2h0IC5jb21tZW5kIC5hcnRpc3QgLml0ZW0gcDpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogIzAwMDtcbiAgdGV4dC1kZWNvcmF0aW9uLWxpbmU6IHVuZGVybGluZTtcbiAgdGV4dC1kZWNvcmF0aW9uLXN0eWxlOiBzb2xpZDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/components/artist/artist/artist.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/components/artist/artist/artist.component.ts ***!
  \********************************************************************/
/*! exports provided: ArtistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArtistComponent", function() { return ArtistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/service.service */ "./src/app/services/service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var ArtistComponent = /** @class */ (function () {
    function ArtistComponent(service, router, activatedRouter) {
        this.service = service;
        this.router = router;
        this.activatedRouter = activatedRouter;
        this.selectedNav = 0;
        this.hotArtist = [];
        this.hotSongs = [];
        this.hotAlbums = [];
        this.mvs = [];
        this.artistDesc = [];
        this.loading = false;
        this.artist = {
            id: '',
            name: '',
            picUrl: '',
            alias: []
        };
    }
    ArtistComponent.prototype.ngOnInit = function () {
        this.getData();
    };
    // 获取数据
    ArtistComponent.prototype.getData = function () {
        var _this = this;
        this.activatedRouter.queryParams.subscribe(function (params) {
            var id = params.id;
            _this.id = id;
            _this.loading = true;
            _this.getArtistSimi(id);
            // 默认获取艺人信息
            _this.getArtists(id);
            // 选择选中的类型
            // this.changeNav(params.index && parseInt(params.index))
            _this.selectedNav = params.index && parseInt(params.index) || 0;
        });
    };
    // 获取热门歌手
    ArtistComponent.prototype.getArtistSimi = function (id) {
        var _this = this;
        this.service.artist.getToplistArtist().subscribe(function (res) {
            _this.hotArtist = res.filter(function (item, index) { return index < 6; });
        });
    };
    // 获取歌手单曲 
    ArtistComponent.prototype.getArtists = function (id) {
        var _this = this;
        this.service.artist.getArtists(id).subscribe(function (res) {
            _this.artist = res.artist;
            _this.hotSongs = res.hotSongs;
            _this.loading = false;
        });
    };
    // 获取所有专辑
    ArtistComponent.prototype.getAllAlnum = function (id) {
        var _this = this;
        this.service.artist.getArtistAlbum({ id: id, limit: 50, offset: 0 }).subscribe(function (res) {
            _this.hotAlbums = res.hotAlbums;
            _this.loading = false;
        });
    };
    // 获取mv
    ArtistComponent.prototype.getArtistMv = function (id) {
        var _this = this;
        this.service.artist.getArtistMv(id).subscribe(function (res) {
            _this.mvs = res.mvs;
            _this.loading = false;
        });
    };
    // 获取描述
    ArtistComponent.prototype.getArtistDesc = function (id) {
        var _this = this;
        this.service.artist.getArtistDesc(id).subscribe(function (res) {
            _this.artistDesc = res;
            _this.loading = false;
        });
    };
    // 切换导航
    ArtistComponent.prototype.changeNav = function (index) {
        if (index === void 0) { index = 0; }
        this.selectedNav = index;
        var id = this.id;
        this.loading = true;
        this.router.navigate(['artist'], { queryParams: { id: id, index: index } });
        switch (index) {
            case 0:
                this.getArtists(id);
                break;
            case 1:
                this.getAllAlnum(id);
                break;
            case 2:
                this.getArtistMv(id);
                break;
            default:
                this.getArtistDesc(id);
                break;
        }
    };
    // 跳转到歌手页面
    ArtistComponent.prototype.toArtist = function (id) {
        console.log('id', id);
        this.router.navigate(['artist'], { queryParams: { id: id } });
    };
    ArtistComponent.ctorParameters = function () { return [
        { type: src_app_services_service_service__WEBPACK_IMPORTED_MODULE_2__["ServiceService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
    ]; };
    ArtistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-artist',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./artist.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/artist/artist/artist.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./artist.component.scss */ "./src/app/pages/components/artist/artist/artist.component.scss")).default]
        })
    ], ArtistComponent);
    return ArtistComponent;
}());



/***/ }),

/***/ "./src/app/pages/components/artist/components/all-album/all-album/all-album.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/components/artist/components/all-album/all-album/all-album.component.scss ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".all-album .list {\n  flex-wrap: wrap;\n}\n.all-album .list .item {\n  margin-top: 15px;\n  width: 25%;\n}\n.all-album .list .item .img {\n  position: relative;\n  width: 120px;\n  height: 120px;\n}\n.all-album .list .item .text-over {\n  margin-top: 5px;\n  width: 120px;\n}\n.all-album .list .item .name:hover {\n  -webkit-text-decoration-color: #000;\n          text-decoration-color: #000;\n  -webkit-text-decoration-line: underline;\n          text-decoration-line: underline;\n  -webkit-text-decoration-style: solid;\n          text-decoration-style: solid;\n  cursor: pointer;\n}\n.all-album .list .item .name {\n  margin: 5px 0;\n  font-size: 0.92rem;\n  color: #333;\n  font-weight: bold;\n}\n.all-album .list .item .publishTime {\n  text-decoration: none;\n  color: #666;\n  font-size: 0.8rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zbWFsbHppcC9EZXNrdG9wL2FuZ3VsYXIvd2FuZ3lpeXVuLW11c2ljL3NyYy9hcHAvcGFnZXMvY29tcG9uZW50cy9hcnRpc3QvY29tcG9uZW50cy9hbGwtYWxidW0vYWxsLWFsYnVtL2FsbC1hbGJ1bS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvY29tcG9uZW50cy9hcnRpc3QvY29tcG9uZW50cy9hbGwtYWxidW0vYWxsLWFsYnVtL2FsbC1hbGJ1bS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGVBQUE7QUNBSjtBREVJO0VBQ0UsZ0JBQUE7RUFDQSxVQUFBO0FDQU47QURDTTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUNDUjtBREVNO0VBQ0UsZUFBQTtFQUNBLFlBQUE7QUNBUjtBREdNO0VBQ0UsbUNBQUE7VUFBQSwyQkFBQTtFQUNBLHVDQUFBO1VBQUEsK0JBQUE7RUFDQSxvQ0FBQTtVQUFBLDRCQUFBO0VBQ0EsZUFBQTtBQ0RSO0FESU07RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUNGUjtBREtNO0VBQ0UscUJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUNIUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbXBvbmVudHMvYXJ0aXN0L2NvbXBvbmVudHMvYWxsLWFsYnVtL2FsbC1hbGJ1bS9hbGwtYWxidW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWxsLWFsYnVtIHtcbiAgLmxpc3Qge1xuICAgIGZsZXgtd3JhcDogd3JhcDtcblxuICAgIC5pdGVtIHtcbiAgICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgICB3aWR0aDogMjUlO1xuICAgICAgLmltZyB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgd2lkdGg6IDEyMHB4O1xuICAgICAgICBoZWlnaHQ6IDEyMHB4O1xuICAgICAgfVxuXG4gICAgICAudGV4dC1vdmVyIHtcbiAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgICB3aWR0aDogMTIwcHg7XG4gICAgICB9XG5cbiAgICAgIC5uYW1lOmhvdmVyIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiAjMDAwO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb24tbGluZTogdW5kZXJsaW5lO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb24tc3R5bGU6IHNvbGlkO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB9XG5cbiAgICAgIC5uYW1lIHtcbiAgICAgICAgbWFyZ2luOiA1cHggMDtcbiAgICAgICAgZm9udC1zaXplOiAwLjkycmVtO1xuICAgICAgICBjb2xvcjogIzMzMztcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICB9XG5cbiAgICAgIC5wdWJsaXNoVGltZSB7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgY29sb3I6ICM2NjY7XG4gICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiLmFsbC1hbGJ1bSAubGlzdCB7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbi5hbGwtYWxidW0gLmxpc3QgLml0ZW0ge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICB3aWR0aDogMjUlO1xufVxuLmFsbC1hbGJ1bSAubGlzdCAuaXRlbSAuaW1nIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTIwcHg7XG4gIGhlaWdodDogMTIwcHg7XG59XG4uYWxsLWFsYnVtIC5saXN0IC5pdGVtIC50ZXh0LW92ZXIge1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIHdpZHRoOiAxMjBweDtcbn1cbi5hbGwtYWxidW0gLmxpc3QgLml0ZW0gLm5hbWU6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb24tY29sb3I6ICMwMDA7XG4gIHRleHQtZGVjb3JhdGlvbi1saW5lOiB1bmRlcmxpbmU7XG4gIHRleHQtZGVjb3JhdGlvbi1zdHlsZTogc29saWQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5hbGwtYWxidW0gLmxpc3QgLml0ZW0gLm5hbWUge1xuICBtYXJnaW46IDVweCAwO1xuICBmb250LXNpemU6IDAuOTJyZW07XG4gIGNvbG9yOiAjMzMzO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5hbGwtYWxidW0gLmxpc3QgLml0ZW0gLnB1Ymxpc2hUaW1lIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogIzY2NjtcbiAgZm9udC1zaXplOiAwLjhyZW07XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/components/artist/components/all-album/all-album/all-album.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/components/artist/components/all-album/all-album/all-album.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: AllAlbumComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllAlbumComponent", function() { return AllAlbumComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/service.service */ "./src/app/services/service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AllAlbumComponent = /** @class */ (function () {
    function AllAlbumComponent(service, router) {
        this.service = service;
        this.router = router;
        this.albums = [];
    }
    AllAlbumComponent.prototype.ngOnInit = function () {
    };
    // 跳转到专辑页面
    AllAlbumComponent.prototype.toAlbum = function (id) {
        this.router.navigate(['album'], { queryParams: { id: id } });
    };
    AllAlbumComponent.ctorParameters = function () { return [
        { type: src_app_services_service_service__WEBPACK_IMPORTED_MODULE_2__["ServiceService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], AllAlbumComponent.prototype, "albums", void 0);
    AllAlbumComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-all-album',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./all-album.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/artist/components/all-album/all-album/all-album.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./all-album.component.scss */ "./src/app/pages/components/artist/components/all-album/all-album/all-album.component.scss")).default]
        })
    ], AllAlbumComponent);
    return AllAlbumComponent;
}());



/***/ }),

/***/ "./src/app/pages/components/artist/components/artist-desc/artist-desc/artist-desc.component.scss":
/*!*******************************************************************************************************!*\
  !*** ./src/app/pages/components/artist/components/artist-desc/artist-desc/artist-desc.component.scss ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".desc {\n  margin-top: 20px;\n}\n.desc .title {\n  padding: 10px 0;\n}\n.desc .title .tag {\n  width: 4px;\n  height: 1rem;\n  background-color: #ce1f08;\n  margin-right: 15px;\n}\n.desc .brief-desc {\n  color: #666;\n  font-size: 0.8rem;\n  text-indent: 2rem;\n  line-height: 1.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zbWFsbHppcC9EZXNrdG9wL2FuZ3VsYXIvd2FuZ3lpeXVuLW11c2ljL3NyYy9hcHAvcGFnZXMvY29tcG9uZW50cy9hcnRpc3QvY29tcG9uZW50cy9hcnRpc3QtZGVzYy9hcnRpc3QtZGVzYy9hcnRpc3QtZGVzYy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvY29tcG9uZW50cy9hcnRpc3QvY29tcG9uZW50cy9hcnRpc3QtZGVzYy9hcnRpc3QtZGVzYy9hcnRpc3QtZGVzYy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0FDQ0Y7QURDRTtFQUNFLGVBQUE7QUNDSjtBRENJO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FDQ047QURJRTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUNGSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbXBvbmVudHMvYXJ0aXN0L2NvbXBvbmVudHMvYXJ0aXN0LWRlc2MvYXJ0aXN0LWRlc2MvYXJ0aXN0LWRlc2MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGVzYyB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG5cbiAgLnRpdGxlIHtcbiAgICBwYWRkaW5nOiAxMHB4IDA7XG5cbiAgICAudGFnIHtcbiAgICAgIHdpZHRoOiA0cHg7XG4gICAgICBoZWlnaHQ6IDFyZW07XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2UxZjA4O1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICAgIH1cbiAgfVxuXG4gIC8vIOS7i+e7jVxuICAuYnJpZWYtZGVzYyB7XG4gICAgY29sb3I6ICM2NjY7XG4gICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgdGV4dC1pbmRlbnQ6IDJyZW07XG4gICAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcbiAgfVxufVxuIiwiLmRlc2Mge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuLmRlc2MgLnRpdGxlIHtcbiAgcGFkZGluZzogMTBweCAwO1xufVxuLmRlc2MgLnRpdGxlIC50YWcge1xuICB3aWR0aDogNHB4O1xuICBoZWlnaHQ6IDFyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNjZTFmMDg7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbn1cbi5kZXNjIC5icmllZi1kZXNjIHtcbiAgY29sb3I6ICM2NjY7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICB0ZXh0LWluZGVudDogMnJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/components/artist/components/artist-desc/artist-desc/artist-desc.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/pages/components/artist/components/artist-desc/artist-desc/artist-desc.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: ArtistDescComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArtistDescComponent", function() { return ArtistDescComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ArtistDescComponent = /** @class */ (function () {
    function ArtistDescComponent() {
        this.artistDesc = {
            briefDesc: '',
            introduction: []
        };
        this.name = '';
    }
    ArtistDescComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], ArtistDescComponent.prototype, "artistDesc", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], ArtistDescComponent.prototype, "name", void 0);
    ArtistDescComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-artist-desc',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./artist-desc.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/artist/components/artist-desc/artist-desc/artist-desc.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./artist-desc.component.scss */ "./src/app/pages/components/artist/components/artist-desc/artist-desc/artist-desc.component.scss")).default]
        })
    ], ArtistDescComponent);
    return ArtistDescComponent;
}());



/***/ }),

/***/ "./src/app/pages/components/artist/components/hotSongs/hot-songs/hot-songs.component.scss":
/*!************************************************************************************************!*\
  !*** ./src/app/pages/components/artist/components/hotSongs/hot-songs/hot-songs.component.scss ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".hot-songs .pl-songlist .pl-songlist-header {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  border-bottom: 2px solid #ce1f08;\n  padding: 15px 0;\n}\n.hot-songs .pl-songlist .pl-songlist-header span {\n  color: #666;\n  font-size: 0.9rem;\n}\n.hot-songs .pl-songlist .pl-songlist-table td {\n  font-size: 0.9rem;\n  height: 57px;\n}\n.hot-songs .pl-songlist .pl-songlist-table td div:hover {\n  -webkit-text-decoration-style: solid;\n          text-decoration-style: solid;\n  -webkit-text-decoration-line: underline;\n          text-decoration-line: underline;\n  -webkit-text-decoration-color: #000;\n          text-decoration-color: #000;\n  cursor: pointer;\n}\n.hot-songs .pl-songlist .pl-songlist-table .td-name,\n.hot-songs .pl-songlist .pl-songlist-table .td-album,\n.hot-songs .pl-songlist .pl-songlist-table .td-artist {\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n.hot-songs .pl-songlist .pl-songlist-table .td-name {\n  width: 200px;\n}\n.hot-songs .pl-songlist .pl-songlist-table .td-artist {\n  width: 60px;\n}\n.hot-songs .pl-songlist .pl-songlist-table .td-album {\n  width: 150px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zbWFsbHppcC9EZXNrdG9wL2FuZ3VsYXIvd2FuZ3lpeXVuLW11c2ljL3NyYy9hcHAvcGFnZXMvY29tcG9uZW50cy9hcnRpc3QvY29tcG9uZW50cy9ob3RTb25ncy9ob3Qtc29uZ3MvaG90LXNvbmdzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9jb21wb25lbnRzL2FydGlzdC9jb21wb25lbnRzL2hvdFNvbmdzL2hvdC1zb25ncy9ob3Qtc29uZ3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0k7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtFQUNBLGdDQUFBO0VBQ0EsZUFBQTtBQ0ZOO0FESU07RUFDRSxXQUFBO0VBQ0EsaUJBQUE7QUNGUjtBRE1NO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0FDSlI7QURNUTtFQUNFLG9DQUFBO1VBQUEsNEJBQUE7RUFDQSx1Q0FBQTtVQUFBLCtCQUFBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtFQUNBLGVBQUE7QUNKVjtBRFFNOzs7RUFHRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNOUjtBRFNNO0VBQ0UsWUFBQTtBQ1BSO0FEVU07RUFDRSxXQUFBO0FDUlI7QURXTTtFQUNFLFlBQUE7QUNUUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbXBvbmVudHMvYXJ0aXN0L2NvbXBvbmVudHMvaG90U29uZ3MvaG90LXNvbmdzL2hvdC1zb25ncy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ob3Qtc29uZ3Mge1xuICAvLyDmkq3mlL7liJfooahcbiAgLnBsLXNvbmdsaXN0IHtcbiAgICAucGwtc29uZ2xpc3QtaGVhZGVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNjZTFmMDg7XG4gICAgICBwYWRkaW5nOiAxNXB4IDA7XG5cbiAgICAgIHNwYW4ge1xuICAgICAgICBjb2xvcjogIzY2NjtcbiAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgICB9XG4gICAgfVxuICAgIC5wbC1zb25nbGlzdC10YWJsZSB7XG4gICAgICB0ZCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgICAgICBoZWlnaHQ6IDU3cHg7XG5cbiAgICAgICAgZGl2OmhvdmVyIHtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb24tc3R5bGU6IHNvbGlkO1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbi1saW5lOiB1bmRlcmxpbmU7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiAjMDAwO1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAudGQtbmFtZSxcbiAgICAgIC50ZC1hbGJ1bSxcbiAgICAgIC50ZC1hcnRpc3Qge1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgIH1cblxuICAgICAgLnRkLW5hbWUge1xuICAgICAgICB3aWR0aDogMjAwcHg7XG4gICAgICB9XG5cbiAgICAgIC50ZC1hcnRpc3Qge1xuICAgICAgICB3aWR0aDogNjBweDtcbiAgICAgIH1cblxuICAgICAgLnRkLWFsYnVtIHtcbiAgICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiLmhvdC1zb25ncyAucGwtc29uZ2xpc3QgLnBsLXNvbmdsaXN0LWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNjZTFmMDg7XG4gIHBhZGRpbmc6IDE1cHggMDtcbn1cbi5ob3Qtc29uZ3MgLnBsLXNvbmdsaXN0IC5wbC1zb25nbGlzdC1oZWFkZXIgc3BhbiB7XG4gIGNvbG9yOiAjNjY2O1xuICBmb250LXNpemU6IDAuOXJlbTtcbn1cbi5ob3Qtc29uZ3MgLnBsLXNvbmdsaXN0IC5wbC1zb25nbGlzdC10YWJsZSB0ZCB7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBoZWlnaHQ6IDU3cHg7XG59XG4uaG90LXNvbmdzIC5wbC1zb25nbGlzdCAucGwtc29uZ2xpc3QtdGFibGUgdGQgZGl2OmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uLXN0eWxlOiBzb2xpZDtcbiAgdGV4dC1kZWNvcmF0aW9uLWxpbmU6IHVuZGVybGluZTtcbiAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiAjMDAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uaG90LXNvbmdzIC5wbC1zb25nbGlzdCAucGwtc29uZ2xpc3QtdGFibGUgLnRkLW5hbWUsXG4uaG90LXNvbmdzIC5wbC1zb25nbGlzdCAucGwtc29uZ2xpc3QtdGFibGUgLnRkLWFsYnVtLFxuLmhvdC1zb25ncyAucGwtc29uZ2xpc3QgLnBsLXNvbmdsaXN0LXRhYmxlIC50ZC1hcnRpc3Qge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cbi5ob3Qtc29uZ3MgLnBsLXNvbmdsaXN0IC5wbC1zb25nbGlzdC10YWJsZSAudGQtbmFtZSB7XG4gIHdpZHRoOiAyMDBweDtcbn1cbi5ob3Qtc29uZ3MgLnBsLXNvbmdsaXN0IC5wbC1zb25nbGlzdC10YWJsZSAudGQtYXJ0aXN0IHtcbiAgd2lkdGg6IDYwcHg7XG59XG4uaG90LXNvbmdzIC5wbC1zb25nbGlzdCAucGwtc29uZ2xpc3QtdGFibGUgLnRkLWFsYnVtIHtcbiAgd2lkdGg6IDE1MHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/components/artist/components/hotSongs/hot-songs/hot-songs.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/components/artist/components/hotSongs/hot-songs/hot-songs.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: HotSongsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HotSongsComponent", function() { return HotSongsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/service.service */ "./src/app/services/service.service.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var HotSongsComponent = /** @class */ (function () {
    function HotSongsComponent(service, notification, router) {
        this.service = service;
        this.notification = notification;
        this.router = router;
        this.songs = [];
    }
    HotSongsComponent.prototype.ngOnInit = function () {
    };
    // 播放歌单
    HotSongsComponent.prototype.handlePlay = function (song) {
        this.service.player.songList = this.songs;
        if (this.songs.length > 0) {
            var art = song.ar.map(function (item) { return item.name; });
            this.playSong(song.id, song.name, song.dt, art, song.al.picUrl);
        }
    };
    // 播放歌曲
    HotSongsComponent.prototype.playSong = function (id, name, size, artist, picUrl) {
        var _this = this;
        // 获取播放连接
        this.service.song.getSongUrl(id).subscribe(function (song) {
            if (song.url) {
                _this.service.player.song = {
                    id: id,
                    name: name,
                    url: song.url,
                    size: size,
                    artist: artist,
                    picUrl: picUrl,
                };
                var list = _this.service.player.songList;
                if (!list.find(function (e) { return e.id == id; })) {
                    _this.service.player.songList.push(_this.service.player.song);
                }
                // 获取歌词
                _this.service.song.getLyric(id).subscribe(function (lyric) {
                    _this.service.player.song.lyric = lyric;
                });
            }
            else {
                _this.notification.create('error', "\u9519\u8BEF\u8B66\u544A", '付费歌曲，无法播放');
            }
        });
        // 开始播放歌曲
        this.service.player.start = true;
    };
    // 跳转到歌曲详情
    HotSongsComponent.prototype.toSong = function (id) {
        this.router.navigate(['song'], { queryParams: { id: id } });
    };
    // 跳转到艺人详情
    HotSongsComponent.prototype.toArtist = function (id) {
        this.router.navigate(['artist'], { queryParams: { id: id } });
    };
    // 跳转到专辑详情
    HotSongsComponent.prototype.toAlbum = function (id) {
        this.router.navigate(['album'], { queryParams: { id: id } });
    };
    HotSongsComponent.ctorParameters = function () { return [
        { type: src_app_services_service_service__WEBPACK_IMPORTED_MODULE_2__["ServiceService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzNotificationService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], HotSongsComponent.prototype, "songs", void 0);
    HotSongsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-hot-songs',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./hot-songs.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/artist/components/hotSongs/hot-songs/hot-songs.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./hot-songs.component.scss */ "./src/app/pages/components/artist/components/hotSongs/hot-songs/hot-songs.component.scss")).default]
        })
    ], HotSongsComponent);
    return HotSongsComponent;
}());



/***/ }),

/***/ "./src/app/pages/components/artist/components/relative-mv/relative-mv/relative-mv.component.scss":
/*!*******************************************************************************************************!*\
  !*** ./src/app/pages/components/artist/components/relative-mv/relative-mv/relative-mv.component.scss ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mvs .list {\n  flex-wrap: wrap;\n}\n.mvs .list .item {\n  margin-top: 15px;\n  width: 25%;\n}\n.mvs .list .item .img {\n  position: relative;\n  width: 120px;\n  height: 120px;\n}\n.mvs .list .item .text-over {\n  margin-top: 5px;\n  width: 120px;\n}\n.mvs .list .item .name:hover {\n  -webkit-text-decoration-color: #000;\n          text-decoration-color: #000;\n  -webkit-text-decoration-line: underline;\n          text-decoration-line: underline;\n  -webkit-text-decoration-style: solid;\n          text-decoration-style: solid;\n  cursor: pointer;\n}\n.mvs .list .item .name {\n  margin: 5px 0;\n  font-size: 0.92rem;\n  color: #333;\n  font-weight: bold;\n}\n.mvs .list .item .publishTime {\n  text-decoration: none;\n  color: #666;\n  font-size: 0.8rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zbWFsbHppcC9EZXNrdG9wL2FuZ3VsYXIvd2FuZ3lpeXVuLW11c2ljL3NyYy9hcHAvcGFnZXMvY29tcG9uZW50cy9hcnRpc3QvY29tcG9uZW50cy9yZWxhdGl2ZS1tdi9yZWxhdGl2ZS1tdi9yZWxhdGl2ZS1tdi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvY29tcG9uZW50cy9hcnRpc3QvY29tcG9uZW50cy9yZWxhdGl2ZS1tdi9yZWxhdGl2ZS1tdi9yZWxhdGl2ZS1tdi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGVBQUE7QUNBSjtBREVJO0VBQ0UsZ0JBQUE7RUFDQSxVQUFBO0FDQU47QURDTTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUNDUjtBREVNO0VBQ0UsZUFBQTtFQUNBLFlBQUE7QUNBUjtBREdNO0VBQ0UsbUNBQUE7VUFBQSwyQkFBQTtFQUNBLHVDQUFBO1VBQUEsK0JBQUE7RUFDQSxvQ0FBQTtVQUFBLDRCQUFBO0VBQ0EsZUFBQTtBQ0RSO0FESU07RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUNGUjtBREtNO0VBQ0UscUJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUNIUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbXBvbmVudHMvYXJ0aXN0L2NvbXBvbmVudHMvcmVsYXRpdmUtbXYvcmVsYXRpdmUtbXYvcmVsYXRpdmUtbXYuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubXZzIHtcbiAgLmxpc3Qge1xuICAgIGZsZXgtd3JhcDogd3JhcDtcblxuICAgIC5pdGVtIHtcbiAgICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgICB3aWR0aDogMjUlO1xuICAgICAgLmltZyB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgd2lkdGg6IDEyMHB4O1xuICAgICAgICBoZWlnaHQ6IDEyMHB4O1xuICAgICAgfVxuXG4gICAgICAudGV4dC1vdmVyIHtcbiAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgICB3aWR0aDogMTIwcHg7XG4gICAgICB9XG5cbiAgICAgIC5uYW1lOmhvdmVyIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiAjMDAwO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb24tbGluZTogdW5kZXJsaW5lO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb24tc3R5bGU6IHNvbGlkO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB9XG5cbiAgICAgIC5uYW1lIHtcbiAgICAgICAgbWFyZ2luOiA1cHggMDtcbiAgICAgICAgZm9udC1zaXplOiAwLjkycmVtO1xuICAgICAgICBjb2xvcjogIzMzMztcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICB9XG5cbiAgICAgIC5wdWJsaXNoVGltZSB7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgY29sb3I6ICM2NjY7XG4gICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiLm12cyAubGlzdCB7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbi5tdnMgLmxpc3QgLml0ZW0ge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICB3aWR0aDogMjUlO1xufVxuLm12cyAubGlzdCAuaXRlbSAuaW1nIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTIwcHg7XG4gIGhlaWdodDogMTIwcHg7XG59XG4ubXZzIC5saXN0IC5pdGVtIC50ZXh0LW92ZXIge1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIHdpZHRoOiAxMjBweDtcbn1cbi5tdnMgLmxpc3QgLml0ZW0gLm5hbWU6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb24tY29sb3I6ICMwMDA7XG4gIHRleHQtZGVjb3JhdGlvbi1saW5lOiB1bmRlcmxpbmU7XG4gIHRleHQtZGVjb3JhdGlvbi1zdHlsZTogc29saWQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5tdnMgLmxpc3QgLml0ZW0gLm5hbWUge1xuICBtYXJnaW46IDVweCAwO1xuICBmb250LXNpemU6IDAuOTJyZW07XG4gIGNvbG9yOiAjMzMzO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5tdnMgLmxpc3QgLml0ZW0gLnB1Ymxpc2hUaW1lIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogIzY2NjtcbiAgZm9udC1zaXplOiAwLjhyZW07XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/components/artist/components/relative-mv/relative-mv/relative-mv.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/pages/components/artist/components/relative-mv/relative-mv/relative-mv.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: RelativeMvComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RelativeMvComponent", function() { return RelativeMvComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RelativeMvComponent = /** @class */ (function () {
    function RelativeMvComponent() {
        this.mvs = [];
    }
    RelativeMvComponent.prototype.ngOnInit = function () {
    };
    // 跳转到mv页面
    RelativeMvComponent.prototype.toMv = function (id) {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], RelativeMvComponent.prototype, "mvs", void 0);
    RelativeMvComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-relative-mv',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./relative-mv.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/artist/components/relative-mv/relative-mv/relative-mv.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./relative-mv.component.scss */ "./src/app/pages/components/artist/components/relative-mv/relative-mv/relative-mv.component.scss")).default]
        })
    ], RelativeMvComponent);
    return RelativeMvComponent;
}());



/***/ }),

/***/ "./src/app/pages/components/discover/discover/discover.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/pages/components/discover/discover/discover.component.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbXBvbmVudHMvZGlzY292ZXIvZGlzY292ZXIvZGlzY292ZXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/components/discover/discover/discover.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/components/discover/discover/discover.component.ts ***!
  \**************************************************************************/
/*! exports provided: DiscoverComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscoverComponent", function() { return DiscoverComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DiscoverComponent = /** @class */ (function () {
    function DiscoverComponent() {
    }
    DiscoverComponent.prototype.ngOnInit = function () {
    };
    DiscoverComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-discover',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./discover.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/discover/discover/discover.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./discover.component.scss */ "./src/app/pages/components/discover/discover/discover.component.scss")).default]
        })
    ], DiscoverComponent);
    return DiscoverComponent;
}());



/***/ }),

/***/ "./src/app/pages/components/dj/dj/dj.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/pages/components/dj/dj/dj.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbXBvbmVudHMvZGovZGovZGouY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/components/dj/dj/dj.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/components/dj/dj/dj.component.ts ***!
  \********************************************************/
/*! exports provided: DjComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DjComponent", function() { return DjComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DjComponent = /** @class */ (function () {
    function DjComponent() {
    }
    DjComponent.prototype.ngOnInit = function () {
    };
    DjComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dj',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dj.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/dj/dj/dj.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dj.component.scss */ "./src/app/pages/components/dj/dj/dj.component.scss")).default]
        })
    ], DjComponent);
    return DjComponent;
}());



/***/ }),

/***/ "./src/app/pages/components/home/home.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/components/home/home.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".home {\n  background-color: #f1f1f1;\n}\n.home .banner {\n  height: 350px;\n  margin: 0 auto;\n}\n.home .banner [nz-carousel-content] {\n  background: #364d79;\n  overflow: hidden;\n}\n.home .banner .carousel-item {\n  height: 350px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.home .banner .carousel-item .carousel-bg {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  width: 100%;\n  height: 350px;\n  background-size: cover;\n  background-position: center center;\n  background-repeat: no-repeat;\n  -webkit-filter: contrast(100%) blur(30px);\n          filter: contrast(100%) blur(30px);\n  -webkit-transform: scale(1.5);\n          transform: scale(1.5);\n}\n.home .banner .carousel-item img {\n  z-index: 20;\n}\n.home .middle {\n  display: -webkit-box;\n  display: flex;\n  width: 980px;\n  margin: 0 auto;\n}\n.home .middle .hot {\n  width: 730px;\n  background-color: #fff;\n}\n.home .middle .hot .hot-header {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  margin: 0 20px;\n  padding: 30px 0 10px 0;\n  border-bottom: 2px solid #ce1f08;\n}\n.home .middle .hot .hot-header .hot-title-first {\n  font-size: 1.5rem;\n  color: #222;\n  cursor: pointer;\n}\n.home .middle .hot .hot-header .hot-title {\n  padding: 0 10px;\n  font-size: 0.92rem;\n  color: #666;\n  cursor: pointer;\n}\n.home .middle .hot .hot-header .hot-more {\n  -webkit-box-flex: 1;\n          flex: 1;\n  text-align: right;\n  color: #666;\n  font-size: 0.92rem;\n  cursor: pointer;\n}\n.home .middle .hot .singer-unit {\n  margin-top: 20px;\n}\n.home .middle .hot .singer-unit .su-list {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n}\n.home .middle .hot .singer-unit .su-list .su-item {\n  width: calc(25% - 40px);\n  margin: 0 20px 30px 20px;\n}\n.home .middle .hot .singer-unit .su-list .su-item .fans {\n  width: 100%;\n  height: 140px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: end;\n          align-items: flex-end;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n.home .middle .hot .singer-unit .su-list .su-item .fans div {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  width: 100%;\n  padding: 5px 10px;\n  font-size: 0.8rem;\n  color: #ccc;\n  background-color: rgba(0, 0, 0, 0.6);\n  -webkit-backdrop-filter: blur(2px);\n          backdrop-filter: blur(2px);\n}\n.home .middle .hot .singer-unit .su-list .su-item .fans div .icon-zanting:hover {\n  color: #fff;\n}\n.home .middle .hot .singer-unit .su-list .su-item .su-name {\n  margin-top: 10px;\n  font-size: 0.8rem;\n  color: #333;\n}\n.home .middle .hot .singer-unit .su-list .su-item .album-img {\n  width: 100%;\n  height: 140px;\n  background-size: cover;\n  background-repeat: no-repeat;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n  -webkit-box-align: end;\n          align-items: flex-end;\n  padding: 0 10px 10px 0;\n}\n.home .middle .hot .singer-unit .su-list .su-item .album-img i {\n  display: none;\n  font-size: 25px;\n  color: #eee;\n}\n.home .middle .hot .singer-unit .su-list .su-item .album-img:hover i {\n  display: block;\n}\n.home .middle .hot .singer-unit .su-list .su-item .ai-desc {\n  margin-top: 10px;\n  font-size: 0.8rem;\n}\n.home .middle .hot .singer-unit .su-list .su-item .ai-desc p {\n  margin: 0;\n  padding: 0 0 5px 0;\n  width: 100px;\n}\n.home .middle .hot .singer-unit .su-list .su-item .ai-desc p:nth-child(1) {\n  color: #222;\n}\n.home .middle .hot .singer-unit .su-list .su-item .ai-desc p:nth-child(2) {\n  color: #999;\n}\n.home .middle .hot .playlist {\n  display: -webkit-box;\n  display: flex;\n  margin-top: 20px;\n  padding: 0 10px;\n}\n.home .middle .hot .playlist .pt-border {\n  border-left: 1px solid #ccc;\n}\n.home .middle .hot .playlist .playlist-top {\n  -webkit-box-flex: 1;\n          flex: 1;\n  padding: 0 10px;\n}\n.home .middle .hot .playlist .playlist-top .pt-header {\n  display: -webkit-box;\n  display: flex;\n}\n.home .middle .hot .playlist .playlist-top .pt-header img {\n  width: 80px;\n  height: 80px;\n}\n.home .middle .hot .playlist .playlist-top .pt-header .pt-title {\n  padding: 0 10px;\n}\n.home .middle .hot .playlist .playlist-top .pt-header .pt-title p {\n  font-size: 0.9rem;\n  color: #000;\n  font-weight: bold;\n  margin: 0;\n  padding: 0;\n}\n.home .middle .hot .playlist .playlist-top .pt-header .pt-title p:nth-child(2) {\n  font-size: 30px;\n  color: #999;\n}\n.home .middle .hot .playlist .playlist-top .pt-list .pt-item {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  height: 40px;\n  line-height: 40px;\n  cursor: pointer;\n}\n.home .middle .hot .playlist .playlist-top .pt-list .pt-item div span,\n.home .middle .hot .playlist .playlist-top .pt-list .pt-item div p {\n  margin-left: 10px;\n  color: #444;\n  font-size: 0.8rem;\n}\n.home .middle .hot .playlist .playlist-top .pt-list .pt-item div p {\n  margin: 0 0 0 10px;\n  padding: 0;\n  width: 160px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.home .middle .hot .playlist .playlist-top .pt-list .pt-item div i {\n  font-size: 25px;\n  color: #666;\n}\n.home .middle .hot .playlist .playlist-top .pt-list .pt-item div:nth-child(1) {\n  -webkit-box-flex: 1;\n          flex: 1;\n}\n.home .middle .hot .playlist .playlist-top .pt-list .pt-item div:nth-child(2) {\n  display: none;\n  z-index: 15;\n  line-height: 45px;\n}\n.home .middle .hot .playlist .playlist-top .pt-list .pt-item:hover .pt-item-player {\n  display: block;\n}\n.home .middle .middle-right {\n  -webkit-box-flex: 1;\n          flex: 1;\n  width: 250px;\n  background-color: #fff;\n}\n.home .middle .middle-right .into-singer {\n  margin-left: 20px;\n  border-left: 1px solid #e1e1e1;\n  border-right: 1px solid #e1e1e1;\n}\n.home .middle .middle-right .into-singer .is-header {\n  margin: 0 20px;\n  height: 40px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          align-items: center;\n  border-bottom: 1px solid #ccc;\n  font-size: 0.8rem;\n}\n.home .middle .middle-right .into-singer .is-header span:nth-child(1) {\n  font-weight: bold;\n  color: #222;\n}\n.home .middle .middle-right .into-singer .is-header span:nth-child(2) {\n  color: #666;\n}\n.home .middle .middle-right .into-singer .into-list {\n  margin: 0 20px;\n}\n.home .middle .middle-right .into-singer .into-list .inot-item {\n  margin-top: 20px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  background-color: #f4f4f4;\n  border: 1px solid #e1e1e1;\n}\n.home .middle .middle-right .into-singer .into-list .inot-item img {\n  width: 62px;\n  height: 62px;\n  margin-right: 10px;\n  cursor: pointer;\n}\n.home .middle .middle-right .into-singer .into-list .inot-item .singer-info {\n  -webkit-box-flex: 1;\n          flex: 1;\n}\n.home .middle .middle-right .into-singer .into-list .inot-item .singer-info p {\n  height: 31px;\n  line-height: 31px;\n  margin: 0;\n  padding: 0 5px;\n  width: 100px;\n  cursor: pointer;\n}\n.home .middle .middle-right .into-singer .into-list .inot-item .singer-info p:hover {\n  -webkit-text-decoration-color: #000;\n          text-decoration-color: #000;\n  -webkit-text-decoration-line: underline;\n          text-decoration-line: underline;\n  -webkit-text-decoration-style: solid;\n          text-decoration-style: solid;\n}\n.home .middle .middle-right .into-singer .into-list .inot-item .singer-info .singer-name {\n  font-size: 0.9rem;\n  color: #333;\n  font-weight: bold;\n}\n.home .middle .middle-right .into-singer .into-list .inot-item .singer-info .singer-num {\n  font-size: 0.8rem;\n  color: #666;\n}\n.home .middle .middle-right .into-singer .apply-artist {\n  margin: 20px;\n  padding: 8px 0;\n  text-align: center;\n  color: #222;\n  font-size: 0.8rem;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zbWFsbHppcC9EZXNrdG9wL2FuZ3VsYXIvd2FuZ3lpeXVuLW11c2ljL3NyYy9hcHAvcGFnZXMvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7QUNDRjtBREFFO0VBQ0UsYUFBQTtFQUNBLGNBQUE7QUNFSjtBRERJO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtBQ0dOO0FEQUk7RUFDRSxhQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNFTjtBRENNO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0NBQUE7RUFDQSw0QkFBQTtFQUNBLHlDQUFBO1VBQUEsaUNBQUE7RUFDQSw2QkFBQTtVQUFBLHFCQUFBO0FDQ1I7QURHTTtFQUNFLFdBQUE7QUNEUjtBRE1FO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUNKSjtBRE9JO0VBQ0UsWUFBQTtFQUNBLHNCQUFBO0FDTE47QURPTTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQ0FBQTtBQ0xSO0FET1E7RUFDRSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDTFY7QURRUTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDTlY7QURTUTtFQUNFLG1CQUFBO1VBQUEsT0FBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ1BWO0FEWU07RUFDRSxnQkFBQTtBQ1ZSO0FEWVE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxlQUFBO0FDVlY7QURZVTtFQUNFLHVCQUFBO0VBQ0Esd0JBQUE7QUNWWjtBRFlZO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxzQkFBQTtVQUFBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtBQ1ZkO0FEWWM7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQ0FBQTtVQUFBLDBCQUFBO0FDVmhCO0FEWWdCO0VBQ0UsV0FBQTtBQ1ZsQjtBRGVZO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUNiZDtBRGdCWTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHFCQUFBO1VBQUEseUJBQUE7RUFDQSxzQkFBQTtVQUFBLHFCQUFBO0VBQ0Esc0JBQUE7QUNkZDtBRGdCYztFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQ2RoQjtBRGlCWTtFQUNFLGNBQUE7QUNmZDtBRGtCWTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7QUNoQmQ7QURrQmM7RUFDRSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDaEJoQjtBRG1CWTtFQUNFLFdBQUE7QUNqQmQ7QURtQlk7RUFDRSxXQUFBO0FDakJkO0FEd0JNO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDdEJSO0FEd0JRO0VBQ0UsMkJBQUE7QUN0QlY7QUR5QlE7RUFDRSxtQkFBQTtVQUFBLE9BQUE7RUFDQSxlQUFBO0FDdkJWO0FEeUJVO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0FDdkJaO0FEeUJZO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUN2QmQ7QUQwQlk7RUFDRSxlQUFBO0FDeEJkO0FEeUJjO0VBQ0UsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQ3ZCaEI7QUQwQmM7RUFDRSxlQUFBO0VBQ0EsV0FBQTtBQ3hCaEI7QUQ4Qlk7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQzVCZDtBRCtCZ0I7O0VBRUUsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUM3QmxCO0FEZ0NnQjtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUM5QmxCO0FEaUNnQjtFQUNFLGVBQUE7RUFDQSxXQUFBO0FDL0JsQjtBRG1DYztFQUNFLG1CQUFBO1VBQUEsT0FBQTtBQ2pDaEI7QURvQ2M7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FDbENoQjtBRHNDWTtFQUNFLGNBQUE7QUNwQ2Q7QUQyQ0k7RUFDRSxtQkFBQTtVQUFBLE9BQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7QUN6Q047QUQ0Q007RUFDRSxpQkFBQTtFQUNBLDhCQUFBO0VBQ0EsK0JBQUE7QUMxQ1I7QUQ0Q1E7RUFDRSxjQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxpQkFBQTtBQzFDVjtBRDZDUTtFQUNFLGlCQUFBO0VBQ0EsV0FBQTtBQzNDVjtBRDhDUTtFQUNFLFdBQUE7QUM1Q1Y7QUQrQ1E7RUFDRSxjQUFBO0FDN0NWO0FEK0NVO0VBQ0UsZ0JBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtBQzdDWjtBRCtDWTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDN0NkO0FEZ0RZO0VBQ0UsbUJBQUE7VUFBQSxPQUFBO0FDOUNkO0FEZ0RjO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsU0FBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQzlDaEI7QURpRGM7RUFDRSxtQ0FBQTtVQUFBLDJCQUFBO0VBQ0EsdUNBQUE7VUFBQSwrQkFBQTtFQUNBLG9DQUFBO1VBQUEsNEJBQUE7QUMvQ2hCO0FEa0RjO0VBQ0UsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUNoRGhCO0FEbURjO0VBQ0UsaUJBQUE7RUFDQSxXQUFBO0FDakRoQjtBRHVEUTtFQUNFLFlBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ3JEViIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhvbWUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XHJcbiAgLmJhbm5lciB7XHJcbiAgICBoZWlnaHQ6IDM1MHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBbbnotY2Fyb3VzZWwtY29udGVudF0ge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjMzY0ZDc5O1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgfVxyXG5cclxuICAgIC5jYXJvdXNlbC1pdGVtIHtcclxuICAgICAgaGVpZ2h0OiAzNTBweDtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAvLyDog4zmma/mr5vnjrvnkoNcclxuICAgICAgLmNhcm91c2VsLWJnIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAzNTBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICBmaWx0ZXI6IGNvbnRyYXN0KDEwMCUpIGJsdXIoMzBweCk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xyXG4gICAgICAgIC8vIHotaW5kZXg6IDEwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpbWcge1xyXG4gICAgICAgIHotaW5kZXg6IDIwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAubWlkZGxlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB3aWR0aDogOTgwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuXHJcbiAgICAvLyDng63pl6hcclxuICAgIC5ob3Qge1xyXG4gICAgICB3aWR0aDogNzMwcHg7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcblxyXG4gICAgICAuaG90LWhlYWRlciB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbjogMCAyMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDMwcHggMCAxMHB4IDA7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNjZTFmMDg7XHJcblxyXG4gICAgICAgIC5ob3QtdGl0bGUtZmlyc3Qge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgICAgICBjb2xvcjogIzIyMjtcclxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5ob3QtdGl0bGUge1xyXG4gICAgICAgICAgcGFkZGluZzogMCAxMHB4O1xyXG4gICAgICAgICAgZm9udC1zaXplOiAwLjkycmVtO1xyXG4gICAgICAgICAgY29sb3I6ICM2NjY7XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuaG90LW1vcmUge1xyXG4gICAgICAgICAgZmxleDogMTtcclxuICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgICAgY29sb3I6ICM2NjY7XHJcbiAgICAgICAgICBmb250LXNpemU6IDAuOTJyZW07XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyDmrYzljZVcclxuICAgICAgLnNpbmdlci11bml0IHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG5cclxuICAgICAgICAuc3UtbGlzdCB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG5cclxuICAgICAgICAgIC5zdS1pdGVtIHtcclxuICAgICAgICAgICAgd2lkdGg6IGNhbGMoMjUlIC0gNDBweCk7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCAyMHB4IDMwcHggMjBweDtcclxuXHJcbiAgICAgICAgICAgIC5mYW5zIHtcclxuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDE0MHB4O1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuXHJcbiAgICAgICAgICAgICAgZGl2IHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2NjYztcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcclxuICAgICAgICAgICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigycHgpO1xyXG5cclxuICAgICAgICAgICAgICAgIC5pY29uLXphbnRpbmc6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5zdS1uYW1lIHtcclxuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuYWxidW0taW1nIHtcclxuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDE0MHB4O1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDAgMTBweCAxMHB4IDA7XHJcblxyXG4gICAgICAgICAgICAgIGkge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZWVlO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuYWxidW0taW1nOmhvdmVyIGkge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuYWktZGVzYyB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcclxuXHJcbiAgICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDAgNXB4IDA7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5haS1kZXNjIHA6bnRoLWNoaWxkKDEpIHtcclxuICAgICAgICAgICAgICBjb2xvcjogIzIyMjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuYWktZGVzYyBwOm50aC1jaGlsZCgyKSB7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICM5OTk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIOamnOWNlVxyXG4gICAgICAucGxheWxpc3Qge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICBwYWRkaW5nOiAwIDEwcHg7XHJcblxyXG4gICAgICAgIC5wdC1ib3JkZXIge1xyXG4gICAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnBsYXlsaXN0LXRvcCB7XHJcbiAgICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgICAgcGFkZGluZzogMCAxMHB4O1xyXG5cclxuICAgICAgICAgIC5wdC1oZWFkZXIge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICB3aWR0aDogODBweDtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5wdC10aXRsZSB7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMCAxMHB4O1xyXG4gICAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIHA6bnRoLWNoaWxkKDIpIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjOTk5O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5wdC1saXN0IHtcclxuICAgICAgICAgICAgLnB0LWl0ZW0ge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICAgICAgICAgIGRpdiB7XHJcbiAgICAgICAgICAgICAgICBzcGFuLFxyXG4gICAgICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICBjb2xvcjogIzQ0NDtcclxuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCAwIDAgMTBweDtcclxuICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IDE2MHB4O1xyXG4gICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpIHtcclxuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgICBjb2xvcjogIzY2NjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIGRpdjpudGgtY2hpbGQoMSkge1xyXG4gICAgICAgICAgICAgICAgZmxleDogMTtcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIGRpdjpudGgtY2hpbGQoMikge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgICAgIHotaW5kZXg6IDE1O1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDQ1cHg7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAucHQtaXRlbTpob3ZlciAucHQtaXRlbS1wbGF5ZXIge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLm1pZGRsZS1yaWdodCB7XHJcbiAgICAgIGZsZXg6IDE7XHJcbiAgICAgIHdpZHRoOiAyNTBweDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuXHJcbiAgICAgIC8vIOWFpempu+atjOaJi1xyXG4gICAgICAuaW50by1zaW5nZXIge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2UxZTFlMTtcclxuICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZTFlMWUxO1xyXG5cclxuICAgICAgICAuaXMtaGVhZGVyIHtcclxuICAgICAgICAgIG1hcmdpbjogMCAyMHB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmlzLWhlYWRlciBzcGFuOm50aC1jaGlsZCgxKSB7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgIGNvbG9yOiAjMjIyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmlzLWhlYWRlciBzcGFuOm50aC1jaGlsZCgyKSB7XHJcbiAgICAgICAgICBjb2xvcjogIzY2NjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5pbnRvLWxpc3Qge1xyXG4gICAgICAgICAgbWFyZ2luOiAwIDIwcHg7XHJcblxyXG4gICAgICAgICAgLmlub3QtaXRlbSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNGY0ZjQ7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlMWUxZTE7XHJcblxyXG4gICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiA2MnB4O1xyXG4gICAgICAgICAgICAgIGhlaWdodDogNjJweDtcclxuICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuc2luZ2VyLWluZm8ge1xyXG4gICAgICAgICAgICAgIGZsZXg6IDE7XHJcblxyXG4gICAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzMXB4O1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDMxcHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDVweDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIHA6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiAjMDAwO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uLWxpbmU6IHVuZGVybGluZTtcclxuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbi1zdHlsZTogc29saWQ7XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAuc2luZ2VyLW5hbWUge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzMzMztcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgLnNpbmdlci1udW0ge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzY2NjtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5hcHBseS1hcnRpc3Qge1xyXG4gICAgICAgICAgbWFyZ2luOiAyMHB4O1xyXG4gICAgICAgICAgcGFkZGluZzogOHB4IDA7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICBjb2xvcjogIzIyMjtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLmhvbWUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xufVxuLmhvbWUgLmJhbm5lciB7XG4gIGhlaWdodDogMzUwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuLmhvbWUgLmJhbm5lciBbbnotY2Fyb3VzZWwtY29udGVudF0ge1xuICBiYWNrZ3JvdW5kOiAjMzY0ZDc5O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmhvbWUgLmJhbm5lciAuY2Fyb3VzZWwtaXRlbSB7XG4gIGhlaWdodDogMzUwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmhvbWUgLmJhbm5lciAuY2Fyb3VzZWwtaXRlbSAuY2Fyb3VzZWwtYmcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDM1MHB4O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBmaWx0ZXI6IGNvbnRyYXN0KDEwMCUpIGJsdXIoMzBweCk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS41KTtcbn1cbi5ob21lIC5iYW5uZXIgLmNhcm91c2VsLWl0ZW0gaW1nIHtcbiAgei1pbmRleDogMjA7XG59XG4uaG9tZSAubWlkZGxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDk4MHB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cbi5ob21lIC5taWRkbGUgLmhvdCB7XG4gIHdpZHRoOiA3MzBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cbi5ob21lIC5taWRkbGUgLmhvdCAuaG90LWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogMCAyMHB4O1xuICBwYWRkaW5nOiAzMHB4IDAgMTBweCAwO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2NlMWYwODtcbn1cbi5ob21lIC5taWRkbGUgLmhvdCAuaG90LWhlYWRlciAuaG90LXRpdGxlLWZpcnN0IHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGNvbG9yOiAjMjIyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uaG9tZSAubWlkZGxlIC5ob3QgLmhvdC1oZWFkZXIgLmhvdC10aXRsZSB7XG4gIHBhZGRpbmc6IDAgMTBweDtcbiAgZm9udC1zaXplOiAwLjkycmVtO1xuICBjb2xvcjogIzY2NjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmhvbWUgLm1pZGRsZSAuaG90IC5ob3QtaGVhZGVyIC5ob3QtbW9yZSB7XG4gIGZsZXg6IDE7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBjb2xvcjogIzY2NjtcbiAgZm9udC1zaXplOiAwLjkycmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uaG9tZSAubWlkZGxlIC5ob3QgLnNpbmdlci11bml0IHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cbi5ob21lIC5taWRkbGUgLmhvdCAuc2luZ2VyLXVuaXQgLnN1LWxpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG4uaG9tZSAubWlkZGxlIC5ob3QgLnNpbmdlci11bml0IC5zdS1saXN0IC5zdS1pdGVtIHtcbiAgd2lkdGg6IGNhbGMoMjUlIC0gNDBweCk7XG4gIG1hcmdpbjogMCAyMHB4IDMwcHggMjBweDtcbn1cbi5ob21lIC5taWRkbGUgLmhvdCAuc2luZ2VyLXVuaXQgLnN1LWxpc3QgLnN1LWl0ZW0gLmZhbnMge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxNDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuLmhvbWUgLm1pZGRsZSAuaG90IC5zaW5nZXItdW5pdCAuc3UtbGlzdCAuc3UtaXRlbSAuZmFucyBkaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIGNvbG9yOiAjY2NjO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigycHgpO1xufVxuLmhvbWUgLm1pZGRsZSAuaG90IC5zaW5nZXItdW5pdCAuc3UtbGlzdCAuc3UtaXRlbSAuZmFucyBkaXYgLmljb24temFudGluZzpob3ZlciB7XG4gIGNvbG9yOiAjZmZmO1xufVxuLmhvbWUgLm1pZGRsZSAuaG90IC5zaW5nZXItdW5pdCAuc3UtbGlzdCAuc3UtaXRlbSAuc3UtbmFtZSB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBjb2xvcjogIzMzMztcbn1cbi5ob21lIC5taWRkbGUgLmhvdCAuc2luZ2VyLXVuaXQgLnN1LWxpc3QgLnN1LWl0ZW0gLmFsYnVtLWltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDE0MHB4O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIHBhZGRpbmc6IDAgMTBweCAxMHB4IDA7XG59XG4uaG9tZSAubWlkZGxlIC5ob3QgLnNpbmdlci11bml0IC5zdS1saXN0IC5zdS1pdGVtIC5hbGJ1bS1pbWcgaSB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgY29sb3I6ICNlZWU7XG59XG4uaG9tZSAubWlkZGxlIC5ob3QgLnNpbmdlci11bml0IC5zdS1saXN0IC5zdS1pdGVtIC5hbGJ1bS1pbWc6aG92ZXIgaSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLmhvbWUgLm1pZGRsZSAuaG90IC5zaW5nZXItdW5pdCAuc3UtbGlzdCAuc3UtaXRlbSAuYWktZGVzYyB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xufVxuLmhvbWUgLm1pZGRsZSAuaG90IC5zaW5nZXItdW5pdCAuc3UtbGlzdCAuc3UtaXRlbSAuYWktZGVzYyBwIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwIDAgNXB4IDA7XG4gIHdpZHRoOiAxMDBweDtcbn1cbi5ob21lIC5taWRkbGUgLmhvdCAuc2luZ2VyLXVuaXQgLnN1LWxpc3QgLnN1LWl0ZW0gLmFpLWRlc2MgcDpudGgtY2hpbGQoMSkge1xuICBjb2xvcjogIzIyMjtcbn1cbi5ob21lIC5taWRkbGUgLmhvdCAuc2luZ2VyLXVuaXQgLnN1LWxpc3QgLnN1LWl0ZW0gLmFpLWRlc2MgcDpudGgtY2hpbGQoMikge1xuICBjb2xvcjogIzk5OTtcbn1cbi5ob21lIC5taWRkbGUgLmhvdCAucGxheWxpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBwYWRkaW5nOiAwIDEwcHg7XG59XG4uaG9tZSAubWlkZGxlIC5ob3QgLnBsYXlsaXN0IC5wdC1ib3JkZXIge1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNjY2M7XG59XG4uaG9tZSAubWlkZGxlIC5ob3QgLnBsYXlsaXN0IC5wbGF5bGlzdC10b3Age1xuICBmbGV4OiAxO1xuICBwYWRkaW5nOiAwIDEwcHg7XG59XG4uaG9tZSAubWlkZGxlIC5ob3QgLnBsYXlsaXN0IC5wbGF5bGlzdC10b3AgLnB0LWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uaG9tZSAubWlkZGxlIC5ob3QgLnBsYXlsaXN0IC5wbGF5bGlzdC10b3AgLnB0LWhlYWRlciBpbWcge1xuICB3aWR0aDogODBweDtcbiAgaGVpZ2h0OiA4MHB4O1xufVxuLmhvbWUgLm1pZGRsZSAuaG90IC5wbGF5bGlzdCAucGxheWxpc3QtdG9wIC5wdC1oZWFkZXIgLnB0LXRpdGxlIHtcbiAgcGFkZGluZzogMCAxMHB4O1xufVxuLmhvbWUgLm1pZGRsZSAuaG90IC5wbGF5bGlzdCAucGxheWxpc3QtdG9wIC5wdC1oZWFkZXIgLnB0LXRpdGxlIHAge1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgY29sb3I6ICMwMDA7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG4uaG9tZSAubWlkZGxlIC5ob3QgLnBsYXlsaXN0IC5wbGF5bGlzdC10b3AgLnB0LWhlYWRlciAucHQtdGl0bGUgcDpudGgtY2hpbGQoMikge1xuICBmb250LXNpemU6IDMwcHg7XG4gIGNvbG9yOiAjOTk5O1xufVxuLmhvbWUgLm1pZGRsZSAuaG90IC5wbGF5bGlzdCAucGxheWxpc3QtdG9wIC5wdC1saXN0IC5wdC1pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBoZWlnaHQ6IDQwcHg7XG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uaG9tZSAubWlkZGxlIC5ob3QgLnBsYXlsaXN0IC5wbGF5bGlzdC10b3AgLnB0LWxpc3QgLnB0LWl0ZW0gZGl2IHNwYW4sXG4uaG9tZSAubWlkZGxlIC5ob3QgLnBsYXlsaXN0IC5wbGF5bGlzdC10b3AgLnB0LWxpc3QgLnB0LWl0ZW0gZGl2IHAge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgY29sb3I6ICM0NDQ7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xufVxuLmhvbWUgLm1pZGRsZSAuaG90IC5wbGF5bGlzdCAucGxheWxpc3QtdG9wIC5wdC1saXN0IC5wdC1pdGVtIGRpdiBwIHtcbiAgbWFyZ2luOiAwIDAgMCAxMHB4O1xuICBwYWRkaW5nOiAwO1xuICB3aWR0aDogMTYwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuLmhvbWUgLm1pZGRsZSAuaG90IC5wbGF5bGlzdCAucGxheWxpc3QtdG9wIC5wdC1saXN0IC5wdC1pdGVtIGRpdiBpIHtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBjb2xvcjogIzY2Njtcbn1cbi5ob21lIC5taWRkbGUgLmhvdCAucGxheWxpc3QgLnBsYXlsaXN0LXRvcCAucHQtbGlzdCAucHQtaXRlbSBkaXY6bnRoLWNoaWxkKDEpIHtcbiAgZmxleDogMTtcbn1cbi5ob21lIC5taWRkbGUgLmhvdCAucGxheWxpc3QgLnBsYXlsaXN0LXRvcCAucHQtbGlzdCAucHQtaXRlbSBkaXY6bnRoLWNoaWxkKDIpIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgei1pbmRleDogMTU7XG4gIGxpbmUtaGVpZ2h0OiA0NXB4O1xufVxuLmhvbWUgLm1pZGRsZSAuaG90IC5wbGF5bGlzdCAucGxheWxpc3QtdG9wIC5wdC1saXN0IC5wdC1pdGVtOmhvdmVyIC5wdC1pdGVtLXBsYXllciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLmhvbWUgLm1pZGRsZSAubWlkZGxlLXJpZ2h0IHtcbiAgZmxleDogMTtcbiAgd2lkdGg6IDI1MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuLmhvbWUgLm1pZGRsZSAubWlkZGxlLXJpZ2h0IC5pbnRvLXNpbmdlciB7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNlMWUxZTE7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlMWUxZTE7XG59XG4uaG9tZSAubWlkZGxlIC5taWRkbGUtcmlnaHQgLmludG8tc2luZ2VyIC5pcy1oZWFkZXIge1xuICBtYXJnaW46IDAgMjBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xuICBmb250LXNpemU6IDAuOHJlbTtcbn1cbi5ob21lIC5taWRkbGUgLm1pZGRsZS1yaWdodCAuaW50by1zaW5nZXIgLmlzLWhlYWRlciBzcGFuOm50aC1jaGlsZCgxKSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzIyMjtcbn1cbi5ob21lIC5taWRkbGUgLm1pZGRsZS1yaWdodCAuaW50by1zaW5nZXIgLmlzLWhlYWRlciBzcGFuOm50aC1jaGlsZCgyKSB7XG4gIGNvbG9yOiAjNjY2O1xufVxuLmhvbWUgLm1pZGRsZSAubWlkZGxlLXJpZ2h0IC5pbnRvLXNpbmdlciAuaW50by1saXN0IHtcbiAgbWFyZ2luOiAwIDIwcHg7XG59XG4uaG9tZSAubWlkZGxlIC5taWRkbGUtcmlnaHQgLmludG8tc2luZ2VyIC5pbnRvLWxpc3QgLmlub3QtaXRlbSB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNGY0ZjQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlMWUxZTE7XG59XG4uaG9tZSAubWlkZGxlIC5taWRkbGUtcmlnaHQgLmludG8tc2luZ2VyIC5pbnRvLWxpc3QgLmlub3QtaXRlbSBpbWcge1xuICB3aWR0aDogNjJweDtcbiAgaGVpZ2h0OiA2MnB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5ob21lIC5taWRkbGUgLm1pZGRsZS1yaWdodCAuaW50by1zaW5nZXIgLmludG8tbGlzdCAuaW5vdC1pdGVtIC5zaW5nZXItaW5mbyB7XG4gIGZsZXg6IDE7XG59XG4uaG9tZSAubWlkZGxlIC5taWRkbGUtcmlnaHQgLmludG8tc2luZ2VyIC5pbnRvLWxpc3QgLmlub3QtaXRlbSAuc2luZ2VyLWluZm8gcCB7XG4gIGhlaWdodDogMzFweDtcbiAgbGluZS1oZWlnaHQ6IDMxcHg7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMCA1cHg7XG4gIHdpZHRoOiAxMDBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmhvbWUgLm1pZGRsZSAubWlkZGxlLXJpZ2h0IC5pbnRvLXNpbmdlciAuaW50by1saXN0IC5pbm90LWl0ZW0gLnNpbmdlci1pbmZvIHA6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb24tY29sb3I6ICMwMDA7XG4gIHRleHQtZGVjb3JhdGlvbi1saW5lOiB1bmRlcmxpbmU7XG4gIHRleHQtZGVjb3JhdGlvbi1zdHlsZTogc29saWQ7XG59XG4uaG9tZSAubWlkZGxlIC5taWRkbGUtcmlnaHQgLmludG8tc2luZ2VyIC5pbnRvLWxpc3QgLmlub3QtaXRlbSAuc2luZ2VyLWluZm8gLnNpbmdlci1uYW1lIHtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIGNvbG9yOiAjMzMzO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5ob21lIC5taWRkbGUgLm1pZGRsZS1yaWdodCAuaW50by1zaW5nZXIgLmludG8tbGlzdCAuaW5vdC1pdGVtIC5zaW5nZXItaW5mbyAuc2luZ2VyLW51bSB7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBjb2xvcjogIzY2Njtcbn1cbi5ob21lIC5taWRkbGUgLm1pZGRsZS1yaWdodCAuaW50by1zaW5nZXIgLmFwcGx5LWFydGlzdCB7XG4gIG1hcmdpbjogMjBweDtcbiAgcGFkZGluZzogOHB4IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICMyMjI7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/components/home/home.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/components/home/home.component.ts ***!
  \*********************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/service.service */ "./src/app/services/service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var HomeComponent = /** @class */ (function () {
    function HomeComponent(service, router) {
        this.service = service;
        this.router = router;
        this.banners = []; // 轮播图
        this.playlistType = [
            {
                img: './assets/images/top.jpg',
                name: '云音乐飙升榜',
                data: [],
            },
            {
                img: './assets/images/new.jpg',
                name: '云音乐新歌榜',
                data: [],
            },
            {
                img: './assets/images/create.jpg',
                name: '网易云原创音乐榜',
                data: [],
            },
        ];
        this.loadingRank = true; // 榜单加载
        this.loadingPlaylist = true; // 歌单加载
        this.loadingAlbum = true; // 专辑加载
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.getBanner();
        this.getHotTags();
        this.getPersonalSheetList();
        this.getArtistList();
        this.getAlbumNewest();
        this.getTopListDj();
        this.getTopPlaylist(0);
        this.getTopPlaylist(2);
        this.getTopPlaylist(3);
    };
    // 获取轮播图
    HomeComponent.prototype.getBanner = function () {
        var _this = this;
        this.service.home.getBanners().subscribe(function (banners) {
            _this.banners = banners;
        });
    };
    // 获取热门歌单标签
    HomeComponent.prototype.getHotTags = function () {
        var _this = this;
        this.service.sheet.getHotTags().subscribe(function (tags) {
            _this.hotTags = tags.filter(function (e, i) { return i < 5; });
        });
    };
    // 获取推荐歌单
    HomeComponent.prototype.getPersonalSheetList = function () {
        var _this = this;
        this.service.sheet.getPersonalSheetList().subscribe(function (result) {
            _this.personalized = result.filter(function (e, i) { return i < 8; });
            _this.loadingPlaylist = false;
        });
    };
    // 获取歌单列表
    HomeComponent.prototype.topPlaylist = function (cat, limit) {
        var _this = this;
        if (cat === void 0) { cat = '全部'; }
        if (limit === void 0) { limit = 8; }
        this.loadingPlaylist = true;
        this.service.sheet.topPlaylist({ order: 'hot', limit: limit, cat: cat }).subscribe(function (res) {
            console.log("获取歌单列表:", res);
            res.playlists = res.playlists.map(function (e) {
                e.picUrl = e.coverImgUrl;
                return e;
            });
            _this.personalized = res.playlists;
            _this.loadingPlaylist = false;
        });
    };
    // 入驻歌手
    HomeComponent.prototype.getArtistList = function () {
        var _this = this;
        this.service.home.getArtistList().subscribe(function (artist) {
            console.log("artist:", artist);
            _this.artistList = artist.filter(function (item, index) { return index < 5; });
        });
    };
    // 获取最新专辑
    HomeComponent.prototype.getAlbumNewest = function () {
        var _this = this;
        this.service.album.getAlbumNewest().subscribe(function (albums) {
            _this.albumNewest = albums.filter(function (item, index) { return index < 8; });
            _this.loadingAlbum = false;
        });
    };
    // 电台 - 新晋电台榜/热门电台榜
    HomeComponent.prototype.getTopListDj = function () {
        var _this = this;
        this.service.home.getTopListDj().subscribe(function (toplist) {
            _this.toplistDj = toplist.filter(function (item, index) { return index < 5; });
        });
    };
    // 排行榜
    HomeComponent.prototype.getTopPlaylist = function (idx) {
        var _this = this;
        this.service.home.getTopPlaylist({ idx: idx }).subscribe(function (playlist) {
            playlist = playlist.filter(function (item, index) { return index < 10; });
            switch (idx) {
                case 0:
                    _this.playlistType[1].data = playlist;
                    break;
                case 2:
                    _this.playlistType[2].data = playlist;
                    break;
                default:
                    _this.playlistType[0].data = playlist;
                    break;
            }
            _this.loadingRank = false;
        });
    };
    // 播放单曲
    HomeComponent.prototype.playSong = function (item) {
        var temp = item;
        this.setSong(item.id, item.name, temp.dt, temp.ar[0].name, temp.al.picUrl);
    };
    HomeComponent.prototype.setSong = function (id, name, size, artist, picUrl) {
        var _this = this;
        // 获取播放连接
        this.service.song.getSongUrl(id).subscribe(function (song) {
            _this.service.player.song = {
                id: id,
                name: name,
                url: song.url,
                size: size,
                artist: artist,
                picUrl: picUrl,
            };
            var list = _this.service.player.songList;
            if (!list.find(function (e) { return e.id == id; })) {
                _this.service.player.songList.push(_this.service.player.song);
            }
            // 获取歌词
            _this.service.song.getLyric(id).subscribe(function (lyric) {
                _this.service.player.song.lyric = lyric;
            });
        });
        // 开始播放歌曲
        this.service.player.start = true;
    };
    HomeComponent.prototype.onSelectChange = function (e) {
    };
    // 
    HomeComponent.prototype.selectBannerItem = function (item, index) {
        if (item.targetId != 0) {
            this.jumpPage('album', item.targetId);
        }
        else {
            window.open(item.url);
        }
    };
    // 播放歌单
    HomeComponent.prototype.playSheet = function (item) {
        var _this = this;
        this.service.sheet.getSheetList(item.id).subscribe(function (res) {
            _this.service.player.songList = [];
            res.forEach(function (e) {
                _this.service.player.songList.push({
                    id: e.id,
                    name: e.name,
                    url: '.',
                    size: e.dt,
                    artist: e.ar[0].name,
                    picUrl: e.al.picUrl,
                });
            });
            if (res.length > 0) {
                var item_1 = res[0];
                _this.setSong(item_1.id, item_1.name, item_1.dt, item_1.ar[0].name, item_1.al.picUrl);
            }
        });
    };
    // 播放专辑
    HomeComponent.prototype.playAlbum = function (item) {
        var _this = this;
        this.service.album.getAlbumList(item.id).subscribe(function (album) {
            console.log("album", album);
            _this.service.player.songList = [];
            album.forEach(function (e) {
                _this.service.player.songList.push({
                    id: e.id,
                    name: e.name,
                    url: '.',
                    size: e.dt,
                    artist: e.ar[0].name,
                    picUrl: e.al.picUrl,
                });
            });
            if (album.length > 0) {
                var item_2 = album[0];
                _this.setSong(item_2.id, item_2.name, item_2.dt, item_2.ar[0].name, item_2.al.picUrl);
            }
        });
    };
    // 跳转到播放列表
    HomeComponent.prototype.toPlaylist = function (item) {
        this.jumpPage('playlist', item.id);
    };
    // 跳转到用户页面
    HomeComponent.prototype.toUser = function (item) {
        this.jumpPage('user', item.id);
    };
    // 跳转到专辑页面
    HomeComponent.prototype.toAlbum = function (item) {
        this.jumpPage('album', item.id);
    };
    // 跳转页面
    HomeComponent.prototype.jumpPage = function (router, id) {
        this.router.navigate([router], { queryParams: { id: id } });
    };
    // 跳转歌曲详情
    HomeComponent.prototype.toSong = function (item) {
        this.jumpPage('song', item.id);
    };
    // 跳转到艺人页面
    HomeComponent.prototype.jumpAritst = function (item, index) {
        this.router.navigate(['artist'], { queryParams: { id: item.id, index: index } });
    };
    // 跳转到用户页面
    HomeComponent.prototype.jumpUser = function (item) {
        this.router.navigate(['user'], { queryParams: { id: item.accountId } });
    };
    // 跳转到歌单列表
    HomeComponent.prototype.jumpPlaylist = function () {
        this.router.navigate(['navPlaylist'], { queryParams: { nav: 2 } });
    };
    // 跳转到新碟上架页面
    HomeComponent.prototype.jumpAlbum = function () {
        this.router.navigate(['navAlbum'], { queryParams: { nav: 5 } });
    };
    // 跳转到榜单页面
    HomeComponent.prototype.jumpRank = function () {
        this.router.navigate(['navRank'], { queryParams: { nav: 1 } });
    };
    // 跳转到歌手页面
    HomeComponent.prototype.jumpSinger = function () {
        this.router.navigate(['navSinger'], { queryParams: { nav: 4 } });
    };
    HomeComponent.ctorParameters = function () { return [
        { type: src_app_services_service_service__WEBPACK_IMPORTED_MODULE_2__["ServiceService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/home/home.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.scss */ "./src/app/pages/components/home/home.component.scss")).default]
        })
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/pages/components/login/login.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/components/login/login.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".dialog {\n  background: #999;\n  width: 200px;\n  padding: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zbWFsbHppcC9EZXNrdG9wL2FuZ3VsYXIvd2FuZ3lpeXVuLW11c2ljL3NyYy9hcHAvcGFnZXMvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGlhbG9nIHtcclxuICBiYWNrZ3JvdW5kOiAjOTk5O1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcbiIsIi5kaWFsb2cge1xuICBiYWNrZ3JvdW5kOiAjOTk5O1xuICB3aWR0aDogMjAwcHg7XG4gIHBhZGRpbmc6IDIwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/components/login/login.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/components/login/login.component.ts ***!
  \***********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    // 提交
    LoginComponent.prototype.submit = function () {
        alert('提交');
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/login/login.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.scss */ "./src/app/pages/components/login/login.component.scss")).default]
        })
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/pages/components/mv/mv/mv.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/pages/components/mv/mv/mv.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbXBvbmVudHMvbXYvbXYvbXYuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/components/mv/mv/mv.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/components/mv/mv/mv.component.ts ***!
  \********************************************************/
/*! exports provided: MvComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MvComponent", function() { return MvComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MvComponent = /** @class */ (function () {
    function MvComponent() {
    }
    MvComponent.prototype.ngOnInit = function () {
    };
    MvComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mv',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./mv.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/mv/mv/mv.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./mv.component.scss */ "./src/app/pages/components/mv/mv/mv.component.scss")).default]
        })
    ], MvComponent);
    return MvComponent;
}());



/***/ }),

/***/ "./src/app/pages/components/playlist/playlist/playlist.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/pages/components/playlist/playlist/playlist.component.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".playlist {\n  background-color: #f1f1f1;\n}\n.playlist .playlist-box {\n  width: 980px;\n  margin: 0 auto;\n  background-color: #fff;\n  border-left: 1px solid #eee;\n  border-right: 1px solid #eee;\n  padding: 0 20px;\n  display: -webkit-box;\n  display: flex;\n}\n.playlist .left {\n  -webkit-box-flex: 1;\n          flex: 1;\n}\n.playlist .right {\n  width: 250px;\n}\n.playlist .pl-header {\n  padding: 20px 0;\n}\n.playlist .pl-header .pl-header-box {\n  display: -webkit-box;\n  display: flex;\n}\n.playlist .pl-header .pl-header-img {\n  width: 208px;\n  height: 208px;\n}\n.playlist .pl-header .pl-header-right {\n  padding-left: 20px;\n}\n.playlist .pl-header .pl-header-right .pl-header-title {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.playlist .pl-header .pl-header-right .pl-header-title .pl-header-tag {\n  background: url('icon.png') no-repeat 0 9999px;\n  width: 54px;\n  height: 24px;\n  background-position: 0 -243px;\n  display: inline-block;\n  overflow: hidden;\n  margin-right: 10px;\n}\n.playlist .pl-header .pl-header-right .pl-header-create {\n  font-size: 0.9rem;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  margin-top: 15px;\n}\n.playlist .pl-header .pl-header-right .pl-header-create img {\n  width: 40px;\n  height: 40px;\n}\n.playlist .pl-header .pl-header-right .pl-header-create span {\n  margin-left: 20px;\n}\n.playlist .pl-header .pl-header-right .pl-header-create span:nth-child(2) {\n  color: #0c73c2;\n  cursor: pointer;\n}\n.playlist .pl-header .pl-header-right .pl-header-create span:nth-child(3) {\n  color: #666;\n}\n.playlist .pl-header .pl-header-right .album-header-tool {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  margin-top: 5px;\n  flex-wrap: wrap;\n}\n.playlist .pl-header .pl-header-right .album-header-tool div {\n  margin: 10px 10px 0 0;\n  padding: 5px 10px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  border: 1px solid #ccc;\n  background-color: #f4f4f4;\n  border-radius: 3px;\n  cursor: pointer;\n}\n.playlist .pl-header .pl-header-right .album-header-tool div span {\n  color: #444;\n  font-size: 0.9rem;\n  margin-left: 5px;\n}\n.playlist .pl-header .pl-header-right .album-header-tool div i {\n  font-size: 1.1rem;\n}\n.playlist .pl-header .pl-header-right .album-header-tool div:nth-child(1) {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  background-color: #3483cf;\n  color: #fff;\n}\n.playlist .pl-header .pl-header-right .album-header-tool div:nth-child(1) span {\n  color: #fff;\n}\n.playlist .pl-header .pl-header-right .pl-header-tags {\n  margin-top: 15px;\n  color: #666;\n  font-size: 0.9rem;\n  word-wrap: break-word;\n}\n.playlist .pl-header .pl-header-right .pl-header-tags .pl-header-tags-list {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  margin-bottom: 10px;\n}\n.playlist .pl-header .pl-header-right .pl-header-tags .pl-header-tags-list .pl-header-tag {\n  margin: 0 10px;\n  height: 1.5rem;\n  font-size: 0.8rem;\n  line-height: 1.5rem;\n  border-radius: 1.5rem;\n  padding: 0 10px;\n  border: 1px solid #ccc;\n}\n.playlist .pl-songlist .pl-songlist-header {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  border-bottom: 2px solid #ce1f08;\n  padding: 15px 0;\n}\n.playlist .pl-songlist .pl-songlist-header span {\n  color: #666;\n  font-size: 0.9rem;\n}\n.playlist .pl-songlist .pl-songlist-table td {\n  font-size: 0.9rem;\n  height: 57px;\n}\n.playlist .pl-songlist .pl-songlist-table td div:hover {\n  -webkit-text-decoration-style: solid;\n          text-decoration-style: solid;\n  -webkit-text-decoration-line: underline;\n          text-decoration-line: underline;\n  -webkit-text-decoration-color: #000;\n          text-decoration-color: #000;\n  cursor: pointer;\n}\n.playlist .pl-songlist .pl-songlist-table .td-name,\n.playlist .pl-songlist .pl-songlist-table .td-album,\n.playlist .pl-songlist .pl-songlist-table .td-artist {\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n.playlist .pl-songlist .pl-songlist-table .td-name {\n  width: 200px;\n}\n.playlist .pl-songlist .pl-songlist-table .td-artist {\n  width: 60px;\n}\n.playlist .pl-songlist .pl-songlist-table .td-album {\n  width: 150px;\n}\n.playlist .song-commend {\n  padding: 0 0 0 20px;\n}\n.playlist .song-commend .sc-header {\n  height: 50px;\n  line-height: 50px;\n  border-bottom: 1px solid #aaa;\n  color: #333;\n  font-weight: bold;\n}\n.playlist .song-commend .sc-incloud {\n  padding: 10px 0;\n}\n.playlist .song-commend .sc-incloud .sc-incloud-item {\n  margin: 10px 0;\n  display: -webkit-box;\n  display: flex;\n}\n.playlist .song-commend .sc-incloud .sc-incloud-item .sc-incloud-left {\n  width: 60px;\n}\n.playlist .song-commend .sc-incloud .sc-incloud-item .sc-incloud-right {\n  cursor: pointer;\n}\n.playlist .song-commend .sc-incloud .sc-incloud-item .sc-incloud-right div {\n  padding-left: 10px;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  width: 185px;\n}\n.playlist .song-commend .sc-incloud .sc-incloud-item .sc-incloud-right div:nth-child(1) {\n  color: #222;\n}\n.playlist .song-commend .sc-incloud .sc-incloud-item .sc-incloud-right div:nth-child(1):hover,\n.playlist .song-commend .sc-incloud .sc-incloud-item .sc-incloud-right div:nth-child(2):hover {\n  -webkit-text-decoration-line: underline;\n          text-decoration-line: underline;\n  -webkit-text-decoration-style: solid;\n          text-decoration-style: solid;\n  -webkit-text-decoration-color: #444;\n          text-decoration-color: #444;\n}\n.playlist .song-commend .sc-incloud .sc-incloud-item .sc-incloud-right div:nth-child(2) {\n  color: #666;\n  font-size: 0.8rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zbWFsbHppcC9EZXNrdG9wL2FuZ3VsYXIvd2FuZ3lpeXVuLW11c2ljL3NyYy9hcHAvcGFnZXMvY29tcG9uZW50cy9wbGF5bGlzdC9wbGF5bGlzdC9wbGF5bGlzdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvY29tcG9uZW50cy9wbGF5bGlzdC9wbGF5bGlzdC9wbGF5bGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0FDQ0Y7QURDRTtFQUNFLFlBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtBQ0NKO0FERUU7RUFDRSxtQkFBQTtVQUFBLE9BQUE7QUNBSjtBREdFO0VBQ0UsWUFBQTtBQ0RKO0FESUU7RUFDRSxlQUFBO0FDRko7QURJSTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtBQ0ZOO0FES0k7RUFDRSxZQUFBO0VBQ0EsYUFBQTtBQ0hOO0FETUk7RUFDRSxrQkFBQTtBQ0pOO0FET007RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDTFI7QURNUTtFQUNFLDhDQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0pWO0FEU007RUFDRSxpQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxnQkFBQTtBQ1BSO0FEUVE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ05WO0FEU1E7RUFDRSxpQkFBQTtBQ1BWO0FEVVE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtBQ1JWO0FEV1E7RUFDRSxXQUFBO0FDVFY7QURjTTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQ1pSO0FEY1E7RUFDRSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNaVjtBRGNVO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNaWjtBRGNVO0VBQ0UsaUJBQUE7QUNaWjtBRGdCUTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7QUNkVjtBRGVVO0VBQ0UsV0FBQTtBQ2JaO0FEbUJNO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtBQ2pCUjtBRG1CUTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxtQkFBQTtBQ2pCVjtBRG1CVTtFQUNFLGNBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0FDakJaO0FEMEJJO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7RUFDQSxnQ0FBQTtFQUNBLGVBQUE7QUN4Qk47QUQwQk07RUFDRSxXQUFBO0VBQ0EsaUJBQUE7QUN4QlI7QUQ0Qk07RUFDRSxpQkFBQTtFQUNBLFlBQUE7QUMxQlI7QUQ0QlE7RUFDRSxvQ0FBQTtVQUFBLDRCQUFBO0VBQ0EsdUNBQUE7VUFBQSwrQkFBQTtFQUNBLG1DQUFBO1VBQUEsMkJBQUE7RUFDQSxlQUFBO0FDMUJWO0FEOEJNOzs7RUFHRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUM1QlI7QUQrQk07RUFDRSxZQUFBO0FDN0JSO0FEZ0NNO0VBQ0UsV0FBQTtBQzlCUjtBRGlDTTtFQUNFLFlBQUE7QUMvQlI7QURxQ0U7RUFDRSxtQkFBQTtBQ25DSjtBRHFDSTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtFQUNBLDZCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FDbkNOO0FEc0NJO0VBQ0UsZUFBQTtBQ3BDTjtBRHNDTTtFQUNFLGNBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7QUNwQ1I7QURzQ1E7RUFDRSxXQUFBO0FDcENWO0FEdUNRO0VBQ0UsZUFBQTtBQ3JDVjtBRHVDVTtFQUNFLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ3JDWjtBRHdDVTtFQUNFLFdBQUE7QUN0Q1o7QUR5Q1U7O0VBRUUsdUNBQUE7VUFBQSwrQkFBQTtFQUNBLG9DQUFBO1VBQUEsNEJBQUE7RUFDQSxtQ0FBQTtVQUFBLDJCQUFBO0FDdkNaO0FEMENVO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0FDeENaIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY29tcG9uZW50cy9wbGF5bGlzdC9wbGF5bGlzdC9wbGF5bGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wbGF5bGlzdCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcclxuXHJcbiAgLnBsYXlsaXN0LWJveCB7XHJcbiAgICB3aWR0aDogOTgwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNlZWU7XHJcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZWVlO1xyXG4gICAgcGFkZGluZzogMCAyMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICB9XHJcblxyXG4gIC5sZWZ0IHtcclxuICAgIGZsZXg6IDE7XHJcbiAgfVxyXG5cclxuICAucmlnaHQge1xyXG4gICAgd2lkdGg6IDI1MHB4O1xyXG4gIH1cclxuXHJcbiAgLnBsLWhlYWRlciB7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDA7XHJcblxyXG4gICAgLnBsLWhlYWRlci1ib3gge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgfVxyXG5cclxuICAgIC5wbC1oZWFkZXItaW1nIHtcclxuICAgICAgd2lkdGg6IDIwOHB4O1xyXG4gICAgICBoZWlnaHQ6IDIwOHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5wbC1oZWFkZXItcmlnaHQge1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcblxyXG4gICAgICAvLyDmrYzljZXlkI3np7BcclxuICAgICAgLnBsLWhlYWRlci10aXRsZSB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIC5wbC1oZWFkZXItdGFnIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2ljb24ucG5nKSBuby1yZXBlYXQgMCA5OTk5cHg7XHJcbiAgICAgICAgICB3aWR0aDogNTRweDtcclxuICAgICAgICAgIGhlaWdodDogMjRweDtcclxuICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAgLTI0M3B4O1xyXG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIOWIm+W7uuiAheS/oeaBr1xyXG4gICAgICAucGwtaGVhZGVyLWNyZWF0ZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNwYW46bnRoLWNoaWxkKDIpIHtcclxuICAgICAgICAgIGNvbG9yOiAjMGM3M2MyO1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3BhbjpudGgtY2hpbGQoMykge1xyXG4gICAgICAgICAgY29sb3I6ICM2NjY7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyDlt6XlhbfmoI9cclxuICAgICAgLmFsYnVtLWhlYWRlci10b29sIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuXHJcbiAgICAgICAgZGl2IHtcclxuICAgICAgICAgIG1hcmdpbjoxMHB4IDEwcHggMCAwO1xyXG4gICAgICAgICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNGY0O1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICBjb2xvcjogIzQ0NDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkaXY6bnRoLWNoaWxkKDEpIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzM0ODNjZjtcclxuICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLy8g5qCH562+XHJcbiAgICAgIC5wbC1oZWFkZXItdGFncyB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgICAgICBjb2xvcjogIzY2NjtcclxuICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcblxyXG4gICAgICAgIC5wbC1oZWFkZXItdGFncy1saXN0IHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuXHJcbiAgICAgICAgICAucGwtaGVhZGVyLXRhZyB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCAxMHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEuNXJlbTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAuOHJlbTtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMS41cmVtO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyDmkq3mlL7liJfooahcclxuICAucGwtc29uZ2xpc3Qge1xyXG4gICAgLnBsLXNvbmdsaXN0LWhlYWRlciB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNjZTFmMDg7XHJcbiAgICAgIHBhZGRpbmc6IDE1cHggMDtcclxuXHJcbiAgICAgIHNwYW4ge1xyXG4gICAgICAgIGNvbG9yOiAjNjY2O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAucGwtc29uZ2xpc3QtdGFibGUge1xyXG4gICAgICB0ZCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgICAgaGVpZ2h0OiA1N3B4O1xyXG5cclxuICAgICAgICBkaXY6aG92ZXIge1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uLXN0eWxlOiBzb2xpZDtcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbi1saW5lOiB1bmRlcmxpbmU7XHJcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb24tY29sb3I6ICMwMDA7XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAudGQtbmFtZSxcclxuICAgICAgLnRkLWFsYnVtLFxyXG4gICAgICAudGQtYXJ0aXN0IHtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC50ZC1uYW1lIHtcclxuICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC50ZC1hcnRpc3Qge1xyXG4gICAgICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAudGQtYWxidW0ge1xyXG4gICAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8g5o6o6I2Q5YaF5a65XHJcbiAgLnNvbmctY29tbWVuZCB7XHJcbiAgICBwYWRkaW5nOiAwIDAgMCAyMHB4O1xyXG5cclxuICAgIC5zYy1oZWFkZXIge1xyXG4gICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xyXG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2FhYTtcclxuICAgICAgY29sb3I6ICMzMzM7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuc2MtaW5jbG91ZCB7XHJcbiAgICAgIHBhZGRpbmc6IDEwcHggMDtcclxuXHJcbiAgICAgIC5zYy1pbmNsb3VkLWl0ZW0ge1xyXG4gICAgICAgIG1hcmdpbjogMTBweCAwO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICAgICAgIC5zYy1pbmNsb3VkLWxlZnQge1xyXG4gICAgICAgICAgd2lkdGg6IDYwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc2MtaW5jbG91ZC1yaWdodCB7XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICAgICAgZGl2IHtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICAgICAgd2lkdGg6IDE4NXB4O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGRpdjpudGgtY2hpbGQoMSkge1xyXG4gICAgICAgICAgICBjb2xvcjogIzIyMjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBkaXY6bnRoLWNoaWxkKDEpOmhvdmVyLFxyXG4gICAgICAgICAgZGl2Om50aC1jaGlsZCgyKTpob3ZlciB7XHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbi1saW5lOiB1bmRlcmxpbmU7XHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbi1zdHlsZTogc29saWQ7XHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogIzQ0NDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBkaXY6bnRoLWNoaWxkKDIpIHtcclxuICAgICAgICAgICAgY29sb3I6ICM2NjY7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIucGxheWxpc3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xufVxuLnBsYXlsaXN0IC5wbGF5bGlzdC1ib3gge1xuICB3aWR0aDogOTgwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNlZWU7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlZWU7XG4gIHBhZGRpbmc6IDAgMjBweDtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5wbGF5bGlzdCAubGVmdCB7XG4gIGZsZXg6IDE7XG59XG4ucGxheWxpc3QgLnJpZ2h0IHtcbiAgd2lkdGg6IDI1MHB4O1xufVxuLnBsYXlsaXN0IC5wbC1oZWFkZXIge1xuICBwYWRkaW5nOiAyMHB4IDA7XG59XG4ucGxheWxpc3QgLnBsLWhlYWRlciAucGwtaGVhZGVyLWJveCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4ucGxheWxpc3QgLnBsLWhlYWRlciAucGwtaGVhZGVyLWltZyB7XG4gIHdpZHRoOiAyMDhweDtcbiAgaGVpZ2h0OiAyMDhweDtcbn1cbi5wbGF5bGlzdCAucGwtaGVhZGVyIC5wbC1oZWFkZXItcmlnaHQge1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG59XG4ucGxheWxpc3QgLnBsLWhlYWRlciAucGwtaGVhZGVyLXJpZ2h0IC5wbC1oZWFkZXItdGl0bGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnBsYXlsaXN0IC5wbC1oZWFkZXIgLnBsLWhlYWRlci1yaWdodCAucGwtaGVhZGVyLXRpdGxlIC5wbC1oZWFkZXItdGFnIHtcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvaWNvbi5wbmcpIG5vLXJlcGVhdCAwIDk5OTlweDtcbiAgd2lkdGg6IDU0cHg7XG4gIGhlaWdodDogMjRweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAtMjQzcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuLnBsYXlsaXN0IC5wbC1oZWFkZXIgLnBsLWhlYWRlci1yaWdodCAucGwtaGVhZGVyLWNyZWF0ZSB7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuLnBsYXlsaXN0IC5wbC1oZWFkZXIgLnBsLWhlYWRlci1yaWdodCAucGwtaGVhZGVyLWNyZWF0ZSBpbWcge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuLnBsYXlsaXN0IC5wbC1oZWFkZXIgLnBsLWhlYWRlci1yaWdodCAucGwtaGVhZGVyLWNyZWF0ZSBzcGFuIHtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG4ucGxheWxpc3QgLnBsLWhlYWRlciAucGwtaGVhZGVyLXJpZ2h0IC5wbC1oZWFkZXItY3JlYXRlIHNwYW46bnRoLWNoaWxkKDIpIHtcbiAgY29sb3I6ICMwYzczYzI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5wbGF5bGlzdCAucGwtaGVhZGVyIC5wbC1oZWFkZXItcmlnaHQgLnBsLWhlYWRlci1jcmVhdGUgc3BhbjpudGgtY2hpbGQoMykge1xuICBjb2xvcjogIzY2Njtcbn1cbi5wbGF5bGlzdCAucGwtaGVhZGVyIC5wbC1oZWFkZXItcmlnaHQgLmFsYnVtLWhlYWRlci10b29sIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG4ucGxheWxpc3QgLnBsLWhlYWRlciAucGwtaGVhZGVyLXJpZ2h0IC5hbGJ1bS1oZWFkZXItdG9vbCBkaXYge1xuICBtYXJnaW46IDEwcHggMTBweCAwIDA7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNGY0O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5wbGF5bGlzdCAucGwtaGVhZGVyIC5wbC1oZWFkZXItcmlnaHQgLmFsYnVtLWhlYWRlci10b29sIGRpdiBzcGFuIHtcbiAgY29sb3I6ICM0NDQ7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuLnBsYXlsaXN0IC5wbC1oZWFkZXIgLnBsLWhlYWRlci1yaWdodCAuYWxidW0taGVhZGVyLXRvb2wgZGl2IGkge1xuICBmb250LXNpemU6IDEuMXJlbTtcbn1cbi5wbGF5bGlzdCAucGwtaGVhZGVyIC5wbC1oZWFkZXItcmlnaHQgLmFsYnVtLWhlYWRlci10b29sIGRpdjpudGgtY2hpbGQoMSkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQ4M2NmO1xuICBjb2xvcjogI2ZmZjtcbn1cbi5wbGF5bGlzdCAucGwtaGVhZGVyIC5wbC1oZWFkZXItcmlnaHQgLmFsYnVtLWhlYWRlci10b29sIGRpdjpudGgtY2hpbGQoMSkgc3BhbiB7XG4gIGNvbG9yOiAjZmZmO1xufVxuLnBsYXlsaXN0IC5wbC1oZWFkZXIgLnBsLWhlYWRlci1yaWdodCAucGwtaGVhZGVyLXRhZ3Mge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBjb2xvcjogIzY2NjtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbn1cbi5wbGF5bGlzdCAucGwtaGVhZGVyIC5wbC1oZWFkZXItcmlnaHQgLnBsLWhlYWRlci10YWdzIC5wbC1oZWFkZXItdGFncy1saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5wbGF5bGlzdCAucGwtaGVhZGVyIC5wbC1oZWFkZXItcmlnaHQgLnBsLWhlYWRlci10YWdzIC5wbC1oZWFkZXItdGFncy1saXN0IC5wbC1oZWFkZXItdGFnIHtcbiAgbWFyZ2luOiAwIDEwcHg7XG4gIGhlaWdodDogMS41cmVtO1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMS41cmVtO1xuICBwYWRkaW5nOiAwIDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG59XG4ucGxheWxpc3QgLnBsLXNvbmdsaXN0IC5wbC1zb25nbGlzdC1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjY2UxZjA4O1xuICBwYWRkaW5nOiAxNXB4IDA7XG59XG4ucGxheWxpc3QgLnBsLXNvbmdsaXN0IC5wbC1zb25nbGlzdC1oZWFkZXIgc3BhbiB7XG4gIGNvbG9yOiAjNjY2O1xuICBmb250LXNpemU6IDAuOXJlbTtcbn1cbi5wbGF5bGlzdCAucGwtc29uZ2xpc3QgLnBsLXNvbmdsaXN0LXRhYmxlIHRkIHtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIGhlaWdodDogNTdweDtcbn1cbi5wbGF5bGlzdCAucGwtc29uZ2xpc3QgLnBsLXNvbmdsaXN0LXRhYmxlIHRkIGRpdjpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbi1zdHlsZTogc29saWQ7XG4gIHRleHQtZGVjb3JhdGlvbi1saW5lOiB1bmRlcmxpbmU7XG4gIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogIzAwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnBsYXlsaXN0IC5wbC1zb25nbGlzdCAucGwtc29uZ2xpc3QtdGFibGUgLnRkLW5hbWUsXG4ucGxheWxpc3QgLnBsLXNvbmdsaXN0IC5wbC1zb25nbGlzdC10YWJsZSAudGQtYWxidW0sXG4ucGxheWxpc3QgLnBsLXNvbmdsaXN0IC5wbC1zb25nbGlzdC10YWJsZSAudGQtYXJ0aXN0IHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG4ucGxheWxpc3QgLnBsLXNvbmdsaXN0IC5wbC1zb25nbGlzdC10YWJsZSAudGQtbmFtZSB7XG4gIHdpZHRoOiAyMDBweDtcbn1cbi5wbGF5bGlzdCAucGwtc29uZ2xpc3QgLnBsLXNvbmdsaXN0LXRhYmxlIC50ZC1hcnRpc3Qge1xuICB3aWR0aDogNjBweDtcbn1cbi5wbGF5bGlzdCAucGwtc29uZ2xpc3QgLnBsLXNvbmdsaXN0LXRhYmxlIC50ZC1hbGJ1bSB7XG4gIHdpZHRoOiAxNTBweDtcbn1cbi5wbGF5bGlzdCAuc29uZy1jb21tZW5kIHtcbiAgcGFkZGluZzogMCAwIDAgMjBweDtcbn1cbi5wbGF5bGlzdCAuc29uZy1jb21tZW5kIC5zYy1oZWFkZXIge1xuICBoZWlnaHQ6IDUwcHg7XG4gIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2FhYTtcbiAgY29sb3I6ICMzMzM7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLnBsYXlsaXN0IC5zb25nLWNvbW1lbmQgLnNjLWluY2xvdWQge1xuICBwYWRkaW5nOiAxMHB4IDA7XG59XG4ucGxheWxpc3QgLnNvbmctY29tbWVuZCAuc2MtaW5jbG91ZCAuc2MtaW5jbG91ZC1pdGVtIHtcbiAgbWFyZ2luOiAxMHB4IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4ucGxheWxpc3QgLnNvbmctY29tbWVuZCAuc2MtaW5jbG91ZCAuc2MtaW5jbG91ZC1pdGVtIC5zYy1pbmNsb3VkLWxlZnQge1xuICB3aWR0aDogNjBweDtcbn1cbi5wbGF5bGlzdCAuc29uZy1jb21tZW5kIC5zYy1pbmNsb3VkIC5zYy1pbmNsb3VkLWl0ZW0gLnNjLWluY2xvdWQtcmlnaHQge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ucGxheWxpc3QgLnNvbmctY29tbWVuZCAuc2MtaW5jbG91ZCAuc2MtaW5jbG91ZC1pdGVtIC5zYy1pbmNsb3VkLXJpZ2h0IGRpdiB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHdpZHRoOiAxODVweDtcbn1cbi5wbGF5bGlzdCAuc29uZy1jb21tZW5kIC5zYy1pbmNsb3VkIC5zYy1pbmNsb3VkLWl0ZW0gLnNjLWluY2xvdWQtcmlnaHQgZGl2Om50aC1jaGlsZCgxKSB7XG4gIGNvbG9yOiAjMjIyO1xufVxuLnBsYXlsaXN0IC5zb25nLWNvbW1lbmQgLnNjLWluY2xvdWQgLnNjLWluY2xvdWQtaXRlbSAuc2MtaW5jbG91ZC1yaWdodCBkaXY6bnRoLWNoaWxkKDEpOmhvdmVyLFxuLnBsYXlsaXN0IC5zb25nLWNvbW1lbmQgLnNjLWluY2xvdWQgLnNjLWluY2xvdWQtaXRlbSAuc2MtaW5jbG91ZC1yaWdodCBkaXY6bnRoLWNoaWxkKDIpOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uLWxpbmU6IHVuZGVybGluZTtcbiAgdGV4dC1kZWNvcmF0aW9uLXN0eWxlOiBzb2xpZDtcbiAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiAjNDQ0O1xufVxuLnBsYXlsaXN0IC5zb25nLWNvbW1lbmQgLnNjLWluY2xvdWQgLnNjLWluY2xvdWQtaXRlbSAuc2MtaW5jbG91ZC1yaWdodCBkaXY6bnRoLWNoaWxkKDIpIHtcbiAgY29sb3I6ICM2NjY7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/components/playlist/playlist/playlist.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/components/playlist/playlist/playlist.component.ts ***!
  \**************************************************************************/
/*! exports provided: PlaylistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaylistComponent", function() { return PlaylistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/service.service */ "./src/app/services/service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");





var PlaylistComponent = /** @class */ (function () {
    function PlaylistComponent(service, activatedRoute, router, notification) {
        this.service = service;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.notification = notification;
        this.playlistDetail = {
            id: 0,
            tracks: [],
            creator: {
                userId: 0,
                avatarUrl: '',
                nickname: '',
            },
            coverImgUrl: '',
            description: '',
            name: '',
            shareCount: 0,
            commentCount: 0,
            playCount: 0,
            createTime: 0,
            subscribedCount: 0,
            tags: []
        };
        this.hotComments = []; // 热门评论
        this.comments = []; // 评论
        this.description = [];
    }
    PlaylistComponent.prototype.ngOnInit = function () {
        this.getPlaylistDetail();
        this.getHotPlaylist();
    };
    // 获取歌单列表详情
    PlaylistComponent.prototype.getPlaylistDetail = function () {
        var _this = this;
        this.activatedRoute.queryParams.subscribe(function (params) {
            _this.service.sheet.getSheetListDetail(params.id).subscribe(function (playlist) {
                _this.playlistDetail = playlist;
                if (playlist.description) {
                    _this.description = playlist.description.split("\n");
                }
            });
            // 获取评论
            _this.getPlaylistComments(params.id);
        });
    };
    // 获取歌单评论
    PlaylistComponent.prototype.getPlaylistComments = function (id, offset, before) {
        var _this = this;
        this.service.sheet.getSheetListComments({ id: id, offset: offset, limit: 20, before: before }).subscribe(function (res) {
            _this.commentTotal = res.total;
            _this.comments = res.comments;
            if (_this.hotComments.length == 0) {
                _this.hotComments = res.hotComments;
            }
        });
    };
    // 获取热门歌单
    PlaylistComponent.prototype.getHotPlaylist = function () {
        var _this = this;
        this.service.sheet.getPersonalSheetList().subscribe(function (result) {
            _this.personalized = result.filter(function (e, i) { return i < 5; });
        });
    };
    // 评论分页
    PlaylistComponent.prototype.pageIndexChange = function (page) {
        var _this = this;
        this.activatedRoute.queryParams.subscribe(function (params) {
            _this.getPlaylistComments(params.id, page - 1);
        });
    };
    // 跳转到个人用户
    PlaylistComponent.prototype.jumpUser = function (id) {
        this.router.navigate(['user'], { queryParams: { id: id } });
    };
    // 跳转到推荐歌单
    PlaylistComponent.prototype.toPlaylist = function (id) {
        this.router.navigate(['playlist'], { queryParams: { id: id } });
    };
    // 播放第一首歌
    PlaylistComponent.prototype.playFirstSong = function () {
        if (this.playlistDetail.tracks.length > 0) {
            var song = this.playlistDetail.tracks[0];
            var art = song.ar.map(function (item) { return item.name; });
            this.playSong(song.id, song.name, song.dt, art, song.al.picUrl);
        }
        else {
            this.notification.create('error', "\u9519\u8BEF\u8B66\u544A", '没有播放的歌曲');
        }
    };
    // 播放歌单
    PlaylistComponent.prototype.handlePlay = function (song) {
        this.service.player.songList = this.playlistDetail.tracks;
        if (this.playlistDetail.tracks.length > 0) {
            var art = song.ar.map(function (item) { return item.name; });
            this.playSong(song.id, song.name, song.dt, art, song.al.picUrl);
        }
    };
    // 播放歌曲
    PlaylistComponent.prototype.playSong = function (id, name, size, artist, picUrl) {
        var _this = this;
        // 获取播放连接
        this.service.song.getSongUrl(id).subscribe(function (song) {
            if (song.url) {
                _this.service.player.song = {
                    id: id,
                    name: name,
                    url: song.url,
                    size: size,
                    artist: artist,
                    picUrl: picUrl,
                };
                var list = _this.service.player.songList;
                if (!list.find(function (e) { return e.id == id; })) {
                    _this.service.player.songList.push(_this.service.player.song);
                }
                // 获取歌词
                _this.service.song.getLyric(id).subscribe(function (lyric) {
                    _this.service.player.song.lyric = lyric;
                });
            }
            else {
                _this.notification.create('error', "\u9519\u8BEF\u8B66\u544A", '付费歌曲，无法播放');
            }
        });
        // 开始播放歌曲
        this.service.player.start = true;
    };
    // 跳转到歌曲详情页面
    PlaylistComponent.prototype.toSong = function (id) {
        console.log('歌曲详情', id);
        this.router.navigate(['song'], { queryParams: { id: id } });
    };
    // 跳转到歌手页面
    PlaylistComponent.prototype.toArtist = function (id) {
        console.log('歌手页面', id);
        this.router.navigate(['artist'], { queryParams: { id: id } });
    };
    // 跳转到专辑页面
    PlaylistComponent.prototype.toAlbum = function (id) {
        console.log("专辑页面:", id);
        this.router.navigate(['album'], { queryParams: { id: id } });
    };
    // 收藏
    PlaylistComponent.prototype.favorite = function () {
        this.notification.create('success', "\u63D0\u793A", '收藏功能，等待开发');
    };
    // 分享
    PlaylistComponent.prototype.share = function () {
        this.notification.create('success', "\u63D0\u793A", '分享功能，等待开发');
    };
    // 发私信
    PlaylistComponent.prototype.sentMessage = function () {
        this.notification.create('success', "\u63D0\u793A", '发送私信功能，等待开发');
    };
    PlaylistComponent.ctorParameters = function () { return [
        { type: src_app_services_service_service__WEBPACK_IMPORTED_MODULE_2__["ServiceService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzNotificationService"] }
    ]; };
    PlaylistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-playlist',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./playlist.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/playlist/playlist/playlist.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./playlist.component.scss */ "./src/app/pages/components/playlist/playlist/playlist.component.scss")).default]
        })
    ], PlaylistComponent);
    return PlaylistComponent;
}());



/***/ }),

/***/ "./src/app/pages/components/song/song/song.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/pages/components/song/song/song.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".song {\n  background-color: #f1f1f1;\n}\n.song .song-box {\n  width: 980px;\n  margin: 0 auto;\n  background-color: #fff;\n  border-left: 1px solid #eee;\n  border-right: 1px solid #eee;\n  display: -webkit-box;\n  display: flex;\n}\n.song .song-box .song-content {\n  -webkit-box-flex: 1;\n          flex: 1;\n}\n.song .song-box .song-content .song-content-box {\n  display: -webkit-box;\n  display: flex;\n  padding: 20px 20px 20px 40px;\n}\n.song .song-box .song-content .song-pic {\n  width: 198px;\n  height: 198px;\n  position: relative;\n}\n.song .song-box .song-content .song-pic img {\n  width: 130px;\n  height: 130px;\n  margin: 34px;\n}\n.song .song-box .song-content .song-pic .song-pic-tag {\n  position: absolute;\n  background: url(https://s2.music.126.net/style/web2/img/coverall.png?de57f1fd876defc937c110aeb0ed6a17) no-repeat 0 9999px;\n  width: 206px;\n  height: 205px;\n  top: -4px;\n  left: -4px;\n  background-position: -140px -580px;\n  display: inline-block;\n  overflow: hidden;\n}\n.song .song-box .song-content .song-info {\n  -webkit-box-flex: 1;\n          flex: 1;\n  margin-left: 20px;\n}\n.song .song-box .song-content .song-info .si-title,\n.song .song-box .song-content .song-info .si-singer,\n.song .song-box .song-content .song-info .si-album,\n.song .song-box .song-content .song-info .si-tool {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  padding: 10px 0;\n  font-size: 0.9rem;\n}\n.song .song-box .song-content .song-info .sl-title {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.song .song-box .song-content .song-info .sl-title .sl-title-tag {\n  background: url('icon.png') no-repeat 0 9999px;\n  width: 54px;\n  height: 24px;\n  background-position: 0 -463px;\n  display: inline-block;\n  overflow: hidden;\n  margin-right: 10px;\n}\n.song .song-box .song-content .song-info .sl-title .sl-title-mv {\n  background: url('icon.png') no-repeat 0 9999px;\n  width: 21px;\n  height: 18px;\n  background-position: 0 -18px;\n  display: inline-block;\n  overflow: hidden;\n  margin-left: 10px;\n}\n.song .song-box .song-content .song-info .si-tag {\n  color: #666;\n}\n.song .song-box .song-content .song-info .si-value {\n  margin-left: 10px;\n  color: #0c73c2;\n  cursor: pointer;\n}\n.song .song-box .song-content .song-info .si-value:hover {\n  -webkit-text-decoration-color: #0c73c2;\n          text-decoration-color: #0c73c2;\n  -webkit-text-decoration-line: underline;\n          text-decoration-line: underline;\n  -webkit-text-decoration-style: solid;\n          text-decoration-style: solid;\n}\n.song .song-box .song-content .song-info .si-tool div {\n  margin-right: 20px;\n}\n.song .song-box .song-content .song-info .si-tool div span {\n  color: #666;\n  font-size: 0.9rem;\n}\n.song .song-box .song-content .song-info .si-tool div:nth-child(1) {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.song .song-box .song-content .song-info .si-tool div:nth-child(1) i {\n  font-size: 2rem;\n  color: #666;\n}\n.song .song-box .song-content .song-info .si-lyric {\n  padding: 10px 0;\n  font-size: 0.9rem;\n  color: #333;\n  font-family: Arial, Helvetica, sans-serif;\n}\n.song .song-box .song-commend {\n  width: 250px;\n  padding: 0 15px 0 0;\n  font-size: 0.9rem;\n}\n.song .song-box .song-commend .sc-header {\n  height: 50px;\n  line-height: 50px;\n  border-bottom: 1px solid #aaa;\n  color: #333;\n  font-weight: bold;\n}\n.song .song-box .song-commend .sc-incloud {\n  padding: 10px 0;\n}\n.song .song-box .song-commend .sc-incloud .sc-incloud-item {\n  margin: 10px 0;\n  display: -webkit-box;\n  display: flex;\n}\n.song .song-box .song-commend .sc-incloud .sc-incloud-item .sc-incloud-left {\n  width: 60px;\n}\n.song .song-box .song-commend .sc-incloud .sc-incloud-item .sc-incloud-right {\n  cursor: pointer;\n}\n.song .song-box .song-commend .sc-incloud .sc-incloud-item .sc-incloud-right div {\n  padding-left: 10px;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  width: 185px;\n}\n.song .song-box .song-commend .sc-incloud .sc-incloud-item .sc-incloud-right div:nth-child(1) {\n  color: #222;\n}\n.song .song-box .song-commend .sc-incloud .sc-incloud-item .sc-incloud-right div:nth-child(1):hover,\n.song .song-box .song-commend .sc-incloud .sc-incloud-item .sc-incloud-right div:nth-child(2):hover {\n  -webkit-text-decoration-line: underline;\n          text-decoration-line: underline;\n  -webkit-text-decoration-style: solid;\n          text-decoration-style: solid;\n  -webkit-text-decoration-color: #444;\n          text-decoration-color: #444;\n}\n.song .song-box .song-commend .sc-incloud .sc-incloud-item .sc-incloud-right div:nth-child(2) {\n  color: #666;\n  font-size: 0.8rem;\n}\n.song .song-box .song-commend .sc-same {\n  margin-top: 20px;\n}\n.song .song-box .song-commend .sc-same .sc-same-item {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  margin: 10px 0;\n}\n.song .song-box .song-commend .sc-same .sc-same-item .sc-same-item-left {\n  -webkit-box-flex: 1;\n          flex: 1;\n  cursor: pointer;\n}\n.song .song-box .song-commend .sc-same .sc-same-item .sc-same-item-left div:nth-child(1) {\n  color: #222;\n}\n.song .song-box .song-commend .sc-same .sc-same-item .sc-same-item-left div:nth-child(2) {\n  color: #666;\n  font-size: 0.8rem;\n}\n.song .song-box .song-commend .sc-same .sc-same-item .sc-same-item-right {\n  width: 3rem;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  font-size: 1rem;\n  color: #666;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zbWFsbHppcC9EZXNrdG9wL2FuZ3VsYXIvd2FuZ3lpeXVuLW11c2ljL3NyYy9hcHAvcGFnZXMvY29tcG9uZW50cy9zb25nL3Nvbmcvc29uZy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvY29tcG9uZW50cy9zb25nL3Nvbmcvc29uZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0FDQ0Y7QURDRTtFQUNFLFlBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0FDQ0o7QURDSTtFQUNFLG1CQUFBO1VBQUEsT0FBQTtBQ0NOO0FEQ007RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtBQ0NSO0FER007RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FDRFI7QURHUTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQ0RWO0FESVE7RUFDRSxrQkFBQTtFQUNBLHlIQUFBO0VBRUEsWUFBQTtFQUNBLGFBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGtDQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQ0hWO0FEUU07RUFDRSxtQkFBQTtVQUFBLE9BQUE7RUFDQSxpQkFBQTtBQ05SO0FET1E7Ozs7RUFJRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDTFY7QURTUTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNQVjtBRFNVO0VBQ0UsOENBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDUFo7QURVVTtFQUNFLDhDQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSw0QkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ1JaO0FEWVE7RUFDRSxXQUFBO0FDVlY7QURhUTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUNYVjtBRHVCUTtFQUNFLHNDQUFBO1VBQUEsOEJBQUE7RUFDQSx1Q0FBQTtVQUFBLCtCQUFBO0VBQ0Esb0NBQUE7VUFBQSw0QkFBQTtBQ3JCVjtBRHlCVTtFQUNFLGtCQUFBO0FDdkJaO0FEeUJZO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0FDdkJkO0FEMkJVO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ3pCWjtBRDBCWTtFQUNFLGVBQUE7RUFDQSxXQUFBO0FDeEJkO0FENkJRO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLHlDQUFBO0FDM0JWO0FEaUNJO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUMvQk47QURpQ007RUFDRSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSw2QkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQy9CUjtBRG1DTTtFQUNFLGVBQUE7QUNqQ1I7QURtQ1E7RUFDRSxjQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0FDakNWO0FEbUNVO0VBQ0UsV0FBQTtBQ2pDWjtBRG9DVTtFQUNFLGVBQUE7QUNsQ1o7QURvQ1k7RUFDRSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUNsQ2Q7QURxQ1k7RUFDRSxXQUFBO0FDbkNkO0FEc0NZOztFQUVFLHVDQUFBO1VBQUEsK0JBQUE7RUFDQSxvQ0FBQTtVQUFBLDRCQUFBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtBQ3BDZDtBRHVDWTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtBQ3JDZDtBRDRDTTtFQUNFLGdCQUFBO0FDMUNSO0FENENRO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLGNBQUE7QUMxQ1Y7QUQ0Q1U7RUFDRSxtQkFBQTtVQUFBLE9BQUE7RUFDQSxlQUFBO0FDMUNaO0FENENZO0VBQ0UsV0FBQTtBQzFDZDtBRDRDWTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtBQzFDZDtBRDhDVTtFQUNFLFdBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDNUNaIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY29tcG9uZW50cy9zb25nL3Nvbmcvc29uZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zb25nIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcblxuICAuc29uZy1ib3gge1xuICAgIHdpZHRoOiA5ODBweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2VlZTtcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZWVlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG5cbiAgICAuc29uZy1jb250ZW50IHtcbiAgICAgIGZsZXg6IDE7XG5cbiAgICAgIC5zb25nLWNvbnRlbnQtYm94IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgcGFkZGluZzogMjBweCAyMHB4IDIwcHggNDBweDtcbiAgICAgIH1cblxuICAgICAgLy8g5q2M5puy5Zu+54mHXG4gICAgICAuc29uZy1waWMge1xuICAgICAgICB3aWR0aDogMTk4cHg7XG4gICAgICAgIGhlaWdodDogMTk4cHg7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgICBpbWcge1xuICAgICAgICAgIHdpZHRoOiAxMzBweDtcbiAgICAgICAgICBoZWlnaHQ6IDEzMHB4O1xuICAgICAgICAgIG1hcmdpbjogMzRweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zb25nLXBpYy10YWcge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoaHR0cHM6Ly9zMi5tdXNpYy4xMjYubmV0L3N0eWxlL3dlYjIvaW1nL2NvdmVyYWxsLnBuZz9kZTU3ZjFmZDg3NmRlZmM5MzdjMTEwYWViMGVkNmExNylcbiAgICAgICAgICAgIG5vLXJlcGVhdCAwIDk5OTlweDtcbiAgICAgICAgICB3aWR0aDogMjA2cHg7XG4gICAgICAgICAgaGVpZ2h0OiAyMDVweDtcbiAgICAgICAgICB0b3A6IC00cHg7XG4gICAgICAgICAgbGVmdDogLTRweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTQwcHggLTU4MHB4O1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIOatjOabsuS/oeaBr1xuICAgICAgLnNvbmctaW5mbyB7XG4gICAgICAgIGZsZXg6IDE7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgICAgICAuc2ktdGl0bGUsXG4gICAgICAgIC5zaS1zaW5nZXIsXG4gICAgICAgIC5zaS1hbGJ1bSxcbiAgICAgICAgLnNpLXRvb2wge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4IDA7XG4gICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgICAgIH1cblxuICAgICAgICAvLyDmoIfpophcbiAgICAgICAgLnNsLXRpdGxlIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgLy8g5qCH6aKY5ZCN56ewXG4gICAgICAgICAgLnNsLXRpdGxlLXRhZyB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9pY29uLnBuZykgbm8tcmVwZWF0IDAgOTk5OXB4O1xuICAgICAgICAgICAgd2lkdGg6IDU0cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDI0cHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIC00NjNweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnNsLXRpdGxlLW12IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2ljb24ucG5nKSBuby1yZXBlYXQgMCA5OTk5cHg7XG4gICAgICAgICAgICB3aWR0aDogMjFweDtcbiAgICAgICAgICAgIGhlaWdodDogMThweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAgLTE4cHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLnNpLXRhZyB7XG4gICAgICAgICAgY29sb3I6ICM2NjY7XG4gICAgICAgIH1cblxuICAgICAgICAuc2ktdmFsdWUge1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgICAgIGNvbG9yOiAjMGM3M2MyO1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zaS10aXRsZSB7XG4gICAgICAgIH1cblxuICAgICAgICAuc2ktc2luZ2VyIHtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zaS1hbGJ1bSB7XG4gICAgICAgIH1cblxuICAgICAgICAuc2ktdmFsdWU6aG92ZXIge1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogIzBjNzNjMjtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb24tbGluZTogdW5kZXJsaW5lO1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbi1zdHlsZTogc29saWQ7XG4gICAgICAgIH1cblxuICAgICAgICAuc2ktdG9vbCB7XG4gICAgICAgICAgZGl2IHtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcblxuICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgIGNvbG9yOiAjNjY2O1xuICAgICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBkaXY6bnRoLWNoaWxkKDEpIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgaSB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgICAgICAgICAgY29sb3I6ICM2NjY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLnNpLWx5cmljIHtcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4IDA7XG4gICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgICAgICAgY29sb3I6ICMzMzM7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyDmjqjojZBcbiAgICAuc29uZy1jb21tZW5kIHtcbiAgICAgIHdpZHRoOiAyNTBweDtcbiAgICAgIHBhZGRpbmc6IDAgMTVweCAwIDA7XG4gICAgICBmb250LXNpemU6IDAuOXJlbTtcblxuICAgICAgLnNjLWhlYWRlciB7XG4gICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYWFhO1xuICAgICAgICBjb2xvcjogIzMzMztcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICB9XG5cbiAgICAgIC8vIOWMheWQq+i/memmluatjOabsueahOatjOWNlVxuICAgICAgLnNjLWluY2xvdWQge1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDA7XG5cbiAgICAgICAgLnNjLWluY2xvdWQtaXRlbSB7XG4gICAgICAgICAgbWFyZ2luOiAxMHB4IDA7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcblxuICAgICAgICAgIC5zYy1pbmNsb3VkLWxlZnQge1xuICAgICAgICAgICAgd2lkdGg6IDYwcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnNjLWluY2xvdWQtcmlnaHQge1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgICAgICAgICBkaXYge1xuICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgICAgICB3aWR0aDogMTg1cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGRpdjpudGgtY2hpbGQoMSkge1xuICAgICAgICAgICAgICBjb2xvcjogIzIyMjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZGl2Om50aC1jaGlsZCgxKTpob3ZlcixcbiAgICAgICAgICAgIGRpdjpudGgtY2hpbGQoMik6aG92ZXIge1xuICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb24tbGluZTogdW5kZXJsaW5lO1xuICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb24tc3R5bGU6IHNvbGlkO1xuICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb24tY29sb3I6ICM0NDQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGRpdjpudGgtY2hpbGQoMikge1xuICAgICAgICAgICAgICBjb2xvcjogIzY2NjtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIOebuOS8vOatjOabslxuICAgICAgLnNjLXNhbWUge1xuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuXG4gICAgICAgIC5zYy1zYW1lLWl0ZW0ge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBtYXJnaW46IDEwcHggMDtcblxuICAgICAgICAgIC5zYy1zYW1lLWl0ZW0tbGVmdCB7XG4gICAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgICAgICAgICBkaXY6bnRoLWNoaWxkKDEpIHtcbiAgICAgICAgICAgICAgY29sb3I6ICMyMjI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkaXY6bnRoLWNoaWxkKDIpIHtcbiAgICAgICAgICAgICAgY29sb3I6ICM2NjY7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC5zYy1zYW1lLWl0ZW0tcmlnaHQge1xuICAgICAgICAgICAgd2lkdGg6IDNyZW07XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgICAgY29sb3I6ICM2NjY7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCIuc29uZyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XG59XG4uc29uZyAuc29uZy1ib3gge1xuICB3aWR0aDogOTgwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNlZWU7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlZWU7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uc29uZyAuc29uZy1ib3ggLnNvbmctY29udGVudCB7XG4gIGZsZXg6IDE7XG59XG4uc29uZyAuc29uZy1ib3ggLnNvbmctY29udGVudCAuc29uZy1jb250ZW50LWJveCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDIwcHggMjBweCAyMHB4IDQwcHg7XG59XG4uc29uZyAuc29uZy1ib3ggLnNvbmctY29udGVudCAuc29uZy1waWMge1xuICB3aWR0aDogMTk4cHg7XG4gIGhlaWdodDogMTk4cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5zb25nIC5zb25nLWJveCAuc29uZy1jb250ZW50IC5zb25nLXBpYyBpbWcge1xuICB3aWR0aDogMTMwcHg7XG4gIGhlaWdodDogMTMwcHg7XG4gIG1hcmdpbjogMzRweDtcbn1cbi5zb25nIC5zb25nLWJveCAuc29uZy1jb250ZW50IC5zb25nLXBpYyAuc29uZy1waWMtdGFnIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kOiB1cmwoaHR0cHM6Ly9zMi5tdXNpYy4xMjYubmV0L3N0eWxlL3dlYjIvaW1nL2NvdmVyYWxsLnBuZz9kZTU3ZjFmZDg3NmRlZmM5MzdjMTEwYWViMGVkNmExNykgbm8tcmVwZWF0IDAgOTk5OXB4O1xuICB3aWR0aDogMjA2cHg7XG4gIGhlaWdodDogMjA1cHg7XG4gIHRvcDogLTRweDtcbiAgbGVmdDogLTRweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE0MHB4IC01ODBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLnNvbmcgLnNvbmctYm94IC5zb25nLWNvbnRlbnQgLnNvbmctaW5mbyB7XG4gIGZsZXg6IDE7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuLnNvbmcgLnNvbmctYm94IC5zb25nLWNvbnRlbnQgLnNvbmctaW5mbyAuc2ktdGl0bGUsXG4uc29uZyAuc29uZy1ib3ggLnNvbmctY29udGVudCAuc29uZy1pbmZvIC5zaS1zaW5nZXIsXG4uc29uZyAuc29uZy1ib3ggLnNvbmctY29udGVudCAuc29uZy1pbmZvIC5zaS1hbGJ1bSxcbi5zb25nIC5zb25nLWJveCAuc29uZy1jb250ZW50IC5zb25nLWluZm8gLnNpLXRvb2wge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAxMHB4IDA7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xufVxuLnNvbmcgLnNvbmctYm94IC5zb25nLWNvbnRlbnQgLnNvbmctaW5mbyAuc2wtdGl0bGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnNvbmcgLnNvbmctYm94IC5zb25nLWNvbnRlbnQgLnNvbmctaW5mbyAuc2wtdGl0bGUgLnNsLXRpdGxlLXRhZyB7XG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2ljb24ucG5nKSBuby1yZXBlYXQgMCA5OTk5cHg7XG4gIHdpZHRoOiA1NHB4O1xuICBoZWlnaHQ6IDI0cHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgLTQ2M3B4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbi5zb25nIC5zb25nLWJveCAuc29uZy1jb250ZW50IC5zb25nLWluZm8gLnNsLXRpdGxlIC5zbC10aXRsZS1tdiB7XG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2ljb24ucG5nKSBuby1yZXBlYXQgMCA5OTk5cHg7XG4gIHdpZHRoOiAyMXB4O1xuICBoZWlnaHQ6IDE4cHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgLTE4cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG4uc29uZyAuc29uZy1ib3ggLnNvbmctY29udGVudCAuc29uZy1pbmZvIC5zaS10YWcge1xuICBjb2xvcjogIzY2Njtcbn1cbi5zb25nIC5zb25nLWJveCAuc29uZy1jb250ZW50IC5zb25nLWluZm8gLnNpLXZhbHVlIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGNvbG9yOiAjMGM3M2MyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uc29uZyAuc29uZy1ib3ggLnNvbmctY29udGVudCAuc29uZy1pbmZvIC5zaS12YWx1ZTpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogIzBjNzNjMjtcbiAgdGV4dC1kZWNvcmF0aW9uLWxpbmU6IHVuZGVybGluZTtcbiAgdGV4dC1kZWNvcmF0aW9uLXN0eWxlOiBzb2xpZDtcbn1cbi5zb25nIC5zb25nLWJveCAuc29uZy1jb250ZW50IC5zb25nLWluZm8gLnNpLXRvb2wgZGl2IHtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuLnNvbmcgLnNvbmctYm94IC5zb25nLWNvbnRlbnQgLnNvbmctaW5mbyAuc2ktdG9vbCBkaXYgc3BhbiB7XG4gIGNvbG9yOiAjNjY2O1xuICBmb250LXNpemU6IDAuOXJlbTtcbn1cbi5zb25nIC5zb25nLWJveCAuc29uZy1jb250ZW50IC5zb25nLWluZm8gLnNpLXRvb2wgZGl2Om50aC1jaGlsZCgxKSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uc29uZyAuc29uZy1ib3ggLnNvbmctY29udGVudCAuc29uZy1pbmZvIC5zaS10b29sIGRpdjpudGgtY2hpbGQoMSkgaSB7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgY29sb3I6ICM2NjY7XG59XG4uc29uZyAuc29uZy1ib3ggLnNvbmctY29udGVudCAuc29uZy1pbmZvIC5zaS1seXJpYyB7XG4gIHBhZGRpbmc6IDEwcHggMDtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIGNvbG9yOiAjMzMzO1xuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbn1cbi5zb25nIC5zb25nLWJveCAuc29uZy1jb21tZW5kIHtcbiAgd2lkdGg6IDI1MHB4O1xuICBwYWRkaW5nOiAwIDE1cHggMCAwO1xuICBmb250LXNpemU6IDAuOXJlbTtcbn1cbi5zb25nIC5zb25nLWJveCAuc29uZy1jb21tZW5kIC5zYy1oZWFkZXIge1xuICBoZWlnaHQ6IDUwcHg7XG4gIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2FhYTtcbiAgY29sb3I6ICMzMzM7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLnNvbmcgLnNvbmctYm94IC5zb25nLWNvbW1lbmQgLnNjLWluY2xvdWQge1xuICBwYWRkaW5nOiAxMHB4IDA7XG59XG4uc29uZyAuc29uZy1ib3ggLnNvbmctY29tbWVuZCAuc2MtaW5jbG91ZCAuc2MtaW5jbG91ZC1pdGVtIHtcbiAgbWFyZ2luOiAxMHB4IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uc29uZyAuc29uZy1ib3ggLnNvbmctY29tbWVuZCAuc2MtaW5jbG91ZCAuc2MtaW5jbG91ZC1pdGVtIC5zYy1pbmNsb3VkLWxlZnQge1xuICB3aWR0aDogNjBweDtcbn1cbi5zb25nIC5zb25nLWJveCAuc29uZy1jb21tZW5kIC5zYy1pbmNsb3VkIC5zYy1pbmNsb3VkLWl0ZW0gLnNjLWluY2xvdWQtcmlnaHQge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uc29uZyAuc29uZy1ib3ggLnNvbmctY29tbWVuZCAuc2MtaW5jbG91ZCAuc2MtaW5jbG91ZC1pdGVtIC5zYy1pbmNsb3VkLXJpZ2h0IGRpdiB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHdpZHRoOiAxODVweDtcbn1cbi5zb25nIC5zb25nLWJveCAuc29uZy1jb21tZW5kIC5zYy1pbmNsb3VkIC5zYy1pbmNsb3VkLWl0ZW0gLnNjLWluY2xvdWQtcmlnaHQgZGl2Om50aC1jaGlsZCgxKSB7XG4gIGNvbG9yOiAjMjIyO1xufVxuLnNvbmcgLnNvbmctYm94IC5zb25nLWNvbW1lbmQgLnNjLWluY2xvdWQgLnNjLWluY2xvdWQtaXRlbSAuc2MtaW5jbG91ZC1yaWdodCBkaXY6bnRoLWNoaWxkKDEpOmhvdmVyLFxuLnNvbmcgLnNvbmctYm94IC5zb25nLWNvbW1lbmQgLnNjLWluY2xvdWQgLnNjLWluY2xvdWQtaXRlbSAuc2MtaW5jbG91ZC1yaWdodCBkaXY6bnRoLWNoaWxkKDIpOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uLWxpbmU6IHVuZGVybGluZTtcbiAgdGV4dC1kZWNvcmF0aW9uLXN0eWxlOiBzb2xpZDtcbiAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiAjNDQ0O1xufVxuLnNvbmcgLnNvbmctYm94IC5zb25nLWNvbW1lbmQgLnNjLWluY2xvdWQgLnNjLWluY2xvdWQtaXRlbSAuc2MtaW5jbG91ZC1yaWdodCBkaXY6bnRoLWNoaWxkKDIpIHtcbiAgY29sb3I6ICM2NjY7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xufVxuLnNvbmcgLnNvbmctYm94IC5zb25nLWNvbW1lbmQgLnNjLXNhbWUge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuLnNvbmcgLnNvbmctYm94IC5zb25nLWNvbW1lbmQgLnNjLXNhbWUgLnNjLXNhbWUtaXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogMTBweCAwO1xufVxuLnNvbmcgLnNvbmctYm94IC5zb25nLWNvbW1lbmQgLnNjLXNhbWUgLnNjLXNhbWUtaXRlbSAuc2Mtc2FtZS1pdGVtLWxlZnQge1xuICBmbGV4OiAxO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uc29uZyAuc29uZy1ib3ggLnNvbmctY29tbWVuZCAuc2Mtc2FtZSAuc2Mtc2FtZS1pdGVtIC5zYy1zYW1lLWl0ZW0tbGVmdCBkaXY6bnRoLWNoaWxkKDEpIHtcbiAgY29sb3I6ICMyMjI7XG59XG4uc29uZyAuc29uZy1ib3ggLnNvbmctY29tbWVuZCAuc2Mtc2FtZSAuc2Mtc2FtZS1pdGVtIC5zYy1zYW1lLWl0ZW0tbGVmdCBkaXY6bnRoLWNoaWxkKDIpIHtcbiAgY29sb3I6ICM2NjY7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xufVxuLnNvbmcgLnNvbmctYm94IC5zb25nLWNvbW1lbmQgLnNjLXNhbWUgLnNjLXNhbWUtaXRlbSAuc2Mtc2FtZS1pdGVtLXJpZ2h0IHtcbiAgd2lkdGg6IDNyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBjb2xvcjogIzY2NjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/components/song/song/song.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/components/song/song/song.component.ts ***!
  \**************************************************************/
/*! exports provided: SongComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SongComponent", function() { return SongComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/service.service */ "./src/app/services/service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




// 歌曲详情默认参数
var defaultSongDetail = {
    id: null,
    name: null,
    dt: null,
    mv: null,
    ar: {
        id: null,
        name: null,
    },
    al: {
        id: null,
        name: null,
        picUrl: null
    },
    lyric: [],
};
var SongComponent = /** @class */ (function () {
    function SongComponent(service, router, activatedRoute) {
        this.service = service;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.song = defaultSongDetail; // 歌曲信息
        this.hotComments = []; // 热门评论
        this.comments = []; // 评论
        this.showAllLyric = false; // 是否展开全部歌词
        this.sameSong = []; // 相似歌曲
        this.samePlayList = []; // 相似歌单
        this.currentPage = 1;
        this.lyric = [];
    }
    SongComponent.prototype.ngOnInit = function () {
        this.getSong();
    };
    // 获取歌曲信息
    SongComponent.prototype.getSong = function () {
        var _this = this;
        this.activatedRoute.queryParams.subscribe(function (params) {
            _this.service.song.getSongDetail(params.id).subscribe(function (detail) {
                _this.song = detail;
                if (detail.ar[0]) {
                    _this.song.ar = detail.ar[0];
                }
                // 获取歌词
                _this.service.song.getLyric(params.id).subscribe(function (lyric) {
                    _this.song.lyric = lyric;
                    _this.lyric = lyric.map(function (item) { return item.lyric; });
                });
                console.log("歌曲详情", _this.song);
            });
            // 获取评论
            _this.getComments(params.id, 0);
            // 获取相似歌单
            _this.service.song.getSamePlayList(params.id).subscribe(function (playlist) {
                _this.samePlayList = playlist;
            });
            // 获取相似的歌曲
            _this.service.song.getSameSong(params.id).subscribe(function (songs) {
                _this.sameSong = songs;
            });
        });
    };
    // 获取歌曲评论列表
    SongComponent.prototype.getComments = function (id, offset, before) {
        var _this = this;
        this.service.song.getComment({ id: id, offset: offset, limit: 20, before: before }).subscribe(function (res) {
            console.log(res);
            _this.commentTotal = res.total;
            _this.comments = res.comments;
            if (_this.hotComments.length == 0) {
                _this.hotComments = res.hotComments;
            }
        });
    };
    // 播放歌曲
    SongComponent.prototype.playSong = function () {
        var _this = this;
        var item = this.song;
        this.service.song.getSongUrl(item.id).subscribe(function (url) {
            console.log(url);
            var item = _this.song;
            _this.service.player.song = {
                id: item.id,
                url: url.url,
                size: item.dt,
                name: item.name,
                artist: item.ar.name,
                picUrl: item.al.picUrl,
                lyric: item.lyric,
            };
        });
        // 开始播放
        this.service.player.start = true;
    };
    // 跳转到歌单列表也年
    SongComponent.prototype.toPlayList = function (item) {
        this.router.navigate(['playlist'], { queryParams: { id: item.id } });
    };
    // 改变分页
    SongComponent.prototype.pageIndexChange = function (page) {
        var _this = this;
        // 获取评论
        this.activatedRoute.queryParams.subscribe(function (params) {
            _this.getComments(params.id, page - 1);
        });
    };
    // 跳转到专辑详情
    SongComponent.prototype.toAlbum = function (id) {
        this.router.navigate(['album'], { queryParams: { id: id } });
    };
    // 跳转到mv页面
    SongComponent.prototype.toMv = function () {
        this.router.navigate(['mv'], { queryParams: { id: this.song.id } });
    };
    // 跳转到用户详情页面
    SongComponent.prototype.toUser = function (id) {
        this.router.navigate(['user'], { queryParams: { id: id } });
    };
    // 跳转到艺人页面
    SongComponent.prototype.toArtist = function (id) {
        this.router.navigate(['artist'], { queryParams: { id: id } });
    };
    SongComponent.ctorParameters = function () { return [
        { type: src_app_services_service_service__WEBPACK_IMPORTED_MODULE_2__["ServiceService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('comment', { static: false })
    ], SongComponent.prototype, "commentEl", void 0);
    SongComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-song',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./song.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/song/song/song.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./song.component.scss */ "./src/app/pages/components/song/song/song.component.scss")).default]
        })
    ], SongComponent);
    return SongComponent;
}());



/***/ }),

/***/ "./src/app/pages/components/user/components/followeds/followeds/followeds.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/components/user/components/followeds/followeds/followeds.component.scss ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".content {\n  margin: 20px 40px 0 40px;\n}\n.content .title {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  border-bottom: 2px solid #ce1f08;\n  padding: 15px 0;\n}\n.content .list {\n  flex-wrap: wrap;\n}\n.content .list .item {\n  width: 50%;\n  padding: 20px;\n  border: 1px solid #f8f8f8;\n}\n.content .list .item .item-left {\n  width: 60px;\n  height: 60px;\n}\n.content .list .item .item-middle {\n  -webkit-box-flex: 1;\n          flex: 1;\n  margin: 0 10px;\n}\n.content .list .item .item-middle .nickname {\n  color: #0c73c2;\n  cursor: pointer;\n  font-weight: bold;\n}\n.content .list .item .item-middle .nickname:hover {\n  cursor: pointer;\n  -webkit-text-decoration-color: #0c73c2;\n          text-decoration-color: #0c73c2;\n  -webkit-text-decoration-line: underline;\n          text-decoration-line: underline;\n  -webkit-text-decoration-style: solid;\n          text-decoration-style: solid;\n}\n.content .list .item .item-middle .flex div {\n  margin-right: 10px;\n}\n.content .list .item .item-middle .flex div span:nth-child(2) {\n  margin-left: 2px;\n  color: #0c73c2;\n}\n.content .list .item .item-middle .flex div:hover {\n  cursor: pointer;\n  -webkit-text-decoration-color: #000;\n          text-decoration-color: #000;\n  -webkit-text-decoration-line: underline;\n          text-decoration-line: underline;\n  -webkit-text-decoration-style: solid;\n          text-decoration-style: solid;\n}\n.content .list .item .item-right .follow-button {\n  background-image: -webkit-gradient(linear, left top, left bottom, from(#0c73c2), to(#2092e9));\n  background-image: linear-gradient(#0c73c2, #2092e9);\n  color: #fff;\n  border-radius: 3px;\n  padding: 5px 10px;\n  border-bottom: 1px solid #0c73c2;\n  box-shadow: 0 1px 2px #2092e9;\n  cursor: pointer;\n}\n.content .list .item .item-right .follow-button i {\n  margin-right: 10px;\n}\n.content .list .item .item-right .follow-button:hover {\n  background-image: -webkit-gradient(linear, left top, left bottom, from(#2893e4), to(#2893e4));\n  background-image: linear-gradient(#2893e4, #2893e4);\n}\n.content .pagination {\n  margin-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zbWFsbHppcC9EZXNrdG9wL2FuZ3VsYXIvd2FuZ3lpeXVuLW11c2ljL3NyYy9hcHAvcGFnZXMvY29tcG9uZW50cy91c2VyL2NvbXBvbmVudHMvZm9sbG93ZWRzL2ZvbGxvd2Vkcy9mb2xsb3dlZHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2NvbXBvbmVudHMvdXNlci9jb21wb25lbnRzL2ZvbGxvd2Vkcy9mb2xsb3dlZHMvZm9sbG93ZWRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0JBQUE7QUNDRjtBREVFO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7RUFDQSxnQ0FBQTtFQUNBLGVBQUE7QUNBSjtBRElFO0VBQ0UsZUFBQTtBQ0ZKO0FESUk7RUFDRSxVQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0FDRk47QURJTTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDRlI7QURLTTtFQUNFLG1CQUFBO1VBQUEsT0FBQTtFQUNBLGNBQUE7QUNIUjtBRE1RO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0pWO0FET1E7RUFDRSxlQUFBO0VBQ0Esc0NBQUE7VUFBQSw4QkFBQTtFQUNBLHVDQUFBO1VBQUEsK0JBQUE7RUFDQSxvQ0FBQTtVQUFBLDRCQUFBO0FDTFY7QURTVTtFQUNFLGtCQUFBO0FDUFo7QURTWTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtBQ1BkO0FEV1U7RUFDRSxlQUFBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtFQUNBLHVDQUFBO1VBQUEsK0JBQUE7RUFDQSxvQ0FBQTtVQUFBLDRCQUFBO0FDVFo7QURnQlE7RUFDRSw2RkFBQTtFQUFBLG1EQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQ0FBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtBQ2RWO0FEZVU7RUFDRSxrQkFBQTtBQ2JaO0FEaUJRO0VBQ0UsNkZBQUE7RUFBQSxtREFBQTtBQ2ZWO0FEc0JFO0VBQ0UsZ0JBQUE7QUNwQkoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jb21wb25lbnRzL3VzZXIvY29tcG9uZW50cy9mb2xsb3dlZHMvZm9sbG93ZWRzL2ZvbGxvd2Vkcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50IHtcbiAgbWFyZ2luOiAyMHB4IDQwcHggMCA0MHB4O1xuXG4gIC8vIOeUteWPsOagh+mimFxuICAudGl0bGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNjZTFmMDg7XG4gICAgcGFkZGluZzogMTVweCAwO1xuICB9XG5cbiAgLy8g5YiX6KGoXG4gIC5saXN0IHtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG5cbiAgICAuaXRlbSB7XG4gICAgICB3aWR0aDogNTAlO1xuICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmOGY4Zjg7XG5cbiAgICAgIC5pdGVtLWxlZnQge1xuICAgICAgICB3aWR0aDogNjBweDtcbiAgICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgICAgfVxuXG4gICAgICAuaXRlbS1taWRkbGUge1xuICAgICAgICBmbGV4OiAxO1xuICAgICAgICBtYXJnaW46IDAgMTBweDtcblxuICAgICAgICAvLyDnlKjmiLflkI1cbiAgICAgICAgLm5pY2tuYW1lIHtcbiAgICAgICAgICBjb2xvcjogIzBjNzNjMjtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIH1cblxuICAgICAgICAubmlja25hbWU6aG92ZXIge1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb24tY29sb3I6ICMwYzczYzI7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uLWxpbmU6IHVuZGVybGluZTtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb24tc3R5bGU6IHNvbGlkO1xuICAgICAgICB9XG5cbiAgICAgICAgLmZsZXgge1xuICAgICAgICAgIGRpdiB7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG5cbiAgICAgICAgICAgIHNwYW46bnRoLWNoaWxkKDIpIHtcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDJweDtcbiAgICAgICAgICAgICAgY29sb3I6ICMwYzczYzI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZGl2OmhvdmVyIHtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogIzAwMDtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbi1saW5lOiB1bmRlcmxpbmU7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb24tc3R5bGU6IHNvbGlkO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyDlj7PovrnlhbPms6jmjInpkq5cbiAgICAgIC5pdGVtLXJpZ2h0IHtcbiAgICAgICAgLmZvbGxvdy1idXR0b24ge1xuICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgjMGM3M2MyLCAjMjA5MmU5KTtcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgICAgcGFkZGluZzogNXB4IDEwcHg7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwYzczYzI7XG4gICAgICAgICAgYm94LXNoYWRvdzogMCAxcHggMnB4ICMyMDkyZTk7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIGkge1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5mb2xsb3ctYnV0dG9uOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoIzI4OTNlNCwgIzI4OTNlNCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyDliIbpobVcbiAgLnBhZ2luYXRpb24ge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gIH1cbn1cbiIsIi5jb250ZW50IHtcbiAgbWFyZ2luOiAyMHB4IDQwcHggMCA0MHB4O1xufVxuLmNvbnRlbnQgLnRpdGxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2NlMWYwODtcbiAgcGFkZGluZzogMTVweCAwO1xufVxuLmNvbnRlbnQgLmxpc3Qge1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG4uY29udGVudCAubGlzdCAuaXRlbSB7XG4gIHdpZHRoOiA1MCU7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmOGY4Zjg7XG59XG4uY29udGVudCAubGlzdCAuaXRlbSAuaXRlbS1sZWZ0IHtcbiAgd2lkdGg6IDYwcHg7XG4gIGhlaWdodDogNjBweDtcbn1cbi5jb250ZW50IC5saXN0IC5pdGVtIC5pdGVtLW1pZGRsZSB7XG4gIGZsZXg6IDE7XG4gIG1hcmdpbjogMCAxMHB4O1xufVxuLmNvbnRlbnQgLmxpc3QgLml0ZW0gLml0ZW0tbWlkZGxlIC5uaWNrbmFtZSB7XG4gIGNvbG9yOiAjMGM3M2MyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmNvbnRlbnQgLmxpc3QgLml0ZW0gLml0ZW0tbWlkZGxlIC5uaWNrbmFtZTpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiAjMGM3M2MyO1xuICB0ZXh0LWRlY29yYXRpb24tbGluZTogdW5kZXJsaW5lO1xuICB0ZXh0LWRlY29yYXRpb24tc3R5bGU6IHNvbGlkO1xufVxuLmNvbnRlbnQgLmxpc3QgLml0ZW0gLml0ZW0tbWlkZGxlIC5mbGV4IGRpdiB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbi5jb250ZW50IC5saXN0IC5pdGVtIC5pdGVtLW1pZGRsZSAuZmxleCBkaXYgc3BhbjpudGgtY2hpbGQoMikge1xuICBtYXJnaW4tbGVmdDogMnB4O1xuICBjb2xvcjogIzBjNzNjMjtcbn1cbi5jb250ZW50IC5saXN0IC5pdGVtIC5pdGVtLW1pZGRsZSAuZmxleCBkaXY6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogIzAwMDtcbiAgdGV4dC1kZWNvcmF0aW9uLWxpbmU6IHVuZGVybGluZTtcbiAgdGV4dC1kZWNvcmF0aW9uLXN0eWxlOiBzb2xpZDtcbn1cbi5jb250ZW50IC5saXN0IC5pdGVtIC5pdGVtLXJpZ2h0IC5mb2xsb3ctYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCMwYzczYzIsICMyMDkyZTkpO1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwYzczYzI7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDJweCAjMjA5MmU5O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uY29udGVudCAubGlzdCAuaXRlbSAuaXRlbS1yaWdodCAuZm9sbG93LWJ1dHRvbiBpIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuLmNvbnRlbnQgLmxpc3QgLml0ZW0gLml0ZW0tcmlnaHQgLmZvbGxvdy1idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoIzI4OTNlNCwgIzI4OTNlNCk7XG59XG4uY29udGVudCAucGFnaW5hdGlvbiB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/components/user/components/followeds/followeds/followeds.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/components/user/components/followeds/followeds/followeds.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: FollowedsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FollowedsComponent", function() { return FollowedsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var FollowedsComponent = /** @class */ (function () {
    function FollowedsComponent(router) {
        this.router = router;
        this.followeds = [];
        this.total = 0;
        this.currentPage = 1;
        this.changPage = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    FollowedsComponent.prototype.ngOnInit = function () {
    };
    // 切换页面
    FollowedsComponent.prototype.nzPageIndexChange = function (page) {
        this.changPage.emit(page);
    };
    // 跳转到用户页面
    FollowedsComponent.prototype.toUser = function (item, index) {
        if (index === void 0) { index = 0; }
        this.router.navigate(['user'], { queryParams: { id: item.userId, index: index } });
    };
    FollowedsComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], FollowedsComponent.prototype, "followeds", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], FollowedsComponent.prototype, "total", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], FollowedsComponent.prototype, "changPage", void 0);
    FollowedsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-followeds',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./followeds.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/user/components/followeds/followeds/followeds.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./followeds.component.scss */ "./src/app/pages/components/user/components/followeds/followeds/followeds.component.scss")).default]
        })
    ], FollowedsComponent);
    return FollowedsComponent;
}());



/***/ }),

/***/ "./src/app/pages/components/user/components/follows/follows/follows.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/components/user/components/follows/follows/follows.component.scss ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".content {\n  margin: 20px 40px 0 40px;\n}\n.content .title {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  border-bottom: 2px solid #ce1f08;\n  padding: 15px 0;\n}\n.content .list {\n  flex-wrap: wrap;\n}\n.content .list .item {\n  width: 50%;\n  padding: 20px;\n  border: 1px solid #f8f8f8;\n}\n.content .list .item .item-left {\n  width: 60px;\n  height: 60px;\n}\n.content .list .item .item-middle {\n  -webkit-box-flex: 1;\n          flex: 1;\n  margin: 0 10px;\n}\n.content .list .item .item-middle .nickname {\n  color: #0c73c2;\n  cursor: pointer;\n  font-weight: bold;\n}\n.content .list .item .item-middle .nickname:hover {\n  cursor: pointer;\n  -webkit-text-decoration-color: #0c73c2;\n          text-decoration-color: #0c73c2;\n  -webkit-text-decoration-line: underline;\n          text-decoration-line: underline;\n  -webkit-text-decoration-style: solid;\n          text-decoration-style: solid;\n}\n.content .list .item .item-middle .flex div {\n  margin-right: 10px;\n}\n.content .list .item .item-middle .flex div span:nth-child(2) {\n  margin-left: 2px;\n  color: #0c73c2;\n}\n.content .list .item .item-middle .flex div:hover {\n  cursor: pointer;\n  -webkit-text-decoration-color: #000;\n          text-decoration-color: #000;\n  -webkit-text-decoration-line: underline;\n          text-decoration-line: underline;\n  -webkit-text-decoration-style: solid;\n          text-decoration-style: solid;\n}\n.content .list .item .item-right .follow-button {\n  background-image: -webkit-gradient(linear, left top, left bottom, from(#0c73c2), to(#2092e9));\n  background-image: linear-gradient(#0c73c2, #2092e9);\n  color: #fff;\n  border-radius: 3px;\n  padding: 5px 10px;\n  border-bottom: 1px solid #0c73c2;\n  box-shadow: 0 1px 2px #2092e9;\n  cursor: pointer;\n}\n.content .list .item .item-right .follow-button i {\n  margin-right: 10px;\n}\n.content .list .item .item-right .follow-button:hover {\n  background-image: -webkit-gradient(linear, left top, left bottom, from(#2893e4), to(#2893e4));\n  background-image: linear-gradient(#2893e4, #2893e4);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zbWFsbHppcC9EZXNrdG9wL2FuZ3VsYXIvd2FuZ3lpeXVuLW11c2ljL3NyYy9hcHAvcGFnZXMvY29tcG9uZW50cy91c2VyL2NvbXBvbmVudHMvZm9sbG93cy9mb2xsb3dzL2ZvbGxvd3MuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2NvbXBvbmVudHMvdXNlci9jb21wb25lbnRzL2ZvbGxvd3MvZm9sbG93cy9mb2xsb3dzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0JBQUE7QUNDRjtBREVFO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7RUFDQSxnQ0FBQTtFQUNBLGVBQUE7QUNBSjtBRElFO0VBQ0UsZUFBQTtBQ0ZKO0FESUk7RUFDRSxVQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0FDRk47QURJTTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDRlI7QURLTTtFQUNFLG1CQUFBO1VBQUEsT0FBQTtFQUNBLGNBQUE7QUNIUjtBRE1RO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0pWO0FET1E7RUFDRSxlQUFBO0VBQ0Esc0NBQUE7VUFBQSw4QkFBQTtFQUNBLHVDQUFBO1VBQUEsK0JBQUE7RUFDQSxvQ0FBQTtVQUFBLDRCQUFBO0FDTFY7QURTVTtFQUNFLGtCQUFBO0FDUFo7QURTWTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtBQ1BkO0FEV1U7RUFDRSxlQUFBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtFQUNBLHVDQUFBO1VBQUEsK0JBQUE7RUFDQSxvQ0FBQTtVQUFBLDRCQUFBO0FDVFo7QURnQlE7RUFDRSw2RkFBQTtFQUFBLG1EQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQ0FBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtBQ2RWO0FEZVU7RUFDRSxrQkFBQTtBQ2JaO0FEaUJRO0VBQ0UsNkZBQUE7RUFBQSxtREFBQTtBQ2ZWIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY29tcG9uZW50cy91c2VyL2NvbXBvbmVudHMvZm9sbG93cy9mb2xsb3dzL2ZvbGxvd3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudCB7XG4gIG1hcmdpbjogMjBweCA0MHB4IDAgNDBweDtcblxuICAvLyDnlLXlj7DmoIfpophcbiAgLnRpdGxlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjY2UxZjA4O1xuICAgIHBhZGRpbmc6IDE1cHggMDtcbiAgfVxuXG4gIC8vIOWIl+ihqFxuICAubGlzdCB7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuXG4gICAgLml0ZW0ge1xuICAgICAgd2lkdGg6IDUwJTtcbiAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZjhmOGY4O1xuXG4gICAgICAuaXRlbS1sZWZ0IHtcbiAgICAgICAgd2lkdGg6IDYwcHg7XG4gICAgICAgIGhlaWdodDogNjBweDtcbiAgICAgIH1cblxuICAgICAgLml0ZW0tbWlkZGxlIHtcbiAgICAgICAgZmxleDogMTtcbiAgICAgICAgbWFyZ2luOiAwIDEwcHg7XG5cbiAgICAgICAgLy8g55So5oi35ZCNXG4gICAgICAgIC5uaWNrbmFtZSB7XG4gICAgICAgICAgY29sb3I6ICMwYzczYzI7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICB9XG5cbiAgICAgICAgLm5pY2tuYW1lOmhvdmVyIHtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiAjMGM3M2MyO1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbi1saW5lOiB1bmRlcmxpbmU7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uLXN0eWxlOiBzb2xpZDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5mbGV4IHtcbiAgICAgICAgICBkaXYge1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuXG4gICAgICAgICAgICBzcGFuOm50aC1jaGlsZCgyKSB7XG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAycHg7XG4gICAgICAgICAgICAgIGNvbG9yOiAjMGM3M2MyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGRpdjpob3ZlciB7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb24tY29sb3I6ICMwMDA7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb24tbGluZTogdW5kZXJsaW5lO1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uLXN0eWxlOiBzb2xpZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8g5Y+z6L655YWz5rOo5oyJ6ZKuXG4gICAgICAuaXRlbS1yaWdodCB7XG4gICAgICAgIC5mb2xsb3ctYnV0dG9uIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoIzBjNzNjMiwgIzIwOTJlOSk7XG4gICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMGM3M2MyO1xuICAgICAgICAgIGJveC1zaGFkb3c6IDAgMXB4IDJweCAjMjA5MmU5O1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICBpIHtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuZm9sbG93LWJ1dHRvbjpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCMyODkzZTQsICMyODkzZTQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCIuY29udGVudCB7XG4gIG1hcmdpbjogMjBweCA0MHB4IDAgNDBweDtcbn1cbi5jb250ZW50IC50aXRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNjZTFmMDg7XG4gIHBhZGRpbmc6IDE1cHggMDtcbn1cbi5jb250ZW50IC5saXN0IHtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuLmNvbnRlbnQgLmxpc3QgLml0ZW0ge1xuICB3aWR0aDogNTAlO1xuICBwYWRkaW5nOiAyMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZjhmOGY4O1xufVxuLmNvbnRlbnQgLmxpc3QgLml0ZW0gLml0ZW0tbGVmdCB7XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDYwcHg7XG59XG4uY29udGVudCAubGlzdCAuaXRlbSAuaXRlbS1taWRkbGUge1xuICBmbGV4OiAxO1xuICBtYXJnaW46IDAgMTBweDtcbn1cbi5jb250ZW50IC5saXN0IC5pdGVtIC5pdGVtLW1pZGRsZSAubmlja25hbWUge1xuICBjb2xvcjogIzBjNzNjMjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5jb250ZW50IC5saXN0IC5pdGVtIC5pdGVtLW1pZGRsZSAubmlja25hbWU6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogIzBjNzNjMjtcbiAgdGV4dC1kZWNvcmF0aW9uLWxpbmU6IHVuZGVybGluZTtcbiAgdGV4dC1kZWNvcmF0aW9uLXN0eWxlOiBzb2xpZDtcbn1cbi5jb250ZW50IC5saXN0IC5pdGVtIC5pdGVtLW1pZGRsZSAuZmxleCBkaXYge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG4uY29udGVudCAubGlzdCAuaXRlbSAuaXRlbS1taWRkbGUgLmZsZXggZGl2IHNwYW46bnRoLWNoaWxkKDIpIHtcbiAgbWFyZ2luLWxlZnQ6IDJweDtcbiAgY29sb3I6ICMwYzczYzI7XG59XG4uY29udGVudCAubGlzdCAuaXRlbSAuaXRlbS1taWRkbGUgLmZsZXggZGl2OmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LWRlY29yYXRpb24tY29sb3I6ICMwMDA7XG4gIHRleHQtZGVjb3JhdGlvbi1saW5lOiB1bmRlcmxpbmU7XG4gIHRleHQtZGVjb3JhdGlvbi1zdHlsZTogc29saWQ7XG59XG4uY29udGVudCAubGlzdCAuaXRlbSAuaXRlbS1yaWdodCAuZm9sbG93LWJ1dHRvbiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgjMGM3M2MyLCAjMjA5MmU5KTtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMGM3M2MyO1xuICBib3gtc2hhZG93OiAwIDFweCAycHggIzIwOTJlOTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmNvbnRlbnQgLmxpc3QgLml0ZW0gLml0ZW0tcmlnaHQgLmZvbGxvdy1idXR0b24gaSB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbi5jb250ZW50IC5saXN0IC5pdGVtIC5pdGVtLXJpZ2h0IC5mb2xsb3ctYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCMyODkzZTQsICMyODkzZTQpO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/components/user/components/follows/follows/follows.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/components/user/components/follows/follows/follows.component.ts ***!
  \***************************************************************************************/
/*! exports provided: FollowsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FollowsComponent", function() { return FollowsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var FollowsComponent = /** @class */ (function () {
    function FollowsComponent(router) {
        this.router = router;
        this.follows = [];
        this.total = 0;
    }
    FollowsComponent.prototype.ngOnInit = function () {
    };
    // 跳转到用户页面
    FollowsComponent.prototype.toUser = function (item, index) {
        if (index === void 0) { index = 0; }
        this.router.navigate(['user'], { queryParams: { id: item.userId, index: index } });
    };
    FollowsComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], FollowsComponent.prototype, "follows", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], FollowsComponent.prototype, "total", void 0);
    FollowsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-follows',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./follows.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/user/components/follows/follows/follows.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./follows.component.scss */ "./src/app/pages/components/user/components/follows/follows/follows.component.scss")).default]
        })
    ], FollowsComponent);
    return FollowsComponent;
}());



/***/ }),

/***/ "./src/app/pages/components/user/components/index/index/index.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/components/user/components/index/index/index.component.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".uc-dj {\n  margin: 20px 40px 0 40px;\n}\n.uc-dj .uc-dj-title {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  border-bottom: 2px solid #ce1f08;\n  padding: 15px 0;\n}\n.uc-dj .uc-dj-item {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  border: 1px solid #eee;\n  padding: 5px 15px;\n}\n.uc-dj .uc-dj-item .uc-dj-item-img {\n  width: 80px;\n  cursor: pointer;\n}\n.uc-dj .uc-dj-item .uc-dj-item-name {\n  -webkit-box-flex: 1;\n          flex: 1;\n  color: #333;\n}\n.uc-dj .uc-dj-item .uc-dj-item-name span {\n  cursor: pointer;\n}\n.uc-dj .uc-dj-item .uc-dj-item-name > span:hover {\n  -webkit-text-decoration-color: #000;\n          text-decoration-color: #000;\n  -webkit-text-decoration-line: underline;\n          text-decoration-line: underline;\n  -webkit-text-decoration-style: solid;\n          text-decoration-style: solid;\n}\n.uc-dj .uc-dj-item .uc-dj-item-read {\n  width: 150px;\n  font-size: 0.8rem;\n}\n.uc-dj .uc-dj-item .uc-dj-item-date {\n  font-size: 0.8rem;\n}\n.uc-dj .uc-dj-item:hover {\n  background-color: rgba(0, 0, 0, 0.1);\n}\n.favo-sheet {\n  margin: 20px 40px 0 0;\n}\n.favo-sheet .favo-sheet-title {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  border-bottom: 2px solid #ce1f08;\n  padding: 15px 0;\n  margin-left: 40px;\n}\n.favo-sheet .fs-list {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n}\n.favo-sheet .fs-list .fs-item {\n  margin: 15px 0 0 48px;\n}\n.favo-sheet .fs-list .fs-item .fs-box {\n  width: 140px;\n  height: 140px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: end;\n          align-items: flex-end;\n  background-image: url('logo.jpg');\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n.favo-sheet .fs-list .fs-item .fs-box .fs-bottom {\n  width: 140px;\n  background-color: rgba(0, 0, 0, 0.4);\n  padding: 0 5px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  color: #fff;\n  font-size: 0.8rem;\n}\n.favo-sheet .fs-list .fs-item .fs-box .fs-bottom .fs-bottom-left {\n  height: 25px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  z-index: 100;\n}\n.favo-sheet .fs-list .fs-item .fs-box .fs-bottom .fs-bottom-left i {\n  margin: 0 5px 3px 0;\n}\n.favo-sheet .fs-list .fs-item .fs-box .fs-bottom .fs-bottom-right {\n  margin: 3px 0 0 0;\n}\n.favo-sheet .fs-list .fs-item .fs-box .fs-bottom .fs-bottom-right i {\n  font-size: 1rem;\n  color: #ccc;\n  cursor: pointer;\n}\n.favo-sheet .fs-list .fs-item .fs-box .fs-bottom .fs-bottom-right i:hover {\n  color: #fff;\n}\n.favo-sheet .fs-list .fs-desc {\n  color: #000;\n  height: 20px;\n  margin: 10px 0;\n  width: 140px;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  cursor: pointer;\n}\n.favo-sheet .fs-list .fs-desc:hover {\n  -webkit-text-decoration-color: #000;\n          text-decoration-color: #000;\n  -webkit-text-decoration-line: underline;\n          text-decoration-line: underline;\n  -webkit-text-decoration-style: solid;\n          text-decoration-style: solid;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zbWFsbHppcC9EZXNrdG9wL2FuZ3VsYXIvd2FuZ3lpeXVuLW11c2ljL3NyYy9hcHAvcGFnZXMvY29tcG9uZW50cy91c2VyL2NvbXBvbmVudHMvaW5kZXgvaW5kZXgvaW5kZXguY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2NvbXBvbmVudHMvdXNlci9jb21wb25lbnRzL2luZGV4L2luZGV4L2luZGV4LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0Usd0JBQUE7QUNBRjtBREdFO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7RUFDQSxnQ0FBQTtFQUNBLGVBQUE7QUNESjtBRElFO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7QUNGSjtBRElJO0VBQ0UsV0FBQTtFQUNBLGVBQUE7QUNGTjtBREtJO0VBQ0UsbUJBQUE7VUFBQSxPQUFBO0VBQ0EsV0FBQTtBQ0hOO0FES007RUFDRSxlQUFBO0FDSFI7QURPSTtFQUNFLG1DQUFBO1VBQUEsMkJBQUE7RUFDQSx1Q0FBQTtVQUFBLCtCQUFBO0VBQ0Esb0NBQUE7VUFBQSw0QkFBQTtBQ0xOO0FEUUk7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7QUNOTjtBRFNJO0VBQ0UsaUJBQUE7QUNQTjtBRFdFO0VBQ0Usb0NBQUE7QUNUSjtBRGNBO0VBQ0UscUJBQUE7QUNYRjtBRGNFO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7RUFDQSxnQ0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ1pKO0FEZ0JFO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsZUFBQTtBQ2RKO0FEZ0JJO0VBQ0UscUJBQUE7QUNkTjtBRGlCTTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtFQUNBLHNCQUFBO1VBQUEscUJBQUE7RUFDQSxpQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7QUNmUjtBRGlCUTtFQUNFLFlBQUE7RUFDQSxvQ0FBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQ2ZWO0FEaUJVO0VBQ0UsWUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxZQUFBO0FDZlo7QURnQlk7RUFDRSxtQkFBQTtBQ2RkO0FEa0JVO0VBQ0UsaUJBQUE7QUNoQlo7QURpQlk7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUNmZDtBRGtCWTtFQUNFLFdBQUE7QUNoQmQ7QUR1Qkk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ3JCTjtBRHVCSTtFQUNFLG1DQUFBO1VBQUEsMkJBQUE7RUFDQSx1Q0FBQTtVQUFBLCtCQUFBO0VBQ0Esb0NBQUE7VUFBQSw0QkFBQTtBQ3JCTiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbXBvbmVudHMvdXNlci9jb21wb25lbnRzL2luZGV4L2luZGV4L2luZGV4LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8g55S15Y+wXG4udWMtZGoge1xuICBtYXJnaW46IDIwcHggNDBweCAwIDQwcHg7XG5cbiAgLy8g55S15Y+w5qCH6aKYXG4gIC51Yy1kai10aXRsZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2NlMWYwODtcbiAgICBwYWRkaW5nOiAxNXB4IDA7XG4gIH1cblxuICAudWMtZGotaXRlbSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XG4gICAgcGFkZGluZzogNXB4IDE1cHg7XG5cbiAgICAudWMtZGotaXRlbS1pbWcge1xuICAgICAgd2lkdGg6IDgwcHg7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuXG4gICAgLnVjLWRqLWl0ZW0tbmFtZSB7XG4gICAgICBmbGV4OiAxO1xuICAgICAgY29sb3I6ICMzMzM7XG5cbiAgICAgIHNwYW4ge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnVjLWRqLWl0ZW0tbmFtZSA+IHNwYW46aG92ZXIge1xuICAgICAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiAjMDAwO1xuICAgICAgdGV4dC1kZWNvcmF0aW9uLWxpbmU6IHVuZGVybGluZTtcbiAgICAgIHRleHQtZGVjb3JhdGlvbi1zdHlsZTogc29saWQ7XG4gICAgfVxuXG4gICAgLnVjLWRqLWl0ZW0tcmVhZCB7XG4gICAgICB3aWR0aDogMTUwcHg7XG4gICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICB9XG5cbiAgICAudWMtZGotaXRlbS1kYXRlIHtcbiAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgIH1cbiAgfVxuXG4gIC51Yy1kai1pdGVtOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIH1cbn1cblxuLy8g5pS26JeP55qE5q2M5Y2VXG4uZmF2by1zaGVldCB7XG4gIG1hcmdpbjogMjBweCA0MHB4IDAgMDtcblxuICAvLyDmoIfpophcbiAgLmZhdm8tc2hlZXQtdGl0bGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNjZTFmMDg7XG4gICAgcGFkZGluZzogMTVweCAwO1xuICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xuICB9XG5cbiAgLy8g5YiX6KGoXG4gIC5mcy1saXN0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcblxuICAgIC5mcy1pdGVtIHtcbiAgICAgIG1hcmdpbjogMTVweCAwIDAgNDhweDtcblxuICAgICAgLy8g5Lit6Ze055qE5Zu+54mH5qGGXG4gICAgICAuZnMtYm94IHtcbiAgICAgICAgd2lkdGg6IDE0MHB4O1xuICAgICAgICBoZWlnaHQ6IDE0MHB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYXNzZXRzLy9pbWFnZXMvbG9nby5qcGdcIik7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG5cbiAgICAgICAgLmZzLWJvdHRvbSB7XG4gICAgICAgICAgd2lkdGg6IDE0MHB4O1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgICAgICAgICBwYWRkaW5nOiAwIDVweDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuXG4gICAgICAgICAgLmZzLWJvdHRvbS1sZWZ0IHtcbiAgICAgICAgICAgIGhlaWdodDogMjVweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgei1pbmRleDogMTAwO1xuICAgICAgICAgICAgaSB7XG4gICAgICAgICAgICAgIG1hcmdpbjogMCA1cHggM3B4IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmZzLWJvdHRvbS1yaWdodCB7XG4gICAgICAgICAgICBtYXJnaW46IDNweCAwIDAgMDtcbiAgICAgICAgICAgIGkge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgICAgIGNvbG9yOiAjY2NjO1xuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGk6aG92ZXIge1xuICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgLy8g5o+P6L+wXG4gICAgLmZzLWRlc2Mge1xuICAgICAgY29sb3I6ICMwMDA7XG4gICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICBtYXJnaW46IDEwcHggMDtcbiAgICAgIHdpZHRoOiAxNDBweDtcbiAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuICAgIC5mcy1kZXNjOmhvdmVyIHtcbiAgICAgIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogIzAwMDtcbiAgICAgIHRleHQtZGVjb3JhdGlvbi1saW5lOiB1bmRlcmxpbmU7XG4gICAgICB0ZXh0LWRlY29yYXRpb24tc3R5bGU6IHNvbGlkO1xuICAgIH1cbiAgfVxufVxuIiwiLnVjLWRqIHtcbiAgbWFyZ2luOiAyMHB4IDQwcHggMCA0MHB4O1xufVxuLnVjLWRqIC51Yy1kai10aXRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNjZTFmMDg7XG4gIHBhZGRpbmc6IDE1cHggMDtcbn1cbi51Yy1kaiAudWMtZGotaXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XG4gIHBhZGRpbmc6IDVweCAxNXB4O1xufVxuLnVjLWRqIC51Yy1kai1pdGVtIC51Yy1kai1pdGVtLWltZyB7XG4gIHdpZHRoOiA4MHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4udWMtZGogLnVjLWRqLWl0ZW0gLnVjLWRqLWl0ZW0tbmFtZSB7XG4gIGZsZXg6IDE7XG4gIGNvbG9yOiAjMzMzO1xufVxuLnVjLWRqIC51Yy1kai1pdGVtIC51Yy1kai1pdGVtLW5hbWUgc3BhbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi51Yy1kaiAudWMtZGotaXRlbSAudWMtZGotaXRlbS1uYW1lID4gc3Bhbjpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogIzAwMDtcbiAgdGV4dC1kZWNvcmF0aW9uLWxpbmU6IHVuZGVybGluZTtcbiAgdGV4dC1kZWNvcmF0aW9uLXN0eWxlOiBzb2xpZDtcbn1cbi51Yy1kaiAudWMtZGotaXRlbSAudWMtZGotaXRlbS1yZWFkIHtcbiAgd2lkdGg6IDE1MHB4O1xuICBmb250LXNpemU6IDAuOHJlbTtcbn1cbi51Yy1kaiAudWMtZGotaXRlbSAudWMtZGotaXRlbS1kYXRlIHtcbiAgZm9udC1zaXplOiAwLjhyZW07XG59XG4udWMtZGogLnVjLWRqLWl0ZW06aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbi5mYXZvLXNoZWV0IHtcbiAgbWFyZ2luOiAyMHB4IDQwcHggMCAwO1xufVxuLmZhdm8tc2hlZXQgLmZhdm8tc2hlZXQtdGl0bGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjY2UxZjA4O1xuICBwYWRkaW5nOiAxNXB4IDA7XG4gIG1hcmdpbi1sZWZ0OiA0MHB4O1xufVxuLmZhdm8tc2hlZXQgLmZzLWxpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG4uZmF2by1zaGVldCAuZnMtbGlzdCAuZnMtaXRlbSB7XG4gIG1hcmdpbjogMTVweCAwIDAgNDhweDtcbn1cbi5mYXZvLXNoZWV0IC5mcy1saXN0IC5mcy1pdGVtIC5mcy1ib3gge1xuICB3aWR0aDogMTQwcHg7XG4gIGhlaWdodDogMTQwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9hc3NldHMvL2ltYWdlcy9sb2dvLmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cbi5mYXZvLXNoZWV0IC5mcy1saXN0IC5mcy1pdGVtIC5mcy1ib3ggLmZzLWJvdHRvbSB7XG4gIHdpZHRoOiAxNDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xuICBwYWRkaW5nOiAwIDVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAwLjhyZW07XG59XG4uZmF2by1zaGVldCAuZnMtbGlzdCAuZnMtaXRlbSAuZnMtYm94IC5mcy1ib3R0b20gLmZzLWJvdHRvbS1sZWZ0IHtcbiAgaGVpZ2h0OiAyNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB6LWluZGV4OiAxMDA7XG59XG4uZmF2by1zaGVldCAuZnMtbGlzdCAuZnMtaXRlbSAuZnMtYm94IC5mcy1ib3R0b20gLmZzLWJvdHRvbS1sZWZ0IGkge1xuICBtYXJnaW46IDAgNXB4IDNweCAwO1xufVxuLmZhdm8tc2hlZXQgLmZzLWxpc3QgLmZzLWl0ZW0gLmZzLWJveCAuZnMtYm90dG9tIC5mcy1ib3R0b20tcmlnaHQge1xuICBtYXJnaW46IDNweCAwIDAgMDtcbn1cbi5mYXZvLXNoZWV0IC5mcy1saXN0IC5mcy1pdGVtIC5mcy1ib3ggLmZzLWJvdHRvbSAuZnMtYm90dG9tLXJpZ2h0IGkge1xuICBmb250LXNpemU6IDFyZW07XG4gIGNvbG9yOiAjY2NjO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uZmF2by1zaGVldCAuZnMtbGlzdCAuZnMtaXRlbSAuZnMtYm94IC5mcy1ib3R0b20gLmZzLWJvdHRvbS1yaWdodCBpOmhvdmVyIHtcbiAgY29sb3I6ICNmZmY7XG59XG4uZmF2by1zaGVldCAuZnMtbGlzdCAuZnMtZGVzYyB7XG4gIGNvbG9yOiAjMDAwO1xuICBoZWlnaHQ6IDIwcHg7XG4gIG1hcmdpbjogMTBweCAwO1xuICB3aWR0aDogMTQwcHg7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uZmF2by1zaGVldCAuZnMtbGlzdCAuZnMtZGVzYzpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogIzAwMDtcbiAgdGV4dC1kZWNvcmF0aW9uLWxpbmU6IHVuZGVybGluZTtcbiAgdGV4dC1kZWNvcmF0aW9uLXN0eWxlOiBzb2xpZDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/components/user/components/index/index/index.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/components/user/components/index/index/index.component.ts ***!
  \*********************************************************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var IndexComponent = /** @class */ (function () {
    function IndexComponent(router) {
        this.router = router;
        this.userFavoPlaylist = [];
        this.userCreatePlaylist = [];
    }
    IndexComponent.prototype.ngOnInit = function () {
    };
    // 跳转到歌单详情页面
    IndexComponent.prototype.toPlaylist = function (item) {
        this.router.navigate(['playlist'], { queryParams: { id: item.id } });
    };
    IndexComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], IndexComponent.prototype, "userDj", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], IndexComponent.prototype, "userinfo", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], IndexComponent.prototype, "userFavoPlaylist", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], IndexComponent.prototype, "userCreatePlaylist", void 0);
    IndexComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-index',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./index.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/user/components/index/index/index.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./index.component.scss */ "./src/app/pages/components/user/components/index/index/index.component.scss")).default]
        })
    ], IndexComponent);
    return IndexComponent;
}());



/***/ }),

/***/ "./src/app/pages/components/user/user/user.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/pages/components/user/user/user.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".user {\n  background-color: #f1f1f1;\n  font-size: 0.9rem;\n}\n.user .user-content {\n  width: 980px;\n  margin: 0 auto;\n  background-color: #fff;\n}\n.user .user-content .uc-header {\n  display: -webkit-box;\n  display: flex;\n  padding: 20px 40px 0 40px;\n}\n.user .user-content .uc-header .uc-header-left div {\n  width: 200px;\n  height: 200px;\n}\n.user .user-content .uc-header .uc-header-right {\n  -webkit-box-flex: 1;\n          flex: 1;\n  margin-left: 20px;\n}\n.user .user-content .uc-header .uc-header-right .uc-name {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  margin: 0 0 10px 0;\n  padding-bottom: 20px;\n  border-bottom: 1px solid #ccc;\n}\n.user .user-content .uc-header .uc-header-right .uc-name h2 {\n  margin-right: 20px;\n}\n.user .user-content .uc-header .uc-header-right .uc-name .uc-name-lv {\n  margin-left: 20px;\n  position: relative;\n}\n.user .user-content .uc-header .uc-header-right .uc-name .uc-name-lv .uc-name-lv-tag {\n  background: url('icon2.png') no-repeat 0 9999px;\n  height: 19px;\n  width: 70px;\n  background-position: -135px -190px;\n  display: inline-block;\n  overflow: hidden;\n}\n.user .user-content .uc-header .uc-header-right .uc-name .uc-name-lv .uc-name-lv-lv {\n  position: absolute;\n  left: 30px;\n  top: -1px;\n  font-weight: bold;\n  color: #e03a24;\n}\n.user .user-content .uc-header .uc-header-right .uc-name .uc-name-tag {\n  background: url('icon.png') no-repeat 0 9999px;\n  width: 20px;\n  height: 20px;\n  background-position: -41px -57px;\n  display: inline-block;\n  overflow: hidden;\n}\n.user .user-content .uc-header .uc-header-right .uc-name div {\n  margin-left: 20px;\n}\n.user .user-content .uc-header .uc-header-right .uc-name .uc-name-mf {\n  padding: 5px 10px;\n  box-shadow: 0 0 2px #eee;\n  border-radius: 4px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.user .user-content .uc-header .uc-header-right .uc-name .uc-name-mf i {\n  margin-right: 5px;\n}\n.user .user-content .uc-header .uc-header-right .uc-name .uc-name-msg {\n  border: 1px solid #ccc;\n  background-color: #f1f1f1;\n  color: #444;\n}\n.user .user-content .uc-header .uc-header-right .uc-name .uc-name-follow {\n  background-color: #3f8dd7;\n  color: #fff;\n}\n.user .user-content .uc-header .uc-header-right .uc-info {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.user .user-content .uc-header .uc-header-right .uc-info .uc-num {\n  width: 100px;\n  border-right: 1px solid #eee;\n  color: #666;\n  cursor: pointer;\n}\n.user .user-content .uc-header .uc-header-right .uc-info .uc-num .uc-item-title {\n  font-size: 1.3rem;\n  font-weight: bold;\n}\n.user .user-content .uc-header .uc-header-right .uc-info .uc-num .uc-item-desc {\n  font-size: 0.8rem;\n}\n.user .user-content .uc-header .uc-header-right .uc-user-desc {\n  margin-top: 20px;\n  color: #666;\n}\n.user .user-content .uc-header .uc-header-right .uc-user-desc span {\n  padding-left: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zbWFsbHppcC9EZXNrdG9wL2FuZ3VsYXIvd2FuZ3lpeXVuLW11c2ljL3NyYy9hcHAvcGFnZXMvY29tcG9uZW50cy91c2VyL3VzZXIvdXNlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvY29tcG9uZW50cy91c2VyL3VzZXIvdXNlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0VBQ0EsaUJBQUE7QUNDRjtBRENFO0VBQ0UsWUFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtBQ0NKO0FEQ0k7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtBQ0NOO0FERVE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtBQ0FWO0FESU07RUFDRSxtQkFBQTtVQUFBLE9BQUE7RUFDQSxpQkFBQTtBQ0ZSO0FESVE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLDZCQUFBO0FDRlY7QURJVTtFQUNFLGtCQUFBO0FDRlo7QURNVTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7QUNKWjtBRE1ZO0VBQ0UsK0NBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtDQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQ0pkO0FET1k7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDTGQ7QURVVTtFQUNFLDhDQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUNSWjtBRFdVO0VBQ0UsaUJBQUE7QUNUWjtBRFlVO0VBQ0UsaUJBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ1ZaO0FEV1k7RUFDRSxpQkFBQTtBQ1RkO0FEY1U7RUFDRSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtBQ1paO0FEZ0JVO0VBQ0UseUJBQUE7RUFDQSxXQUFBO0FDZFo7QURtQlE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDakJWO0FEbUJVO0VBQ0UsWUFBQTtFQUNBLDRCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUNqQlo7QURtQlk7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0FDakJkO0FEb0JZO0VBQ0UsaUJBQUE7QUNsQmQ7QUR3QlE7RUFDRSxnQkFBQTtFQUNBLFdBQUE7QUN0QlY7QUR3QlU7RUFDRSxpQkFBQTtBQ3RCWiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbXBvbmVudHMvdXNlci91c2VyL3VzZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudXNlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcclxuICBmb250LXNpemU6IDAuOXJlbTtcclxuXHJcbiAgLnVzZXItY29udGVudCB7XHJcbiAgICB3aWR0aDogOTgwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcblxyXG4gICAgLnVjLWhlYWRlciB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIHBhZGRpbmc6IDIwcHggNDBweCAwIDQwcHg7XHJcblxyXG4gICAgICAudWMtaGVhZGVyLWxlZnQge1xyXG4gICAgICAgIGRpdiB7XHJcbiAgICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLnVjLWhlYWRlci1yaWdodCB7XHJcbiAgICAgICAgZmxleDogMTtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuXHJcbiAgICAgICAgLnVjLW5hbWUge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBtYXJnaW46IDAgMCAxMHB4IDA7XHJcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xyXG5cclxuICAgICAgICAgIGgyIHtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC8vIOeUqOaIt+etiee6p1xyXG4gICAgICAgICAgLnVjLW5hbWUtbHYge1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICAgICAgICAgLnVjLW5hbWUtbHYtdGFnIHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9pY29uMi5wbmcpIG5vLXJlcGVhdCAwIDk5OTlweDtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDE5cHg7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDcwcHg7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTEzNXB4IC0xOTBweDtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnVjLW5hbWUtbHYtbHYge1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICBsZWZ0OiAzMHB4O1xyXG4gICAgICAgICAgICAgIHRvcDogLTFweDtcclxuICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICBjb2xvcjogI2UwM2EyNDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC8vIOagh+etvlxyXG4gICAgICAgICAgLnVjLW5hbWUtdGFnIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvaWNvbi5wbmcpIG5vLXJlcGVhdCAwIDk5OTlweDtcclxuICAgICAgICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTQxcHggLTU3cHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBkaXYge1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAudWMtbmFtZS1tZiB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMnB4ICNlZWU7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgaSB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAvLyDlj5Hnp4Hkv6FcclxuICAgICAgICAgIC51Yy1uYW1lLW1zZyB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNDQ0O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC8vIOWFs+azqFxyXG4gICAgICAgICAgLnVjLW5hbWUtZm9sbG93IHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzNmOGRkNztcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyDliqjmgIHkv6Hmga9cclxuICAgICAgICAudWMtaW5mbyB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgICAudWMtbnVtIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZWVlO1xyXG4gICAgICAgICAgICBjb2xvcjogIzY2NjtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICAgICAgICAgLnVjLWl0ZW0tdGl0bGUge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAudWMtaXRlbS1kZXNjIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8g5Liq5Lq6566A5LuLXHJcbiAgICAgICAgLnVjLXVzZXItZGVzYyB7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgICAgY29sb3I6ICM2NjY7XHJcblxyXG4gICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIOeUteWPsFxyXG4gICAgLy8gLnVjLWRqIHtcclxuICAgIC8vICAgbWFyZ2luOiAyMHB4IDQwcHggMCA0MHB4O1xyXG5cclxuICAgIC8vICAgLy8g55S15Y+w5qCH6aKYXHJcbiAgICAvLyAgIC51Yy1kai10aXRsZSB7XHJcbiAgICAvLyAgICAgZGlzcGxheTogZmxleDtcclxuICAgIC8vICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgLy8gICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIC8vICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2NlMWYwODtcclxuICAgIC8vICAgICBwYWRkaW5nOiAxNXB4IDA7XHJcbiAgICAvLyAgIH1cclxuXHJcbiAgICAvLyAgIC51Yy1kai1pdGVtIHtcclxuICAgIC8vICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLy8gICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAvLyAgICAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcclxuICAgIC8vICAgICBwYWRkaW5nOiA1cHggMTVweDtcclxuXHJcbiAgICAvLyAgICAgLnVjLWRqLWl0ZW0taW1nIHtcclxuICAgIC8vICAgICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgLy8gICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgLy8gICAgIH1cclxuXHJcbiAgICAvLyAgICAgLnVjLWRqLWl0ZW0tbmFtZSB7XHJcbiAgICAvLyAgICAgICBmbGV4OiAxO1xyXG4gICAgLy8gICAgICAgY29sb3I6ICMzMzM7XHJcblxyXG4gICAgLy8gICAgICAgc3BhbiB7XHJcbiAgICAvLyAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIC8vICAgICAgIH1cclxuICAgIC8vICAgICB9XHJcblxyXG4gICAgLy8gICAgIC51Yy1kai1pdGVtLW5hbWUgPiBzcGFuOmhvdmVyIHtcclxuICAgIC8vICAgICAgIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogIzAwMDtcclxuICAgIC8vICAgICAgIHRleHQtZGVjb3JhdGlvbi1saW5lOiB1bmRlcmxpbmU7XHJcbiAgICAvLyAgICAgICB0ZXh0LWRlY29yYXRpb24tc3R5bGU6IHNvbGlkO1xyXG4gICAgLy8gICAgIH1cclxuXHJcbiAgICAvLyAgICAgLnVjLWRqLWl0ZW0tcmVhZCB7XHJcbiAgICAvLyAgICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICAvLyAgICAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgIC8vICAgICB9XHJcblxyXG4gICAgLy8gICAgIC51Yy1kai1pdGVtLWRhdGUge1xyXG4gICAgLy8gICAgICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICB9XHJcblxyXG4gICAgLy8gICAudWMtZGotaXRlbTpob3ZlciB7XHJcbiAgICAvLyAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgLy8gICB9XHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gLy8g5pS26JeP55qE5q2M5Y2VXHJcbiAgICAvLyAuZmF2by1zaGVldCB7XHJcbiAgICAvLyAgIG1hcmdpbjogMjBweCA0MHB4IDAgMDtcclxuXHJcbiAgICAvLyAgIC8vIOagh+mimFxyXG4gICAgLy8gICAuZmF2by1zaGVldC10aXRsZSB7XHJcbiAgICAvLyAgICAgZGlzcGxheTogZmxleDtcclxuICAgIC8vICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgLy8gICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIC8vICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2NlMWYwODtcclxuICAgIC8vICAgICBwYWRkaW5nOiAxNXB4IDA7XHJcbiAgICAvLyAgICAgbWFyZ2luLWxlZnQ6IDQwcHg7XHJcbiAgICAvLyAgIH1cclxuXHJcbiAgICAvLyAgIC8vIOWIl+ihqFxyXG4gICAgLy8gICAuZnMtbGlzdCB7XHJcbiAgICAvLyAgICAgZGlzcGxheTogZmxleDtcclxuICAgIC8vICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcblxyXG4gICAgLy8gICAgIC5mcy1pdGVtIHtcclxuICAgIC8vICAgICAgIG1hcmdpbjogMTVweCAwIDAgNDhweDtcclxuXHJcbiAgICAvLyAgICAgICAvLyDkuK3pl7TnmoTlm77niYfmoYZcclxuICAgIC8vICAgICAgIC5mcy1ib3gge1xyXG4gICAgLy8gICAgICAgICB3aWR0aDogMTQwcHg7XHJcbiAgICAvLyAgICAgICAgIGhlaWdodDogMTQwcHg7XHJcbiAgICAvLyAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAvLyAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIC8vICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gICAgLy8gICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9sb2dvLmpwZyk7XHJcbiAgICAvLyAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAvLyAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcblxyXG4gICAgLy8gICAgICAgICAuZnMtYm90dG9tIHtcclxuICAgIC8vICAgICAgICAgICB3aWR0aDogMTQwcHg7XHJcbiAgICAvLyAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG4gICAgLy8gICAgICAgICAgIHBhZGRpbmc6IDAgNXB4O1xyXG4gICAgLy8gICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAvLyAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIC8vICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAvLyAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAvLyAgICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XHJcblxyXG4gICAgLy8gICAgICAgICAgIC5mcy1ib3R0b20tbGVmdCB7XHJcbiAgICAvLyAgICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAvLyAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLy8gICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIC8vICAgICAgICAgICAgIHotaW5kZXg6IDEwMDtcclxuICAgIC8vICAgICAgICAgICAgIGkge1xyXG4gICAgLy8gICAgICAgICAgICAgICBtYXJnaW46IDAgNXB4IDNweCAwO1xyXG4gICAgLy8gICAgICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICAgIH1cclxuXHJcbiAgICAvLyAgICAgICAgICAgLmZzLWJvdHRvbS1yaWdodCB7XHJcbiAgICAvLyAgICAgICAgICAgICBtYXJnaW46IDNweCAwIDAgMDtcclxuICAgIC8vICAgICAgICAgICAgIGkge1xyXG4gICAgLy8gICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAvLyAgICAgICAgICAgICAgIGNvbG9yOiAjY2NjO1xyXG4gICAgLy8gICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAvLyAgICAgICAgICAgICB9XHJcblxyXG4gICAgLy8gICAgICAgICAgICAgaTpob3ZlciB7XHJcbiAgICAvLyAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgLy8gICAgICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgfVxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICAvLyDmj4/ov7BcclxuICAgIC8vICAgICAuZnMtZGVzYyB7XHJcbiAgICAvLyAgICAgICBjb2xvcjogIzAwMDtcclxuICAgIC8vICAgICAgIGhlaWdodDogMjBweDtcclxuICAgIC8vICAgICAgIG1hcmdpbjogMTBweCAwO1xyXG4gICAgLy8gICAgICAgd2lkdGg6IDE0MHB4O1xyXG4gICAgLy8gICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAvLyAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgLy8gICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIC8vICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgLmZzLWRlc2M6aG92ZXIge1xyXG4gICAgLy8gICAgICAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiAjMDAwO1xyXG4gICAgLy8gICAgICAgdGV4dC1kZWNvcmF0aW9uLWxpbmU6IHVuZGVybGluZTtcclxuICAgIC8vICAgICAgIHRleHQtZGVjb3JhdGlvbi1zdHlsZTogc29saWQ7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICB9XHJcbiAgICAvLyB9XHJcbiAgfVxyXG59XHJcbiIsIi51c2VyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcbiAgZm9udC1zaXplOiAwLjlyZW07XG59XG4udXNlciAudXNlci1jb250ZW50IHtcbiAgd2lkdGg6IDk4MHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cbi51c2VyIC51c2VyLWNvbnRlbnQgLnVjLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDIwcHggNDBweCAwIDQwcHg7XG59XG4udXNlciAudXNlci1jb250ZW50IC51Yy1oZWFkZXIgLnVjLWhlYWRlci1sZWZ0IGRpdiB7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiAyMDBweDtcbn1cbi51c2VyIC51c2VyLWNvbnRlbnQgLnVjLWhlYWRlciAudWMtaGVhZGVyLXJpZ2h0IHtcbiAgZmxleDogMTtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG4udXNlciAudXNlci1jb250ZW50IC51Yy1oZWFkZXIgLnVjLWhlYWRlci1yaWdodCAudWMtbmFtZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogMCAwIDEwcHggMDtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xufVxuLnVzZXIgLnVzZXItY29udGVudCAudWMtaGVhZGVyIC51Yy1oZWFkZXItcmlnaHQgLnVjLW5hbWUgaDIge1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG4udXNlciAudXNlci1jb250ZW50IC51Yy1oZWFkZXIgLnVjLWhlYWRlci1yaWdodCAudWMtbmFtZSAudWMtbmFtZS1sdiB7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4udXNlciAudXNlci1jb250ZW50IC51Yy1oZWFkZXIgLnVjLWhlYWRlci1yaWdodCAudWMtbmFtZSAudWMtbmFtZS1sdiAudWMtbmFtZS1sdi10YWcge1xuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9pY29uMi5wbmcpIG5vLXJlcGVhdCAwIDk5OTlweDtcbiAgaGVpZ2h0OiAxOXB4O1xuICB3aWR0aDogNzBweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTEzNXB4IC0xOTBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLnVzZXIgLnVzZXItY29udGVudCAudWMtaGVhZGVyIC51Yy1oZWFkZXItcmlnaHQgLnVjLW5hbWUgLnVjLW5hbWUtbHYgLnVjLW5hbWUtbHYtbHYge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDMwcHg7XG4gIHRvcDogLTFweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjZTAzYTI0O1xufVxuLnVzZXIgLnVzZXItY29udGVudCAudWMtaGVhZGVyIC51Yy1oZWFkZXItcmlnaHQgLnVjLW5hbWUgLnVjLW5hbWUtdGFnIHtcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvaWNvbi5wbmcpIG5vLXJlcGVhdCAwIDk5OTlweDtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTQxcHggLTU3cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi51c2VyIC51c2VyLWNvbnRlbnQgLnVjLWhlYWRlciAudWMtaGVhZGVyLXJpZ2h0IC51Yy1uYW1lIGRpdiB7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuLnVzZXIgLnVzZXItY29udGVudCAudWMtaGVhZGVyIC51Yy1oZWFkZXItcmlnaHQgLnVjLW5hbWUgLnVjLW5hbWUtbWYge1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgYm94LXNoYWRvdzogMCAwIDJweCAjZWVlO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4udXNlciAudXNlci1jb250ZW50IC51Yy1oZWFkZXIgLnVjLWhlYWRlci1yaWdodCAudWMtbmFtZSAudWMtbmFtZS1tZiBpIHtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG4udXNlciAudXNlci1jb250ZW50IC51Yy1oZWFkZXIgLnVjLWhlYWRlci1yaWdodCAudWMtbmFtZSAudWMtbmFtZS1tc2cge1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xuICBjb2xvcjogIzQ0NDtcbn1cbi51c2VyIC51c2VyLWNvbnRlbnQgLnVjLWhlYWRlciAudWMtaGVhZGVyLXJpZ2h0IC51Yy1uYW1lIC51Yy1uYW1lLWZvbGxvdyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzZjhkZDc7XG4gIGNvbG9yOiAjZmZmO1xufVxuLnVzZXIgLnVzZXItY29udGVudCAudWMtaGVhZGVyIC51Yy1oZWFkZXItcmlnaHQgLnVjLWluZm8ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnVzZXIgLnVzZXItY29udGVudCAudWMtaGVhZGVyIC51Yy1oZWFkZXItcmlnaHQgLnVjLWluZm8gLnVjLW51bSB7XG4gIHdpZHRoOiAxMDBweDtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2VlZTtcbiAgY29sb3I6ICM2NjY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi51c2VyIC51c2VyLWNvbnRlbnQgLnVjLWhlYWRlciAudWMtaGVhZGVyLXJpZ2h0IC51Yy1pbmZvIC51Yy1udW0gLnVjLWl0ZW0tdGl0bGUge1xuICBmb250LXNpemU6IDEuM3JlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4udXNlciAudXNlci1jb250ZW50IC51Yy1oZWFkZXIgLnVjLWhlYWRlci1yaWdodCAudWMtaW5mbyAudWMtbnVtIC51Yy1pdGVtLWRlc2Mge1xuICBmb250LXNpemU6IDAuOHJlbTtcbn1cbi51c2VyIC51c2VyLWNvbnRlbnQgLnVjLWhlYWRlciAudWMtaGVhZGVyLXJpZ2h0IC51Yy11c2VyLWRlc2Mge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBjb2xvcjogIzY2Njtcbn1cbi51c2VyIC51c2VyLWNvbnRlbnQgLnVjLWhlYWRlciAudWMtaGVhZGVyLXJpZ2h0IC51Yy11c2VyLWRlc2Mgc3BhbiB7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/components/user/user/user.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/components/user/user/user.component.ts ***!
  \**************************************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/service.service */ "./src/app/services/service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var UserComponent = /** @class */ (function () {
    function UserComponent(service, activatedRoute, router) {
        this.service = service;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.active = [
            { title: '动态', num: 0 },
            { title: '关注', num: 0 },
            { title: '粉丝', num: 0 },
        ];
        this.userinfo = {
            level: null,
            listenSongs: null,
            profile: {
                nickname: null,
                city: null,
                gender: null,
                avatarUrl: null,
                userId: null,
                signature: null,
                birthday: null,
                province: null,
            }
        };
        // 用户dj
        this.userDj = {
            count: 0,
            programs: []
        };
        // 选中组件
        this.selectedNav = 3;
        // 用户歌单
        this.userFavoPlaylist = [];
        this.userCreatePlaylist = [];
        this.description = [];
        this.showDescription = false;
        this.follows = []; // 关注
        this.followeds = []; // 粉丝
    }
    UserComponent.prototype.ngOnInit = function () {
        this.getUserDetail();
    };
    // 获取用户详情
    UserComponent.prototype.getUserDetail = function () {
        var _this = this;
        this.activatedRoute.queryParams.subscribe(function (params) {
            _this.id = params.id;
            // 获取用户详情
            _this.service.user.getUserDetail(params.id).subscribe(function (res) {
                console.log("用户详情：", res);
                _this.userinfo = res;
                _this.active[0].num = res.profile.eventCount;
                _this.active[1].num = res.profile.follows;
                _this.active[2].num = res.profile.followeds;
            });
            // 获取用户关注列表
            _this.getUserFollow(params.id);
            // 获取用户粉丝列表
            _this.getUserFolloweds(params.id);
            // 获取用户动态
            _this.getUserEvent(params.id);
            // 用户关注的电台
            _this.getUserDj(params.id);
            // 获取用户歌单
            _this.getUserPlaylist(params.id);
            // 选中导航
            _this.selectedNav = params.index || 0;
        });
    };
    // 获取用户关注列表
    UserComponent.prototype.getUserFollow = function (uid, offset, limit) {
        var _this = this;
        if (offset === void 0) { offset = 0; }
        if (limit === void 0) { limit = 30; }
        this.service.user.getUserFollow({ uid: uid, offset: offset, limit: limit }).subscribe(function (res) {
            console.log("关注列表", res);
            _this.follows = res;
        });
    };
    // 获取用户粉丝列表
    UserComponent.prototype.getUserFolloweds = function (uid, lasttime, limit) {
        var _this = this;
        if (lasttime === void 0) { lasttime = 0; }
        if (limit === void 0) { limit = 30; }
        this.service.user.getUserFolloweds({ uid: uid, lasttime: lasttime, limit: limit }).subscribe(function (res) {
            console.log("粉丝列表", res);
            _this.followeds = res;
        });
    };
    // 获取用户动态
    UserComponent.prototype.getUserEvent = function (uid, lasttime, limit) {
        if (lasttime === void 0) { lasttime = 0; }
        if (limit === void 0) { limit = 30; }
        this.service.user.getUserEvent({ uid: uid, lasttime: lasttime, limit: limit }).subscribe(function (res) {
            console.log("获取用户动态", res);
        });
    };
    // 获取用户电台
    UserComponent.prototype.getUserDj = function (uid) {
        this.service.user.getUserDj(uid).subscribe(function (res) {
            console.log("用户电台：", res);
        });
    };
    // 获取用户歌单
    UserComponent.prototype.getUserPlaylist = function (uid) {
        var _this = this;
        this.service.user.getUserPlaylist(uid).subscribe(function (res) {
            var e_1, _a;
            console.log("获取用户歌单:", res);
            _this.userFavoPlaylist = [];
            _this.userCreatePlaylist = [];
            try {
                for (var res_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](res), res_1_1 = res_1.next(); !res_1_1.done; res_1_1 = res_1.next()) {
                    var item = res_1_1.value;
                    if (_this.userinfo.profile.userId == item.creator.userId) {
                        _this.userFavoPlaylist.push(item);
                    }
                    else {
                        _this.userCreatePlaylist.push(item);
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (res_1_1 && !res_1_1.done && (_a = res_1.return)) _a.call(res_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        });
    };
    // 跳转到歌单详情页面
    UserComponent.prototype.toPlaylist = function (item) {
        this.router.navigate(['playlist'], { queryParams: { id: item.id } });
    };
    // 切换导航
    UserComponent.prototype.changeNav = function (index) {
        var _this = this;
        this.activatedRoute.queryParams.subscribe(function (params) {
            _this.router.navigate(['user'], { queryParams: { id: params.id, index: index } });
        });
    };
    // 粉丝分页
    UserComponent.prototype.changPage = function (page) {
        // 待开发
        console.log("粉丝分页page", page);
    };
    UserComponent.ctorParameters = function () { return [
        { type: src_app_services_service_service__WEBPACK_IMPORTED_MODULE_2__["ServiceService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/user/user/user.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user.component.scss */ "./src/app/pages/components/user/user/user.component.scss")).default]
        })
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/app/pages/nav/nav-dj/nav-dj/nav-dj.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/nav/nav-dj/nav-dj/nav-dj.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\n  background-color: #eff1f4;\n}\n.container .box {\n  width: 980px;\n  margin: 0 auto;\n  display: -webkit-box;\n  display: flex;\n  background-color: #fff;\n}\n.container .box .content .header {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  margin: 0 40px;\n  padding: 30px 0 10px 0;\n  border-bottom: 2px solid #ce1f08;\n}\n.container .box .content .list {\n  flex-wrap: wrap;\n  padding: 0 40px;\n}\n.container .box .content .list .item {\n  width: 50%;\n  margin: 15px 0;\n}\n.container .box .content .list .item .img {\n  width: 120px;\n  height: 120px;\n  cursor: pointer;\n}\n.container .box .content .list .item .con {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  justify-content: space-around;\n  height: 120px;\n  margin-left: 20px;\n}\n.container .box .content .list .item .con h2:hover {\n  -webkit-text-decoration-color: #000;\n          text-decoration-color: #000;\n  -webkit-text-decoration-line: underline;\n          text-decoration-line: underline;\n  -webkit-text-decoration-style: solid;\n          text-decoration-style: solid;\n  cursor: pointer;\n}\n.container .box .content .list .item .con p {\n  color: #999;\n}\n.container .box .content .pagination {\n  padding: 20px 20px 20px 40px;\n  background-color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zbWFsbHppcC9EZXNrdG9wL2FuZ3VsYXIvd2FuZ3lpeXVuLW11c2ljL3NyYy9hcHAvcGFnZXMvbmF2L25hdi1kai9uYXYtZGovbmF2LWRqLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9uYXYvbmF2LWRqL25hdi1kai9uYXYtZGouY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtBQ0NGO0FEQUU7RUFDRSxZQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHNCQUFBO0FDRUo7QURDTTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQ0FBQTtBQ0NSO0FERU07RUFDRSxlQUFBO0VBQ0EsZUFBQTtBQ0FSO0FEQ1E7RUFDRSxVQUFBO0VBQ0EsY0FBQTtBQ0NWO0FEQ1U7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUNDWjtBREVVO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EsNkJBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUNBWjtBREVZO0VBQ0UsbUNBQUE7VUFBQSwyQkFBQTtFQUNBLHVDQUFBO1VBQUEsK0JBQUE7RUFDQSxvQ0FBQTtVQUFBLDRCQUFBO0VBQ0EsZUFBQTtBQ0FkO0FER1k7RUFDRSxXQUFBO0FDRGQ7QURRTTtFQUNFLDRCQUFBO0VBQ0Esc0JBQUE7QUNOUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL25hdi9uYXYtZGovbmF2LWRqL25hdi1kai5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZmMWY0O1xuICAuYm94IHtcbiAgICB3aWR0aDogOTgwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuXG4gICAgLmNvbnRlbnQge1xuICAgICAgLmhlYWRlciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbjogMCA0MHB4O1xuICAgICAgICBwYWRkaW5nOiAzMHB4IDAgMTBweCAwO1xuICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2NlMWYwODtcbiAgICAgIH1cblxuICAgICAgLmxpc3Qge1xuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgIHBhZGRpbmc6IDAgNDBweDtcbiAgICAgICAgLml0ZW0ge1xuICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgbWFyZ2luOiAxNXB4IDA7XG5cbiAgICAgICAgICAuaW1nIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMjBweDtcbiAgICAgICAgICAgIGhlaWdodDogMTIwcHg7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmNvbiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMjBweDtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuXG4gICAgICAgICAgICBoMjpob3ZlciB7XG4gICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogIzAwMDtcbiAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uLWxpbmU6IHVuZGVybGluZTtcbiAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uLXN0eWxlOiBzb2xpZDtcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgY29sb3I6ICM5OTk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIOWIhumhtVxuICAgICAgLnBhZ2luYXRpb24ge1xuICAgICAgICBwYWRkaW5nOiAyMHB4IDIwcHggMjBweCA0MHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiLmNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZmYxZjQ7XG59XG4uY29udGFpbmVyIC5ib3gge1xuICB3aWR0aDogOTgwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuLmNvbnRhaW5lciAuYm94IC5jb250ZW50IC5oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IDAgNDBweDtcbiAgcGFkZGluZzogMzBweCAwIDEwcHggMDtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNjZTFmMDg7XG59XG4uY29udGFpbmVyIC5ib3ggLmNvbnRlbnQgLmxpc3Qge1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIHBhZGRpbmc6IDAgNDBweDtcbn1cbi5jb250YWluZXIgLmJveCAuY29udGVudCAubGlzdCAuaXRlbSB7XG4gIHdpZHRoOiA1MCU7XG4gIG1hcmdpbjogMTVweCAwO1xufVxuLmNvbnRhaW5lciAuYm94IC5jb250ZW50IC5saXN0IC5pdGVtIC5pbWcge1xuICB3aWR0aDogMTIwcHg7XG4gIGhlaWdodDogMTIwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5jb250YWluZXIgLmJveCAuY29udGVudCAubGlzdCAuaXRlbSAuY29uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGhlaWdodDogMTIwcHg7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuLmNvbnRhaW5lciAuYm94IC5jb250ZW50IC5saXN0IC5pdGVtIC5jb24gaDI6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb24tY29sb3I6ICMwMDA7XG4gIHRleHQtZGVjb3JhdGlvbi1saW5lOiB1bmRlcmxpbmU7XG4gIHRleHQtZGVjb3JhdGlvbi1zdHlsZTogc29saWQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5jb250YWluZXIgLmJveCAuY29udGVudCAubGlzdCAuaXRlbSAuY29uIHAge1xuICBjb2xvcjogIzk5OTtcbn1cbi5jb250YWluZXIgLmJveCAuY29udGVudCAucGFnaW5hdGlvbiB7XG4gIHBhZGRpbmc6IDIwcHggMjBweCAyMHB4IDQwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/nav/nav-dj/nav-dj/nav-dj.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/nav/nav-dj/nav-dj/nav-dj.component.ts ***!
  \*************************************************************/
/*! exports provided: NavDjComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavDjComponent", function() { return NavDjComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/service.service */ "./src/app/services/service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var NavDjComponent = /** @class */ (function () {
    function NavDjComponent(service, router) {
        this.service = service;
        this.router = router;
        this.hotDj = [];
        this.currentPage = 1;
        this.total = 240;
        this.loading = true;
    }
    NavDjComponent.prototype.ngOnInit = function () {
        // this.getDjBanner();
        this.getHotDj();
    };
    // 获取dj轮播图
    NavDjComponent.prototype.getDjBanner = function () {
        this.service.dj.getDjBanner().subscribe(function (res) {
            console.log("获取的数据是：", res);
        });
    };
    // 获取热门dj
    NavDjComponent.prototype.getHotDj = function (page) {
        var _this = this;
        if (page === void 0) { page = 1; }
        this.loading = true;
        this.service.dj.getHotDj({ offset: page - 1, limit: page * 30 }).subscribe(function (res) {
            console.log("获取的热门dj是：", res);
            _this.hotDj = res;
            _this.loading = false;
        });
    };
    // 跳转到dj
    NavDjComponent.prototype.toDj = function (id) {
        this.router.navigate(['dj'], { queryParams: { id: id } });
    };
    // 分页
    NavDjComponent.prototype.nzPageIndexChange = function (page) {
        this.getHotDj(page);
    };
    NavDjComponent.ctorParameters = function () { return [
        { type: src_app_services_service_service__WEBPACK_IMPORTED_MODULE_2__["ServiceService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    NavDjComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav-dj',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./nav-dj.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/nav/nav-dj/nav-dj/nav-dj.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./nav-dj.component.scss */ "./src/app/pages/nav/nav-dj/nav-dj/nav-dj.component.scss")).default]
        })
    ], NavDjComponent);
    return NavDjComponent;
}());



/***/ }),

/***/ "./src/app/pages/nav/nav-playlist/nav-playlist/nav-playlist.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/nav/nav-playlist/nav-playlist/nav-playlist.component.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\n  background-color: #eff1f4;\n}\n.container .box {\n  width: 980px;\n  margin: 0 auto;\n}\n.container .box .hot {\n  background-color: #fff;\n  padding: 40px 0 0 0;\n}\n.container .box .hot .hot-header {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  flex-wrap: wrap;\n  line-height: 36px;\n  margin: 0 40px;\n  padding: 0 0 10px 0;\n  border-bottom: 2px solid #ce1f08;\n}\n.container .box .hot .hot-header .hot-title-first {\n  font-size: 1.5rem;\n  color: #222;\n}\n.container .box .hot .hot-header .hot-title {\n  padding: 0 10px;\n  font-size: 0.92rem;\n  color: #666;\n  cursor: pointer;\n}\n.container .box .hot .hot-header .hot-h-list {\n  -webkit-box-align: end;\n          align-items: flex-end;\n}\n.container .box .hot .hot-header .hot-h-list .hot-h-item {\n  margin: 0 0 0 20px;\n}\n.container .box .hot .hot-header .hot-h-list .hot-h-item:hover {\n  cursor: pointer;\n  -webkit-text-decoration: underline #999 solid;\n          text-decoration: underline #999 solid;\n}\n.container .box .hot .singer-unit {\n  margin: 20px 20px 0 20px;\n}\n.container .box .hot .singer-unit .su-list {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n}\n.container .box .hot .singer-unit .su-list .su-item {\n  width: calc(20% - 40px);\n  margin: 0 20px 30px 20px;\n}\n.container .box .hot .singer-unit .su-list .su-item .fans {\n  width: 100%;\n  height: 140px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: end;\n          align-items: flex-end;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n.container .box .hot .singer-unit .su-list .su-item .fans div {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  width: 100%;\n  padding: 5px 10px;\n  font-size: 0.8rem;\n  color: #ccc;\n  background-color: rgba(0, 0, 0, 0.6);\n  -webkit-backdrop-filter: blur(2px);\n          backdrop-filter: blur(2px);\n}\n.container .box .hot .singer-unit .su-list .su-item .fans div .icon-zanting:hover {\n  color: #fff;\n}\n.container .box .hot .singer-unit .su-list .su-item .su-name {\n  margin-top: 10px;\n  font-size: 0.8rem;\n  color: #333;\n}\n.container .box .hot .singer-unit .su-list .su-item .album-img {\n  width: 100%;\n  height: 140px;\n  background-size: cover;\n  background-repeat: no-repeat;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n  -webkit-box-align: end;\n          align-items: flex-end;\n  padding: 0 10px 10px 0;\n}\n.container .box .hot .singer-unit .su-list .su-item .album-img i {\n  display: none;\n  font-size: 25px;\n  color: #eee;\n}\n.container .box .hot .singer-unit .su-list .su-item .album-img:hover i {\n  display: block;\n}\n.container .box .hot .singer-unit .su-list .su-item .ai-desc {\n  margin-top: 10px;\n  font-size: 0.8rem;\n}\n.container .box .hot .singer-unit .su-list .su-item .ai-desc p {\n  margin: 0;\n  padding: 0 0 5px 0;\n  width: 100px;\n}\n.container .box .hot .singer-unit .su-list .su-item .ai-desc p:nth-child(1) {\n  color: #222;\n}\n.container .box .hot .singer-unit .su-list .su-item .ai-desc p:nth-child(2) {\n  color: #999;\n}\n.container .box .pagination {\n  padding: 20px 20px 20px 40px;\n  background-color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zbWFsbHppcC9EZXNrdG9wL2FuZ3VsYXIvd2FuZ3lpeXVuLW11c2ljL3NyYy9hcHAvcGFnZXMvbmF2L25hdi1wbGF5bGlzdC9uYXYtcGxheWxpc3QvbmF2LXBsYXlsaXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9uYXYvbmF2LXBsYXlsaXN0L25hdi1wbGF5bGlzdC9uYXYtcGxheWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtBQ0NGO0FEQUU7RUFDRSxZQUFBO0VBQ0EsY0FBQTtBQ0VKO0FEQ0k7RUFDRSxzQkFBQTtFQUNBLG1CQUFBO0FDQ047QURDTTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtBQ0NSO0FEQ1E7RUFDRSxpQkFBQTtFQUNBLFdBQUE7QUNDVjtBREVRO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUNBVjtBREdRO0VBQ0Usc0JBQUE7VUFBQSxxQkFBQTtBQ0RWO0FER1U7RUFDRSxrQkFBQTtBQ0RaO0FESVU7RUFDRSxlQUFBO0VBQ0EsNkNBQUE7VUFBQSxxQ0FBQTtBQ0ZaO0FEUU07RUFDRSx3QkFBQTtBQ05SO0FEUVE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxlQUFBO0FDTlY7QURRVTtFQUNFLHVCQUFBO0VBQ0Esd0JBQUE7QUNOWjtBRFFZO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxzQkFBQTtVQUFBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtBQ05kO0FEUWM7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQ0FBQTtVQUFBLDBCQUFBO0FDTmhCO0FEUWdCO0VBQ0UsV0FBQTtBQ05sQjtBRFdZO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUNUZDtBRFlZO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EscUJBQUE7VUFBQSx5QkFBQTtFQUNBLHNCQUFBO1VBQUEscUJBQUE7RUFDQSxzQkFBQTtBQ1ZkO0FEWWM7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUNWaEI7QURhWTtFQUNFLGNBQUE7QUNYZDtBRGNZO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtBQ1pkO0FEY2M7RUFDRSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDWmhCO0FEZVk7RUFDRSxXQUFBO0FDYmQ7QURlWTtFQUNFLFdBQUE7QUNiZDtBRHFCSTtFQUNFLDRCQUFBO0VBQ0Esc0JBQUE7QUNuQk4iLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9uYXYvbmF2LXBsYXlsaXN0L25hdi1wbGF5bGlzdC9uYXYtcGxheWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmZjFmNDtcbiAgLmJveCB7XG4gICAgd2lkdGg6IDk4MHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuXG4gICAgLy8g54Ot6ZeoXG4gICAgLmhvdCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgcGFkZGluZzogNDBweCAwIDAgMDtcblxuICAgICAgLmhvdC1oZWFkZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzNnB4O1xuICAgICAgICBtYXJnaW46IDAgNDBweDtcbiAgICAgICAgcGFkZGluZzogMCAwIDEwcHggMDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNjZTFmMDg7XG5cbiAgICAgICAgLmhvdC10aXRsZS1maXJzdCB7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICAgICAgY29sb3I6ICMyMjI7XG4gICAgICAgIH1cblxuICAgICAgICAuaG90LXRpdGxlIHtcbiAgICAgICAgICBwYWRkaW5nOiAwIDEwcHg7XG4gICAgICAgICAgZm9udC1zaXplOiAwLjkycmVtO1xuICAgICAgICAgIGNvbG9yOiAjNjY2O1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5ob3QtaC1saXN0IHtcbiAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG5cbiAgICAgICAgICAuaG90LWgtaXRlbSB7XG4gICAgICAgICAgICBtYXJnaW46IDAgMCAwIDIwcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmhvdC1oLWl0ZW06aG92ZXIge1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgIzk5OSBzb2xpZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8g5q2M5Y2VXG4gICAgICAuc2luZ2VyLXVuaXQge1xuICAgICAgICBtYXJnaW46IDIwcHggMjBweCAwIDIwcHg7XG5cbiAgICAgICAgLnN1LWxpc3Qge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuXG4gICAgICAgICAgLnN1LWl0ZW0ge1xuICAgICAgICAgICAgd2lkdGg6IGNhbGMoMjAlIC0gNDBweCk7XG4gICAgICAgICAgICBtYXJnaW46IDAgMjBweCAzMHB4IDIwcHg7XG5cbiAgICAgICAgICAgIC5mYW5zIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIGhlaWdodDogMTQwcHg7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcblxuICAgICAgICAgICAgICBkaXYge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjY2NjO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgICAgICAgICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMnB4KTtcblxuICAgICAgICAgICAgICAgIC5pY29uLXphbnRpbmc6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5zdS1uYW1lIHtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgICAgICAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuYWxidW0taW1nIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIGhlaWdodDogMTQwcHg7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICAgICAgICAgICAgcGFkZGluZzogMCAxMHB4IDEwcHggMDtcblxuICAgICAgICAgICAgICBpIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2VlZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmFsYnVtLWltZzpob3ZlciBpIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5haS1kZXNjIHtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XG5cbiAgICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMCA1cHggMDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5haS1kZXNjIHA6bnRoLWNoaWxkKDEpIHtcbiAgICAgICAgICAgICAgY29sb3I6ICMyMjI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYWktZGVzYyBwOm50aC1jaGlsZCgyKSB7XG4gICAgICAgICAgICAgIGNvbG9yOiAjOTk5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIOWIhumhtVxuICAgIC5wYWdpbmF0aW9uIHtcbiAgICAgIHBhZGRpbmc6IDIwcHggMjBweCAyMHB4IDQwcHg7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIH1cbiAgfVxufVxuIiwiLmNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZmYxZjQ7XG59XG4uY29udGFpbmVyIC5ib3gge1xuICB3aWR0aDogOTgwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuLmNvbnRhaW5lciAuYm94IC5ob3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiA0MHB4IDAgMCAwO1xufVxuLmNvbnRhaW5lciAuYm94IC5ob3QgLmhvdC1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGxpbmUtaGVpZ2h0OiAzNnB4O1xuICBtYXJnaW46IDAgNDBweDtcbiAgcGFkZGluZzogMCAwIDEwcHggMDtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNjZTFmMDg7XG59XG4uY29udGFpbmVyIC5ib3ggLmhvdCAuaG90LWhlYWRlciAuaG90LXRpdGxlLWZpcnN0IHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGNvbG9yOiAjMjIyO1xufVxuLmNvbnRhaW5lciAuYm94IC5ob3QgLmhvdC1oZWFkZXIgLmhvdC10aXRsZSB7XG4gIHBhZGRpbmc6IDAgMTBweDtcbiAgZm9udC1zaXplOiAwLjkycmVtO1xuICBjb2xvcjogIzY2NjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmNvbnRhaW5lciAuYm94IC5ob3QgLmhvdC1oZWFkZXIgLmhvdC1oLWxpc3Qge1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG59XG4uY29udGFpbmVyIC5ib3ggLmhvdCAuaG90LWhlYWRlciAuaG90LWgtbGlzdCAuaG90LWgtaXRlbSB7XG4gIG1hcmdpbjogMCAwIDAgMjBweDtcbn1cbi5jb250YWluZXIgLmJveCAuaG90IC5ob3QtaGVhZGVyIC5ob3QtaC1saXN0IC5ob3QtaC1pdGVtOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSAjOTk5IHNvbGlkO1xufVxuLmNvbnRhaW5lciAuYm94IC5ob3QgLnNpbmdlci11bml0IHtcbiAgbWFyZ2luOiAyMHB4IDIwcHggMCAyMHB4O1xufVxuLmNvbnRhaW5lciAuYm94IC5ob3QgLnNpbmdlci11bml0IC5zdS1saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuLmNvbnRhaW5lciAuYm94IC5ob3QgLnNpbmdlci11bml0IC5zdS1saXN0IC5zdS1pdGVtIHtcbiAgd2lkdGg6IGNhbGMoMjAlIC0gNDBweCk7XG4gIG1hcmdpbjogMCAyMHB4IDMwcHggMjBweDtcbn1cbi5jb250YWluZXIgLmJveCAuaG90IC5zaW5nZXItdW5pdCAuc3UtbGlzdCAuc3UtaXRlbSAuZmFucyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDE0MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG4uY29udGFpbmVyIC5ib3ggLmhvdCAuc2luZ2VyLXVuaXQgLnN1LWxpc3QgLnN1LWl0ZW0gLmZhbnMgZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBjb2xvcjogI2NjYztcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMnB4KTtcbn1cbi5jb250YWluZXIgLmJveCAuaG90IC5zaW5nZXItdW5pdCAuc3UtbGlzdCAuc3UtaXRlbSAuZmFucyBkaXYgLmljb24temFudGluZzpob3ZlciB7XG4gIGNvbG9yOiAjZmZmO1xufVxuLmNvbnRhaW5lciAuYm94IC5ob3QgLnNpbmdlci11bml0IC5zdS1saXN0IC5zdS1pdGVtIC5zdS1uYW1lIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIGNvbG9yOiAjMzMzO1xufVxuLmNvbnRhaW5lciAuYm94IC5ob3QgLnNpbmdlci11bml0IC5zdS1saXN0IC5zdS1pdGVtIC5hbGJ1bS1pbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxNDBweDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICBwYWRkaW5nOiAwIDEwcHggMTBweCAwO1xufVxuLmNvbnRhaW5lciAuYm94IC5ob3QgLnNpbmdlci11bml0IC5zdS1saXN0IC5zdS1pdGVtIC5hbGJ1bS1pbWcgaSB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgY29sb3I6ICNlZWU7XG59XG4uY29udGFpbmVyIC5ib3ggLmhvdCAuc2luZ2VyLXVuaXQgLnN1LWxpc3QgLnN1LWl0ZW0gLmFsYnVtLWltZzpob3ZlciBpIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uY29udGFpbmVyIC5ib3ggLmhvdCAuc2luZ2VyLXVuaXQgLnN1LWxpc3QgLnN1LWl0ZW0gLmFpLWRlc2Mge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBmb250LXNpemU6IDAuOHJlbTtcbn1cbi5jb250YWluZXIgLmJveCAuaG90IC5zaW5nZXItdW5pdCAuc3UtbGlzdCAuc3UtaXRlbSAuYWktZGVzYyBwIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwIDAgNXB4IDA7XG4gIHdpZHRoOiAxMDBweDtcbn1cbi5jb250YWluZXIgLmJveCAuaG90IC5zaW5nZXItdW5pdCAuc3UtbGlzdCAuc3UtaXRlbSAuYWktZGVzYyBwOm50aC1jaGlsZCgxKSB7XG4gIGNvbG9yOiAjMjIyO1xufVxuLmNvbnRhaW5lciAuYm94IC5ob3QgLnNpbmdlci11bml0IC5zdS1saXN0IC5zdS1pdGVtIC5haS1kZXNjIHA6bnRoLWNoaWxkKDIpIHtcbiAgY29sb3I6ICM5OTk7XG59XG4uY29udGFpbmVyIC5ib3ggLnBhZ2luYXRpb24ge1xuICBwYWRkaW5nOiAyMHB4IDIwcHggMjBweCA0MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/nav/nav-playlist/nav-playlist/nav-playlist.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/nav/nav-playlist/nav-playlist/nav-playlist.component.ts ***!
  \*******************************************************************************/
/*! exports provided: NavPlaylistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavPlaylistComponent", function() { return NavPlaylistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/service.service */ "./src/app/services/service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var NavPlaylistComponent = /** @class */ (function () {
    function NavPlaylistComponent(service, router) {
        this.service = service;
        this.router = router;
        this.playlists = [];
        this.selectedTag = '全部';
        this.currentPage = 1;
        this.total = 0;
        this.tags = {
            all: {},
            sub: [],
            categories: []
        };
        this.loading = false; // 加载状态
    }
    NavPlaylistComponent.prototype.ngOnInit = function () {
        this.playlistCatlist();
        this.topPlaylist();
    };
    // 获取热门歌单标签
    NavPlaylistComponent.prototype.getHotTags = function () {
        this.service.sheet.getHotTags().subscribe(function (tags) {
            console.log("热门歌单标签：", tags);
        });
    };
    NavPlaylistComponent.prototype.playlistCatlist = function () {
        var _this = this;
        this.service.sheet.playlistCatlist().subscribe(function (res) {
            console.log("歌单分类", res);
            res.categories = Object.values(res.categories).map(function (item) { return item; });
            _this.tags = res;
        });
    };
    // 获取最新数据
    NavPlaylistComponent.prototype.topPlaylist = function (cat, limit) {
        var _this = this;
        if (cat === void 0) { cat = '全部'; }
        if (limit === void 0) { limit = 50; }
        this.loading = true;
        this.service.sheet.topPlaylist({ order: 'hot', limit: limit, cat: cat }).subscribe(function (res) {
            console.log("获取最新歌单列表:", res);
            _this.total = res.total;
            _this.playlists = res.playlists;
            _this.loading = false;
        });
    };
    // 选择歌单类型
    NavPlaylistComponent.prototype.selectTag = function (item) {
        this.selectedTag = item.name;
        this.topPlaylist(item.name);
    };
    // 跳转到播放列表
    NavPlaylistComponent.prototype.toPlaylist = function (item) {
        this.router.navigate(['playlist'], { queryParams: { id: item.id } });
    };
    // 分页
    NavPlaylistComponent.prototype.nzPageIndexChange = function (page) {
        console.log('page:', page);
        this.topPlaylist(this.selectedTag, page * 50);
    };
    NavPlaylistComponent.ctorParameters = function () { return [
        { type: src_app_services_service_service__WEBPACK_IMPORTED_MODULE_2__["ServiceService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    NavPlaylistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav-playlist',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./nav-playlist.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/nav/nav-playlist/nav-playlist/nav-playlist.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./nav-playlist.component.scss */ "./src/app/pages/nav/nav-playlist/nav-playlist/nav-playlist.component.scss")).default]
        })
    ], NavPlaylistComponent);
    return NavPlaylistComponent;
}());



/***/ }),

/***/ "./src/app/pages/nav/nav-rank/nav-rank/nav-rank.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/pages/nav/nav-rank/nav-rank/nav-rank.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\n  background-color: #eff1f4;\n}\n.container .box {\n  width: 980px;\n  margin: 0 auto;\n  display: -webkit-box;\n  display: flex;\n}\n.container .box .left {\n  width: 240px;\n  border-left: 1px solid #eee;\n  border-right: 1px solid #eee;\n  background-color: #f8f8f8;\n  padding-top: 50px;\n}\n.container .box .left .l-title {\n  padding: 0 15px;\n  color: #000;\n  font-weight: bold;\n  font-size: 1rem;\n}\n.container .box .left .l-list .l-item {\n  margin: 20px 0;\n  padding: 10px 15px;\n  background-color: #eee;\n  cursor: pointer;\n}\n.container .box .left .l-list .l-item .l-con {\n  width: 143px;\n  height: 50px;\n  margin-left: 15px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n.container .box .left .l-list .l-item .l-con p {\n  margin: 0;\n}\n.container .box .left .l-list .l-item .l-con .l-c-name {\n  color: #000;\n  font-size: 0.9rem;\n  word-wrap: break-word;\n}\n.container .box .left .l-list .l-item .l-con .l-c-freq {\n  color: #999;\n  font-size: 0.8rem;\n}\n.container .box .right {\n  -webkit-box-flex: 1;\n          flex: 1;\n  background-color: #fff;\n  padding: 0 40px;\n}\n.container .box .right .r-content .pl-header {\n  padding: 20px 0;\n}\n.container .box .right .r-content .pl-header .pl-header-box {\n  display: -webkit-box;\n  display: flex;\n}\n.container .box .right .r-content .pl-header .pl-header-img {\n  width: 208px;\n  height: 208px;\n}\n.container .box .right .r-content .pl-header .pl-header-right {\n  padding-left: 20px;\n}\n.container .box .right .r-content .pl-header .pl-header-right .pl-header-title {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.container .box .right .r-content .pl-header .pl-header-right .pl-header-title .pl-header-tag {\n  background: url('icon.png') no-repeat 0 9999px;\n  width: 54px;\n  height: 24px;\n  background-position: 0 -243px;\n  display: inline-block;\n  overflow: hidden;\n  margin-right: 10px;\n}\n.container .box .right .r-content .pl-header .pl-header-right .pl-header-create {\n  font-size: 0.9rem;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  margin-top: 15px;\n}\n.container .box .right .r-content .pl-header .pl-header-right .pl-header-create img {\n  width: 40px;\n  height: 40px;\n}\n.container .box .right .r-content .pl-header .pl-header-right .pl-header-create span {\n  margin-left: 20px;\n}\n.container .box .right .r-content .pl-header .pl-header-right .pl-header-create span:nth-child(2) {\n  color: #0c73c2;\n  cursor: pointer;\n}\n.container .box .right .r-content .pl-header .pl-header-right .pl-header-create span:nth-child(3) {\n  color: #666;\n}\n.container .box .right .r-content .pl-header .pl-header-right .album-header-tool {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  margin-top: 5px;\n  flex-wrap: wrap;\n}\n.container .box .right .r-content .pl-header .pl-header-right .album-header-tool div {\n  margin: 10px 10px 0 0;\n  padding: 5px 10px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  border: 1px solid #ccc;\n  background-color: #f4f4f4;\n  border-radius: 3px;\n  cursor: pointer;\n}\n.container .box .right .r-content .pl-header .pl-header-right .album-header-tool div span {\n  color: #444;\n  font-size: 0.9rem;\n  margin-left: 5px;\n}\n.container .box .right .r-content .pl-header .pl-header-right .album-header-tool div i {\n  font-size: 1.1rem;\n}\n.container .box .right .r-content .pl-header .pl-header-right .album-header-tool div:nth-child(1) {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  background-color: #3483cf;\n  color: #fff;\n}\n.container .box .right .r-content .pl-header .pl-header-right .album-header-tool div:nth-child(1) span {\n  color: #fff;\n}\n.container .box .right .r-content .pl-header .pl-header-right .pl-header-tags {\n  margin-top: 15px;\n  color: #666;\n  font-size: 0.9rem;\n  word-wrap: break-word;\n}\n.container .box .right .r-content .pl-header .pl-header-right .pl-header-tags .pl-header-tags-list {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  margin-bottom: 10px;\n}\n.container .box .right .r-content .pl-header .pl-header-right .pl-header-tags .pl-header-tags-list .pl-header-tag {\n  margin: 0 10px;\n  height: 1.5rem;\n  font-size: 0.8rem;\n  line-height: 1.5rem;\n  border-radius: 1.5rem;\n  padding: 0 10px;\n  border: 1px solid #ccc;\n}\n.container .box .right .r-content .pl-songlist .pl-songlist-header {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  border-bottom: 2px solid #ce1f08;\n  padding: 15px 0;\n}\n.container .box .right .r-content .pl-songlist .pl-songlist-header span {\n  color: #666;\n  font-size: 0.9rem;\n}\n.container .box .right .r-content .pl-songlist .pl-songlist-table td {\n  font-size: 0.9rem;\n  height: 57px;\n}\n.container .box .right .r-content .pl-songlist .pl-songlist-table td div:hover {\n  -webkit-text-decoration-style: solid;\n          text-decoration-style: solid;\n  -webkit-text-decoration-line: underline;\n          text-decoration-line: underline;\n  -webkit-text-decoration-color: #000;\n          text-decoration-color: #000;\n  cursor: pointer;\n}\n.container .box .right .r-content .pl-songlist .pl-songlist-table .td-name,\n.container .box .right .r-content .pl-songlist .pl-songlist-table .td-album,\n.container .box .right .r-content .pl-songlist .pl-songlist-table .td-artist {\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n.container .box .right .r-content .pl-songlist .pl-songlist-table .td-name {\n  width: 200px;\n}\n.container .box .right .r-content .pl-songlist .pl-songlist-table .td-artist {\n  width: 60px;\n}\n.container .box .right .r-content .pl-songlist .pl-songlist-table .td-album {\n  width: 150px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zbWFsbHppcC9EZXNrdG9wL2FuZ3VsYXIvd2FuZ3lpeXVuLW11c2ljL3NyYy9hcHAvcGFnZXMvbmF2L25hdi1yYW5rL25hdi1yYW5rL25hdi1yYW5rLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9uYXYvbmF2LXJhbmsvbmF2LXJhbmsvbmF2LXJhbmsuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtBQ0NGO0FEQUU7RUFDRSxZQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtBQ0VKO0FEQ0k7RUFDRSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7QUNDTjtBREVNO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNBUjtBREtRO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0FDSFY7QURLVTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0FDSFo7QURJWTtFQUNFLFNBQUE7QUNGZDtBREtZO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7QUNIZDtBRE1ZO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0FDSmQ7QURZSTtFQUNFLG1CQUFBO1VBQUEsT0FBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtBQ1ZOO0FEY1E7RUFDRSxlQUFBO0FDWlY7QURjVTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtBQ1paO0FEZVU7RUFDRSxZQUFBO0VBQ0EsYUFBQTtBQ2JaO0FEZ0JVO0VBQ0Usa0JBQUE7QUNkWjtBRGlCWTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNmZDtBRGdCYztFQUNFLDhDQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ2RoQjtBRG1CWTtFQUNFLGlCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLGdCQUFBO0FDakJkO0FEa0JjO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNoQmhCO0FEbUJjO0VBQ0UsaUJBQUE7QUNqQmhCO0FEb0JjO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QUNsQmhCO0FEcUJjO0VBQ0UsV0FBQTtBQ25CaEI7QUR3Qlk7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUN0QmQ7QUR3QmM7RUFDRSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUN0QmhCO0FEd0JnQjtFQUNFLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDdEJsQjtBRHdCZ0I7RUFDRSxpQkFBQTtBQ3RCbEI7QUQwQmM7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0FDeEJoQjtBRHlCZ0I7RUFDRSxXQUFBO0FDdkJsQjtBRDZCWTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7QUMzQmQ7QUQ2QmM7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsbUJBQUE7QUMzQmhCO0FENkJnQjtFQUNFLGNBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0FDM0JsQjtBRG9DVTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxlQUFBO0FDbENaO0FEb0NZO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0FDbENkO0FEc0NZO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0FDcENkO0FEc0NjO0VBQ0Usb0NBQUE7VUFBQSw0QkFBQTtFQUNBLHVDQUFBO1VBQUEsK0JBQUE7RUFDQSxtQ0FBQTtVQUFBLDJCQUFBO0VBQ0EsZUFBQTtBQ3BDaEI7QUR3Q1k7OztFQUdFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ3RDZDtBRHlDWTtFQUNFLFlBQUE7QUN2Q2Q7QUQwQ1k7RUFDRSxXQUFBO0FDeENkO0FEMkNZO0VBQ0UsWUFBQTtBQ3pDZCIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL25hdi9uYXYtcmFuay9uYXYtcmFuay9uYXYtcmFuay5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZmMWY0O1xuICAuYm94IHtcbiAgICB3aWR0aDogOTgwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgZGlzcGxheTogZmxleDtcblxuICAgIC8vIOW3pui+ueS+p+agj1xuICAgIC5sZWZ0IHtcbiAgICAgIHdpZHRoOiAyNDBweDtcbiAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2VlZTtcbiAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlZWU7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOGY4O1xuICAgICAgcGFkZGluZy10b3A6IDUwcHg7XG5cbiAgICAgIC8vIOS+p+agj+agh+mimFxuICAgICAgLmwtdGl0bGUge1xuICAgICAgICBwYWRkaW5nOiAwIDE1cHg7XG4gICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgfVxuXG4gICAgICAvLyDkvqfmoI/liJfooahcbiAgICAgIC5sLWxpc3Qge1xuICAgICAgICAubC1pdGVtIHtcbiAgICAgICAgICBtYXJnaW46IDIwcHggMDtcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAgICAgICAubC1jb24ge1xuICAgICAgICAgICAgd2lkdGg6IDE0M3B4O1xuICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5sLWMtbmFtZSB7XG4gICAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICAgICAgICAgICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubC1jLWZyZXEge1xuICAgICAgICAgICAgICBjb2xvcjogIzk5OTtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8g5Y+z6L655YaF5a65XG4gICAgLnJpZ2h0IHtcbiAgICAgIGZsZXg6IDE7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgcGFkZGluZzogMCA0MHB4O1xuXG4gICAgICAuci1jb250ZW50IHtcbiAgICAgICAgLy8g5aS06YOo566A5LuLXG4gICAgICAgIC5wbC1oZWFkZXIge1xuICAgICAgICAgIHBhZGRpbmc6IDIwcHggMDtcblxuICAgICAgICAgIC5wbC1oZWFkZXItYm94IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnBsLWhlYWRlci1pbWcge1xuICAgICAgICAgICAgd2lkdGg6IDIwOHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAyMDhweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAucGwtaGVhZGVyLXJpZ2h0IHtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcblxuICAgICAgICAgICAgLy8g5q2M5Y2V5ZCN56ewXG4gICAgICAgICAgICAucGwtaGVhZGVyLXRpdGxlIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgLnBsLWhlYWRlci10YWcge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2ljb24ucG5nKSBuby1yZXBlYXQgMCA5OTk5cHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDU0cHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyNHB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAgLTI0M3B4O1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyDliJvlu7rogIXkv6Hmga9cbiAgICAgICAgICAgIC5wbC1oZWFkZXItY3JlYXRlIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBzcGFuOm50aC1jaGlsZCgyKSB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICMwYzczYzI7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgc3BhbjpudGgtY2hpbGQoMykge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjNjY2O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIOW3peWFt+agj1xuICAgICAgICAgICAgLmFsYnVtLWhlYWRlci10b29sIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG5cbiAgICAgICAgICAgICAgZGl2IHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDEwcHggMTBweCAwIDA7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogNXB4IDEwcHg7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjRmNDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgICBjb2xvcjogIzQ0NDtcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaSB7XG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBkaXY6bnRoLWNoaWxkKDEpIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzM0ODNjZjtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyDmoIfnrb5cbiAgICAgICAgICAgIC5wbC1oZWFkZXItdGFncyB7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgICAgICAgICAgIGNvbG9yOiAjNjY2O1xuICAgICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICAgICAgICAgICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuXG4gICAgICAgICAgICAgIC5wbC1oZWFkZXItdGFncy1saXN0IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcblxuICAgICAgICAgICAgICAgIC5wbC1oZWFkZXItdGFnIHtcbiAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCAxMHB4O1xuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxLjVyZW07XG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjVyZW07XG4gICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxLjVyZW07XG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDEwcHg7XG4gICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOaSreaUvuWIl+ihqFxuICAgICAgICAucGwtc29uZ2xpc3Qge1xuICAgICAgICAgIC5wbC1zb25nbGlzdC1oZWFkZXIge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2NlMWYwODtcbiAgICAgICAgICAgIHBhZGRpbmc6IDE1cHggMDtcblxuICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgIGNvbG9yOiAjNjY2O1xuICAgICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgLnBsLXNvbmdsaXN0LXRhYmxlIHtcbiAgICAgICAgICAgIHRkIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgICAgICAgICAgIGhlaWdodDogNTdweDtcblxuICAgICAgICAgICAgICBkaXY6aG92ZXIge1xuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbi1zdHlsZTogc29saWQ7XG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uLWxpbmU6IHVuZGVybGluZTtcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb24tY29sb3I6ICMwMDA7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC50ZC1uYW1lLFxuICAgICAgICAgICAgLnRkLWFsYnVtLFxuICAgICAgICAgICAgLnRkLWFydGlzdCB7XG4gICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAudGQtbmFtZSB7XG4gICAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnRkLWFydGlzdCB7XG4gICAgICAgICAgICAgIHdpZHRoOiA2MHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAudGQtYWxidW0ge1xuICAgICAgICAgICAgICB3aWR0aDogMTUwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCIuY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmZjFmNDtcbn1cbi5jb250YWluZXIgLmJveCB7XG4gIHdpZHRoOiA5ODBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uY29udGFpbmVyIC5ib3ggLmxlZnQge1xuICB3aWR0aDogMjQwcHg7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2VlZTtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2VlZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjhmODtcbiAgcGFkZGluZy10b3A6IDUwcHg7XG59XG4uY29udGFpbmVyIC5ib3ggLmxlZnQgLmwtdGl0bGUge1xuICBwYWRkaW5nOiAwIDE1cHg7XG4gIGNvbG9yOiAjMDAwO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuLmNvbnRhaW5lciAuYm94IC5sZWZ0IC5sLWxpc3QgLmwtaXRlbSB7XG4gIG1hcmdpbjogMjBweCAwO1xuICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5jb250YWluZXIgLmJveCAubGVmdCAubC1saXN0IC5sLWl0ZW0gLmwtY29uIHtcbiAgd2lkdGg6IDE0M3B4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4uY29udGFpbmVyIC5ib3ggLmxlZnQgLmwtbGlzdCAubC1pdGVtIC5sLWNvbiBwIHtcbiAgbWFyZ2luOiAwO1xufVxuLmNvbnRhaW5lciAuYm94IC5sZWZ0IC5sLWxpc3QgLmwtaXRlbSAubC1jb24gLmwtYy1uYW1lIHtcbiAgY29sb3I6ICMwMDA7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG59XG4uY29udGFpbmVyIC5ib3ggLmxlZnQgLmwtbGlzdCAubC1pdGVtIC5sLWNvbiAubC1jLWZyZXEge1xuICBjb2xvcjogIzk5OTtcbiAgZm9udC1zaXplOiAwLjhyZW07XG59XG4uY29udGFpbmVyIC5ib3ggLnJpZ2h0IHtcbiAgZmxleDogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMCA0MHB4O1xufVxuLmNvbnRhaW5lciAuYm94IC5yaWdodCAuci1jb250ZW50IC5wbC1oZWFkZXIge1xuICBwYWRkaW5nOiAyMHB4IDA7XG59XG4uY29udGFpbmVyIC5ib3ggLnJpZ2h0IC5yLWNvbnRlbnQgLnBsLWhlYWRlciAucGwtaGVhZGVyLWJveCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uY29udGFpbmVyIC5ib3ggLnJpZ2h0IC5yLWNvbnRlbnQgLnBsLWhlYWRlciAucGwtaGVhZGVyLWltZyB7XG4gIHdpZHRoOiAyMDhweDtcbiAgaGVpZ2h0OiAyMDhweDtcbn1cbi5jb250YWluZXIgLmJveCAucmlnaHQgLnItY29udGVudCAucGwtaGVhZGVyIC5wbC1oZWFkZXItcmlnaHQge1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG59XG4uY29udGFpbmVyIC5ib3ggLnJpZ2h0IC5yLWNvbnRlbnQgLnBsLWhlYWRlciAucGwtaGVhZGVyLXJpZ2h0IC5wbC1oZWFkZXItdGl0bGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmNvbnRhaW5lciAuYm94IC5yaWdodCAuci1jb250ZW50IC5wbC1oZWFkZXIgLnBsLWhlYWRlci1yaWdodCAucGwtaGVhZGVyLXRpdGxlIC5wbC1oZWFkZXItdGFnIHtcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvaWNvbi5wbmcpIG5vLXJlcGVhdCAwIDk5OTlweDtcbiAgd2lkdGg6IDU0cHg7XG4gIGhlaWdodDogMjRweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAtMjQzcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuLmNvbnRhaW5lciAuYm94IC5yaWdodCAuci1jb250ZW50IC5wbC1oZWFkZXIgLnBsLWhlYWRlci1yaWdodCAucGwtaGVhZGVyLWNyZWF0ZSB7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuLmNvbnRhaW5lciAuYm94IC5yaWdodCAuci1jb250ZW50IC5wbC1oZWFkZXIgLnBsLWhlYWRlci1yaWdodCAucGwtaGVhZGVyLWNyZWF0ZSBpbWcge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuLmNvbnRhaW5lciAuYm94IC5yaWdodCAuci1jb250ZW50IC5wbC1oZWFkZXIgLnBsLWhlYWRlci1yaWdodCAucGwtaGVhZGVyLWNyZWF0ZSBzcGFuIHtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG4uY29udGFpbmVyIC5ib3ggLnJpZ2h0IC5yLWNvbnRlbnQgLnBsLWhlYWRlciAucGwtaGVhZGVyLXJpZ2h0IC5wbC1oZWFkZXItY3JlYXRlIHNwYW46bnRoLWNoaWxkKDIpIHtcbiAgY29sb3I6ICMwYzczYzI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5jb250YWluZXIgLmJveCAucmlnaHQgLnItY29udGVudCAucGwtaGVhZGVyIC5wbC1oZWFkZXItcmlnaHQgLnBsLWhlYWRlci1jcmVhdGUgc3BhbjpudGgtY2hpbGQoMykge1xuICBjb2xvcjogIzY2Njtcbn1cbi5jb250YWluZXIgLmJveCAucmlnaHQgLnItY29udGVudCAucGwtaGVhZGVyIC5wbC1oZWFkZXItcmlnaHQgLmFsYnVtLWhlYWRlci10b29sIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG4uY29udGFpbmVyIC5ib3ggLnJpZ2h0IC5yLWNvbnRlbnQgLnBsLWhlYWRlciAucGwtaGVhZGVyLXJpZ2h0IC5hbGJ1bS1oZWFkZXItdG9vbCBkaXYge1xuICBtYXJnaW46IDEwcHggMTBweCAwIDA7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNGY0O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5jb250YWluZXIgLmJveCAucmlnaHQgLnItY29udGVudCAucGwtaGVhZGVyIC5wbC1oZWFkZXItcmlnaHQgLmFsYnVtLWhlYWRlci10b29sIGRpdiBzcGFuIHtcbiAgY29sb3I6ICM0NDQ7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuLmNvbnRhaW5lciAuYm94IC5yaWdodCAuci1jb250ZW50IC5wbC1oZWFkZXIgLnBsLWhlYWRlci1yaWdodCAuYWxidW0taGVhZGVyLXRvb2wgZGl2IGkge1xuICBmb250LXNpemU6IDEuMXJlbTtcbn1cbi5jb250YWluZXIgLmJveCAucmlnaHQgLnItY29udGVudCAucGwtaGVhZGVyIC5wbC1oZWFkZXItcmlnaHQgLmFsYnVtLWhlYWRlci10b29sIGRpdjpudGgtY2hpbGQoMSkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQ4M2NmO1xuICBjb2xvcjogI2ZmZjtcbn1cbi5jb250YWluZXIgLmJveCAucmlnaHQgLnItY29udGVudCAucGwtaGVhZGVyIC5wbC1oZWFkZXItcmlnaHQgLmFsYnVtLWhlYWRlci10b29sIGRpdjpudGgtY2hpbGQoMSkgc3BhbiB7XG4gIGNvbG9yOiAjZmZmO1xufVxuLmNvbnRhaW5lciAuYm94IC5yaWdodCAuci1jb250ZW50IC5wbC1oZWFkZXIgLnBsLWhlYWRlci1yaWdodCAucGwtaGVhZGVyLXRhZ3Mge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBjb2xvcjogIzY2NjtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbn1cbi5jb250YWluZXIgLmJveCAucmlnaHQgLnItY29udGVudCAucGwtaGVhZGVyIC5wbC1oZWFkZXItcmlnaHQgLnBsLWhlYWRlci10YWdzIC5wbC1oZWFkZXItdGFncy1saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5jb250YWluZXIgLmJveCAucmlnaHQgLnItY29udGVudCAucGwtaGVhZGVyIC5wbC1oZWFkZXItcmlnaHQgLnBsLWhlYWRlci10YWdzIC5wbC1oZWFkZXItdGFncy1saXN0IC5wbC1oZWFkZXItdGFnIHtcbiAgbWFyZ2luOiAwIDEwcHg7XG4gIGhlaWdodDogMS41cmVtO1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMS41cmVtO1xuICBwYWRkaW5nOiAwIDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG59XG4uY29udGFpbmVyIC5ib3ggLnJpZ2h0IC5yLWNvbnRlbnQgLnBsLXNvbmdsaXN0IC5wbC1zb25nbGlzdC1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjY2UxZjA4O1xuICBwYWRkaW5nOiAxNXB4IDA7XG59XG4uY29udGFpbmVyIC5ib3ggLnJpZ2h0IC5yLWNvbnRlbnQgLnBsLXNvbmdsaXN0IC5wbC1zb25nbGlzdC1oZWFkZXIgc3BhbiB7XG4gIGNvbG9yOiAjNjY2O1xuICBmb250LXNpemU6IDAuOXJlbTtcbn1cbi5jb250YWluZXIgLmJveCAucmlnaHQgLnItY29udGVudCAucGwtc29uZ2xpc3QgLnBsLXNvbmdsaXN0LXRhYmxlIHRkIHtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIGhlaWdodDogNTdweDtcbn1cbi5jb250YWluZXIgLmJveCAucmlnaHQgLnItY29udGVudCAucGwtc29uZ2xpc3QgLnBsLXNvbmdsaXN0LXRhYmxlIHRkIGRpdjpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbi1zdHlsZTogc29saWQ7XG4gIHRleHQtZGVjb3JhdGlvbi1saW5lOiB1bmRlcmxpbmU7XG4gIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogIzAwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmNvbnRhaW5lciAuYm94IC5yaWdodCAuci1jb250ZW50IC5wbC1zb25nbGlzdCAucGwtc29uZ2xpc3QtdGFibGUgLnRkLW5hbWUsXG4uY29udGFpbmVyIC5ib3ggLnJpZ2h0IC5yLWNvbnRlbnQgLnBsLXNvbmdsaXN0IC5wbC1zb25nbGlzdC10YWJsZSAudGQtYWxidW0sXG4uY29udGFpbmVyIC5ib3ggLnJpZ2h0IC5yLWNvbnRlbnQgLnBsLXNvbmdsaXN0IC5wbC1zb25nbGlzdC10YWJsZSAudGQtYXJ0aXN0IHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG4uY29udGFpbmVyIC5ib3ggLnJpZ2h0IC5yLWNvbnRlbnQgLnBsLXNvbmdsaXN0IC5wbC1zb25nbGlzdC10YWJsZSAudGQtbmFtZSB7XG4gIHdpZHRoOiAyMDBweDtcbn1cbi5jb250YWluZXIgLmJveCAucmlnaHQgLnItY29udGVudCAucGwtc29uZ2xpc3QgLnBsLXNvbmdsaXN0LXRhYmxlIC50ZC1hcnRpc3Qge1xuICB3aWR0aDogNjBweDtcbn1cbi5jb250YWluZXIgLmJveCAucmlnaHQgLnItY29udGVudCAucGwtc29uZ2xpc3QgLnBsLXNvbmdsaXN0LXRhYmxlIC50ZC1hbGJ1bSB7XG4gIHdpZHRoOiAxNTBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/nav/nav-rank/nav-rank/nav-rank.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/nav/nav-rank/nav-rank/nav-rank.component.ts ***!
  \*******************************************************************/
/*! exports provided: NavRankComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavRankComponent", function() { return NavRankComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/service.service */ "./src/app/services/service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");





var NavRankComponent = /** @class */ (function () {
    function NavRankComponent(service, activatedRoute, router, notification) {
        this.service = service;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.notification = notification;
        this.allList = [];
        this.list = [];
        this.selectedSlider = 0;
        this.hotComments = []; // 热门评论
        this.comments = []; // 评论
        this.playlistDetail = {
            id: 0,
            tracks: [],
            creator: {
                userId: 0,
                avatarUrl: '',
                nickname: '',
            },
            coverImgUrl: '',
            description: '',
            name: '',
            shareCount: 0,
            commentCount: 0,
            playCount: 0,
            createTime: 0,
            subscribedCount: 0,
            tags: []
        };
        this.description = [];
        this.loading = true; // 加载框
    }
    NavRankComponent.prototype.ngOnInit = function () {
        var _this = this;
        // 获取歌单详情
        this.activatedRoute.queryParams.subscribe(function (params) {
            if (params.idx) {
                _this.getPlaylistDetail(params.idx);
                // 获取榜单列表
                _this.getAllTopPlaylist();
            }
            else {
                // 获取榜单列表
                _this.getAllTopPlaylist(1);
            }
        });
    };
    // 排行榜
    NavRankComponent.prototype.getTopPlaylist = function (idx) {
        var _this = this;
        this.service.home.getTopPlaylist({ idx: idx }).subscribe(function (playlist) {
            console.log("获取排行榜到数据：", playlist);
            _this.list = playlist;
        });
    };
    // 获取所有榜单
    NavRankComponent.prototype.getAllTopPlaylist = function (status) {
        var _this = this;
        if (status === void 0) { status = 0; }
        this.service.home.getAllTopPlaylist().subscribe(function (res) {
            _this.allList = res;
            // 如果url地址的id不存在则区榜单列表第一个的id
            if (status == 1) {
                _this.getPlaylistDetail(res[0] && res[0].id);
            }
        });
    };
    // 获取歌单列表详情
    NavRankComponent.prototype.getPlaylistDetail = function (id) {
        var _this = this;
        this.loading = true;
        this.service.sheet.getSheetListDetail(id).subscribe(function (playlist) {
            _this.playlistDetail = playlist;
            if (playlist.description) {
                _this.description = playlist.description.split("\n");
            }
        });
        // 获取评论
        this.getPlaylistComments(id);
    };
    // 获取歌单评论
    NavRankComponent.prototype.getPlaylistComments = function (id, offset, before) {
        var _this = this;
        this.service.sheet.getSheetListComments({ id: id, offset: offset, limit: 20, before: before }).subscribe(function (res) {
            _this.commentTotal = res.total;
            _this.comments = res.comments;
            if (_this.hotComments.length == 0) {
                _this.hotComments = res.hotComments;
            }
            _this.loading = false;
        });
    };
    // 选中侧栏
    NavRankComponent.prototype.selectItem = function (item, index) {
        this.selectedSlider = index;
        this.getPlaylistDetail(item.id);
        this.router.navigate(['navRank'], { queryParams: { nav: 1, idx: item.id } });
    };
    // 评论分页
    NavRankComponent.prototype.pageIndexChange = function (page) {
        var _this = this;
        this.activatedRoute.queryParams.subscribe(function (params) {
            _this.getPlaylistComments(params.id, page - 1);
        });
    };
    // 获取id
    // rangId(val: string) {
    //   const data = {
    //     '云音乐新歌榜': 0,
    //     '云音乐热歌榜': 1,
    //     '网易原创歌曲榜': 2,
    //     '云音乐飙升榜': 3,
    //     '云音乐电音榜': 4,
    //     'UK排行榜周榜': 5,
    //     '美国Billboard周榜': 6,
    //     'KTV嗨榜': 7,
    //     'iTunes榜': 8,
    //     'Hit FM Top榜': 9,
    //     '日本Oricon周榜': 10,
    //     '韩国Melon排行榜周榜': 11,
    //     '韩国Mnet排行榜周榜': 12,
    //     '韩国Melon原声周榜': 13,
    //     '中国TOP排行榜(港台榜)': 14,
    //     '中国TOP排行榜(内地榜)': 15,
    //     '香港电台中文歌曲龙虎榜': 16,
    //     '华语金曲榜': 17,
    //     '中国嘻哈榜': 18,
    //     '法国 NRJ EuroHot 30周榜': 19,
    //     '台湾Hito排行榜': 20,
    //     'Beatport全球电子舞曲榜': 21,
    //     '云音乐ACG音乐榜': 22,
    //     '云音乐说唱榜': 23,
    //     '云音乐古典音乐榜': 24,
    //     '抖音排行榜': 26,
    //     '新声榜': 27,
    //     '云音乐韩语榜': 28,
    //     '英国Q杂志中文版周榜': 29,
    //     '电竞音乐榜': 30,
    //     '云音乐欧美热歌榜': 31,
    //     '云音乐欧美新歌榜': 32,
    //     '说唱TOP榜': 33,
    //   };
    //   return data[val] || 0;
    // }
    // 跳转到个人用户
    NavRankComponent.prototype.jumpUser = function (id) {
        this.router.navigate(['user'], { queryParams: { id: id } });
    };
    // 播放第一首歌
    NavRankComponent.prototype.playFirstSong = function () {
        if (this.playlistDetail.tracks.length > 0) {
            var song = this.playlistDetail.tracks[0];
            var art = song.ar.map(function (item) { return item.name; });
            this.playSong(song.id, song.name, song.dt, art, song.al.picUrl);
        }
        else {
            this.notification.create('error', "\u9519\u8BEF\u8B66\u544A", '没有播放的歌曲');
        }
    };
    // 播放歌单
    NavRankComponent.prototype.handlePlay = function (song) {
        this.service.player.songList = this.playlistDetail.tracks;
        if (this.playlistDetail.tracks.length > 0) {
            var art = song.ar.map(function (item) { return item.name; });
            this.playSong(song.id, song.name, song.dt, art, song.al.picUrl);
        }
    };
    // 播放歌曲
    NavRankComponent.prototype.playSong = function (id, name, size, artist, picUrl) {
        var _this = this;
        // 获取播放连接
        this.service.song.getSongUrl(id).subscribe(function (song) {
            if (song.url) {
                _this.service.player.song = {
                    id: id,
                    name: name,
                    url: song.url,
                    size: size,
                    artist: artist,
                    picUrl: picUrl,
                };
                var list = _this.service.player.songList;
                if (!list.find(function (e) { return e.id == id; })) {
                    _this.service.player.songList.push(_this.service.player.song);
                }
                // 获取歌词
                _this.service.song.getLyric(id).subscribe(function (lyric) {
                    _this.service.player.song.lyric = lyric;
                });
            }
            else {
                _this.notification.create('error', "\u9519\u8BEF\u8B66\u544A", '付费歌曲，无法播放');
            }
        });
        // 开始播放歌曲
        this.service.player.start = true;
    };
    // 跳转到歌曲详情页面
    NavRankComponent.prototype.toSong = function (id) {
        console.log('歌曲详情', id);
        this.router.navigate(['song'], { queryParams: { id: id } });
    };
    // 跳转到歌手页面
    NavRankComponent.prototype.toArtist = function (id) {
        console.log('歌手页面', id);
        this.router.navigate(['artist'], { queryParams: { id: id } });
    };
    // 跳转到专辑页面
    NavRankComponent.prototype.toAlbum = function (id) {
        console.log("专辑页面:", id);
        this.router.navigate(['album'], { queryParams: { id: id } });
    };
    // 收藏
    NavRankComponent.prototype.favorite = function () {
        this.notification.create('success', "\u63D0\u793A", '收藏功能，等待开发');
    };
    // 分享
    NavRankComponent.prototype.share = function () {
        this.notification.create('success', "\u63D0\u793A", '分享功能，等待开发');
    };
    // 发私信
    NavRankComponent.prototype.sentMessage = function () {
        this.notification.create('success', "\u63D0\u793A", '发送私信功能，等待开发');
    };
    NavRankComponent.ctorParameters = function () { return [
        { type: src_app_services_service_service__WEBPACK_IMPORTED_MODULE_2__["ServiceService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzNotificationService"] }
    ]; };
    NavRankComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav-rank',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./nav-rank.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/nav/nav-rank/nav-rank/nav-rank.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./nav-rank.component.scss */ "./src/app/pages/nav/nav-rank/nav-rank/nav-rank.component.scss")).default]
        })
    ], NavRankComponent);
    return NavRankComponent;
}());



/***/ }),

/***/ "./src/app/pages/nav/nav-singer/nav-singer/nav-singer.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/pages/nav/nav-singer/nav-singer/nav-singer.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\n  background-color: #eff1f4;\n}\n.container .box {\n  width: 980px;\n  margin: 0 auto;\n  display: -webkit-box;\n  display: flex;\n}\n.container .box .left {\n  width: 200px;\n  border-left: 1px solid #ccc;\n  border-right: 1px solid #ccc;\n  background-color: #f8f8f8;\n  padding-top: 50px;\n}\n.container .box .left .l-list .l-item {\n  margin: 10px 15px;\n  padding: 10px 0;\n  cursor: pointer;\n  border-bottom: 1px solid #ccc;\n}\n.container .box .left .l-list .l-item ul {\n  padding: 0 0 0 20px;\n}\n.container .box .left .l-list .l-item ul li {\n  padding: 10px 0;\n  color: #333;\n}\n.container .box .right {\n  -webkit-box-flex: 1;\n          flex: 1;\n  background-color: #fff;\n  padding: 0 30px;\n}\n.container .box .right .content .r-header {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  margin: 0 10px;\n  padding: 30px 0 10px 0;\n  border-bottom: 2px solid #ce1f08;\n}\n.container .box .right .content .r-list {\n  flex-wrap: wrap;\n  padding-bottom: 20px;\n}\n.container .box .right .content .r-list .r-item {\n  margin: 15px 10px 0 10px;\n  width: 124px;\n}\n.container .box .right .content .r-list .r-item .flex {\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  margin: 5px 0 0 0;\n  cursor: pointer;\n}\n.container .box .right .content .r-list .r-item .flex p {\n  color: #333;\n  margin: 0;\n}\n.container .box .right .content .r-list .r-item .flex p:hover {\n  -webkit-text-decoration-color: #000;\n          text-decoration-color: #000;\n  -webkit-text-decoration-line: underline;\n          text-decoration-line: underline;\n  -webkit-text-decoration-style: solid;\n          text-decoration-style: solid;\n}\n.container .box .right .content .r-list .r-item .flex .tag {\n  background: url('icon.png') no-repeat 0 9999px;\n  width: 17px;\n  height: 18px;\n  background-position: 0 -740px;\n  display: inline-block;\n  overflow: hidden;\n  margin-right: 10px;\n}\n.container .box .right .content .pagination {\n  padding: 20px 20px 20px 40px;\n  background-color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zbWFsbHppcC9EZXNrdG9wL2FuZ3VsYXIvd2FuZ3lpeXVuLW11c2ljL3NyYy9hcHAvcGFnZXMvbmF2L25hdi1zaW5nZXIvbmF2LXNpbmdlci9uYXYtc2luZ2VyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9uYXYvbmF2LXNpbmdlci9uYXYtc2luZ2VyL25hdi1zaW5nZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtBQ0NGO0FEQUU7RUFDRSxZQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtBQ0VKO0FEQ0k7RUFDRSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7QUNDTjtBREVRO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLDZCQUFBO0FDQVY7QURFVTtFQUNFLG1CQUFBO0FDQVo7QURFWTtFQUNFLGVBQUE7RUFDQSxXQUFBO0FDQWQ7QURRSTtFQUNFLG1CQUFBO1VBQUEsT0FBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtBQ05OO0FEU1E7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0EsZ0NBQUE7QUNQVjtBRFdRO0VBQ0UsZUFBQTtFQUNBLG9CQUFBO0FDVFY7QURVVTtFQUNFLHdCQUFBO0VBQ0EsWUFBQTtBQ1JaO0FEVVk7RUFDRSx5QkFBQTtVQUFBLDhCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDUmQ7QURTYztFQUNFLFdBQUE7RUFDQSxTQUFBO0FDUGhCO0FEVWM7RUFDRSxtQ0FBQTtVQUFBLDJCQUFBO0VBQ0EsdUNBQUE7VUFBQSwrQkFBQTtFQUNBLG9DQUFBO1VBQUEsNEJBQUE7QUNSaEI7QURXYztFQUNFLDhDQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ1RoQjtBRGdCUTtFQUNFLDRCQUFBO0VBQ0Esc0JBQUE7QUNkViIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL25hdi9uYXYtc2luZ2VyL25hdi1zaW5nZXIvbmF2LXNpbmdlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZmMWY0O1xuICAuYm94IHtcbiAgICB3aWR0aDogOTgwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgZGlzcGxheTogZmxleDtcblxuICAgIC8vIOW3pui+uVxuICAgIC5sZWZ0IHtcbiAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2NjYztcbiAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNjY2M7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOGY4O1xuICAgICAgcGFkZGluZy10b3A6IDUwcHg7XG5cbiAgICAgIC5sLWxpc3Qge1xuICAgICAgICAubC1pdGVtIHtcbiAgICAgICAgICBtYXJnaW46IDEwcHggMTVweDtcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4IDA7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xuXG4gICAgICAgICAgdWwge1xuICAgICAgICAgICAgcGFkZGluZzogMCAwIDAgMjBweDtcblxuICAgICAgICAgICAgbGkge1xuICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDA7XG4gICAgICAgICAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIOWPs+i+uVxuICAgIC5yaWdodCB7XG4gICAgICBmbGV4OiAxO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgIHBhZGRpbmc6IDAgMzBweDtcblxuICAgICAgLmNvbnRlbnQge1xuICAgICAgICAuci1oZWFkZXIge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBtYXJnaW46IDAgMTBweDtcbiAgICAgICAgICBwYWRkaW5nOiAzMHB4IDAgMTBweCAwO1xuICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjY2UxZjA4O1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g5YiX6KGoXG4gICAgICAgIC5yLWxpc3Qge1xuICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICAgICAgICAuci1pdGVtIHtcbiAgICAgICAgICAgIG1hcmdpbjogMTVweCAxMHB4IDAgMTBweDtcbiAgICAgICAgICAgIHdpZHRoOiAxMjRweDtcblxuICAgICAgICAgICAgLmZsZXgge1xuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgIG1hcmdpbjogNXB4IDAgMCAwO1xuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHA6aG92ZXIge1xuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogIzAwMDtcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb24tbGluZTogdW5kZXJsaW5lO1xuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbi1zdHlsZTogc29saWQ7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAudGFnIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9pY29uLnBuZykgbm8tcmVwZWF0IDAgOTk5OXB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxN3B4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogMThweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIC03NDBweDtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyDliIbpobVcbiAgICAgICAgLnBhZ2luYXRpb24ge1xuICAgICAgICAgIHBhZGRpbmc6IDIwcHggMjBweCAyMHB4IDQwcHg7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiLmNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZmYxZjQ7XG59XG4uY29udGFpbmVyIC5ib3gge1xuICB3aWR0aDogOTgwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmNvbnRhaW5lciAuYm94IC5sZWZ0IHtcbiAgd2lkdGg6IDIwMHB4O1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNjY2M7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNjY2M7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY4Zjg7XG4gIHBhZGRpbmctdG9wOiA1MHB4O1xufVxuLmNvbnRhaW5lciAuYm94IC5sZWZ0IC5sLWxpc3QgLmwtaXRlbSB7XG4gIG1hcmdpbjogMTBweCAxNXB4O1xuICBwYWRkaW5nOiAxMHB4IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XG59XG4uY29udGFpbmVyIC5ib3ggLmxlZnQgLmwtbGlzdCAubC1pdGVtIHVsIHtcbiAgcGFkZGluZzogMCAwIDAgMjBweDtcbn1cbi5jb250YWluZXIgLmJveCAubGVmdCAubC1saXN0IC5sLWl0ZW0gdWwgbGkge1xuICBwYWRkaW5nOiAxMHB4IDA7XG4gIGNvbG9yOiAjMzMzO1xufVxuLmNvbnRhaW5lciAuYm94IC5yaWdodCB7XG4gIGZsZXg6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDAgMzBweDtcbn1cbi5jb250YWluZXIgLmJveCAucmlnaHQgLmNvbnRlbnQgLnItaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiAwIDEwcHg7XG4gIHBhZGRpbmc6IDMwcHggMCAxMHB4IDA7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjY2UxZjA4O1xufVxuLmNvbnRhaW5lciAuYm94IC5yaWdodCAuY29udGVudCAuci1saXN0IHtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cbi5jb250YWluZXIgLmJveCAucmlnaHQgLmNvbnRlbnQgLnItbGlzdCAuci1pdGVtIHtcbiAgbWFyZ2luOiAxNXB4IDEwcHggMCAxMHB4O1xuICB3aWR0aDogMTI0cHg7XG59XG4uY29udGFpbmVyIC5ib3ggLnJpZ2h0IC5jb250ZW50IC5yLWxpc3QgLnItaXRlbSAuZmxleCB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luOiA1cHggMCAwIDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5jb250YWluZXIgLmJveCAucmlnaHQgLmNvbnRlbnQgLnItbGlzdCAuci1pdGVtIC5mbGV4IHAge1xuICBjb2xvcjogIzMzMztcbiAgbWFyZ2luOiAwO1xufVxuLmNvbnRhaW5lciAuYm94IC5yaWdodCAuY29udGVudCAuci1saXN0IC5yLWl0ZW0gLmZsZXggcDpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogIzAwMDtcbiAgdGV4dC1kZWNvcmF0aW9uLWxpbmU6IHVuZGVybGluZTtcbiAgdGV4dC1kZWNvcmF0aW9uLXN0eWxlOiBzb2xpZDtcbn1cbi5jb250YWluZXIgLmJveCAucmlnaHQgLmNvbnRlbnQgLnItbGlzdCAuci1pdGVtIC5mbGV4IC50YWcge1xuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9pY29uLnBuZykgbm8tcmVwZWF0IDAgOTk5OXB4O1xuICB3aWR0aDogMTdweDtcbiAgaGVpZ2h0OiAxOHB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIC03NDBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG4uY29udGFpbmVyIC5ib3ggLnJpZ2h0IC5jb250ZW50IC5wYWdpbmF0aW9uIHtcbiAgcGFkZGluZzogMjBweCAyMHB4IDIwcHggNDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/nav/nav-singer/nav-singer/nav-singer.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/nav/nav-singer/nav-singer/nav-singer.component.ts ***!
  \*************************************************************************/
/*! exports provided: NavSingerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavSingerComponent", function() { return NavSingerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/service.service */ "./src/app/services/service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var NavSingerComponent = /** @class */ (function () {
    function NavSingerComponent(service, router, activatedRoute) {
        this.service = service;
        this.router = router;
        this.activatedRoute = activatedRoute;
        // 侧栏列表
        this.sliderTitle = [
            {
                title: '推荐',
                data: [
                    {
                        code: '1001',
                        name: '热门歌手'
                    }, {
                        code: '5001',
                        name: '入驻歌手'
                    }
                ]
            },
            {
                title: '华语',
                data: [
                    {
                        code: '1001',
                        name: '华语男歌手'
                    }, {
                        code: '1002',
                        name: '华语女歌手'
                    }, {
                        code: '1003',
                        name: '华语组合/乐队'
                    }
                ]
            }, {
                title: '欧美',
                data: [
                    {
                        code: '2001',
                        name: '欧美男歌手'
                    }, {
                        code: '2002',
                        name: '欧美女歌手'
                    }, {
                        code: '2003',
                        name: '欧美组合/乐队'
                    }
                ]
            }, {
                title: '日本',
                data: [
                    {
                        code: '6001',
                        name: '日本男歌手'
                    }, {
                        code: '6002',
                        name: '日本女歌手'
                    }, {
                        code: '6003',
                        name: '日本组合/乐队'
                    }
                ]
            }, {
                title: '韩国',
                data: [
                    {
                        code: '7001',
                        name: '韩国男歌手'
                    }, {
                        code: '7002',
                        name: '韩国女歌手'
                    }, {
                        code: '7003',
                        name: '韩国组合/乐队'
                    }
                ]
            }, {
                title: '其他',
                data: [
                    {
                        code: '4001',
                        name: '其他男歌手'
                    }, {
                        code: '4002',
                        name: '其他女歌手'
                    }, {
                        code: '4003',
                        name: '其他组合/乐队'
                    }
                ]
            }
        ];
        this.selectedName = '热门歌手'; // 选中的侧栏项的名称
        this.list = []; // 数据列表
        this.loading = true; // 加载状态
        this.currentPage = 1;
        this.total = 240;
        this.cat = '1001';
    }
    NavSingerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.queryParams.subscribe(function (params) {
            if (params.name && params.cat) {
                _this.selectedName = params.name;
                _this.getArtistList(params.cat);
                _this.cat = params.cat;
            }
            else {
                _this.getArtistList();
            }
        });
    };
    // 歌手榜
    NavSingerComponent.prototype.getArtist = function () {
        this.service.artist.getArtist().subscribe(function (res) {
            console.log("歌手榜：", res);
        });
    };
    // 歌手分类
    NavSingerComponent.prototype.getArtistList = function (cat, offset, limit, initial) {
        var _this = this;
        if (cat === void 0) { cat = '1001'; }
        if (offset === void 0) { offset = 0; }
        if (limit === void 0) { limit = 30; }
        if (initial === void 0) { initial = null; }
        this.loading = true;
        this.service.artist.getArtistList({ cat: cat, offset: offset * limit, limit: limit, initial: initial }).subscribe(function (res) {
            console.log("歌手分类:", res);
            _this.list = res;
            _this.loading = false;
        });
    };
    // 选中code
    NavSingerComponent.prototype.selecteCode = function (row) {
        this.list = [];
        this.router.navigate(['navSinger'], { queryParams: { nav: 4, cat: row.code, name: row.name } });
    };
    // 跳转到用户界面
    NavSingerComponent.prototype.jumpArtist = function (id) {
        this.router.navigate(['artist'], { queryParams: { id: id } });
    };
    // 跳转到用户信息界面
    NavSingerComponent.prototype.jumpUser = function (id) {
        this.router.navigate(['user'], { queryParams: { id: id } });
    };
    // 分页
    NavSingerComponent.prototype.nzPageIndexChange = function (page) {
        this.getArtistList(this.cat, page);
    };
    NavSingerComponent.ctorParameters = function () { return [
        { type: src_app_services_service_service__WEBPACK_IMPORTED_MODULE_2__["ServiceService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
    ]; };
    NavSingerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav-singer',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./nav-singer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/nav/nav-singer/nav-singer/nav-singer.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./nav-singer.component.scss */ "./src/app/pages/nav/nav-singer/nav-singer/nav-singer.component.scss")).default]
        })
    ], NavSingerComponent);
    return NavSingerComponent;
}());



/***/ }),

/***/ "./src/app/pages/nav/new-album/new-album/new-album.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/pages/nav/new-album/new-album/new-album.component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\n  background-color: #eff1f4;\n}\n.container .box {\n  width: 980px;\n  margin: 0 auto;\n}\n.container .box .hot {\n  background-color: #fff;\n  padding: 40px 0 0 0;\n}\n.container .box .hot .hot-header {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  margin: 0 40px;\n  padding: 0 0 10px 0;\n  border-bottom: 2px solid #ce1f08;\n}\n.container .box .hot .hot-header .hot-title-first {\n  font-size: 1.5rem;\n  color: #222;\n}\n.container .box .hot .hot-header .hot-title {\n  padding: 0 10px;\n  font-size: 0.92rem;\n  color: #666;\n  cursor: pointer;\n}\n.container .box .hot .hot-header .hot-h-list {\n  -webkit-box-align: end;\n          align-items: flex-end;\n}\n.container .box .hot .hot-header .hot-h-list .hot-h-item {\n  margin: 0 0 0 20px;\n}\n.container .box .hot .hot-header .hot-h-list .hot-h-item:hover {\n  cursor: pointer;\n  -webkit-text-decoration: underline #999 solid;\n          text-decoration: underline #999 solid;\n}\n.container .box .hot .singer-unit {\n  margin: 20px 20px 0 20px;\n}\n.container .box .hot .singer-unit .su-list {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n}\n.container .box .hot .singer-unit .su-list .su-item {\n  width: calc(20% - 40px);\n  margin: 0 20px 30px 20px;\n}\n.container .box .hot .singer-unit .su-list .su-item .fans {\n  width: 100%;\n  height: 140px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: end;\n          align-items: flex-end;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n.container .box .hot .singer-unit .su-list .su-item .fans div {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  width: 100%;\n  padding: 5px 10px;\n  font-size: 0.8rem;\n  color: #ccc;\n  background-color: rgba(0, 0, 0, 0.6);\n  -webkit-backdrop-filter: blur(2px);\n          backdrop-filter: blur(2px);\n}\n.container .box .hot .singer-unit .su-list .su-item .fans div .icon-zanting:hover {\n  color: #fff;\n}\n.container .box .hot .singer-unit .su-list .su-item .su-name {\n  margin-top: 10px;\n  font-size: 0.8rem;\n  color: #333;\n}\n.container .box .hot .singer-unit .su-list .su-item .album-img {\n  width: 100%;\n  height: 140px;\n  background-size: cover;\n  background-repeat: no-repeat;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n  -webkit-box-align: end;\n          align-items: flex-end;\n  padding: 0 10px 10px 0;\n}\n.container .box .hot .singer-unit .su-list .su-item .album-img i {\n  display: none;\n  font-size: 25px;\n  color: #eee;\n}\n.container .box .hot .singer-unit .su-list .su-item .album-img:hover i {\n  display: block;\n}\n.container .box .hot .singer-unit .su-list .su-item .ai-desc {\n  margin-top: 10px;\n  font-size: 0.8rem;\n}\n.container .box .hot .singer-unit .su-list .su-item .ai-desc p {\n  margin: 0;\n  padding: 0 0 5px 0;\n  width: 100px;\n}\n.container .box .hot .singer-unit .su-list .su-item .ai-desc p:nth-child(1) {\n  color: #222;\n}\n.container .box .hot .singer-unit .su-list .su-item .ai-desc p:nth-child(2) {\n  color: #999;\n}\n.container .box .pagination {\n  padding: 20px 20px 20px 40px;\n  background-color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zbWFsbHppcC9EZXNrdG9wL2FuZ3VsYXIvd2FuZ3lpeXVuLW11c2ljL3NyYy9hcHAvcGFnZXMvbmF2L25ldy1hbGJ1bS9uZXctYWxidW0vbmV3LWFsYnVtLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9uYXYvbmV3LWFsYnVtL25ldy1hbGJ1bS9uZXctYWxidW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtBQ0NGO0FEQUU7RUFDRSxZQUFBO0VBQ0EsY0FBQTtBQ0VKO0FEQ0k7RUFDRSxzQkFBQTtFQUNBLG1CQUFBO0FDQ047QURDTTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtBQ0NSO0FEQ1E7RUFDRSxpQkFBQTtFQUNBLFdBQUE7QUNDVjtBREVRO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUNBVjtBREdRO0VBQ0Usc0JBQUE7VUFBQSxxQkFBQTtBQ0RWO0FER1U7RUFDRSxrQkFBQTtBQ0RaO0FESVU7RUFDRSxlQUFBO0VBQ0EsNkNBQUE7VUFBQSxxQ0FBQTtBQ0ZaO0FEUU07RUFDRSx3QkFBQTtBQ05SO0FEUVE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxlQUFBO0FDTlY7QURRVTtFQUNFLHVCQUFBO0VBQ0Esd0JBQUE7QUNOWjtBRFFZO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxzQkFBQTtVQUFBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtBQ05kO0FEUWM7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQ0FBQTtVQUFBLDBCQUFBO0FDTmhCO0FEUWdCO0VBQ0UsV0FBQTtBQ05sQjtBRFdZO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUNUZDtBRFlZO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EscUJBQUE7VUFBQSx5QkFBQTtFQUNBLHNCQUFBO1VBQUEscUJBQUE7RUFDQSxzQkFBQTtBQ1ZkO0FEWWM7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUNWaEI7QURhWTtFQUNFLGNBQUE7QUNYZDtBRGNZO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtBQ1pkO0FEY2M7RUFDRSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDWmhCO0FEZVk7RUFDRSxXQUFBO0FDYmQ7QURlWTtFQUNFLFdBQUE7QUNiZDtBRHFCSTtFQUNFLDRCQUFBO0VBQ0Esc0JBQUE7QUNuQk4iLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9uYXYvbmV3LWFsYnVtL25ldy1hbGJ1bS9uZXctYWxidW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmZjFmNDtcbiAgLmJveCB7XG4gICAgd2lkdGg6IDk4MHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuXG4gICAgLy8g54Ot6ZeoXG4gICAgLmhvdCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgcGFkZGluZzogNDBweCAwIDAgMDtcblxuICAgICAgLmhvdC1oZWFkZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBtYXJnaW46IDAgNDBweDtcbiAgICAgICAgcGFkZGluZzogMCAwIDEwcHggMDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNjZTFmMDg7XG5cbiAgICAgICAgLmhvdC10aXRsZS1maXJzdCB7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICAgICAgY29sb3I6ICMyMjI7XG4gICAgICAgIH1cblxuICAgICAgICAuaG90LXRpdGxlIHtcbiAgICAgICAgICBwYWRkaW5nOiAwIDEwcHg7XG4gICAgICAgICAgZm9udC1zaXplOiAwLjkycmVtO1xuICAgICAgICAgIGNvbG9yOiAjNjY2O1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5ob3QtaC1saXN0IHtcbiAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG5cbiAgICAgICAgICAuaG90LWgtaXRlbSB7XG4gICAgICAgICAgICBtYXJnaW46IDAgMCAwIDIwcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmhvdC1oLWl0ZW06aG92ZXIge1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgIzk5OSBzb2xpZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8g5q2M5Y2VXG4gICAgICAuc2luZ2VyLXVuaXQge1xuICAgICAgICBtYXJnaW46IDIwcHggMjBweCAwIDIwcHg7XG5cbiAgICAgICAgLnN1LWxpc3Qge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuXG4gICAgICAgICAgLnN1LWl0ZW0ge1xuICAgICAgICAgICAgd2lkdGg6IGNhbGMoMjAlIC0gNDBweCk7XG4gICAgICAgICAgICBtYXJnaW46IDAgMjBweCAzMHB4IDIwcHg7XG5cbiAgICAgICAgICAgIC5mYW5zIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIGhlaWdodDogMTQwcHg7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcblxuICAgICAgICAgICAgICBkaXYge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjY2NjO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgICAgICAgICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMnB4KTtcblxuICAgICAgICAgICAgICAgIC5pY29uLXphbnRpbmc6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5zdS1uYW1lIHtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgICAgICAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuYWxidW0taW1nIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIGhlaWdodDogMTQwcHg7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICAgICAgICAgICAgcGFkZGluZzogMCAxMHB4IDEwcHggMDtcblxuICAgICAgICAgICAgICBpIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2VlZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmFsYnVtLWltZzpob3ZlciBpIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5haS1kZXNjIHtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XG5cbiAgICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMCA1cHggMDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5haS1kZXNjIHA6bnRoLWNoaWxkKDEpIHtcbiAgICAgICAgICAgICAgY29sb3I6ICMyMjI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYWktZGVzYyBwOm50aC1jaGlsZCgyKSB7XG4gICAgICAgICAgICAgIGNvbG9yOiAjOTk5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIOWIhumhtVxuICAgIC5wYWdpbmF0aW9uIHtcbiAgICAgIHBhZGRpbmc6IDIwcHggMjBweCAyMHB4IDQwcHg7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIH1cbiAgfVxufVxuIiwiLmNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZmYxZjQ7XG59XG4uY29udGFpbmVyIC5ib3gge1xuICB3aWR0aDogOTgwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuLmNvbnRhaW5lciAuYm94IC5ob3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiA0MHB4IDAgMCAwO1xufVxuLmNvbnRhaW5lciAuYm94IC5ob3QgLmhvdC1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IDAgNDBweDtcbiAgcGFkZGluZzogMCAwIDEwcHggMDtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNjZTFmMDg7XG59XG4uY29udGFpbmVyIC5ib3ggLmhvdCAuaG90LWhlYWRlciAuaG90LXRpdGxlLWZpcnN0IHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGNvbG9yOiAjMjIyO1xufVxuLmNvbnRhaW5lciAuYm94IC5ob3QgLmhvdC1oZWFkZXIgLmhvdC10aXRsZSB7XG4gIHBhZGRpbmc6IDAgMTBweDtcbiAgZm9udC1zaXplOiAwLjkycmVtO1xuICBjb2xvcjogIzY2NjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmNvbnRhaW5lciAuYm94IC5ob3QgLmhvdC1oZWFkZXIgLmhvdC1oLWxpc3Qge1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG59XG4uY29udGFpbmVyIC5ib3ggLmhvdCAuaG90LWhlYWRlciAuaG90LWgtbGlzdCAuaG90LWgtaXRlbSB7XG4gIG1hcmdpbjogMCAwIDAgMjBweDtcbn1cbi5jb250YWluZXIgLmJveCAuaG90IC5ob3QtaGVhZGVyIC5ob3QtaC1saXN0IC5ob3QtaC1pdGVtOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSAjOTk5IHNvbGlkO1xufVxuLmNvbnRhaW5lciAuYm94IC5ob3QgLnNpbmdlci11bml0IHtcbiAgbWFyZ2luOiAyMHB4IDIwcHggMCAyMHB4O1xufVxuLmNvbnRhaW5lciAuYm94IC5ob3QgLnNpbmdlci11bml0IC5zdS1saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuLmNvbnRhaW5lciAuYm94IC5ob3QgLnNpbmdlci11bml0IC5zdS1saXN0IC5zdS1pdGVtIHtcbiAgd2lkdGg6IGNhbGMoMjAlIC0gNDBweCk7XG4gIG1hcmdpbjogMCAyMHB4IDMwcHggMjBweDtcbn1cbi5jb250YWluZXIgLmJveCAuaG90IC5zaW5nZXItdW5pdCAuc3UtbGlzdCAuc3UtaXRlbSAuZmFucyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDE0MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG4uY29udGFpbmVyIC5ib3ggLmhvdCAuc2luZ2VyLXVuaXQgLnN1LWxpc3QgLnN1LWl0ZW0gLmZhbnMgZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBjb2xvcjogI2NjYztcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMnB4KTtcbn1cbi5jb250YWluZXIgLmJveCAuaG90IC5zaW5nZXItdW5pdCAuc3UtbGlzdCAuc3UtaXRlbSAuZmFucyBkaXYgLmljb24temFudGluZzpob3ZlciB7XG4gIGNvbG9yOiAjZmZmO1xufVxuLmNvbnRhaW5lciAuYm94IC5ob3QgLnNpbmdlci11bml0IC5zdS1saXN0IC5zdS1pdGVtIC5zdS1uYW1lIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIGNvbG9yOiAjMzMzO1xufVxuLmNvbnRhaW5lciAuYm94IC5ob3QgLnNpbmdlci11bml0IC5zdS1saXN0IC5zdS1pdGVtIC5hbGJ1bS1pbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxNDBweDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICBwYWRkaW5nOiAwIDEwcHggMTBweCAwO1xufVxuLmNvbnRhaW5lciAuYm94IC5ob3QgLnNpbmdlci11bml0IC5zdS1saXN0IC5zdS1pdGVtIC5hbGJ1bS1pbWcgaSB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgY29sb3I6ICNlZWU7XG59XG4uY29udGFpbmVyIC5ib3ggLmhvdCAuc2luZ2VyLXVuaXQgLnN1LWxpc3QgLnN1LWl0ZW0gLmFsYnVtLWltZzpob3ZlciBpIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uY29udGFpbmVyIC5ib3ggLmhvdCAuc2luZ2VyLXVuaXQgLnN1LWxpc3QgLnN1LWl0ZW0gLmFpLWRlc2Mge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBmb250LXNpemU6IDAuOHJlbTtcbn1cbi5jb250YWluZXIgLmJveCAuaG90IC5zaW5nZXItdW5pdCAuc3UtbGlzdCAuc3UtaXRlbSAuYWktZGVzYyBwIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwIDAgNXB4IDA7XG4gIHdpZHRoOiAxMDBweDtcbn1cbi5jb250YWluZXIgLmJveCAuaG90IC5zaW5nZXItdW5pdCAuc3UtbGlzdCAuc3UtaXRlbSAuYWktZGVzYyBwOm50aC1jaGlsZCgxKSB7XG4gIGNvbG9yOiAjMjIyO1xufVxuLmNvbnRhaW5lciAuYm94IC5ob3QgLnNpbmdlci11bml0IC5zdS1saXN0IC5zdS1pdGVtIC5haS1kZXNjIHA6bnRoLWNoaWxkKDIpIHtcbiAgY29sb3I6ICM5OTk7XG59XG4uY29udGFpbmVyIC5ib3ggLnBhZ2luYXRpb24ge1xuICBwYWRkaW5nOiAyMHB4IDIwcHggMjBweCA0MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/nav/new-album/new-album/new-album.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/nav/new-album/new-album/new-album.component.ts ***!
  \**********************************************************************/
/*! exports provided: NewAlbumComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewAlbumComponent", function() { return NewAlbumComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/service.service */ "./src/app/services/service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var NewAlbumComponent = /** @class */ (function () {
    function NewAlbumComponent(service, router) {
        this.service = service;
        this.router = router;
        this.selectedTag = '全部';
        this.currentPage = 1;
        this.toAlbumTotal = 0;
        this.loadingAll = true;
        this.loadingHot = true;
    }
    NewAlbumComponent.prototype.ngOnInit = function () {
        this.getAlbumNewest();
        this.getTopAlbum();
    };
    // 跳转到专辑详情页面
    NewAlbumComponent.prototype.toAlbum = function (item) {
        this.router.navigate(['album'], { queryParams: { id: item.id } });
    };
    // 获取最新专辑
    NewAlbumComponent.prototype.getAlbumNewest = function () {
        var _this = this;
        this.service.album.getAlbumNewest().subscribe(function (albums) {
            _this.albumNewest = albums.filter(function (item, index) { return index < 10; });
            _this.loadingHot = false;
        });
    };
    // 新碟上架
    NewAlbumComponent.prototype.getTopAlbum = function (offset, limit) {
        var _this = this;
        if (offset === void 0) { offset = 0; }
        if (limit === void 0) { limit = 30; }
        this.loadingAll = true;
        this.service.album.getTopAlbum({ offset: offset * limit, limit: limit }).subscribe(function (res) {
            _this.topAlbum = res.albums;
            _this.toAlbumTotal = res.total;
            _this.loadingAll = false;
        });
    };
    // 选中标签
    NewAlbumComponent.prototype.selectTag = function (item) {
        this.selectedTag = item;
    };
    // 分页
    NewAlbumComponent.prototype.nzPageIndexChange = function (page) {
        this.getTopAlbum(page);
    };
    NewAlbumComponent.ctorParameters = function () { return [
        { type: src_app_services_service_service__WEBPACK_IMPORTED_MODULE_2__["ServiceService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    NewAlbumComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-new-album',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./new-album.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/nav/new-album/new-album/new-album.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./new-album.component.scss */ "./src/app/pages/nav/new-album/new-album/new-album.component.scss")).default]
        })
    ], NewAlbumComponent);
    return NewAlbumComponent;
}());



/***/ }),

/***/ "./src/app/router/router-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/router/router-routing.module.ts ***!
  \*************************************************/
/*! exports provided: RouterRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouterRoutingModule", function() { return RouterRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/components/home/home.component */ "./src/app/pages/components/home/home.component.ts");
/* harmony import */ var _pages_components_album_album_album_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/components/album/album/album.component */ "./src/app/pages/components/album/album/album.component.ts");
/* harmony import */ var _pages_components_discover_discover_discover_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pages/components/discover/discover/discover.component */ "./src/app/pages/components/discover/discover/discover.component.ts");
/* harmony import */ var _pages_components_playlist_playlist_playlist_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../pages/components/playlist/playlist/playlist.component */ "./src/app/pages/components/playlist/playlist/playlist.component.ts");
/* harmony import */ var _pages_components_user_user_user_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pages/components/user/user/user.component */ "./src/app/pages/components/user/user/user.component.ts");
/* harmony import */ var _pages_components_song_song_song_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../pages/components/song/song/song.component */ "./src/app/pages/components/song/song/song.component.ts");
/* harmony import */ var _pages_components_mv_mv_mv_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../pages/components/mv/mv/mv.component */ "./src/app/pages/components/mv/mv/mv.component.ts");
/* harmony import */ var _pages_components_dj_dj_dj_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../pages/components/dj/dj/dj.component */ "./src/app/pages/components/dj/dj/dj.component.ts");
/* harmony import */ var _pages_components_artist_artist_artist_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../pages/components/artist/artist/artist.component */ "./src/app/pages/components/artist/artist/artist.component.ts");
/* harmony import */ var _pages_nav_new_album_new_album_new_album_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../pages/nav/new-album/new-album/new-album.component */ "./src/app/pages/nav/new-album/new-album/new-album.component.ts");
/* harmony import */ var _pages_nav_nav_playlist_nav_playlist_nav_playlist_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../pages/nav/nav-playlist/nav-playlist/nav-playlist.component */ "./src/app/pages/nav/nav-playlist/nav-playlist/nav-playlist.component.ts");
/* harmony import */ var _pages_nav_nav_singer_nav_singer_nav_singer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../pages/nav/nav-singer/nav-singer/nav-singer.component */ "./src/app/pages/nav/nav-singer/nav-singer/nav-singer.component.ts");
/* harmony import */ var _pages_nav_nav_dj_nav_dj_nav_dj_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../pages/nav/nav-dj/nav-dj/nav-dj.component */ "./src/app/pages/nav/nav-dj/nav-dj/nav-dj.component.ts");
/* harmony import */ var _pages_nav_nav_rank_nav_rank_nav_rank_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../pages/nav/nav-rank/nav-rank/nav-rank.component */ "./src/app/pages/nav/nav-rank/nav-rank/nav-rank.component.ts");

















var routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    }, {
        path: 'home',
        component: _pages_components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    }, {
        path: 'album',
        component: _pages_components_album_album_album_component__WEBPACK_IMPORTED_MODULE_4__["AlbumComponent"]
    }, {
        path: 'discover',
        component: _pages_components_discover_discover_discover_component__WEBPACK_IMPORTED_MODULE_5__["DiscoverComponent"]
    }, {
        path: 'playlist',
        component: _pages_components_playlist_playlist_playlist_component__WEBPACK_IMPORTED_MODULE_6__["PlaylistComponent"]
    }, {
        path: 'user',
        component: _pages_components_user_user_user_component__WEBPACK_IMPORTED_MODULE_7__["UserComponent"],
    }, {
        path: 'song',
        component: _pages_components_song_song_song_component__WEBPACK_IMPORTED_MODULE_8__["SongComponent"]
    }, {
        path: 'mv',
        component: _pages_components_mv_mv_mv_component__WEBPACK_IMPORTED_MODULE_9__["MvComponent"]
    }, {
        path: 'dj',
        component: _pages_components_dj_dj_dj_component__WEBPACK_IMPORTED_MODULE_10__["DjComponent"]
    }, {
        path: 'artist',
        component: _pages_components_artist_artist_artist_component__WEBPACK_IMPORTED_MODULE_11__["ArtistComponent"],
    }, {
        path: 'navAlbum',
        component: _pages_nav_new_album_new_album_new_album_component__WEBPACK_IMPORTED_MODULE_12__["NewAlbumComponent"],
    }, {
        path: 'navPlaylist',
        component: _pages_nav_nav_playlist_nav_playlist_nav_playlist_component__WEBPACK_IMPORTED_MODULE_13__["NavPlaylistComponent"],
    }, {
        path: 'navSinger',
        component: _pages_nav_nav_singer_nav_singer_nav_singer_component__WEBPACK_IMPORTED_MODULE_14__["NavSingerComponent"]
    }, {
        path: 'navDj',
        component: _pages_nav_nav_dj_nav_dj_nav_dj_component__WEBPACK_IMPORTED_MODULE_15__["NavDjComponent"]
    }, {
        path: 'navRank',
        component: _pages_nav_nav_rank_nav_rank_nav_rank_component__WEBPACK_IMPORTED_MODULE_16__["NavRankComponent"]
    }
];
var RouterRoutingModule = /** @class */ (function () {
    function RouterRoutingModule() {
    }
    RouterRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], RouterRoutingModule);
    return RouterRoutingModule;
}());



/***/ }),

/***/ "./src/app/router/router.module.ts":
/*!*****************************************!*\
  !*** ./src/app/router/router.module.ts ***!
  \*****************************************/
/*! exports provided: RouterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouterModule", function() { return RouterModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _router_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./router-routing.module */ "./src/app/router/router-routing.module.ts");
/* harmony import */ var _pages_components_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/components/home/home.component */ "./src/app/pages/components/home/home.component.ts");
/* harmony import */ var element_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! element-angular */ "./node_modules/element-angular/release/element-angular.module.js");
/* harmony import */ var _share_share_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../share/share.module */ "./src/app/share/share.module.ts");
/* harmony import */ var _pages_components_playlist_playlist_playlist_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pages/components/playlist/playlist/playlist.component */ "./src/app/pages/components/playlist/playlist/playlist.component.ts");
/* harmony import */ var _pages_components_discover_discover_discover_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../pages/components/discover/discover/discover.component */ "./src/app/pages/components/discover/discover/discover.component.ts");
/* harmony import */ var _pages_components_album_album_album_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../pages/components/album/album/album.component */ "./src/app/pages/components/album/album/album.component.ts");
/* harmony import */ var _pages_components_user_user_user_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../pages/components/user/user/user.component */ "./src/app/pages/components/user/user/user.component.ts");
/* harmony import */ var _pages_components_song_song_song_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../pages/components/song/song/song.component */ "./src/app/pages/components/song/song/song.component.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _pages_components_mv_mv_mv_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../pages/components/mv/mv/mv.component */ "./src/app/pages/components/mv/mv/mv.component.ts");
/* harmony import */ var _pages_components_dj_dj_dj_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../pages/components/dj/dj/dj.component */ "./src/app/pages/components/dj/dj/dj.component.ts");
/* harmony import */ var _pages_components_artist_artist_artist_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../pages/components/artist/artist/artist.component */ "./src/app/pages/components/artist/artist/artist.component.ts");
/* harmony import */ var _pages_components_artist_components_hotSongs_hot_songs_hot_songs_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../pages/components/artist/components/hotSongs/hot-songs/hot-songs.component */ "./src/app/pages/components/artist/components/hotSongs/hot-songs/hot-songs.component.ts");
/* harmony import */ var _pages_components_artist_components_all_album_all_album_all_album_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../pages/components/artist/components/all-album/all-album/all-album.component */ "./src/app/pages/components/artist/components/all-album/all-album/all-album.component.ts");
/* harmony import */ var _pages_components_artist_components_relative_mv_relative_mv_relative_mv_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../pages/components/artist/components/relative-mv/relative-mv/relative-mv.component */ "./src/app/pages/components/artist/components/relative-mv/relative-mv/relative-mv.component.ts");
/* harmony import */ var _pages_components_artist_components_artist_desc_artist_desc_artist_desc_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../pages/components/artist/components/artist-desc/artist-desc/artist-desc.component */ "./src/app/pages/components/artist/components/artist-desc/artist-desc/artist-desc.component.ts");
/* harmony import */ var _pages_nav_new_album_new_album_new_album_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../pages/nav/new-album/new-album/new-album.component */ "./src/app/pages/nav/new-album/new-album/new-album.component.ts");
/* harmony import */ var _pages_nav_nav_playlist_nav_playlist_nav_playlist_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../pages/nav/nav-playlist/nav-playlist/nav-playlist.component */ "./src/app/pages/nav/nav-playlist/nav-playlist/nav-playlist.component.ts");
/* harmony import */ var _pages_components_login_login_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../pages/components/login/login.component */ "./src/app/pages/components/login/login.component.ts");
/* harmony import */ var _pages_nav_nav_singer_nav_singer_nav_singer_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../pages/nav/nav-singer/nav-singer/nav-singer.component */ "./src/app/pages/nav/nav-singer/nav-singer/nav-singer.component.ts");
/* harmony import */ var _pages_nav_nav_dj_nav_dj_nav_dj_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../pages/nav/nav-dj/nav-dj/nav-dj.component */ "./src/app/pages/nav/nav-dj/nav-dj/nav-dj.component.ts");
/* harmony import */ var _pages_nav_nav_rank_nav_rank_nav_rank_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../pages/nav/nav-rank/nav-rank/nav-rank.component */ "./src/app/pages/nav/nav-rank/nav-rank/nav-rank.component.ts");
/* harmony import */ var _pages_components_user_components_follows_follows_follows_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../pages/components/user/components/follows/follows/follows.component */ "./src/app/pages/components/user/components/follows/follows/follows.component.ts");
/* harmony import */ var _pages_components_user_components_followeds_followeds_followeds_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../pages/components/user/components/followeds/followeds/followeds.component */ "./src/app/pages/components/user/components/followeds/followeds/followeds.component.ts");
/* harmony import */ var _pages_components_user_components_index_index_index_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../pages/components/user/components/index/index/index.component */ "./src/app/pages/components/user/components/index/index/index.component.ts");





// import module
























var RouterModule = /** @class */ (function () {
    function RouterModule() {
    }
    RouterModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _pages_components_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
                _pages_components_playlist_playlist_playlist_component__WEBPACK_IMPORTED_MODULE_7__["PlaylistComponent"],
                _pages_components_discover_discover_discover_component__WEBPACK_IMPORTED_MODULE_8__["DiscoverComponent"],
                _pages_components_album_album_album_component__WEBPACK_IMPORTED_MODULE_9__["AlbumComponent"],
                _pages_components_user_user_user_component__WEBPACK_IMPORTED_MODULE_10__["UserComponent"],
                _pages_components_song_song_song_component__WEBPACK_IMPORTED_MODULE_11__["SongComponent"],
                _pages_components_mv_mv_mv_component__WEBPACK_IMPORTED_MODULE_13__["MvComponent"],
                _pages_components_dj_dj_dj_component__WEBPACK_IMPORTED_MODULE_14__["DjComponent"],
                _pages_components_artist_artist_artist_component__WEBPACK_IMPORTED_MODULE_15__["ArtistComponent"],
                _pages_components_artist_components_hotSongs_hot_songs_hot_songs_component__WEBPACK_IMPORTED_MODULE_16__["HotSongsComponent"],
                _pages_components_artist_components_all_album_all_album_all_album_component__WEBPACK_IMPORTED_MODULE_17__["AllAlbumComponent"],
                _pages_components_artist_components_relative_mv_relative_mv_relative_mv_component__WEBPACK_IMPORTED_MODULE_18__["RelativeMvComponent"],
                _pages_components_artist_components_artist_desc_artist_desc_artist_desc_component__WEBPACK_IMPORTED_MODULE_19__["ArtistDescComponent"],
                _pages_nav_new_album_new_album_new_album_component__WEBPACK_IMPORTED_MODULE_20__["NewAlbumComponent"],
                _pages_nav_nav_playlist_nav_playlist_nav_playlist_component__WEBPACK_IMPORTED_MODULE_21__["NavPlaylistComponent"],
                _pages_components_login_login_component__WEBPACK_IMPORTED_MODULE_22__["LoginComponent"],
                _pages_nav_nav_singer_nav_singer_nav_singer_component__WEBPACK_IMPORTED_MODULE_23__["NavSingerComponent"],
                _pages_nav_nav_dj_nav_dj_nav_dj_component__WEBPACK_IMPORTED_MODULE_24__["NavDjComponent"],
                _pages_nav_nav_rank_nav_rank_nav_rank_component__WEBPACK_IMPORTED_MODULE_25__["NavRankComponent"],
                _pages_components_user_components_follows_follows_follows_component__WEBPACK_IMPORTED_MODULE_26__["FollowsComponent"],
                _pages_components_user_components_followeds_followeds_followeds_component__WEBPACK_IMPORTED_MODULE_27__["FollowedsComponent"],
                _pages_components_user_components_index_index_index_component__WEBPACK_IMPORTED_MODULE_28__["IndexComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                element_angular__WEBPACK_IMPORTED_MODULE_5__["ElModule"].forRoot(),
                _share_share_module__WEBPACK_IMPORTED_MODULE_6__["ShareModule"],
                /** 导入 ng-zorro-antd 模块 **/
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_12__["NgZorroAntdModule"],
            ],
            exports: [_router_routing_module__WEBPACK_IMPORTED_MODULE_3__["RouterRoutingModule"]]
        })
    ], RouterModule);
    return RouterModule;
}());



/***/ }),

/***/ "./src/app/services/album/album.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/album/album.service.ts ***!
  \*************************************************/
/*! exports provided: AlbumService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlbumService", function() { return AlbumService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services.module */ "./src/app/services/services.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_5__);






var defaultCommentParams = {
    offset: 0,
    limit: 20,
    id: 0,
    before: 0,
};
var defaultTopAlbumParams = {
    offset: 0,
    limit: 30
};
var AlbumService = /** @class */ (function () {
    function AlbumService(http, uri) {
        this.http = http;
        this.uri = uri;
    }
    // 最新专辑
    AlbumService.prototype.getAlbumNewest = function () {
        return this.http.get(this.uri + 'album/newest').
            pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res.albums; }));
    };
    // 获取专辑内容
    AlbumService.prototype.getAlbumList = function (id) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]().set('id', id.toString());
        return this.http.get(this.uri + 'album', { params: params })
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res.songs; }));
    };
    // 获取专辑详情
    AlbumService.prototype.getAlbumDetail = function (id) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]().set('id', id.toString());
        return this.http.get(this.uri + 'album', { params: params })
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res; }));
    };
    // 获取专辑评论
    AlbumService.prototype.getAlbumComments = function (args) {
        if (args === void 0) { args = defaultCommentParams; }
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]({ fromString: query_string__WEBPACK_IMPORTED_MODULE_5___default.a.stringify(args) });
        return this.http.get(this.uri + 'comment/album', { params: params })
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res; }));
    };
    // 新碟上架
    AlbumService.prototype.getTopAlbum = function (args) {
        if (args === void 0) { args = defaultTopAlbumParams; }
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]({ fromString: query_string__WEBPACK_IMPORTED_MODULE_5___default.a.stringify(args) });
        return this.http.get(this.uri + 'top/album', { params: params }).
            pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res; }));
    };
    AlbumService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_services_module__WEBPACK_IMPORTED_MODULE_2__["API_CONFIG"],] }] }
    ]; };
    AlbumService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_services_module__WEBPACK_IMPORTED_MODULE_2__["API_CONFIG"]))
    ], AlbumService);
    return AlbumService;
}());



/***/ }),

/***/ "./src/app/services/artist/artist.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/artist/artist.service.ts ***!
  \***************************************************/
/*! exports provided: ArtistService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArtistService", function() { return ArtistService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services.module */ "./src/app/services/services.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_5__);






var defaultTopArtistParams = {
    limit: 50,
    offset: 0
};
var defaultArtistAlbum = {
    limit: 50,
    offset: 0,
    id: 6452
};
var defaultArtistListParams = {
    cat: '',
    limit: 30,
    offset: 0,
    initial: null
};
var ArtistService = /** @class */ (function () {
    function ArtistService(http, uri) {
        this.http = http;
        this.uri = uri;
    }
    // 获取热门歌手
    ArtistService.prototype.getToplistArtist = function (args) {
        if (args === void 0) { args = defaultTopArtistParams; }
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]({ fromString: query_string__WEBPACK_IMPORTED_MODULE_5___default.a.stringify(args) });
        return this.http.get(this.uri + 'top/artists', { params: params })
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res.artists; }));
    };
    // 获取歌手单曲
    ArtistService.prototype.getArtists = function (id) {
        if (id === void 0) { id = 6452; }
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]().set('id', id.toString());
        return this.http.get(this.uri + 'artists', { params: params })
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res; }));
    };
    // 获取歌手 mv
    ArtistService.prototype.getArtistMv = function (id) {
        if (id === void 0) { id = 6452; }
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]().set('id', id.toString());
        return this.http.get(this.uri + 'artist/mv', { params: params })
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res; }));
    };
    // 获取歌手专辑
    ArtistService.prototype.getArtistAlbum = function (args) {
        if (args === void 0) { args = defaultArtistAlbum; }
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]({ fromString: query_string__WEBPACK_IMPORTED_MODULE_5___default.a.stringify(args) });
        return this.http.get(this.uri + 'artist/album', { params: params })
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res; }));
    };
    // 获取歌手描述
    ArtistService.prototype.getArtistDesc = function (id) {
        if (id === void 0) { id = 6452; }
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]().set('id', id.toString());
        return this.http.get(this.uri + 'artist/desc', { params: params })
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res; }));
    };
    // 获取相似歌手
    ArtistService.prototype.getArtistSimi = function (id) {
        if (id === void 0) { id = 6452; }
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]().set('id', id.toString());
        return this.http.get(this.uri + 'simi/artist', { params: params })
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res; }));
    };
    // 歌手分类列表
    ArtistService.prototype.getArtistList = function (args) {
        if (args === void 0) { args = defaultArtistListParams; }
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]({ fromString: query_string__WEBPACK_IMPORTED_MODULE_5___default.a.stringify(args) });
        return this.http.get(this.uri + 'artist/list', { params: params })
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res.artists; }));
    };
    // 歌手榜
    ArtistService.prototype.getArtist = function () {
        return this.http.get(this.uri + 'toplist/artist')
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res.list; }));
    };
    ArtistService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_services_module__WEBPACK_IMPORTED_MODULE_2__["API_CONFIG"],] }] }
    ]; };
    ArtistService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_services_module__WEBPACK_IMPORTED_MODULE_2__["API_CONFIG"]))
    ], ArtistService);
    return ArtistService;
}());



/***/ }),

/***/ "./src/app/services/dj/dj.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/dj/dj.service.ts ***!
  \*******************************************/
/*! exports provided: DjService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DjService", function() { return DjService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services.module */ "./src/app/services/services.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_5__);






var defaultParams = {
    offset: 0,
    limit: 30
};
var DjService = /** @class */ (function () {
    function DjService(http, uri) {
        this.http = http;
        this.uri = uri;
    }
    // 获取电台轮播图
    DjService.prototype.getDjBanner = function () {
        return this.http.get(this.uri + 'dj/banner')
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res; }));
    };
    // 电台 - 新晋电台榜/热门电台榜
    DjService.prototype.getHotDj = function (args) {
        if (args === void 0) { args = defaultParams; }
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]({ fromString: query_string__WEBPACK_IMPORTED_MODULE_5___default.a.stringify(args) });
        return this.http.get(this.uri + 'dj/hot', { params: params })
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res.djRadios; }));
    };
    DjService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_services_module__WEBPACK_IMPORTED_MODULE_2__["API_CONFIG"],] }] }
    ]; };
    DjService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_services_module__WEBPACK_IMPORTED_MODULE_2__["API_CONFIG"]))
    ], DjService);
    return DjService;
}());



/***/ }),

/***/ "./src/app/services/home/home.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/home/home.service.ts ***!
  \***********************************************/
/*! exports provided: HomeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeService", function() { return HomeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services.module */ "./src/app/services/services.module.ts");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_5__);






var defaultArtistListParams = {
    offset: 0,
    limit: 10,
    cat: 5001
};
var defaultTopListDjParams = {
    offset: 0,
    limit: 10,
    type: 'hot'
};
var defaultTopPlaylist = {
    idx: 1,
};
var HomeService = /** @class */ (function () {
    function HomeService(http, uri) {
        this.http = http;
        this.uri = uri;
    }
    // 获取轮播图
    HomeService.prototype.getBanners = function () {
        return this.http.get(this.uri + 'banner')
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res.banners; }));
    };
    // 入驻歌手
    HomeService.prototype.getArtistList = function (args) {
        if (args === void 0) { args = defaultArtistListParams; }
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({ fromString: query_string__WEBPACK_IMPORTED_MODULE_5___default.a.stringify(args) });
        return this.http.get(this.uri + 'artist/list', { params: params })
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res.artists; }));
    };
    // 电台 - 新晋电台榜/热门电台榜
    HomeService.prototype.getTopListDj = function (args) {
        if (args === void 0) { args = defaultTopListDjParams; }
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({ fromString: query_string__WEBPACK_IMPORTED_MODULE_5___default.a.stringify(args) });
        return this.http.get(this.uri + 'dj/toplist', { params: params })
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res.toplist; }));
    };
    // 排行榜
    HomeService.prototype.getTopPlaylist = function (args) {
        if (args === void 0) { args = defaultTopPlaylist; }
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({ fromString: query_string__WEBPACK_IMPORTED_MODULE_5___default.a.stringify(args) });
        return this.http.get(this.uri + 'top/list', { params: params })
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res.playlist['tracks']; }));
    };
    HomeService.prototype.getAllTopPlaylist = function () {
        return this.http.get(this.uri + 'toplist')
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res['list']; }));
    };
    HomeService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_services_module__WEBPACK_IMPORTED_MODULE_3__["API_CONFIG"],] }] }
    ]; };
    HomeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: _services_module__WEBPACK_IMPORTED_MODULE_3__["ServicesModule"]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_services_module__WEBPACK_IMPORTED_MODULE_3__["API_CONFIG"]))
    ], HomeService);
    return HomeService;
}());



/***/ }),

/***/ "./src/app/services/player/player.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/player/player.service.ts ***!
  \***************************************************/
/*! exports provided: PlayerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerService", function() { return PlayerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PlayerService = /** @class */ (function () {
    function PlayerService() {
        this.song = {
            id: null,
            url: null,
            size: null,
            name: null,
            artist: null,
            picUrl: null,
        };
        this.start = false;
        this.songList = [];
        // this.song.url = 'http://m7.music.126.net/20191224110837/924feed2003a319d92ef473e1a5d39a3/ymusic/0fd6/4f65/43ed/a8772889f38dfcb91c04da915b301617.mp3';
    }
    PlayerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], PlayerService);
    return PlayerService;
}());



/***/ }),

/***/ "./src/app/services/service.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/service.service.ts ***!
  \*********************************************/
/*! exports provided: ServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceService", function() { return ServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services.module */ "./src/app/services/services.module.ts");
/* harmony import */ var _home_home_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.service */ "./src/app/services/home/home.service.ts");
/* harmony import */ var _songs_songs_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./songs/songs.service */ "./src/app/services/songs/songs.service.ts");
/* harmony import */ var _player_player_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./player/player.service */ "./src/app/services/player/player.service.ts");
/* harmony import */ var _sheet_sheet_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sheet/sheet.service */ "./src/app/services/sheet/sheet.service.ts");
/* harmony import */ var _album_album_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./album/album.service */ "./src/app/services/album/album.service.ts");
/* harmony import */ var _user_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user/user.service */ "./src/app/services/user/user.service.ts");
/* harmony import */ var _artist_artist_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./artist/artist.service */ "./src/app/services/artist/artist.service.ts");
/* harmony import */ var _dj_dj_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dj/dj.service */ "./src/app/services/dj/dj.service.ts");











var ServiceService = /** @class */ (function () {
    function ServiceService(home, song, player, sheet, album, user, artist, dj) {
        this.home = home;
        this.song = song;
        this.player = player;
        this.sheet = sheet;
        this.album = album;
        this.user = user;
        this.artist = artist;
        this.dj = dj;
    }
    ServiceService.ctorParameters = function () { return [
        { type: _home_home_service__WEBPACK_IMPORTED_MODULE_3__["HomeService"] },
        { type: _songs_songs_service__WEBPACK_IMPORTED_MODULE_4__["SongsService"] },
        { type: _player_player_service__WEBPACK_IMPORTED_MODULE_5__["PlayerService"] },
        { type: _sheet_sheet_service__WEBPACK_IMPORTED_MODULE_6__["SheetService"] },
        { type: _album_album_service__WEBPACK_IMPORTED_MODULE_7__["AlbumService"] },
        { type: _user_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"] },
        { type: _artist_artist_service__WEBPACK_IMPORTED_MODULE_9__["ArtistService"] },
        { type: _dj_dj_service__WEBPACK_IMPORTED_MODULE_10__["DjService"] }
    ]; };
    ServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: _services_module__WEBPACK_IMPORTED_MODULE_2__["ServicesModule"]
        })
    ], ServiceService);
    return ServiceService;
}());



/***/ }),

/***/ "./src/app/services/services.module.ts":
/*!*********************************************!*\
  !*** ./src/app/services/services.module.ts ***!
  \*********************************************/
/*! exports provided: API_CONFIG, ServicesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_CONFIG", function() { return API_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesModule", function() { return ServicesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




// 令牌
var API_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('ApiConfigToken');
var ServicesModule = /** @class */ (function () {
    function ServicesModule() {
    }
    ServicesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            ],
            providers: [
                { provide: API_CONFIG, useValue: 'http://smallzip.com:3010/' },
            ]
        })
    ], ServicesModule);
    return ServicesModule;
}());



/***/ }),

/***/ "./src/app/services/sheet/sheet.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/sheet/sheet.service.ts ***!
  \*************************************************/
/*! exports provided: SheetService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SheetService", function() { return SheetService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services.module */ "./src/app/services/services.module.ts");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_5__);






var defaultCommentParams = {
    offset: 0,
    limit: 20,
    id: 0,
    before: 0,
};
var TopPlaylistParams = {
    limit: 50,
    order: 'hot',
    cat: '全部'
};
var SheetService = /** @class */ (function () {
    function SheetService(http, uri) {
        this.http = http;
        this.uri = uri;
    }
    // 获取热门歌单
    SheetService.prototype.getHotTags = function () {
        return this.http.get(this.uri + 'playlist/hot')
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res.tags; }));
    };
    // 获取歌单列表
    SheetService.prototype.getPersonalSheetList = function () {
        return this.http.get(this.uri + 'personalized')
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res.result; }));
    };
    // 获取歌单列表
    SheetService.prototype.getSheetList = function (id) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('id', id.toString());
        return this.http.get(this.uri + 'playlist/detail', { params: params })
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res.playlist.tracks; }));
    };
    // 获取歌单列表详情
    SheetService.prototype.getSheetListDetail = function (id) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('id', id.toString());
        return this.http.get(this.uri + 'playlist/detail', { params: params })
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res.playlist; }));
    };
    // 获取歌单评论
    SheetService.prototype.getSheetListComments = function (args) {
        if (args === void 0) { args = defaultCommentParams; }
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({ fromString: query_string__WEBPACK_IMPORTED_MODULE_5___default.a.stringify(args) });
        return this.http.get(this.uri + 'comment/playlist', { params: params })
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res; }));
    };
    // 歌单分类
    SheetService.prototype.playlistCatlist = function () {
        return this.http.get(this.uri + 'playlist/catlist')
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res; }));
    };
    // 歌单 ( 网友精选碟 )
    SheetService.prototype.topPlaylist = function (args) {
        if (args === void 0) { args = TopPlaylistParams; }
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({ fromString: query_string__WEBPACK_IMPORTED_MODULE_5___default.a.stringify(args) });
        return this.http.get(this.uri + 'top/playlist', { params: params })
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res; }));
    };
    SheetService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_services_module__WEBPACK_IMPORTED_MODULE_3__["API_CONFIG"],] }] }
    ]; };
    SheetService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_services_module__WEBPACK_IMPORTED_MODULE_3__["API_CONFIG"]))
    ], SheetService);
    return SheetService;
}());



/***/ }),

/***/ "./src/app/services/songs/songs.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/songs/songs.service.ts ***!
  \*************************************************/
/*! exports provided: SongsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SongsService", function() { return SongsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services.module */ "./src/app/services/services.module.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _player_player_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../player/player.service */ "./src/app/services/player/player.service.ts");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");









var defaultCommentParams = {
    offset: 0,
    limit: 20,
    id: 0,
    before: 0,
};
var SongsService = /** @class */ (function () {
    function SongsService(http, uri, player, notification) {
        this.http = http;
        this.uri = uri;
        this.player = player;
        this.notification = notification;
        this.song = {
            id: null,
            url: null,
            size: null,
            name: null,
            album: null,
            artist: null,
            picUrl: null,
            lyric: [],
        };
    }
    // 获取歌曲详情
    SongsService.prototype.getSongDetail = function (id) {
        if (id === void 0) { id = 47230; }
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('ids', id.toString());
        return this.http.get(this.uri + 'song/detail', { params: params })
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (res) { return res['songs'][0]; }));
    };
    // 获取歌曲播放链接
    SongsService.prototype.getSongUrl = function (id) {
        if (id === void 0) { id = 1405283464; }
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('id', id.toString());
        return this.http.get(this.uri + 'song/url', { params: params })
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (res) { return res.data[0]; }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5__["retry"])(3), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError));
    };
    //错误处理
    SongsService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
            this.notification.create('error', '错误警告', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " +
                ("body was: " + error.error));
            this.notification.create('error', "\u9519\u8BEF\u8B66\u544A " + error.status, error.error.message);
        }
        // return an observable with a user-facing error message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])('发生了一些错误，请及时处理！');
    };
    ;
    // 获取歌词
    SongsService.prototype.getLyric = function (id) {
        var _this = this;
        if (id === void 0) { id = 1405283464; }
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('id', id.toString());
        return this.http.get(this.uri + 'lyric', { params: params })
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (res) { return _this.filterLyric(res); }));
    };
    // 过滤歌词
    SongsService.prototype.filterLyric = function (lyric) {
        // 处理没有歌词的纯音乐
        if (lyric.lrc && lyric.lrc.lyric) {
            var lyricArr = lyric.lrc.lyric.split('\n');
            var timeExp_1 = /\[(\d{2}):(\d{2}).(\d{2,3})\]/;
            var arr_1 = [];
            lyricArr.forEach(function (e, i) {
                if (e.trim()) {
                    var line = timeExp_1.exec(e);
                    if (line) {
                        var thridTime = line[3] || '00';
                        var len = thridTime.length > 2 ? parseInt(thridTime) : parseInt(thridTime) * 10;
                        arr_1.push({
                            lyric: e.replace(timeExp_1, '').trim(),
                            time: Number(line[1]) * 60 * 1000 + Number(line[2]) * 1000 + len
                        });
                    }
                }
            });
            return arr_1;
        }
        else {
            return [
                { lyric: '', time: 0 },
                { lyric: '纯音乐', time: 0 }
            ];
        }
    };
    // 获取歌曲评论
    SongsService.prototype.getComment = function (args) {
        if (args === void 0) { args = defaultCommentParams; }
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({ fromString: query_string__WEBPACK_IMPORTED_MODULE_7___default.a.stringify(args) });
        return this.http.get(this.uri + 'comment/music', { params: params })
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (res) { return res; }));
    };
    // 获取相似歌单
    SongsService.prototype.getSamePlayList = function (id) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('id', id.toString());
        return this.http.get(this.uri + 'simi/playlist', { params: params })
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (res) {
            return res['playlists'].map(function (item) {
                return {
                    id: item.id,
                    name: item.name,
                    nickname: item.creator.nickname,
                    userId: item.creator.userId,
                    coverImgUrl: item.coverImgUrl
                };
            });
        }));
    };
    // 获取相似歌曲
    SongsService.prototype.getSameSong = function (id) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('id', id.toString());
        return this.http.get(this.uri + 'simi/song', { params: params })
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (res) {
            return res['songs'].map(function (item) {
                return {
                    id: item.id,
                    url: null,
                    size: null,
                    name: item.name,
                    album: item.album.name,
                    artist: item.artists[0].name,
                    picUrl: item.album.picUrl,
                };
            });
        }));
    };
    SongsService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_services_module__WEBPACK_IMPORTED_MODULE_3__["API_CONFIG"],] }] },
        { type: _player_player_service__WEBPACK_IMPORTED_MODULE_6__["PlayerService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_8__["NzNotificationService"] }
    ]; };
    SongsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_services_module__WEBPACK_IMPORTED_MODULE_3__["API_CONFIG"]))
    ], SongsService);
    return SongsService;
}());



/***/ }),

/***/ "./src/app/services/user/user.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/user/user.service.ts ***!
  \***********************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services.module */ "./src/app/services/services.module.ts");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_5__);






var defaultUserParams2 = {
    uid: null,
    limit: 30,
    lasttime: null,
};
var defaultUserParams = {
    offset: 0,
    limit: 30,
    uid: 0,
};
var UserService = /** @class */ (function () {
    function UserService(http, uri) {
        this.http = http;
        this.uri = uri;
    }
    // 获取用户详情
    UserService.prototype.getUserDetail = function (id) {
        if (id === void 0) { id = 32953014; }
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('uid', id.toString());
        return this.http.get(this.uri + 'user/detail', { params: params })
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res; }));
    };
    // 获取用户关注列表
    UserService.prototype.getUserFollow = function (args) {
        if (args === void 0) { args = defaultUserParams; }
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({ fromString: query_string__WEBPACK_IMPORTED_MODULE_5___default.a.stringify(args) });
        return this.http.get(this.uri + 'user/follows', { params: params })
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res.follow; }));
    };
    // 获取用户粉丝列表
    UserService.prototype.getUserFolloweds = function (args) {
        if (args === void 0) { args = defaultUserParams2; }
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({ fromString: query_string__WEBPACK_IMPORTED_MODULE_5___default.a.stringify(args) });
        return this.http.get(this.uri + 'user/followeds', { params: params })
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res.followeds; }));
    };
    // 获取用户动态
    UserService.prototype.getUserEvent = function (args) {
        if (args === void 0) { args = defaultUserParams2; }
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({ fromString: query_string__WEBPACK_IMPORTED_MODULE_5___default.a.stringify(args) });
        return this.http.get(this.uri + 'user/event', { params: params })
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res; }));
    };
    // 获取用户电台
    UserService.prototype.getUserDj = function (id) {
        if (id === void 0) { id = 32953014; }
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('uid', id.toString());
        return this.http.get(this.uri + 'user/dj', { params: params })
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res; }));
    };
    // 获取用户歌单
    UserService.prototype.getUserPlaylist = function (id) {
        if (id === void 0) { id = 32953014; }
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('uid', id.toString());
        return this.http.get(this.uri + 'user/playlist', { params: params })
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res.playlist; }));
    };
    UserService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_services_module__WEBPACK_IMPORTED_MODULE_3__["API_CONFIG"],] }] }
    ]; };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_services_module__WEBPACK_IMPORTED_MODULE_3__["API_CONFIG"]))
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/share/components/comments/comments/comments.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/share/components/comments/comments/comments.component.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".comment .comment-header {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  padding: 30px 0 10px 0;\n  border-bottom: 2px solid #ce1f08;\n}\n.comment .comment-header h3 {\n  color: #444;\n}\n.comment .comment-header span {\n  margin-left: 30px;\n  color: #666;\n  font-size: 0.85rem;\n}\n.comment .comment-body {\n  font-size: 0.9rem;\n}\n.comment .comment-body .cb-header {\n  margin-top: 20px;\n  font-weight: bold;\n  color: #444;\n  border-bottom: 1px solid #ccc;\n}\n.comment .comment-body .cb-content .cb-item {\n  display: -webkit-box;\n  display: flex;\n  padding: 15px 0;\n}\n.comment .comment-body .cb-content .cb-item .cb-item-left {\n  width: 70px;\n}\n.comment .comment-body .cb-content .cb-item .cb-item-right {\n  -webkit-box-flex: 1;\n          flex: 1;\n}\n.comment .comment-body .cb-content .cb-item .cb-item-right .replied {\n  background-color: #f4f4f4;\n  border: 1px solid #e9e9e9;\n  padding: 10px 15px;\n}\n.comment .comment-body .cb-content .cb-item .cb-item-right .name .user-name {\n  padding-right: 5px;\n  color: #0c73c2;\n  cursor: pointer;\n}\n.comment .comment-body .cb-content .cb-item .cb-item-right .name .user-name:hover {\n  -webkit-text-decoration-line: underline;\n          text-decoration-line: underline;\n  -webkit-text-decoration-style: solid;\n          text-decoration-style: solid;\n  -webkit-text-decoration-color: #0c73c2;\n          text-decoration-color: #0c73c2;\n}\n.comment .comment-body .cb-content .cb-item .cb-item-right .name .is-artist {\n  background: url('icon2.png') no-repeat 0 9999px;\n  margin-right: 5px;\n  vertical-align: -2px;\n  width: 12px;\n  height: 13px;\n  background-position: -110px -190px;\n  display: inline-block;\n  overflow: hidden;\n}\n.comment .comment-body .cb-content .cb-item .cb-item-right .name .user-vip {\n  margin-right: 5px;\n}\n.comment .comment-body .cb-content .cb-item .cb-item-right .name .user-content {\n  color: #444;\n  padding-left: 5px;\n}\n.comment .comment-body .cb-content .cb-item .cb-item-right .time {\n  display: -webkit-box;\n  display: flex;\n  margin-top: 20px;\n  cursor: pointer;\n}\n.comment .comment-body .cb-content .cb-item .cb-item-right .time .time-span {\n  color: #666;\n  font-size: 0.8rem;\n}\n.comment .comment-body .cb-content .cb-item .cb-item-right .time div {\n  -webkit-box-flex: 1;\n          flex: 1;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n  color: #777;\n  font-size: 0.8rem;\n}\n.comment .comment-body .cb-content .cb-item .cb-item-right .time div span:nth-child(1) {\n  padding-right: 10px;\n  border-right: 1px solid #ccc;\n}\n.comment .comment-body .cb-content .cb-item .cb-item-right .time div span:nth-child(2) {\n  margin-left: 10px;\n}\n.comment .pagination {\n  margin: 20px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zbWFsbHppcC9EZXNrdG9wL2FuZ3VsYXIvd2FuZ3lpeXVuLW11c2ljL3NyYy9hcHAvc2hhcmUvY29tcG9uZW50cy9jb21tZW50cy9jb21tZW50cy9jb21tZW50cy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmUvY29tcG9uZW50cy9jb21tZW50cy9jb21tZW50cy9jb21tZW50cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHRTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdDQUFBO0FDRko7QURJSTtFQUNFLFdBQUE7QUNGTjtBREtJO0VBQ0UsaUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNITjtBRFFFO0VBQ0UsaUJBQUE7QUNOSjtBRE9JO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSw2QkFBQTtBQ0xOO0FEVU07RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxlQUFBO0FDUlI7QURXUTtFQUNFLFdBQUE7QUNUVjtBRGFRO0VBQ0UsbUJBQUE7VUFBQSxPQUFBO0FDWFY7QURjVTtFQUNFLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQ1paO0FEaUJZO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQ2ZkO0FEa0JZO0VBQ0UsdUNBQUE7VUFBQSwrQkFBQTtFQUNBLG9DQUFBO1VBQUEsNEJBQUE7RUFDQSxzQ0FBQTtVQUFBLDhCQUFBO0FDaEJkO0FEb0JZO0VBQ0UsK0NBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUNsQmQ7QURxQlk7RUFDRSxpQkFBQTtBQ25CZDtBRHVCWTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtBQ3JCZDtBRHlCVTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ3ZCWjtBRHlCWTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtBQ3ZCZDtBRDBCWTtFQUNFLG1CQUFBO1VBQUEsT0FBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxxQkFBQTtVQUFBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FDeEJkO0FEMkJjO0VBQ0UsbUJBQUE7RUFDQSw0QkFBQTtBQ3pCaEI7QUQ0QmM7RUFDRSxpQkFBQTtBQzFCaEI7QURvQ0U7RUFDRSxjQUFBO0FDbENKIiwiZmlsZSI6InNyYy9hcHAvc2hhcmUvY29tcG9uZW50cy9jb21tZW50cy9jb21tZW50cy9jb21tZW50cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIOivhOiuulxuLmNvbW1lbnQge1xuICAvLyDor4Torrror5Xlm77nmoTmoIfpophcbiAgLmNvbW1lbnQtaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMzBweCAwIDEwcHggMDtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2NlMWYwODtcblxuICAgIGgzIHtcbiAgICAgIGNvbG9yOiAjNDQ0O1xuICAgIH1cblxuICAgIHNwYW4ge1xuICAgICAgbWFyZ2luLWxlZnQ6IDMwcHg7XG4gICAgICBjb2xvcjogIzY2NjtcbiAgICAgIGZvbnQtc2l6ZTogMC44NXJlbTtcbiAgICB9XG4gIH1cblxuICAvLyDor4TorrrlhoXlrrlcbiAgLmNvbW1lbnQtYm9keSB7XG4gICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgLmNiLWhlYWRlciB7XG4gICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICBjb2xvcjogIzQ0NDtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xuICAgIH1cblxuICAgIC5jYi1jb250ZW50IHtcbiAgICAgIC8vIOivhOiuuumhuVxuICAgICAgLmNiLWl0ZW0ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBwYWRkaW5nOiAxNXB4IDA7XG5cbiAgICAgICAgLy8g55So5oi35aS05YOPXG4gICAgICAgIC5jYi1pdGVtLWxlZnQge1xuICAgICAgICAgIHdpZHRoOiA3MHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g6K+E6K665YaF5a65XG4gICAgICAgIC5jYi1pdGVtLXJpZ2h0IHtcbiAgICAgICAgICBmbGV4OiAxO1xuXG4gICAgICAgICAgLy8g5Zue5aSNXG4gICAgICAgICAgLnJlcGxpZWQge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjRmNDtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlOWU5ZTk7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm5hbWUge1xuICAgICAgICAgICAgLy8g55So5oi35ZCN56ewXG4gICAgICAgICAgICAudXNlci1uYW1lIHtcbiAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogNXB4O1xuICAgICAgICAgICAgICBjb2xvcjogIzBjNzNjMjtcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAudXNlci1uYW1lOmhvdmVyIHtcbiAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uLWxpbmU6IHVuZGVybGluZTtcbiAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uLXN0eWxlOiBzb2xpZDtcbiAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiAjMGM3M2MyO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyDpn7PkuZDkurpcbiAgICAgICAgICAgIC5pcy1hcnRpc3Qge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9pY29uMi5wbmcpIG5vLXJlcGVhdCAwIDk5OTlweDtcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiAtMnB4O1xuICAgICAgICAgICAgICB3aWR0aDogMTJweDtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxM3B4O1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTEwcHggLTE5MHB4O1xuICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC51c2VyLXZpcCB7XG4gICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyDor4TorrrlhoXlrrlcbiAgICAgICAgICAgIC51c2VyLWNvbnRlbnQge1xuICAgICAgICAgICAgICBjb2xvcjogIzQ0NDtcbiAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIOaXtumXtFxuICAgICAgICAgIC50aW1lIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgICAgICAgICAudGltZS1zcGFuIHtcbiAgICAgICAgICAgICAgY29sb3I6ICM2NjY7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBkaXYge1xuICAgICAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICAgICAgICBjb2xvcjogIzc3NztcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XG5cbiAgICAgICAgICAgICAgLy8g54K56LWe5pWw6YePXG4gICAgICAgICAgICAgIHNwYW46bnRoLWNoaWxkKDEpIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNjY2M7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBzcGFuOm50aC1jaGlsZCgyKSB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyDliIbpobVcbiAgLnBhZ2luYXRpb24ge1xuICAgIG1hcmdpbjogMjBweCAwO1xuICB9XG59XG4iLCIuY29tbWVudCAuY29tbWVudC1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAzMHB4IDAgMTBweCAwO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2NlMWYwODtcbn1cbi5jb21tZW50IC5jb21tZW50LWhlYWRlciBoMyB7XG4gIGNvbG9yOiAjNDQ0O1xufVxuLmNvbW1lbnQgLmNvbW1lbnQtaGVhZGVyIHNwYW4ge1xuICBtYXJnaW4tbGVmdDogMzBweDtcbiAgY29sb3I6ICM2NjY7XG4gIGZvbnQtc2l6ZTogMC44NXJlbTtcbn1cbi5jb21tZW50IC5jb21tZW50LWJvZHkge1xuICBmb250LXNpemU6IDAuOXJlbTtcbn1cbi5jb21tZW50IC5jb21tZW50LWJvZHkgLmNiLWhlYWRlciB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzQ0NDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XG59XG4uY29tbWVudCAuY29tbWVudC1ib2R5IC5jYi1jb250ZW50IC5jYi1pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogMTVweCAwO1xufVxuLmNvbW1lbnQgLmNvbW1lbnQtYm9keSAuY2ItY29udGVudCAuY2ItaXRlbSAuY2ItaXRlbS1sZWZ0IHtcbiAgd2lkdGg6IDcwcHg7XG59XG4uY29tbWVudCAuY29tbWVudC1ib2R5IC5jYi1jb250ZW50IC5jYi1pdGVtIC5jYi1pdGVtLXJpZ2h0IHtcbiAgZmxleDogMTtcbn1cbi5jb21tZW50IC5jb21tZW50LWJvZHkgLmNiLWNvbnRlbnQgLmNiLWl0ZW0gLmNiLWl0ZW0tcmlnaHQgLnJlcGxpZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNGY0O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTllOWU5O1xuICBwYWRkaW5nOiAxMHB4IDE1cHg7XG59XG4uY29tbWVudCAuY29tbWVudC1ib2R5IC5jYi1jb250ZW50IC5jYi1pdGVtIC5jYi1pdGVtLXJpZ2h0IC5uYW1lIC51c2VyLW5hbWUge1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gIGNvbG9yOiAjMGM3M2MyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uY29tbWVudCAuY29tbWVudC1ib2R5IC5jYi1jb250ZW50IC5jYi1pdGVtIC5jYi1pdGVtLXJpZ2h0IC5uYW1lIC51c2VyLW5hbWU6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb24tbGluZTogdW5kZXJsaW5lO1xuICB0ZXh0LWRlY29yYXRpb24tc3R5bGU6IHNvbGlkO1xuICB0ZXh0LWRlY29yYXRpb24tY29sb3I6ICMwYzczYzI7XG59XG4uY29tbWVudCAuY29tbWVudC1ib2R5IC5jYi1jb250ZW50IC5jYi1pdGVtIC5jYi1pdGVtLXJpZ2h0IC5uYW1lIC5pcy1hcnRpc3Qge1xuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9pY29uMi5wbmcpIG5vLXJlcGVhdCAwIDk5OTlweDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIHZlcnRpY2FsLWFsaWduOiAtMnB4O1xuICB3aWR0aDogMTJweDtcbiAgaGVpZ2h0OiAxM3B4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTEwcHggLTE5MHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uY29tbWVudCAuY29tbWVudC1ib2R5IC5jYi1jb250ZW50IC5jYi1pdGVtIC5jYi1pdGVtLXJpZ2h0IC5uYW1lIC51c2VyLXZpcCB7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuLmNvbW1lbnQgLmNvbW1lbnQtYm9keSAuY2ItY29udGVudCAuY2ItaXRlbSAuY2ItaXRlbS1yaWdodCAubmFtZSAudXNlci1jb250ZW50IHtcbiAgY29sb3I6ICM0NDQ7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xufVxuLmNvbW1lbnQgLmNvbW1lbnQtYm9keSAuY2ItY29udGVudCAuY2ItaXRlbSAuY2ItaXRlbS1yaWdodCAudGltZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5jb21tZW50IC5jb21tZW50LWJvZHkgLmNiLWNvbnRlbnQgLmNiLWl0ZW0gLmNiLWl0ZW0tcmlnaHQgLnRpbWUgLnRpbWUtc3BhbiB7XG4gIGNvbG9yOiAjNjY2O1xuICBmb250LXNpemU6IDAuOHJlbTtcbn1cbi5jb21tZW50IC5jb21tZW50LWJvZHkgLmNiLWNvbnRlbnQgLmNiLWl0ZW0gLmNiLWl0ZW0tcmlnaHQgLnRpbWUgZGl2IHtcbiAgZmxleDogMTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgY29sb3I6ICM3Nzc7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xufVxuLmNvbW1lbnQgLmNvbW1lbnQtYm9keSAuY2ItY29udGVudCAuY2ItaXRlbSAuY2ItaXRlbS1yaWdodCAudGltZSBkaXYgc3BhbjpudGgtY2hpbGQoMSkge1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjY2NjO1xufVxuLmNvbW1lbnQgLmNvbW1lbnQtYm9keSAuY2ItY29udGVudCAuY2ItaXRlbSAuY2ItaXRlbS1yaWdodCAudGltZSBkaXYgc3BhbjpudGgtY2hpbGQoMikge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cbi5jb21tZW50IC5wYWdpbmF0aW9uIHtcbiAgbWFyZ2luOiAyMHB4IDA7XG59Il19 */");

/***/ }),

/***/ "./src/app/share/components/comments/comments/comments.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/share/components/comments/comments/comments.component.ts ***!
  \**************************************************************************/
/*! exports provided: CommentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentsComponent", function() { return CommentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var CommentsComponent = /** @class */ (function () {
    function CommentsComponent(router) {
        this.router = router;
        this.pageIndexChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](); // 改变分页事件
    }
    CommentsComponent.prototype.ngOnInit = function () {
    };
    // 改变分页位置
    CommentsComponent.prototype.nzPageIndexChange = function (page) {
        console.log("分页", page);
        this.pageIndexChange.emit(page);
    };
    // 跳转到用户个人信息页面
    CommentsComponent.prototype.toUser = function (item) {
        this.router.navigate(['user'], { queryParams: { id: item.userId } });
    };
    CommentsComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], CommentsComponent.prototype, "commentTotal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], CommentsComponent.prototype, "hotComments", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], CommentsComponent.prototype, "comments", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], CommentsComponent.prototype, "currentPage", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], CommentsComponent.prototype, "pageIndexChange", void 0);
    CommentsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-comments',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./comments.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/share/components/comments/comments/comments.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./comments.component.scss */ "./src/app/share/components/comments/comments/comments.component.scss")).default]
        })
    ], CommentsComponent);
    return CommentsComponent;
}());



/***/ }),

/***/ "./src/app/share/components/footer/footer.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/share/components/footer/footer.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".footer {\n  margin: 0 auto;\n  width: 980px;\n  height: 100px;\n  line-height: 100px;\n}\n.footer footer {\n  height: 100px;\n  line-height: 100px;\n  margin: 0 20px;\n}\n.footer footer span:nth-child(1) {\n  font-size: 1.2rem;\n  font-weight: bold;\n  color: rgba(0, 0, 0, 0.2);\n}\n.footer footer span:nth-child(2) {\n  float: right;\n  color: #999;\n  font-size: 0.8rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zbWFsbHppcC9EZXNrdG9wL2FuZ3VsYXIvd2FuZ3lpeXVuLW11c2ljL3NyYy9hcHAvc2hhcmUvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZS9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQ0NGO0FEQ0U7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDQ0o7QURDSTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtBQ0NOO0FERUk7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FDQU4iLCJmaWxlIjoic3JjL2FwcC9zaGFyZS9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVyIHtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICB3aWR0aDogOTgwcHg7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICBsaW5lLWhlaWdodDogMTAwcHg7XHJcblxyXG4gIGZvb3RlciB7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEwMHB4O1xyXG4gICAgbWFyZ2luOiAwIDIwcHg7XHJcblxyXG4gICAgc3BhbjpudGgtY2hpbGQoMSkge1xyXG4gICAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICB9XHJcblxyXG4gICAgc3BhbjpudGgtY2hpbGQoMikge1xyXG4gICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgIGNvbG9yOiAjOTk5O1xyXG4gICAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLmZvb3RlciB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB3aWR0aDogOTgwcHg7XG4gIGhlaWdodDogMTAwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxMDBweDtcbn1cbi5mb290ZXIgZm9vdGVyIHtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgbGluZS1oZWlnaHQ6IDEwMHB4O1xuICBtYXJnaW46IDAgMjBweDtcbn1cbi5mb290ZXIgZm9vdGVyIHNwYW46bnRoLWNoaWxkKDEpIHtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuLmZvb3RlciBmb290ZXIgc3BhbjpudGgtY2hpbGQoMikge1xuICBmbG9hdDogcmlnaHQ7XG4gIGNvbG9yOiAjOTk5O1xuICBmb250LXNpemU6IDAuOHJlbTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/share/components/footer/footer.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/share/components/footer/footer.component.ts ***!
  \*************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/share/components/footer/footer.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.scss */ "./src/app/share/components/footer/footer.component.scss")).default]
        })
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/share/components/header/header.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/share/components/header/header.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container .header {\n  height: 80px;\n  display: -webkit-box;\n  display: flex;\n  justify-content: space-around;\n  -webkit-box-align: center;\n          align-items: center;\n  color: #fff;\n  background-color: #242424;\n  z-index: 1000;\n}\n.container .header .logo {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  cursor: pointer;\n}\n.container .header .logo h2 {\n  color: #fff;\n}\n.container .header .logo img {\n  width: 50px;\n  height: 50px;\n}\n.container .header .tab-list {\n  display: -webkit-box;\n  display: flex;\n}\n.container .header .tab-list .tab-item {\n  width: 100px;\n  height: 80px;\n  line-height: 80px;\n  cursor: pointer;\n  color: #aaa;\n  text-align: center;\n}\n.container .header .tab-list .tab-item:hover {\n  color: #fff;\n  background: #000;\n}\n.container .header .tab-list .tab-active {\n  color: #fff;\n  background: #000;\n}\n.container .header .search {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  background: #fff;\n  padding: 0 10px;\n  height: 2rem;\n  border-radius: 2rem;\n}\n.container .header .search .search-icon {\n  color: #666;\n  margin-right: 10px;\n}\n.container .header .search input {\n  width: 150px;\n  border: none;\n  outline: none;\n  color: #000;\n}\n.container .header .login {\n  height: 2rem;\n  padding: 0 10px;\n  color: #aaa;\n  line-height: 2rem;\n}\n.container .nav .n-subnav {\n  height: 35px;\n  box-sizing: border-box;\n  background-color: #c20c0c;\n  border-bottom: 1px solid #a40011;\n  font-size: 0.9rem;\n}\n.container .nav .n-subnav .n-list {\n  height: 35px;\n  line-height: 35px;\n  width: 700px;\n  margin: 0 auto;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.container .nav .n-subnav .n-list .n-item {\n  width: calc(100% / 6);\n  color: #fff;\n  cursor: pointer;\n  text-align: center;\n}\n.container .nav .n-subnav .n-list .n-item span {\n  padding: 5px 15px;\n  border-radius: 20px;\n  font-size: 0.8rem;\n}\n.container .nav .n-subnav .n-list .n-item .nav-active {\n  background-color: rgba(0, 0, 0, 0.2);\n}\n.container .nav .n-subnav .n-list .n-item:hover span {\n  background-color: rgba(0, 0, 0, 0.2);\n}\n.container .nav .n-subdis {\n  height: 5px;\n  background-color: #c20c0c;\n  box-sizing: border-box;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zbWFsbHppcC9EZXNrdG9wL2FuZ3VsYXIvd2FuZ3lpeXVuLW11c2ljL3NyYy9hcHAvc2hhcmUvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZS9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxZQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtBQ0FKO0FER0k7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsZUFBQTtBQ0ROO0FER007RUFDRSxXQUFBO0FDRFI7QURJTTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDRlI7QURPSTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtBQ0xOO0FET007RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ0xSO0FEUU07RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7QUNOUjtBRFNNO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0FDUFI7QURZSTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUNWTjtBRFlNO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0FDVlI7QURhTTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUNYUjtBRGdCSTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FDZE47QURvQkk7RUFDRSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLGdDQUFBO0VBQ0EsaUJBQUE7QUNsQk47QURvQk07RUFDRSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNsQlI7QURtQlE7RUFDRSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNqQlY7QURtQlU7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUNqQlo7QURvQlU7RUFDRSxvQ0FBQTtBQ2xCWjtBRHNCUTtFQUNFLG9DQUFBO0FDcEJWO0FEeUJJO0VBQ0UsV0FBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7QUN2Qk4iLCJmaWxlIjoic3JjL2FwcC9zaGFyZS9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICAuaGVhZGVyIHtcclxuICAgIGhlaWdodDogODBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNDI0MjQ7XHJcbiAgICB6LWluZGV4OiAxMDAwO1xyXG5cclxuICAgIC8vIGxvZ29cclxuICAgIC5sb2dvIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICAgaDIge1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpbWcge1xyXG4gICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICAvLyBtYXJnaW46IDVweCAxMHB4IDAgMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC50YWItbGlzdCB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICAgICAudGFiLWl0ZW0ge1xyXG4gICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDgwcHg7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIGNvbG9yOiAjYWFhO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnRhYi1pdGVtOmhvdmVyIHtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMDAwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAudGFiLWFjdGl2ZSB7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzAwMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIOaQnOe0olxyXG4gICAgLnNlYXJjaCB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgIHBhZGRpbmc6IDAgMTBweDtcclxuICAgICAgaGVpZ2h0OiAycmVtO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAycmVtO1xyXG5cclxuICAgICAgLnNlYXJjaC1pY29uIHtcclxuICAgICAgICBjb2xvcjogIzY2NjtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlucHV0IHtcclxuICAgICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyDnmbvpmYZcclxuICAgIC5sb2dpbiB7XHJcbiAgICAgIGhlaWdodDogMnJlbTtcclxuICAgICAgcGFkZGluZzogMCAxMHB4O1xyXG4gICAgICBjb2xvcjogI2FhYTtcclxuICAgICAgbGluZS1oZWlnaHQ6IDJyZW07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyDlr7zoiKpcclxuICAubmF2IHtcclxuICAgIC5uLXN1Ym5hdiB7XHJcbiAgICAgIGhlaWdodDogMzVweDtcclxuICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2MyMGMwYztcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNhNDAwMTE7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG5cclxuICAgICAgLm4tbGlzdCB7XHJcbiAgICAgICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzNXB4O1xyXG4gICAgICAgIHdpZHRoOiA3MDBweDtcclxuICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgLm4taXRlbSB7XHJcbiAgICAgICAgICB3aWR0aDogY2FsYygxMDAlIC8gNik7XHJcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgcGFkZGluZzogNXB4IDE1cHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5uYXYtYWN0aXZlIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLm4taXRlbTpob3ZlciBzcGFuIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAubi1zdWJkaXMge1xyXG4gICAgICBoZWlnaHQ6IDVweDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2MyMGMwYztcclxuICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLmNvbnRhaW5lciAuaGVhZGVyIHtcbiAgaGVpZ2h0OiA4MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNDI0MjQ7XG4gIHotaW5kZXg6IDEwMDA7XG59XG4uY29udGFpbmVyIC5oZWFkZXIgLmxvZ28ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uY29udGFpbmVyIC5oZWFkZXIgLmxvZ28gaDIge1xuICBjb2xvcjogI2ZmZjtcbn1cbi5jb250YWluZXIgLmhlYWRlciAubG9nbyBpbWcge1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xufVxuLmNvbnRhaW5lciAuaGVhZGVyIC50YWItbGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uY29udGFpbmVyIC5oZWFkZXIgLnRhYi1saXN0IC50YWItaXRlbSB7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiA4MHB4O1xuICBsaW5lLWhlaWdodDogODBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogI2FhYTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmNvbnRhaW5lciAuaGVhZGVyIC50YWItbGlzdCAudGFiLWl0ZW06aG92ZXIge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZDogIzAwMDtcbn1cbi5jb250YWluZXIgLmhlYWRlciAudGFiLWxpc3QgLnRhYi1hY3RpdmUge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZDogIzAwMDtcbn1cbi5jb250YWluZXIgLmhlYWRlciAuc2VhcmNoIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgcGFkZGluZzogMCAxMHB4O1xuICBoZWlnaHQ6IDJyZW07XG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XG59XG4uY29udGFpbmVyIC5oZWFkZXIgLnNlYXJjaCAuc2VhcmNoLWljb24ge1xuICBjb2xvcjogIzY2NjtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuLmNvbnRhaW5lciAuaGVhZGVyIC5zZWFyY2ggaW5wdXQge1xuICB3aWR0aDogMTUwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgY29sb3I6ICMwMDA7XG59XG4uY29udGFpbmVyIC5oZWFkZXIgLmxvZ2luIHtcbiAgaGVpZ2h0OiAycmVtO1xuICBwYWRkaW5nOiAwIDEwcHg7XG4gIGNvbG9yOiAjYWFhO1xuICBsaW5lLWhlaWdodDogMnJlbTtcbn1cbi5jb250YWluZXIgLm5hdiAubi1zdWJuYXYge1xuICBoZWlnaHQ6IDM1cHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjMjBjMGM7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYTQwMDExO1xuICBmb250LXNpemU6IDAuOXJlbTtcbn1cbi5jb250YWluZXIgLm5hdiAubi1zdWJuYXYgLm4tbGlzdCB7XG4gIGhlaWdodDogMzVweDtcbiAgbGluZS1oZWlnaHQ6IDM1cHg7XG4gIHdpZHRoOiA3MDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uY29udGFpbmVyIC5uYXYgLm4tc3VibmF2IC5uLWxpc3QgLm4taXRlbSB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLyA2KTtcbiAgY29sb3I6ICNmZmY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmNvbnRhaW5lciAubmF2IC5uLXN1Ym5hdiAubi1saXN0IC5uLWl0ZW0gc3BhbiB7XG4gIHBhZGRpbmc6IDVweCAxNXB4O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBmb250LXNpemU6IDAuOHJlbTtcbn1cbi5jb250YWluZXIgLm5hdiAubi1zdWJuYXYgLm4tbGlzdCAubi1pdGVtIC5uYXYtYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuLmNvbnRhaW5lciAubmF2IC5uLXN1Ym5hdiAubi1saXN0IC5uLWl0ZW06aG92ZXIgc3BhbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cbi5jb250YWluZXIgLm5hdiAubi1zdWJkaXMge1xuICBoZWlnaHQ6IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2MyMGMwYztcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/share/components/header/header.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/share/components/header/header.component.ts ***!
  \*************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(router, activatedRoute) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.list = ['发现音乐', '我的音乐'];
        this.tabActive = 0;
        this.navList = ['推荐', '排行榜', '歌单', '主播电台', '歌手', '新碟上架'];
        this.selectedNav = 0;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.queryParams.subscribe(function (params) {
            _this.selectedNav = params.nav || 0;
        });
    };
    HeaderComponent.prototype.selectTab = function (item, index) {
        this.tabActive = index;
    };
    // 改变导航
    HeaderComponent.prototype.changeNav = function (index) {
        if (index === void 0) { index = 0; }
        this.selectedNav = index;
        switch (index) {
            case 0:
                this.routerTo('home');
                break;
            case 1:
                this.routerTo('navRank');
                break;
            case 2:
                this.routerTo('navPlaylist');
                break;
            case 3:
                this.routerTo('navDj');
                break;
            case 4:
                this.routerTo('navSinger');
                break;
            case 5:
                this.routerTo('navAlbum');
                break;
            default:
                // this.routerTo('home')
                break;
        }
    };
    // 导航跳转
    HeaderComponent.prototype.routerTo = function (name) {
        this.router.navigate([name], { queryParams: { nav: this.selectedNav } });
    };
    // 返回首页
    HeaderComponent.prototype.toHome = function () {
        this.router.navigate(['home']);
    };
    HeaderComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/share/components/header/header.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.scss */ "./src/app/share/components/header/header.component.scss")).default]
        })
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/share/components/player/player.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/share/components/player/player.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".player {\n  width: 100%;\n  height: 60px;\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: #242424;\n  z-index: 21000;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  color: #fff;\n}\n.player .tool {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  width: 800px;\n}\n.player .tool .ctrl i {\n  margin: 0 5px;\n}\n.player .tool .ctrl i:nth-child(2) {\n  font-size: 40px;\n}\n.player .tool .ctrl i:nth-child(1),\n.player .tool .ctrl i:nth-child(3) {\n  font-size: 25px;\n}\n.player .tool .ctrl,\n.player .tool .music-info {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  margin-right: 20px;\n}\n.player .tool .music-info {\n  -webkit-box-flex: 1;\n          flex: 1;\n}\n.player .tool .music-info .slider {\n  -webkit-box-flex: 1;\n          flex: 1;\n  margin: 0 10px;\n}\n.player .tool .music-info .slider audio {\n  width: 100%;\n  height: 25px;\n  outline: none;\n}\n.player .tool .music-info .time {\n  display: -webkit-box;\n  display: flex;\n}\n.player .song-sheet-mask {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 60px;\n  width: 100%;\n  height: calc(100% - 60px);\n  z-index: 100;\n}\n.player .songs-sheet {\n  position: fixed;\n  bottom: 60px;\n  margin: 0 auto;\n  height: 250px;\n  width: 980px;\n  z-index: 20001;\n  background: #201c1ce6;\n}\n.player .songs-sheet .songs-sheet-box {\n  display: -webkit-box;\n  display: flex;\n}\n.player .songs-sheet .songs-sheet-box .ss-left {\n  width: 600px;\n  border-right: 1px solid #eee;\n}\n.player .songs-sheet .songs-sheet-box .ss-left .ssl-header {\n  height: 40px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  padding: 0 20px;\n  border-bottom: 1px solid #eee;\n  color: #eee;\n  font-size: 0.9rem;\n}\n.player .songs-sheet .songs-sheet-box .ss-left .ssl-list::-webkit-scrollbar {\n  width: 0 !important;\n}\n.player .songs-sheet .songs-sheet-box .ss-left .ssl-list {\n  height: 209px;\n  overflow-y: scroll;\n}\n.player .songs-sheet .songs-sheet-box .ss-left .ssl-list .ssl-item {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  padding: 5px 20px;\n  color: #fff;\n  font-size: 0.8rem;\n}\n.player .songs-sheet .songs-sheet-box .ss-left .ssl-list .ssl-item .ssl-item-name {\n  display: -webkit-box;\n  display: flex;\n}\n.player .songs-sheet .songs-sheet-box .ss-left .ssl-list .ssl-item .ssl-item-name i {\n  margin-right: 20px;\n  opacity: 0;\n}\n.player .songs-sheet .songs-sheet-box .ss-left .ssl-list .ssl-item .ssl-item-name span {\n  cursor: pointer;\n}\n.player .songs-sheet .songs-sheet-box .ss-left .ssl-list .ssl-item .ssl-item-artist span {\n  margin: 0 20px;\n}\n.player .songs-sheet .songs-sheet-box .ss-left .ssl-list .ssl-item:hover .ssl-item-name > i {\n  opacity: 1;\n}\n.player .songs-sheet .songs-sheet-box .ss-right {\n  -webkit-box-flex: 1;\n          flex: 1;\n}\n.player .songs-sheet .songs-sheet-box .ss-right .ssr-header {\n  height: 40px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  border-bottom: 1px solid #eee;\n  color: #eee;\n  font-size: 0.9rem;\n}\n.player .songs-sheet .songs-sheet-box .ss-right .ssr-content::-webkit-scrollbar {\n  width: 0 !important;\n}\n.player .songs-sheet .songs-sheet-box .ss-right .ssr-content {\n  height: 209px;\n  overflow-y: scroll;\n  padding: 0 20px;\n}\n.player .songs-sheet .songs-sheet-box .ss-right .ssr-content p {\n  font-size: 0.9rem;\n  color: #989898;\n  word-wrap: break-word;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zbWFsbHppcC9EZXNrdG9wL2FuZ3VsYXIvd2FuZ3lpeXVuLW11c2ljL3NyYy9hcHAvc2hhcmUvY29tcG9uZW50cy9wbGF5ZXIvcGxheWVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZS9jb21wb25lbnRzL3BsYXllci9wbGF5ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLFdBQUE7QUNDRjtBRENFO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLFlBQUE7QUNDSjtBREVNO0VBQ0UsYUFBQTtBQ0FSO0FERU07RUFDRSxlQUFBO0FDQVI7QURHTTs7RUFFRSxlQUFBO0FDRFI7QURLSTs7RUFFRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esa0JBQUE7QUNITjtBRE1JO0VBQ0UsbUJBQUE7VUFBQSxPQUFBO0FDSk47QURLTTtFQUNFLG1CQUFBO1VBQUEsT0FBQTtFQUNBLGNBQUE7QUNIUjtBREtRO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FDSFY7QURPTTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtBQ0xSO0FEV0U7RUFDRSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUNUSjtBRGFFO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7QUNYSjtBRGFJO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0FDWE47QURhTTtFQUNFLFlBQUE7RUFDQSw0QkFBQTtBQ1hSO0FEYVE7RUFDRSxZQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7RUFDQSxlQUFBO0VBQ0EsNkJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUNYVjtBRGNRO0VBQ0UsbUJBQUE7QUNaVjtBRGNRO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0FDWlY7QURjVTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUNaWjtBRGNZO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0FDWmQ7QURhYztFQUNFLGtCQUFBO0VBQ0EsVUFBQTtBQ1hoQjtBRGNjO0VBQ0UsZUFBQTtBQ1poQjtBRGlCYztFQUNFLGNBQUE7QUNmaEI7QURtQlU7RUFDRSxVQUFBO0FDakJaO0FEdUJNO0VBQ0UsbUJBQUE7VUFBQSxPQUFBO0FDckJSO0FEdUJRO0VBQ0UsWUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EsNkJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUNyQlY7QUR3QlE7RUFDRSxtQkFBQTtBQ3RCVjtBRHdCUTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUN0QlY7QUR3QlU7RUFDRSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FDdEJaIiwiZmlsZSI6InNyYy9hcHAvc2hhcmUvY29tcG9uZW50cy9wbGF5ZXIvcGxheWVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBsYXllciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQyNDI0O1xyXG4gIHotaW5kZXg6IDIxMDAwO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBjb2xvcjogI2ZmZjtcclxuXHJcbiAgLnRvb2wge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogODAwcHg7XHJcblxyXG4gICAgLmN0cmwge1xyXG4gICAgICBpIHtcclxuICAgICAgICBtYXJnaW46IDAgNXB4O1xyXG4gICAgICB9XHJcbiAgICAgIGk6bnRoLWNoaWxkKDIpIHtcclxuICAgICAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGk6bnRoLWNoaWxkKDEpLFxyXG4gICAgICBpOm50aC1jaGlsZCgzKSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmN0cmwsXHJcbiAgICAubXVzaWMtaW5mbyB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgIH1cclxuXHJcbiAgICAubXVzaWMtaW5mbyB7XHJcbiAgICAgIGZsZXg6IDE7XHJcbiAgICAgIC5zbGlkZXIge1xyXG4gICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgbWFyZ2luOiAwIDEwcHg7XHJcblxyXG4gICAgICAgIGF1ZGlvIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC50aW1lIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyDmkq3mlL7liJfooaggbWFza1xyXG4gIC5zb25nLXNoZWV0LW1hc2sge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYm90dG9tOiA2MHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDYwcHgpO1xyXG4gICAgei1pbmRleDogMTAwO1xyXG4gIH1cclxuXHJcbiAgLy8g5pKt5pS+5YiX6KGoXHJcbiAgLnNvbmdzLXNoZWV0IHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogNjBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgaGVpZ2h0OiAyNTBweDtcclxuICAgIHdpZHRoOiA5ODBweDtcclxuICAgIHotaW5kZXg6IDIwMDAxO1xyXG4gICAgYmFja2dyb3VuZDogIzIwMWMxY2U2O1xyXG5cclxuICAgIC5zb25ncy1zaGVldC1ib3gge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAvLyDmkq3mlL7liJfooahcclxuICAgICAgLnNzLWxlZnQge1xyXG4gICAgICAgIHdpZHRoOiA2MDBweDtcclxuICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZWVlO1xyXG5cclxuICAgICAgICAuc3NsLWhlYWRlciB7XHJcbiAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgIHBhZGRpbmc6IDAgMjBweDtcclxuICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlO1xyXG4gICAgICAgICAgY29sb3I6ICNlZWU7XHJcbiAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zc2wtbGlzdDo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgICAgICAgd2lkdGg6IDAgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnNzbC1saXN0IHtcclxuICAgICAgICAgIGhlaWdodDogMjA5cHg7XHJcbiAgICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcblxyXG4gICAgICAgICAgLnNzbC1pdGVtIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA1cHggMjBweDtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG5cclxuICAgICAgICAgICAgLnNzbC1pdGVtLW5hbWUge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgaSB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgc3BhbntcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5zc2wtaXRlbS1hcnRpc3Qge1xyXG4gICAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIDIwcHg7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuc3NsLWl0ZW06aG92ZXIgLnNzbC1pdGVtLW5hbWUgPiBpIHtcclxuICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIOatjOivjVxyXG4gICAgICAuc3MtcmlnaHQge1xyXG4gICAgICAgIGZsZXg6IDE7XHJcblxyXG4gICAgICAgIC5zc3ItaGVhZGVyIHtcclxuICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZTtcclxuICAgICAgICAgIGNvbG9yOiAjZWVlO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc3NyLWNvbnRlbnQ6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgICAgICAgIHdpZHRoOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5zc3ItY29udGVudCB7XHJcbiAgICAgICAgICBoZWlnaHQ6IDIwOXB4O1xyXG4gICAgICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gICAgICAgICAgcGFkZGluZzogMCAyMHB4O1xyXG5cclxuICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICAgICAgY29sb3I6ICM5ODk4OTg7XHJcbiAgICAgICAgICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIucGxheWVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNjBweDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQyNDI0O1xuICB6LWluZGV4OiAyMTAwMDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGNvbG9yOiAjZmZmO1xufVxuLnBsYXllciAudG9vbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiA4MDBweDtcbn1cbi5wbGF5ZXIgLnRvb2wgLmN0cmwgaSB7XG4gIG1hcmdpbjogMCA1cHg7XG59XG4ucGxheWVyIC50b29sIC5jdHJsIGk6bnRoLWNoaWxkKDIpIHtcbiAgZm9udC1zaXplOiA0MHB4O1xufVxuLnBsYXllciAudG9vbCAuY3RybCBpOm50aC1jaGlsZCgxKSxcbi5wbGF5ZXIgLnRvb2wgLmN0cmwgaTpudGgtY2hpbGQoMykge1xuICBmb250LXNpemU6IDI1cHg7XG59XG4ucGxheWVyIC50b29sIC5jdHJsLFxuLnBsYXllciAudG9vbCAubXVzaWMtaW5mbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn1cbi5wbGF5ZXIgLnRvb2wgLm11c2ljLWluZm8ge1xuICBmbGV4OiAxO1xufVxuLnBsYXllciAudG9vbCAubXVzaWMtaW5mbyAuc2xpZGVyIHtcbiAgZmxleDogMTtcbiAgbWFyZ2luOiAwIDEwcHg7XG59XG4ucGxheWVyIC50b29sIC5tdXNpYy1pbmZvIC5zbGlkZXIgYXVkaW8ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyNXB4O1xuICBvdXRsaW5lOiBub25lO1xufVxuLnBsYXllciAudG9vbCAubXVzaWMtaW5mbyAudGltZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4ucGxheWVyIC5zb25nLXNoZWV0LW1hc2sge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogNjBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gNjBweCk7XG4gIHotaW5kZXg6IDEwMDtcbn1cbi5wbGF5ZXIgLnNvbmdzLXNoZWV0IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDYwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBoZWlnaHQ6IDI1MHB4O1xuICB3aWR0aDogOTgwcHg7XG4gIHotaW5kZXg6IDIwMDAxO1xuICBiYWNrZ3JvdW5kOiAjMjAxYzFjZTY7XG59XG4ucGxheWVyIC5zb25ncy1zaGVldCAuc29uZ3Mtc2hlZXQtYm94IHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5wbGF5ZXIgLnNvbmdzLXNoZWV0IC5zb25ncy1zaGVldC1ib3ggLnNzLWxlZnQge1xuICB3aWR0aDogNjAwcHg7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlZWU7XG59XG4ucGxheWVyIC5zb25ncy1zaGVldCAuc29uZ3Mtc2hlZXQtYm94IC5zcy1sZWZ0IC5zc2wtaGVhZGVyIHtcbiAgaGVpZ2h0OiA0MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDAgMjBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWU7XG4gIGNvbG9yOiAjZWVlO1xuICBmb250LXNpemU6IDAuOXJlbTtcbn1cbi5wbGF5ZXIgLnNvbmdzLXNoZWV0IC5zb25ncy1zaGVldC1ib3ggLnNzLWxlZnQgLnNzbC1saXN0Ojotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiAwICFpbXBvcnRhbnQ7XG59XG4ucGxheWVyIC5zb25ncy1zaGVldCAuc29uZ3Mtc2hlZXQtYm94IC5zcy1sZWZ0IC5zc2wtbGlzdCB7XG4gIGhlaWdodDogMjA5cHg7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cbi5wbGF5ZXIgLnNvbmdzLXNoZWV0IC5zb25ncy1zaGVldC1ib3ggLnNzLWxlZnQgLnNzbC1saXN0IC5zc2wtaXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZzogNXB4IDIwcHg7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDAuOHJlbTtcbn1cbi5wbGF5ZXIgLnNvbmdzLXNoZWV0IC5zb25ncy1zaGVldC1ib3ggLnNzLWxlZnQgLnNzbC1saXN0IC5zc2wtaXRlbSAuc3NsLWl0ZW0tbmFtZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4ucGxheWVyIC5zb25ncy1zaGVldCAuc29uZ3Mtc2hlZXQtYm94IC5zcy1sZWZ0IC5zc2wtbGlzdCAuc3NsLWl0ZW0gLnNzbC1pdGVtLW5hbWUgaSB7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbiAgb3BhY2l0eTogMDtcbn1cbi5wbGF5ZXIgLnNvbmdzLXNoZWV0IC5zb25ncy1zaGVldC1ib3ggLnNzLWxlZnQgLnNzbC1saXN0IC5zc2wtaXRlbSAuc3NsLWl0ZW0tbmFtZSBzcGFuIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnBsYXllciAuc29uZ3Mtc2hlZXQgLnNvbmdzLXNoZWV0LWJveCAuc3MtbGVmdCAuc3NsLWxpc3QgLnNzbC1pdGVtIC5zc2wtaXRlbS1hcnRpc3Qgc3BhbiB7XG4gIG1hcmdpbjogMCAyMHB4O1xufVxuLnBsYXllciAuc29uZ3Mtc2hlZXQgLnNvbmdzLXNoZWV0LWJveCAuc3MtbGVmdCAuc3NsLWxpc3QgLnNzbC1pdGVtOmhvdmVyIC5zc2wtaXRlbS1uYW1lID4gaSB7XG4gIG9wYWNpdHk6IDE7XG59XG4ucGxheWVyIC5zb25ncy1zaGVldCAuc29uZ3Mtc2hlZXQtYm94IC5zcy1yaWdodCB7XG4gIGZsZXg6IDE7XG59XG4ucGxheWVyIC5zb25ncy1zaGVldCAuc29uZ3Mtc2hlZXQtYm94IC5zcy1yaWdodCAuc3NyLWhlYWRlciB7XG4gIGhlaWdodDogNDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlO1xuICBjb2xvcjogI2VlZTtcbiAgZm9udC1zaXplOiAwLjlyZW07XG59XG4ucGxheWVyIC5zb25ncy1zaGVldCAuc29uZ3Mtc2hlZXQtYm94IC5zcy1yaWdodCAuc3NyLWNvbnRlbnQ6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDAgIWltcG9ydGFudDtcbn1cbi5wbGF5ZXIgLnNvbmdzLXNoZWV0IC5zb25ncy1zaGVldC1ib3ggLnNzLXJpZ2h0IC5zc3ItY29udGVudCB7XG4gIGhlaWdodDogMjA5cHg7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgcGFkZGluZzogMCAyMHB4O1xufVxuLnBsYXllciAuc29uZ3Mtc2hlZXQgLnNvbmdzLXNoZWV0LWJveCAuc3MtcmlnaHQgLnNzci1jb250ZW50IHAge1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgY29sb3I6ICM5ODk4OTg7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/share/components/player/player.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/share/components/player/player.component.ts ***!
  \*************************************************************/
/*! exports provided: PlayerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerComponent", function() { return PlayerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_player_player_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/player/player.service */ "./src/app/services/player/player.service.ts");
/* harmony import */ var src_app_services_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/service.service */ "./src/app/services/service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");






var PlayerComponent = /** @class */ (function () {
    function PlayerComponent(playerService, service, router, notification) {
        this.playerService = playerService;
        this.service = service;
        this.router = router;
        this.notification = notification;
        this.showSheet = false;
        this.currentTime = 0;
    }
    PlayerComponent.prototype.ngOnInit = function () {
        this.audioEl = this.audio.nativeElement;
    };
    // 缓存成功可以播放的时候
    PlayerComponent.prototype.onCanplay = function () {
        this.playerService.start ? this.play() : this.pause();
    };
    // 
    PlayerComponent.prototype.play = function () {
        this.audioEl.play();
        this.playerService.start ? null : this.playerService.start = true;
    };
    // 
    PlayerComponent.prototype.pause = function () {
        this.playerService.start ? this.playerService.start = false : null;
        this.audioEl.pause();
    };
    // 暂停/播放
    PlayerComponent.prototype.onPlayState = function (state) {
        console.log(this.audioEl.currentTime);
        if (this.service.player.song.url) {
            state == 'play' ? this.pause() : this.play();
        }
        else {
            this.notification.blank('警告', '暂时无法播放歌曲');
        }
    };
    // 上一首
    PlayerComponent.prototype.onLast = function () {
        if (this.service.player.songList.length > 0) {
            this.changeCurrentSong(0);
        }
        else {
            this.notification.blank('警告', '无法切换，暂时无播放的歌曲');
        }
    };
    // 下一首
    PlayerComponent.prototype.onNext = function () {
        if (this.service.player.songList.length > 0) {
            this.changeCurrentSong(1);
        }
        else {
            this.notification.blank('警告', '无法切换，暂时无播放的歌曲');
        }
    };
    // 
    PlayerComponent.prototype.onEnd = function () {
        this.onNext();
    };
    // 改变当前播放的歌曲
    PlayerComponent.prototype.changeCurrentSong = function (type) {
        var _this = this;
        var list = this.playerService.songList;
        var index = list.findIndex(function (e) { return _this.playerService.song.id == e.id; });
        if (type == 0) {
            this.playerService.song = list[index - 1] ? list[index - 1] : list[list.length - 1];
        }
        else {
            this.playerService.song = list[index + 1] ? list[index + 1] : list[0];
        }
        this.setPlay(this.playerService.song.id);
    };
    PlayerComponent.prototype.setPlay = function (id) {
        var _this = this;
        // 获取播放连接
        this.service.song.getSongUrl(id).subscribe(function (song) {
            _this.service.player.song.url = song.url;
            _this.service.player.song.size = song.size;
            // 获取歌词
            _this.service.song.getLyric(id).subscribe(function (lyric) {
                _this.service.player.song.lyric = lyric;
            });
        });
        this.play();
    };
    // 显示歌单
    PlayerComponent.prototype.onShowSheet = function () {
        this.showSheet = !this.showSheet;
    };
    // 播放选中的歌曲
    PlayerComponent.prototype.playItem = function (item) {
        this.playerService.song = item;
        this.setPlay(item.id);
    };
    // 跳转到歌曲详情
    PlayerComponent.prototype.toSongDetail = function (item) {
        console.log(item);
        if (this.showSheet) {
            this.showSheet = false;
        }
        this.router.navigate(['song'], { queryParams: { id: item.id } });
    };
    PlayerComponent.ctorParameters = function () { return [
        { type: src_app_services_player_player_service__WEBPACK_IMPORTED_MODULE_2__["PlayerService"] },
        { type: src_app_services_service_service__WEBPACK_IMPORTED_MODULE_3__["ServiceService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzNotificationService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('audio', { static: true })
    ], PlayerComponent.prototype, "audio", void 0);
    PlayerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-player',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./player.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/share/components/player/player.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./player.component.scss */ "./src/app/share/components/player/player.component.scss")).default]
        })
    ], PlayerComponent);
    return PlayerComponent;
}());



/***/ }),

/***/ "./src/app/share/pipes/filter-time/filter-time.pipe.ts":
/*!*************************************************************!*\
  !*** ./src/app/share/pipes/filter-time/filter-time.pipe.ts ***!
  \*************************************************************/
/*! exports provided: FilterTimePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterTimePipe", function() { return FilterTimePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FilterTimePipe = /** @class */ (function () {
    function FilterTimePipe() {
    }
    FilterTimePipe.prototype.transform = function (value) {
        var oldDate = new Date(value);
        var newDate = new Date();
        var dayNum = "";
        var getTime = (newDate.getTime() - oldDate.getTime()) / 1000;
        if (getTime < 60 * 2) {
            dayNum = "刚刚";
        }
        else if (getTime >= 60 * 2 && getTime < 60 * 60) {
            dayNum = parseInt((getTime / 60).toString()) + "分钟前";
        }
        else if (getTime >= 3600 && getTime < 3600 * 24) {
            dayNum = parseInt((getTime / 3600).toString()) + "小时前";
        }
        else if (getTime >= 3600 * 24 && getTime < 3600 * 24 * 30) {
            dayNum = parseInt((getTime / 3600 / 24).toString()) + "天前";
        }
        else if (getTime >= 3600 * 24 * 30 && getTime < 3600 * 24 * 30 * 12) {
            dayNum = parseInt((getTime / 3600 / 24 / 30).toString()) + "个月前";
        }
        else if (value >= 3600 * 24 * 30 * 12) {
            dayNum = parseInt((getTime / 3600 / 24 / 30 / 12).toString()) + "年前";
        }
        return dayNum;
    };
    FilterTimePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'filterTime'
        })
    ], FilterTimePipe);
    return FilterTimePipe;
}());



/***/ }),

/***/ "./src/app/share/pipes/play-count/play-count.pipe.ts":
/*!***********************************************************!*\
  !*** ./src/app/share/pipes/play-count/play-count.pipe.ts ***!
  \***********************************************************/
/*! exports provided: PlayCountPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayCountPipe", function() { return PlayCountPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PlayCountPipe = /** @class */ (function () {
    function PlayCountPipe() {
    }
    PlayCountPipe.prototype.transform = function (value) {
        if (value > 10000) {
            return Math.floor(value / 10000) + '万';
        }
        else {
            return value;
        }
    };
    PlayCountPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'playCount'
        })
    ], PlayCountPipe);
    return PlayCountPipe;
}());



/***/ }),

/***/ "./src/app/share/share.module.ts":
/*!***************************************!*\
  !*** ./src/app/share/share.module.ts ***!
  \***************************************/
/*! exports provided: ShareModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareModule", function() { return ShareModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/share/components/footer/footer.component.ts");
/* harmony import */ var _pipes_play_count_play_count_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pipes/play-count/play-count.pipe */ "./src/app/share/pipes/play-count/play-count.pipe.ts");
/* harmony import */ var _pipes_filter_time_filter_time_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pipes/filter-time/filter-time.pipe */ "./src/app/share/pipes/filter-time/filter-time.pipe.ts");
/* harmony import */ var _components_comments_comments_comments_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/comments/comments/comments.component */ "./src/app/share/components/comments/comments/comments.component.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");










var ShareModule = /** @class */ (function () {
    function ShareModule() {
    }
    ShareModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"], _pipes_play_count_play_count_pipe__WEBPACK_IMPORTED_MODULE_6__["PlayCountPipe"], _pipes_filter_time_filter_time_pipe__WEBPACK_IMPORTED_MODULE_7__["FilterTimePipe"], _components_comments_comments_comments_component__WEBPACK_IMPORTED_MODULE_8__["CommentsComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                /** 导入 ng-zorro-antd 模块 **/
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_9__["NgZorroAntdModule"],
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
                _pipes_play_count_play_count_pipe__WEBPACK_IMPORTED_MODULE_6__["PlayCountPipe"],
                _pipes_filter_time_filter_time_pipe__WEBPACK_IMPORTED_MODULE_7__["FilterTimePipe"],
                _components_comments_comments_comments_component__WEBPACK_IMPORTED_MODULE_8__["CommentsComponent"],
            ]
        })
    ], ShareModule);
    return ShareModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/smallzip/Desktop/angular/wangyiyun-music/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map