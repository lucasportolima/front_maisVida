import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MedicoExcluirPage } from './medico-excluir';

@NgModule({
  declarations: [
    MedicoExcluirPage,
  ],
  imports: [
    IonicPageModule.forChild(MedicoExcluirPage),
  ],
})
export class MedicoExcluirPageModule {}
