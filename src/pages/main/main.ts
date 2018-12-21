import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
/**
 * Generated class for the MainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})

export class MainPage {

  users: any;

  constructor(public navCtrl: NavController, public restProvider: RestProvider)  {
  this.getUsers();
  }


  getUsers() {
    this.restProvider.getUsers()
    .subscribe(data => {
      this.users = data;
      console.log('Harsh in Main');
      console.log(this.users);
    });
  }

}
