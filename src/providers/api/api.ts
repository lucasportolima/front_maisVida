import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Headers, RequestOptions } from '@angular/http';
import {  ToastController } from 'ionic-angular'; 
import 'rxjs/add/operator/map';

import 'rxjs/rx';
/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiProvider {
  private mydata;

  constructor(public http: HttpClient, public toastCtrl: ToastController) {
    console.log('Hello ApiProvider Provider');
  }

  excluirMedico(id){
  	return this.http.get("http://localhost:8080/excluir/" + id);
  }

  inserirMedico(medico){

   this.http.post ( "http://localhost:8080/cadastrar", JSON.parse(JSON.stringify ({medico}))) 
    .subscribe(data => {
    this.mydata =data.json()
    let response = this.mydata.code;
    //here 200 is server response

      }, error => {
        
        // Error getting the data
        console.log(error);
      });
    }
    
  
      

  getMedico(id){
  	return this.http.get("http://localhost:8080/medico/" + id);
  }

  getMedicos(){
  	return this.http.get("http://localhost:8080/medicos");
  }
}
