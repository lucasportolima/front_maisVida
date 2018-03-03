import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';

/**
 * Generated class for the MedicoDetalhePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-medico-detalhe',
  templateUrl: 'medico-detalhe.html',
  providers: [
  	ApiProvider
  ]
})
export class MedicoDetalhePage {
  public detalhe;
  public medicoId;

  constructor(
  	public navCtrl: NavController, 
  	public navParams: NavParams,
  	private apiProvider: ApiProvider
  	) {
  }

  ionViewDidEnter() {
  	this.medicoId = this.navParams.get("id");
  	this.apiProvider.getMedico(this.medicoId).subscribe(
    	data=>{
    		const response = (data as any);
    		this.detalhe = response;
    		console.log(response);
    	}, error => {
    		console.log(error);
    	}
    )
  }

}
