import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';

/**
 * Generated class for the MedicoInserirPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-medico-inserir',
  templateUrl: 'medico-inserir.html',
  providers: [
  	ApiProvider
  ]
})
export class MedicoInserirPage {
  
  Medico = {
    id: "",
    primeiroNome: "",
    ultimoNome: "",
    especialidade: "",
    email:"",
    ativo: "",
    status: "",
    estado: "",
    cidade: "",
    ocupado: ""
  }

  constructor(
  	public navCtrl: NavController,
  	public navParams: NavParams,
  	private apiProvider: ApiProvider
  	) {
  }

  cadastrarMedico(medico){
  	this.apiProvider.inserirMedico(medico);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MedicoInserirPage');
  }

}
