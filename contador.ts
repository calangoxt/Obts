export class Contador {
    public Valor: number

    public zerar() {
        this.Valor = 0
    }
    public incrementar() {
        this.Valor++
    }
    public valor(): number {
        return this.Valor
    }
}