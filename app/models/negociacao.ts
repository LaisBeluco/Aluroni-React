export class Negociacao {
  // Declaração no próprio construtor...
  constructor(
    public readonly data: Date,
    public readonly quantidade: number,
    public readonly valor: number
  ) {}
  get volume(): number {
    return this.quantidade * this.valor;
  }
}