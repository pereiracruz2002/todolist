import {Injectable, EventEmitter, NgZone} from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Credencial} from ../model/credencial;
import firebase from "firebase";

@Injectable()
export class LoginProvider{
	
	autenticado:boolean;
	currentUser:any;
	loginSucessoEventEmitter:EventEmitter<any>;
	loginFalhaEventEmitter:EventEmitter<any>;
	logoutEventEmitter:EventEmitter<any>;

	constructor(public http: Http, public ngZone : Ngzone){
		this.loginSucessoEventEmitter = new EventEmmiter();
		this.loginFalhaEventEmmiter   = new EventEmmiter();
		this.logoutEventEmitter       = new EventEmmiter();
		firebase.auth.onAuthStateChanged(usuario =>{
			this.callbackStateChange(usuario)
		})
	}

	loginComGoogle(){
		let provider  = new firebase.auth.GoogleAuthProvider();
		firebase.auth().signInWithPopup(provider)
      .then(resultado => this.callbackSucessoLogin(resultado))
      .catch(error => this.callbackFalhaLogin(error))
	}

	private callbackStateChange(usuario){
		this.ngZone.run( () => {
			if(usuario == null){
				this.currentUser = null;
				this.auteticado  = false;
			}else{
				this.currentUser = usuario;
				this.auteticado  = true;
			}
		})
	}

	registrarUsuario(credencial:Credencial){
		firebase.auth().createUserWithEmailAndPassword(credencial.email, credencial.senha)
		.then(result => {
			console.log(result);
		})
		.cath(error=>console.log(erros));
	}
