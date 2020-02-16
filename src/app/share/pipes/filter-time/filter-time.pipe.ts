import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterTime'
})
export class FilterTimePipe implements PipeTransform {

  transform(value: number): number | string {
    let oldDate = new Date(value)
    let newDate = new Date()
    var dayNum = "";
    let getTime = (newDate.getTime() - oldDate.getTime()) / 1000;

    if (getTime < 60 * 2) {
      dayNum = "刚刚";
    } else if (getTime >= 60 * 2 && getTime < 60 * 60) {
      dayNum = parseInt((getTime / 60).toString()) + "分钟前";
    } else if (getTime >= 3600 && getTime < 3600 * 24) {
      dayNum = parseInt((getTime / 3600).toString()) + "小时前";
    } else if (getTime >= 3600 * 24 && getTime < 3600 * 24 * 30) {
      dayNum = parseInt((getTime / 3600 / 24).toString()) + "天前";
    } else if (getTime >= 3600 * 24 * 30 && getTime < 3600 * 24 * 30 * 12) {
      dayNum = parseInt((getTime / 3600 / 24 / 30).toString()) + "个月前";
    } else if (value >= 3600 * 24 * 30 * 12) {
      dayNum = parseInt((getTime / 3600 / 24 / 30 / 12).toString()) + "年前";
    }
    return dayNum;
  }

}
