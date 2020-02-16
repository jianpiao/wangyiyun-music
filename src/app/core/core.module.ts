import { NgModule, SkipSelf, Optional } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServicesModule } from '../services/services.module';
import { ShareModule } from '../share/share.module';
import { RouterModule } from '../router/router.module';
/**
 * 核心模块
 */
@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ServicesModule,
    RouterModule,
    ShareModule,
  ],
  exports: [
    BrowserModule,
    RouterModule,
    ShareModule,
  ]
})
export class CoreModule {
  constructor(@SkipSelf() @Optional() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule 只能被appModule引入');
    }
  }
}
