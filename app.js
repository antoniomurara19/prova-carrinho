const confirmar = document.getElementById('confirmar')
const total = document.getElementById('total')
const resultado = document.getElementById('resultado')
const multis = document.getElementById('multis')
let comida = []
let quantidade_comida = []
let preco_comida = []

confirmar.addEventListener('click',()=>{
    let produto = document.getElementById('produto').value
    let quantidade = Number(document.getElementById('quantidade').value)
    let preco = Number(document.getElementById('preco').value)
    
    
    comida.push(produto)
    quantidade_comida.push(quantidade)
    preco_comida.push(preco)

    console.log(comida)
    console.log(preco_comida)
    console.log(quantidade_comida)

    resultado.innerHTML = ''
    for(i=0;i<comida.length;i++){
        resultado.innerHTML += 'Produto = ' + comida[i] + '&emsp;' + 'Quantidade = ' + quantidade_comida[i] + '&emsp;' + 'Preço produto = R$ ' + preco_comida[i] + '<br>'
    
        

        total.addEventListener('click',()=>{
            
        let resposta = 0
        for(i=0;i<comida.length;i++){
            resposta += (quantidade_comida[i] * preco_comida[i])
        }
            multis.innerHTML = 'O valor final da sua compra ficou por R$' + resposta
        })
    }

    
})