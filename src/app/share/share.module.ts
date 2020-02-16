import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSliderModule, MatTableModule, MatButtonModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import { PlayCountPipe } from './pipes/play-count/play-count.pipe';
import { FilterTimePipe } from './pipes/filter-time/filter-time.pipe';
import { CommentsComponent } from './components/comments/comments/comments.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';



@NgModule({
  declarations: [FooterComponent, PlayCountPipe, FilterTimePipe, CommentsComponent],
  imports: [
    CommonModule,
    MatSliderModule,
    MatTableModule,
    MatButtonModule,
    FormsModule,
    /** 导入 ng-zorro-antd 模块 **/
    NgZorroAntdModule,
  ],
  exports: [
    MatSliderModule,
    MatTableModule,
    MatButtonModule,
    FormsModule,
    FooterComponent,
    PlayCountPipe,
    FilterTimePipe,
    CommentsComponent,
  ]
})
export class ShareModule { }
