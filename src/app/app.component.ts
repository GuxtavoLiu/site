import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent{
  nome: string = "Liu";
  valor: string = "";

  n1: string = "";
  n2: string = "";




  calcular( n1: number, n2: number) : number{
  resultado: number = Number(this.n1) + Number(this.n2);
  return resultado;
  }


  clique() : void{
    alert(this.valor);
  }

}
