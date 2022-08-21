class boletim{
    _nome
    _nota1
    _nota2
    _media




    constructor (nome, nota1, nota2){
        this._nome = nome
        this._nota1 = nota1
        this._nota2 = nota2
        this._media = (nota1 + nota2)/2
    }

    get nome(){
        return this._nome
    }

    set nome(novonome){
        this._nome = novonome
    }

    get nota1(){
        return this._nota1
    }

    set nota1(novanota1){
        this._nota1 = novanota1
    }


    get nota2(){
        return this._nota2
    }

    set nota2(novanota2){
        this._nota2 = novanota2
    }
    
    get media(){
        return this._media
    }

    set media(novamedia){
        this._media = novamedia
    }



}

let pessoa1 = new boletim('jadley',8 ,9)

let pessoa2 = new boletim('marcos', 7, 6.5)

console.log("---------- BOLETIM ----------")
console.log('nome: ' + pessoa1.nome)
console.log('media: ' + pessoa1.media)
if(pessoa1.media >= 7){
    console.log('Aprovado!')
}else{
    console.log('Reprovado!')
}


console.log('\n\nnome: ' + pessoa2.nome)
console.log('media: ' + pessoa2.media)
if(pessoa2.media >= 7){
    console.log('Aprovado!')
}else{
    console.log('Reprovado!')
}
