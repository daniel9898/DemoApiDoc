import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MyApp } from './app.component';

//import { ListPage } from '../pages/list/list';
import { ListPageModule } from '../pages/list/list.module';
import { DocPage } from '../pages/doc/doc';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CustomhttpProvider } from '../providers/customhttp/customhttp';
import { UserProvider } from '../providers/user/user';
import { UtilsProvider } from '../providers/utils/utils';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@NgModule({
  declarations: [
    MyApp,
    //ListPage,
    DocPage,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ListPageModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    //ListPage,
    DocPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CustomhttpProvider,
    UserProvider,
    UtilsProvider,
    InAppBrowser
  ]
})
export class AppModule {}
