const USD = 4.87
const EUR = 5.32
const GBP = 6.08

const form = document.querySelector("form")
const footer = document.querySelector("footer")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")
const description = document.getElementById("description")
const result = document.getElementById("result")

amount.addEventListener("input", () => {
  const hasCharactersRegex = /\D+/g
  amount.value = amount.value.replace(hasCharactersRegex, "")
})

form.onsubmit = event => {
  event.preventDefault()

  switch (currency.value) {
    case "USD":
      convertCurrency(amount.value, USD, "$")
      break
    case "EUR":
      convertCurrency(amount.value, EUR, "€")
      break
    case "GBP":
      convertCurrency(amount.value, GBP, "£")
      break
  }
}

function convertCurrency(amount, price, symbol) {
  try {
    description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`

    let total = amount * price

    if (isNaN(total)) {
      return alert("Por favor, insira um valor válido")
    }

    total = formatCurrencyBRL(total).replace("R$", "")

    result.textContent = `${total} Reais`

    footer.classList.add("show-result")
  } catch (error) {
    footer.classList.remove("show-result")
    alert("Não foi possível converter a moeda")
  }
}

function formatCurrencyBRL(value) {
  return Number(value).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  })
}