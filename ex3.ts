
export interface Voo {
    constructor(numeroVoo: string, data: string);
    proximoLivre(): void;
    verifica(cadeira: number): boolean;
    ocupa(cadeira: number): void;
    vagas(): number;
    getVoo(): void;
    getData(): string;
    clone(): Voo;
}
export class Voo implements Voo {
    public numeroVoo: string
    public data: string
    public cadeira: number[] = []
    constructor(numeroVoo: string, data: string) {
        this.numeroVoo = numeroVoo
        this.data = data
        this.criarVoo()
    }
    public criarVoo(): void {
        for (let i = 0; i < 100; i++) {
            this.cadeira.push(0)
        }
    }
    public proximoLivre(): void {
        for (let i = 0; i < this.cadeira.length; i++) {
            if (this.cadeira[i] == 0) {
                console.log(i + 1)
                break
            }
        }
    }
    public verifica(cadeira: number): boolean {
        let verificar = cadeira - 1
        if (this.cadeira[verificar] === 0) {
            return true
        } else {
            return false
        }
    }
    public ocupa(cadeira: number): void {
        if (this.verifica(cadeira-1) === true) {
            this.cadeira[cadeira - 1] = 1
        }else{
            console.log('cadeira ocupada');
            
        }
    }
    public vagas(): number {
        let vagas = 0
        for (let i = 0; i < 100; i++) {
            if (this.cadeira[i] == 0) {
                vagas++
            }
        }
        return vagas
    }
    public getVoo(): void {
        console.log(this.numeroVoo)
        console.log(this.cadeira)
    }
    public getData(): string {
        return this.data
    }
    public clone(): Voo {
        let novoVoo = new Voo(this.numeroVoo, this.data,)
        novoVoo.cadeira = this.cadeira
        return novoVoo
    }
}

let voo1 = new Voo('45555', '2222-2-22')
voo1.criarVoo()
voo1.ocupa(1)
console.log(voo1.vagas())