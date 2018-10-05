import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SperBannerTopComponent } from './modules/sper/banner/top/top.component';
import { SperHeaderMenuComponent } from './modules/sper/header/menu/menu.component';
import { SperAccountLoginComponent } from './modules/sper/account/login/login.component';
import { SperAccountRegisterComponent } from './modules/sper/account/register/register.component';
import { SperFooterSectionComponent } from './modules/sper/footer/section/section.component';
import { SperFooterCopyrightComponent } from './modules/sper/footer/copyright/copyright.component';
import { SperBannerSlideshowComponent } from './modules/sper/banner/slideshow/slideshow.component';
import { SperServiceHighlightComponent } from './modules/sper/service/highlight/highlight.component';
import { SperServiceMapComponent } from './modules/sper/service/map/map.component';
import { SperServiceSectionComponent } from './modules/sper/service/section/section.component';
import { SperBlogSectionComponent } from './modules/sper/blog/section/section.component';
import { SperBlogBoardComponent } from './modules/sper/blog/board/board.component';
import { SperBlogDetailComponent } from './modules/sper/blog/detail/detail.component';
import { SperBlogLatestComponent } from './modules/sper/blog/latest/latest.component';
import { SperNewsBoardComponent } from './modules/sper/news/board/board.component';
import { SperNewsDetailComponent } from './modules/sper/news/detail/detail.component';
import { SperNewsFeaturedsComponent } from './modules/sper/news/featureds/featureds.component';
import { SperDownloadSectionComponent } from './modules/sper/download/section/section.component';
import { SperPageHomeComponent } from './pages/sper/home/home.component';
import { SperPageBlogComponent } from './pages/sper/blog/blog.component';
import { SperPageBlogDetailComponent } from './pages/sper/blog/detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    SperBannerTopComponent,
    SperHeaderMenuComponent,
    SperAccountLoginComponent,
    SperAccountRegisterComponent,
    SperFooterSectionComponent,
    SperFooterCopyrightComponent,
    SperBannerSlideshowComponent,
    SperServiceHighlightComponent,
    SperServiceMapComponent,
    SperServiceSectionComponent,
    SperBlogSectionComponent,
    SperBlogBoardComponent,
    SperBlogDetailComponent,
    SperBlogLatestComponent,
    SperNewsBoardComponent,
    SperNewsDetailComponent,
    SperNewsFeaturedsComponent,
    SperDownloadSectionComponent,
    SperPageHomeComponent,
    SperPageBlogComponent,
    SperPageBlogDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
