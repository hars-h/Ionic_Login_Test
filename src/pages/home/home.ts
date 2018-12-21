import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { MainPage } from '../main/main';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

username:string;
password:string;

  constructor(public navCtrl: NavController) {

  }

  login(){
console.log("Username: "+this.username);
console.log("Password: "+this.password);
//if(this.username=='test' && this.password=='test'){
this.navCtrl.push(MainPage);
//}
  }

  goRegister(){
this.navCtrl.push(RegisterPage);
  }

}
