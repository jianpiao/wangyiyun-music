import { Lyric } from './common.type';

/***
 * 歌曲信息
 */

// 歌曲详情参数
export interface SongDetail {
  id: number;
  name: string;
  dt:number;
  mv?:number;
  ar: {
    id: number;
    name: string;
  };
  al: {
    id: number;
    name: string;
    picUrl: string;
  };
  lyric?:Lyric[];
}