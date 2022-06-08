// function calcularPorcentagem5() {

//     let accountValue = Number(document.querySelector("#accountValue").value)
//     let numberOfPeople = Number(document.querySelector("#numberOfPeople").value)

//     let percentage = 5

//     let calcular = accountValue / numberOfPeople
//     let calcPerce = (percentage / 100) * calcular

//     pricePerson.innerHTML = `$${calcPerce.toFixed(2)}`

//     let somaDaConta = calcPerce + calcular

//     priceTotal.innerHTML = `$${somaDaConta.toFixed(2)}`
// }

// function calcularPorcentagem10() {
//     let accountValue = Number(document.querySelector("#accountValue").value)
//     let numberOfPeople = Number(document.querySelector("#numberOfPeople").value)
//     let percentage = 10

//     let calcular = accountValue / numberOfPeople
//     let calcPerce = (percentage / 100) * calcular

//     pricePerson.innerHTML = `$${calcPerce.toFixed(2)}`

//     let somaDaConta = calcPerce + calcular

//     priceTotal.innerHTML = `$${somaDaConta.toFixed(2)}`
// }

// function calcularPorcentagem15() {
//     let accountValue = Number(document.querySelector("#accountValue").value)
//     let numberOfPeople = Number(document.querySelector("#numberOfPeople").value)
//     let percentage = 15

//     let calcular = accountValue / numberOfPeople
//     let calcPerce = (percentage / 100) * calcular

//     pricePerson.innerHTML = `$${calcPerce.toFixed(2)}`

//     let somaDaConta = calcPerce + calcular

//     priceTotal.innerHTML = `$${somaDaConta.toFixed(2)}`
// }

// function calcularPorcentagem25() {
//     let accountValue = Number(document.querySelector("#accountValue").value)
//     let numberOfPeople = Number(document.querySelector("#numberOfPeople").value)
//     let percentage = 25

//     let calcular = accountValue / numberOfPeople
//     let calcPerce = (percentage / 100) * calcular

//     pricePerson.innerHTML = `$${calcPerce.toFixed(2)}`
//     let somaDaConta = calcPerce + calcular

//     priceTotal.innerHTML = `$${somaDaConta.toFixed(2)}`
// }

// function calcularPorcentagem50() {
//     let accountValue = Number(document.querySelector("#accountValue").value)
//     let numberOfPeople = Number(document.querySelector("#numberOfPeople").value)

//     let percentage = Number(document.querySelector('#percentage').value)

//     let calcular = accountValue / numberOfPeople
//     let calcPerce = (percentage / 100) * calcular

//     pricePerson.innerHTML = `$${calcPerce.toFixed(2)}`

//     let somaDaConta = calcPerce + calcular

//     priceTotal.innerHTML = `$${somaDaConta.toFixed(2)}`
// }

function calculateTipPercentageCustom() {
    let accountValue = Number(document.querySelector("#accountValue").value)
    let numberOfPeople = Number(document.querySelector("#numberOfPeople").value)

    let percentage = Number(document.querySelector('#Custom').value)

    let divideValuePerPerson = accountValue / numberOfPeople
    let applyPercentage = (percentage / 100) * divideValuePerPerson

    pricePerson.innerHTML = `$${applyPercentage.toFixed(2)}`

    let totalAcount = applyPercentage + divideValuePerPerson

    priceTotal.innerHTML = `$${totalAcount.toFixed(2)}`
}

//     função final
function calculateTipPercentage() {
    let accountValue = Number(document.querySelector("#accountValue").value)
    let numberOfPeople = Number(document.querySelector("#numberOfPeople").value)

    let percentage = Number(document.querySelector('#percentage').value)

    let divideValuePerPerson = accountValue / numberOfPeople
    let applyPercentage = (percentage / 100) * divideValuePerPerson

    pricePerson.innerHTML = `$${applyPercentage.toFixed(2)}`

    let totalAcount = applyPercentage + divideValuePerPerson

    priceTotal.innerHTML = `$${totalAcount.toFixed(2)}`
}

function reset() {
    let clean = '$0.00'
    pricePerson.innerHTML = `${clean}`
    priceTotal.innerHTML = `${clean}`
}

