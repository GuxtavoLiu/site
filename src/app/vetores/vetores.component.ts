import { Component } from '@angular/core';
import { Estado } from '../entidades/estado';

@Component({
  selector: 'vetor-component'
  ,templateUrl: 'vetores.component.html'
  ,styleUrls: ['vetores.component.html']
})
export class VetoresComponent{
  estado: Estado = new Estado();
  listaEstado = new Array<Estado>();

  constructor(){
  }

  adicionar() : void {
    this.listaEstado.push(this.estado);
    this.estado = new Estado();
  }

  excluir(i:number) : void {
    this.listaEstado.splice(i,1);
  }

  alterar(i:number) : void{
    this.estado = this.listaEstado[i];
    this.listaEstado.splice(i,1);
  }
}
