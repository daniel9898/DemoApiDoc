import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InAppBrowser, InAppBrowserOptions, InAppBrowserObject } from '@ionic-native/in-app-browser';

@IonicPage()
@Component({
  selector: 'page-doc',
  templateUrl: 'doc.html',
})
export class DocPage {

  browser : InAppBrowserObject;
  options : InAppBrowserOptions = {
  	zoom : 'yes'
  }

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private iab: InAppBrowser) {
  }

  showDocumentation(){
     this.browser = this.iab.create('https://tplab4.herokuapp.com/apidoc/','_self',this.options);
  }

  showTutorials(){

  }

  ionViewDidLoad() {
    
  }

  ionViewWillLeave(){
   
  }

}
