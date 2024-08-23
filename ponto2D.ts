let rl = require('readline-sync')
export class Ponto2D {
    x: number
    y: number
    constructor() {
        this.x = 0
        this.y = 0
    }
    setx():void {
        this.x = rl.questionInt('fala o x')
    }
    sety():void {
        this.y = rl.questionInt('fala o y')
    }
    setxy():void {
        this.x = rl.questionInt('fala o x')
        this.y = rl.questionInt('fala o y')
    }
    getx():void {
        console.log(this.x)
    }
    gety():void {
        console.log(this.y)
    }
    getxy():void {
        console.log('x:', this.x, ',', 'y:', this.y);
    }
    mover():void {
        this.setxy()
        this.getxy()
    }
    equals(outroPonto: Ponto2D): boolean{
    if((Math.sqrt((outroPonto.x-this.x)**2+(outroPonto.y-this.y)**2))==0){
        return true
    }else{
        return false
    }
    }
    toString(): string{
        return`Ponto x:${this.x}, ponto y:${this.y}`
    }
    distancia(outroPonto: Ponto2D): number{
        return Math.sqrt((outroPonto.x-this.x)**2+(outroPonto.y-this.y)**2)
    }
    clone(): Ponto2D{
        let clone = new Ponto2DComCoordenadas(this.x,this.y)
        return clone
    }
}
export class Ponto2DComCoordenadas extends Ponto2D {
    constructor(x: number, y: number) {
        super()
        this.x = x
        this.y = y
    }
}
export class Ponto3D extends Ponto2D {
    constructor(outroPonto: Ponto2D,) {
        super()
        this.x = outroPonto.x
        this.y = outroPonto.y
    }
}