
import { Injectable } from '@angular/core';
import { ToastController, AlertController, LoadingController } from 'ionic-angular';

@Injectable()
export class UtilsProvider {
	
  private loading : any;

  constructor(private toastCtrl: ToastController,
              private alertCtrl: AlertController,
              private loadingCtrl: LoadingController) {}

  showAlert(title: string, msj: string, callback?: any) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: msj,
      buttons: 
      [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => console.log("click alert")
        },
        {
          text: 'Aceptar',
          handler: callback != null ? callback : console.log('sin callback')      
        }
      ]

    });
    alert.present();
  }

  showToast(msg : string, dismissFunction?: any) {
     
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'top',
      cssClass: './success.scss'
    });
    toast.onDidDismiss((dismissFunction) ? dismissFunction() : "" );
    
    toast.present();
  }

  showLoading(dismissOnPageChange? : boolean){
    this.loading = this.loadingCtrl.create({
      content: 'Por favor espere...',
      dismissOnPageChange: (dismissOnPageChange != null) ? dismissOnPageChange : false
    });

    this.loading.present();
  }

  dismissLoading(){
    this.loading.dismiss();
  }


}
