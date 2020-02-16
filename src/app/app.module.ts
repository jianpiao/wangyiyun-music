import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HeaderComponent } from './share/components/header/header.component';
import { CoreModule } from './core/core.module';
import { PlayerComponent } from './share/components/player/player.component';
import { NZ_I18N, zh_CN } from 'ng-zorro-antd';

// import module
import { ElModule } from 'element-angular';
// 配置ant
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PlayerComponent, 
  ],
  imports: [
    ElModule.forRoot(),
    CoreModule,
  ],
  bootstrap: [AppComponent],
  /** 配置 ng-zorro-antd 国际化（文案 及 日期） **/
  providers: [
    { provide: NZ_I18N, useValue: zh_CN }
  ]
})
export class AppModule { }
