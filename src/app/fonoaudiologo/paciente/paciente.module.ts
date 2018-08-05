import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { PacienteRoutingModule } from './paciente.routing.module';
import { PacienteDetalheComponent } from './paciente-detalhe/paciente-detalhe.component';
import { PacienteFormComponent } from './paciente-form/paciente-form.component';
import { PacienteComponent } from './paciente.component';
import { ConsultaComponent } from './consulta/consulta.component';
import { ConsultarMeusComponent } from './consultar-meus/consultar-meus.component';
import { PacienteEvolucaoComponent } from './paciente-evolucao/paciente-evolucao.component';
import { PacienteAdminComponent } from '../paciente-admin/paciente-admin.component';
import { GridViewComponent } from '../../grid-view/grid-view.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
	PacienteRoutingModule,
	
  ],
  declarations: [
  	PacienteDetalheComponent, 
  	PacienteFormComponent,
  	PacienteComponent, 
  	ConsultaComponent, 
  	ConsultarMeusComponent, 
	PacienteEvolucaoComponent,
	PacienteAdminComponent,
	GridViewComponent
  	]
})
export class PacienteModule { }
 