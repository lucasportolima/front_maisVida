import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MedicoDetalhePage } from './medico-detalhe';

@NgModule({
  declarations: [
    MedicoDetalhePage,
  ],
  imports: [
    IonicPageModule.forChild(MedicoDetalhePage),
  ],
})
export class MedicoDetalhePageModule {}
