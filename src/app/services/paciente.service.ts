import { Injectable } from '@angular/core';

import { PACIENTES } from '../mocks/mock-paciente';
import { Paciente } from '../fonoaudiologo/models/paciente/paciente';


@Injectable()
export class PacienteService {

	getPaciente(){
		return PACIENTES;
	}

	setPaciente(paciente: Paciente){
		PACIENTES.push(paciente);
	}
}