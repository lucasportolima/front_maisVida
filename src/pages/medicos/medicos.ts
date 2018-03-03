import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { MedicoDetalhePage } from '../medico-detalhe/medico-detalhe';
import { MedicoInserirPage } from '../medico-inserir/medico-inserir';
import { MedicoExcluirPage } from '../medico-excluir/medico-excluir';

/**
 * Generated class for the MedicosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-medicos',
  templateUrl: 'medicos.html',
  providers: [
  	ApiProvider
  ]
})
export class MedicosPage {

  public lista_medicos = new Array<any>();

  constructor(
  	public navCtrl: NavController,
  	public navParams: NavParams,
  	private apiProvider: ApiProvider
  	) {
  }

  abrirDetalhe(medico){
  	this.navCtrl.push(MedicoDetalhePage, {id: medico.id});
  }

  abrirCadastro(){
    this.navCtrl.push(MedicoInserirPage); 
  }

  excluirMedico(medico){
  	this.navCtrl.push(MedicoExcluirPage, {id: medico.id});
  }

  ionViewDidLoad() {
    this.apiProvider.getMedicos().subscribe(
    	data=>{
    		const response = (data as any);
    		this.lista_medicos = response;
    		console.log(response);
    	}, error => {
    		console.log(error);
    	}
    )
  }

}
