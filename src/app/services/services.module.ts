import { NgModule, InjectionToken, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

// 令牌
export const API_CONFIG = new InjectionToken<string>('ApiConfigToken');

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  providers: [
    { provide: API_CONFIG, useValue: 'http://smallzip.com:3010/' },
  ]
})
export class ServicesModule { }
