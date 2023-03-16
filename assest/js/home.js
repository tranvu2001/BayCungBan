// Passenger form
const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const passenger = $('.passengers')
const passengerQuantity = $('.passengers__quantity')
const passengerForm = $('.passengers__form')

const decreaseAdult = $('.select-btn--decrease--adult')
const increaseAdult = $('.select-btn--increase--adult')
const quantityAdult = $('.select-adult span')

const decreaseChildren = $('.select-btn--decrease--children')
const increaseChildren = $('.select-btn--increase--children')
const quantityChildren = $('.select-children span')

const showAdultQuantity = $('.adult__quantity')
const showChildrenQuantity = $('.children__quantity')

// const decreaseBaby = $('.select-btn--decrease--baby')
// const increaseBaby = $('.select-btn--increase--baby')
// const quantityBaby = $('.select-baby span')

// passenger.addEventListener('click', function (e) {
//     e.stopPropagation()
//     passengerForm.classList.toggle('active')

// })
passengerQuantity.addEventListener('click', function (e) {
    // e.stopPropagation()
    passengerForm.classList.toggle('active')

})

// Increase / Decrease input

let initAdult = 0
let initChildren = 0
let initBaby = 0
const maxValue = 10

function increase(e, quantity, show) {
    let quantityResult = Number(quantity.innerText)
    if (quantity >= maxValue) {
        e.target.setAttribute('disabled', 'disabled')
    } else {
        quantityResult++
        quantity.innerText = quantityResult
    }

    show.innerText = quantityResult
}

function decrease(e, quantity, show) {
    let quantityResult = Number(quantityAdult.innerText)
    if (quantity <= 0) {
        e.target.setAttribute('disabled', 'disabled')
    } else {
        quantityResult--
        quantity.innerText = quantityResult
    }

    show.innerText = quantityResult
}

increaseAdult.addEventListener('click', (e) => increase(e, quantityAdult, showAdultQuantity))
decreaseAdult.addEventListener('click', (e) => decrease(e, quantityAdult, showAdultQuantity))

increaseChildren.addEventListener('click', (e) => increase(e, quantityChildren, showChildrenQuantity))
decreaseChildren.addEventListener('click', (e) => decrease(e, quantityChildren, showChildrenQuantity))

// increaseBaby.addEventListener('click', (e) => increase(e, quantityBaby))
// decreaseBaby.addEventListener('click', (e) => decrease(e, quantityBaby))






