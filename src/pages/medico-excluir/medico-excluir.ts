import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';

/**
 * Generated class for the MedicoExcluirPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-medico-excluir',
  templateUrl: 'medico-excluir.html',
  providers: [
  	ApiProvider
  ]
})
export class MedicoExcluirPage {

  public medicoId;

  constructor(
  	public navCtrl: NavController, 
  	public navParams: NavParams,
  	private apiProvider: ApiProvider
  	) {
  }

  ionViewDidEnter() {
    this.medicoId = this.navParams.get("id");
    this.apiProvider.excluirMedico(this.medicoId).subscribe(
      data=>{
        const response = (data as any);
        console.log(response);
      }, error => {
        console.log(error);
      }
    )
  }

}
