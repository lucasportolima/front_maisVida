import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MedicoInserirPage } from './medico-inserir';

@NgModule({
  declarations: [
    MedicoInserirPage,
  ],
  imports: [
    IonicPageModule.forChild(MedicoInserirPage),
  ],
})
export class MedicoInserirPageModule {}
