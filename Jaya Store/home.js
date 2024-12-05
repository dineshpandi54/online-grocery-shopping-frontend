const sideNav = document.querySelector(".side-navbar")

function showNavbar() {
    sideNav.style.right = "0"
}
function closeNavbar() {
    sideNav.style.right = "-100%"
}

const cartPageOverlay = document.querySelector(".cart-popup-overlay")
const cartPage = document.querySelector(".cart-popup")

function showcart() {
    cartPageOverlay.style.display = "block"
    cartPage.style.display = "block"
}
function closeCart() {
    cartPageOverlay.style.display = "none"
    cartPage.style.display = "none"
}

const productContainer = document.getElementById("products")
const search = document.getElementById("search")
const productlist = productContainer.querySelectorAll("div")
search.addEventListener("keyup", function () {
    let enteredvalue = event.target.value.toUpperCase()


    for (count = 0; count < productlist.length; count = count + 1) {
        let productname = productlist[count].querySelector("h2").textContent

        if (productname.toUpperCase().indexOf(enteredvalue) < 0) {
            productlist[count].style.display = "none"
        }
        else {
            productlist[count].style.display = "block"
        }
    }
})

///////////////////////////////////////// CART ////////////////////////////////



const mycart = {
    onion:{unit:"kg", rate: 60},
    carrot: { unit: "kg", rate: 80 },
    apple: { unit: "kg", rate: 120 },
    grapes: { unit: "kg", rate: 50 },
    chilliPowder: { unit: "pack", rate:10 },
    curryMasala: { unit: "pack", rate: 10 },
    goodDay: { unit: "pack", rate: 20 },
    littleHearts: { unit: "pack", rate: 10 },
    kitkat: { unit: "pack", rate: 35 },
    dairyMilk: { unit: "pack", rate: 40 },
    bingo: { unit: "pack", rate: 20 },
    kurkure: { unit: "pack", rate: 15 },
    maaza: { unit: "pack", rate: 30 },
    pepsi: { unit: "pack", rate: 33 },
    note: { unit: "pack", rate: 45 },
    pen: { unit: "pack", rate: 70 },
    medimix: { unit: "pack", rate: 30 },
    dove: { unit: "pack", rate: 45 },
    tide: { unit: "pack", rate: 120 },
    ariel: { unit: "pack", rate: 60 }
}

const cart = document.querySelector("#cart")

let totalAmount = 0
function updateTotalAmount(amount) {
    totalAmount += amount
    document.querySelector("#total-amount").textContent = `Total Amount: ₹${totalAmount}`
}


document.querySelectorAll(".increase").forEach(button => {
    button.addEventListener("click", () => {
        const product = button.getAttribute("data-product")
        const qtyInput = document.querySelector(`#qty-${product}`)
        qtyInput.value = parseInt(qtyInput.value) + 1
    })
})

document.querySelectorAll(".decrease").forEach(button => {
    button.addEventListener("click", () => {
        const product = button.getAttribute("data-product")
        const qtyInput = document.querySelector(`#qty-${product}`)
        if (parseInt(qtyInput.value) > 1) {
            qtyInput.value = parseInt(qtyInput.value) - 1
        }
    })
})


document.querySelectorAll(".add-to-cart").forEach(button => {
    button.addEventListener("click", () => {
        const product = button.getAttribute("data-product")
        const qtyInput = document.querySelector(`#qty-${product}`)
        const quantityValue = parseInt(qtyInput.value)
        const rate = quantityValue * mycart[product].rate
        const unit = mycart[product].unit

        console.log(product, quantityValue, rate, unit)

        const createDiv = document.createElement("div")
        createDiv.setAttribute("class", "cart-container")

        createDiv.innerHTML = `
            <img src="img/${product}.png" alt="${product}">
            <h3>${product.charAt(0).toUpperCase() + product.slice(1)}</h3>
            <h4>${quantityValue} ${unit} - ₹${rate}</h4>
            <button class="remove-from-cart">Delete</button>
            `

        cart.append(createDiv)

        updateTotalAmount(rate)

        createDiv.querySelector(".remove-from-cart").addEventListener("click", () => {
            updateTotalAmount(-rate)
            createDiv.remove()
        })
    })
})




















































































