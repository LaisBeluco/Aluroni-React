import { Negociacao } from "./negociacao.js";

export class Negociacoes {
  // Array<Negociacao> = ...
  private negociacoes: Negociacao[] = [];
  // -------------------------
  adiciona(negociacao: Negociacao) {
    this.negociacoes.push(negociacao);
  }
  // ReadonlyArray<Negociacao> = ...
  lista(): readonly Negociacao[] {
    // -------------------------
    return this.negociacoes;
  }
}

const negociacoes = new Negociacoes();
negociacoes.lista().forEach((n) => {});
