import {EstadoTarefa} from "./estado-tarefa.ts";
export class Tarefa{
	codigo:number;
	titulo:string;
	descricao?:string;
	state:EstadoTarefa;
}