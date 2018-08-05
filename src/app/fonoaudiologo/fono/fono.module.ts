import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FonoRoutingModule } from './fono.routing.module';
import { FonoDetalheComponent } from './fono-detalhe/fono-detalhe.component';
import { FonoFormComponent } from './fono-form/fono-form.component';
import { FonoComponent } from './fono.component';
import { ConsultarFonoComponent } from './consultar-fono/consultar-fono.component';
import { ConsultarMeusFonosComponent } from './consultar-meus-fonos/consultar-meus-fonos.component';

import { FormsModule } from '@angular/forms';
import { FonoAdminComponent } from './fono-admin/fono-admin.component';
import { MatDialog, MatDialogModule } from '@angular/material';
import { OverlayModule } from '@angular/cdk/overlay';
import { GridViewComponent } from '../../grid-view/grid-view.component';

@NgModule({
  imports: [
    CommonModule,
    FonoRoutingModule,
    FormsModule,
    MatDialogModule,
  ],
  providers:[MatDialog],
  declarations: [
    FonoDetalheComponent,
     FonoFormComponent,
     FonoComponent,
     ConsultarFonoComponent,
     ConsultarMeusFonosComponent,
     //GridViewComponent,
     FonoAdminComponent]
})
export class FonoModule { }
