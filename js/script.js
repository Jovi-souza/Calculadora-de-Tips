function reset() {
    let reset = '$0.00'
    pricePerson.innerHTML = `${reset}`
    priceTotal.innerHTML = `${reset}`
    accountAmount.value = ''
    numberOfPeople.value = ''
    Custom.value = ''
}

function calculateTipPercentageCustom() {
    const accountAmount = Number(document.querySelector("#accountAmount").value)
    const numberOfPeople = Number(document.querySelector("#numberOfPeople").value)

    let percentage = Number(document.querySelector('#Custom').value)

    let divideValuePerPerson = accountAmount / numberOfPeople
    let applyPercentage = (percentage / 100) * divideValuePerPerson

    pricePerson.innerHTML = `$${applyPercentage.toFixed(2)}`

    let totalAcount = applyPercentage + divideValuePerPerson

    priceTotal.innerHTML = `$${totalAcount.toFixed(2)}`
}

function percentage5() {
    const accountAmount = Number(document.querySelector("#accountAmount").value)
    const numberOfPeople = Number(document.querySelector("#numberOfPeople").value)

    let divideValuePerPerson = accountAmount / numberOfPeople
    let applyPercentage = (5 / 100) * divideValuePerPerson

    let totalAcount = applyPercentage + divideValuePerPerson

    pricePerson.innerHTML = `$${applyPercentage.toFixed(2)}`
    priceTotal.innerHTML = `$${totalAcount.toFixed(2)}`
}

function percentage10() {
    const accountAmount = Number(document.querySelector("#accountAmount").value)
    const numberOfPeople = Number(document.querySelector("#numberOfPeople").value)

    let divideValuePerPerson = accountAmount / numberOfPeople
    let applyPercentage = (10 / 100) * divideValuePerPerson

    pricePerson.innerHTML = `$${applyPercentage.toFixed(2)}`

    let totalAcount = applyPercentage + divideValuePerPerson

    priceTotal.innerHTML = `$${totalAcount.toFixed(2)}`
}

function percentage15() {
    const accountAmount = Number(document.querySelector("#accountAmount").value)
    const numberOfPeople = Number(document.querySelector("#numberOfPeople").value)

    let divideValuePerPerson = accountAmount / numberOfPeople
    let applyPercentage = (15 / 100) * divideValuePerPerson

    pricePerson.innerHTML = `$${applyPercentage.toFixed(2)}`

    let totalAcount = applyPercentage + divideValuePerPerson

    priceTotal.innerHTML = `$${totalAcount.toFixed(2)}`
}

function percentage25() {
    const accountAmount = Number(document.querySelector("#accountAmount").value)
    const numberOfPeople = Number(document.querySelector("#numberOfPeople").value)

    let divideValuePerPerson = accountAmount / numberOfPeople
    let applyPercentage = (25 / 100) * divideValuePerPerson

    pricePerson.innerHTML = `$${applyPercentage.toFixed(2)}`

    let totalAcount = applyPercentage + divideValuePerPerson

    priceTotal.innerHTML = `$${totalAcount.toFixed(2)}`
}

function percentage50() {
    const accountAmount = Number(document.querySelector("#accountAmount").value)
    const numberOfPeople = Number(document.querySelector("#numberOfPeople").value)

    let divideValuePerPerson = accountAmount / numberOfPeople
    let applyPercentage = (50 / 100) * divideValuePerPerson

    pricePerson.innerHTML = `$${applyPercentage.toFixed(2)}`

    let totalAcount = applyPercentage + divideValuePerPerson

    priceTotal.innerHTML = `$${totalAcount.toFixed(2)}`
}