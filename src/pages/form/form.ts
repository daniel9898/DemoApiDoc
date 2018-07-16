import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UtilsProvider } from '../../providers/utils/utils';
import { UserProvider } from '../../providers/user/user';

@IonicPage()
@Component({
  selector: 'page-form',
  templateUrl: 'form.html',
})
export class FormPage {

  create : boolean = true;
  user : any = {
  	name : '',
  	lastName: '',
  	email : '',
  	password : '123456' 
  }

  constructor(private navCtrl: NavController, 
              private navParams: NavParams,
              private _utils: UtilsProvider,
              private _user: UserProvider) {
  }

  ionViewDidLoad() {
    this.create = this.navParams.get('create') != null ? false : true;
    this.user = this.create ? this.user : this.navParams.get('user');
  }

  get toogleHeader(){
    return this.create ? 'Alta' : 'Modificar'
  }

  save(){
    this._utils.showLoading();
    this.create ? this.createUser() : this.updateUser(); 

  }

  async createUser(){
    
    console.log(this.user);

    try{

      await this._user.save('signup',this.user).toPromise();
      this._utils.showToast('USUARIO CREADO EXITOSAMENTE!');
      this.navCtrl.push('ListPage');

    }catch(e){
      this._utils.showAlert('Atención !',e.error.message);
      console.log(e);
    }

    this._utils.dismissLoading();
  }

  async updateUser(){

    console.log('updateUser');
    try{
      let ok = await this._user.update('users',this.user).toPromise();
      console.log(ok);
      this._utils.showToast('USUARIO ACTUALIZADO EXITOSAMENTE!');
      this.navCtrl.push('ListPage');

    }catch(e){
      this._utils.showAlert('Atención !',e.error.message);
      console.log(e);
    }

    this._utils.dismissLoading();

  }

}
