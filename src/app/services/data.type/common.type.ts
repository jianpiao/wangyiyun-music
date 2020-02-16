export type Getdata = {
  id: number,
  name: string,
  age: number
};

export type Banner = {
  targetId: number;
  url: string;
  imageUrl: string;
};

export interface SidebarItem {
  type: string,
  data: {
    icon: string,
    title: string,
    ricon?: string,
  }[],
}

// 获取热门歌单标签
export type GetHotTags = {
  name: string,
  id: number,
  position: number
}

// 热门歌单推荐
export type Personalized = {
  id: number,
  name: string,
  playCount: number,
  picUrl: string,
}

// 入驻歌手
export type ArtistList = {
  id: number,
  name: string,
  picUrl: string,
  albumSize: number,
}

// 最新专辑
export interface AlbumNewest {
  id: number,
  name: string,
  artist: string,
  picUrl: string,
}

// 电台 - 新晋电台榜/热门电台榜
export interface TopListDj {
  id: number,
  name: string,
  picUrl: string,
  rcmdtext: string,
}

// 排行榜
export interface TopPlaylist {
  id: number,
  name: string,
}

export interface Lyric {
  lyric: string;
  time: number;
}

// 歌曲
export interface Song {
  id: number,
  url: string,
  size: number,
  name: string,
  artist: string,
  picUrl: string,
  lyric?: Array<Lyric>,
}

export interface Tracks {
  tracks: Song[];
}

export interface TracksDetail {
  id: number;
  tracks: any[];
  creator: {
    userId: number;
    avatarUrl: string;
    nickname: string;
  };
  coverImgUrl: string;
  description: string;
  name: string;
  shareCount: number;
  commentCount: number;
  playCount: number;
  createTime: number;
  subscribedCount: number;
  tags: string[];
}

// 专辑详情
export interface AlbumDetail {
  id: number,
  songs: Song[],
  album: {
    artist: {
      id: number,
      name: string,
      picUrl: string,
    },
    company: string,
    name: string,
    size: number,
    description: string,
    publishTime: number,
    picUrl: string,
    info: {
      commentCount: number,
      shareCount: number,
    }
  }
}

// 相似歌单列表
export interface SamePlayList {
  id: number;
  name: string;
  nickname: string;
  userId: number;
  coverImgUrl: string;
}

// 获取评论列表
export type CommentParams = {
  offset: number;
  limit: number;
  id: number;
  before?: number;
}
