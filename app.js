const confirmar = document.getElementById('confirmar')
const total = document.getElementById('total')

confirmar.addEventListener('click',()=>{
    /*-----------variaveis-------------*/
    let produto = Number(document.getElementById('produto').value)
    let quantidade = Number(document.getElementById('quantidade').value)
    let result = document.getElementById('result')
    let each_total = []
    let conta_1 = 0
    let conta_2 = 0
    let conta_3 = 0
    let conta_4 = 0
    let conta_5 = 0
    let conta_6 = 0
    let conta_7 = 0
    let conta_8 = 0
    let conta_9 = 0
    let conta_10 = 0

    if (produto===1){
        conta_1 = quantidade*7.9
        each_total.push(conta_1)
        result.innerHTML += '&nbsp;&nbsp; R$' + each_total + ' + <br> &nbsp;'
    }
    if (produto===2){
        conta_2 = quantidade*5.75
        each_total.push(conta_2)
        result.innerHTML += '&nbsp;&nbsp; R$'  + each_total + ' + <br> &nbsp;'
    }
    if (produto===3){
        conta_3 = quantidade*11.35
        each_total.push(conta_3)
        result.innerHTML += '&nbsp;&nbsp; R$' + each_total + ' + <br> &nbsp;'
    }
    if (produto===4){
        conta_4 = quantidade*14.6
        each_total.push(conta_4)
        result.innerHTML += '&nbsp;&nbsp; R$'  + each_total + ' + <br> &nbsp;'
    }
    if (produto===5){
        conta_5 = quantidade*15.4
        each_total.push(conta_5)
        result.innerHTML += '&nbsp;&nbsp; R$' + each_total + ' + <br> &nbsp;'
    }
    if (produto===6){
        conta_6 = quantidade*12.9
        each_total.push(conta_6)
        result.innerHTML += '&nbsp;&nbsp; R$'  + each_total + ' + <br> &nbsp;'
    }
    if (produto===7){
        conta_7 = quantidade*4.9
        each_total.push(conta_7)
        result.innerHTML += '&nbsp;&nbsp; R$' + each_total + ' + <br> &nbsp;'
    }
    if (produto===8){
        conta_8 = quantidade*4.3
        each_total.push(conta_8)
        result.innerHTML += '&nbsp;&nbsp; R$'  + each_total + ' + <br> &nbsp;'
    }
    if (produto===9){
        conta_9 = quantidade*3.5
        each_total.push(conta_9)
        result.innerHTML += '&nbsp;&nbsp; R$' + each_total + ' + <br> &nbsp;'
    }
    if (produto===10){
        conta_10 = quantidade*4.2
        each_total.push(conta_10)
        result.innerHTML += '&nbsp;&nbsp; R$'  + each_total + ' + <br> &nbsp;'
    }
    else if(produto>10){
        alert('Seu produto não EXISTE')
    }
    total.addEventListener('click',()=>{
    
        final = conta_1 + conta_2 + conta_3 + conta_4 + conta_5 + conta_6 + conta_7 + conta_8 + conta_9 + conta_10
        result.innerHTML = final
    })
})




