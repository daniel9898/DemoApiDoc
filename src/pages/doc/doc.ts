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

  showTutorial(nr:number){
    if(nr == 1){
        this.iab.create('https://www.iorad.com/player/135470/Crear-un-usuario#trysteps-1','_self',this.options);
    }
    if(nr == 2){
        this.iab.create('https://www.iorad.com/player/135473/Modificar-un-usuario','_self',this.options);
    }
    if(nr == 3){
        this.iab.create('https://www.iorad.com/player/135478/Borrar-un-usuario','_self',this.options);
    }
     
  }

  ionViewDidLoad() {
    
  }

  ionViewWillLeave(){
   
  }

}
