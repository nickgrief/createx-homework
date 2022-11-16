import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MaterialModule } from './material/material.module';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignFooterComponent } from './sign-footer/sign-footer.component';

import { AngularYandexMapsModule, YaConfig } from 'angular8-yandex-maps';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SinglePostComponent } from './single-post/single-post.component';
import { ArticleComponent } from './article/article.component';
import { IconListComponent } from './icon-list/icon-list.component';
import { DimDirective } from './dim.directive';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SubscribeBannerComponent } from './subscribe-banner/subscribe-banner.component';
import { OurBlogComponent } from './our-blog/our-blog.component';
import { BlogCardComponent } from './blog-card/blog-card.component';



const mapConfig: YaConfig = {
  apikey: 'bbd1b3b0-17e8-4915-aa80-57bd9b05026f',
  lang: 'ru_RU',
  mode: 'debug',
};

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    SignInComponent,
    SignUpComponent,
    SignFooterComponent,
    HeaderComponent,
    FooterComponent,
    SinglePostComponent,
    ArticleComponent,
    IconListComponent,
    DimDirective,
    SidebarComponent,
    SubscribeBannerComponent,
    OurBlogComponent,
    BlogCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    AngularYandexMapsModule.forRoot(mapConfig),
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
