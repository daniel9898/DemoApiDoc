import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';
import { Subscription } from "rxjs/Subscription";
import { UtilsProvider } from '../../providers/utils/utils';

@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {

  listSub : Subscription;
  public list : any;
  user : any;

  constructor(public navCtrl: NavController, 
  	          public navParams: NavParams,
  	          private _utils: UtilsProvider,
  	          private _user: UserProvider) {
  }

  ionViewDidLoad() {
    this.getUsers();
  }

  getUsers(){
    this.listSub = this._user.getAll('users').subscribe(
     (resp:any) => {this.list = resp.users;       console.log(this.list)},
      error => {
        this._utils.showAlert('Atención !',error.error.message);
        
        
      }
    )
  }

  confirmDelete(user:any){
    this.user = user;
    this._utils.showAlert('Atención !','¿Esta seguro que desea borrar el usuario : '+user.email+'?',this.delete.bind(this));
  }

  async delete(){

    this._utils.showLoading();
    try{
      this.user.isActive = false; 
    	await this._user.delete('users',this.user).toPromise();
   
    	this._utils.showToast('USUARIO ELIMINADO EXITOSAMENTE !');
    	this.getUsers();

    }catch(e){
       this._utils.showAlert('Atención !',e.error.message);
       console.log('error en borrar user ',e);
    }

    this._utils.dismissLoading();
  }

  edit(user:any){
    console.log('user a editar ',user);
    this.navCtrl.push('FormPage',{user: user, create: false});
  }


  ionViewWillLeave(){
    this.listSub.unsubscribe();
  
  }

}
