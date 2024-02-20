let valor
let quantidade
let opçao = prompt("bem vindo ao posto bbb, você deseja: " + "\ n1 - abstecer com gasolina; \ n2 - abastecer com álcool; \ n3 - calibrar os pneus")
 
switch (opçao){
    case "1":
        valor = parseInt(prompt("digite o valor para abastecer"))

        quantidade= valor / 5
        
    
        console.log("foram abastecidos " + quantidade + "L de gasolina")

        break

    case "2":
        valor = parseInt(prompt("digite o valor para abastecer"))

        quantidade = valor / 3

        console.log("foram abastecidos " + quantidade + "L de álcool")
        break


    case "3":
        valor = parseInt(prompt("digite o valor para abastecer"))
        
        console.log("pneus calibrados")
        break






}