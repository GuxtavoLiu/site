

export class Estado{
  private nome : string;
  private sigla : string;
  private descricao : string;

  getNome():string {
    return this.nome;
  }

  setNome(nome:string) : void{
    this.nome = nome;
  }

  getSigla() : string {
    return this.sigla;
  }

  setSigla(sigla:string) : void {
    this.sigla = sigla;
  }

  getDescricao() : string {
    return this.descricao;
  }

  setDescricao(descricao:string) : void {
    this.descricao = descricao;
  }
}
