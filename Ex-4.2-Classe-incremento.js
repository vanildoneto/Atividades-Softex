class pessoa {
    _nome
    _idade
    _peso
    _altura
    _imc
    static totalPessoas = 0


    constructor(nome, idade, peso, altura){
        this._nome = nome
        this._idade = idade
        this._peso = peso
        this._altura = altura
        this._imc = this._peso / (this._altura * this._altura)
        pessoa.totalPessoas += 1
    }

    get nome(){
        return this._nome 
    }

    get idade(){
        return this._idade
    }

    get peso(){
        return this._peso
    }
    
    get altura(){
        return this._altura
    }

    get imc(){
        return this._imc
    }



}



let pessoa1 = new pessoa('Jadley', 23, 73, 1.62)
let pessoa2 = new pessoa('Jmaria', 26, 83, 1.92)
let pessoa3 = new pessoa('joao', 29, 63, 1.72)
let pessoa4 = new pessoa('miro', 38, 53, 1.52)

console.log('numero de pessoas: ' + pessoa.totalPessoas)

console.log('\nnome: ' + pessoa1.nome)
console.log('idade: ' + pessoa1.idade)
console.log('peso: ' + pessoa1.peso)
console.log('altura: ' + pessoa1.altura)
console.log('Imc: ' + pessoa1.imc + '\n')

console.log('\nnome: ' + pessoa2.nome)
console.log('idade: ' + pessoa2.idade)
console.log('peso: ' + pessoa2.peso)
console.log('altura: ' + pessoa2.altura)
console.log('Imc: ' + pessoa2.imc + '\n')

console.log('\nnome: ' + pessoa3.nome)
console.log('idade: ' + pessoa3.idade)
console.log('peso: ' + pessoa3.peso)
console.log('altura: ' + pessoa3.altura)
console.log('Imc: ' + pessoa3.imc + '\n')

console.log('\nnome: ' + pessoa4.nome)
console.log('idade: ' + pessoa4.idade)
console.log('peso: ' + pessoa4.peso)
console.log('altura: ' + pessoa4.altura)
console.log('Imc: ' + pessoa4.imc + '\n')
