import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-registrar',
  templateUrl: 'registrar.html'
})
export class Registrar {
	credencial:Credencial;
	constructor(public navCtrl: NavController, public loginProvider:loginProvider) {
  		this.credencial = new Credencial();
  	}

  	doRegister(){
  		this.loginProvider.registrarUsuario(this.credencial);
  	}

}
