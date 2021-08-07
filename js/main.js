import faker from 'https://ga.jspm.io/npm:faker@5.5.3/index.js'

let locales = document.querySelector('select')
let generate = document.querySelector('button')
let inputs = document.querySelectorAll('input')
let [
  fullName,
  firstName,
  lastName,
  phoneNumber,
  city,
  state,
  streetAddress,
  zipCode,
  emailAddress,
  username,
  password,
  userAgent,
  ipv4Address,
  ipv6Address,
  macAddress,
  companyName,
  catchPhrase,
  bitcoinAddress,
  ethereumAddress,
  litecoinAddress,
  creditCardNumber,
  creditCardCVV
] = inputs

for (let locale in faker.locales)
{
  let option = document.createElement('option')
  option.value = locale
  option.textContent = faker.locales[locale].title

  locales.append(option)
}

for (let input of inputs)
  input.addEventListener('click', () => {
    input.select()
    document.execCommand('copy')
  })

locales.value = faker.locale

let fake = () =>
{
  let first = faker.name.firstName()
  let last = faker.name.lastName()

  fullName.value = `${first} ${last}`
  firstName.value = first
  lastName.value = last
  phoneNumber.value = faker.phone.phoneNumber()

  city.value = faker.address.city()
  state.value = faker.address.state()
  streetAddress.value = faker.address.streetAddress()
  zipCode.value = faker.address.zipCode()

  emailAddress.value = faker.internet.email(first, last).toLowerCase()
  username.value = faker.internet.userName(first, last)
  password.value = faker.internet.password()
  userAgent.value = faker.internet.userAgent()
  ipv4Address.value = faker.internet.ip()
  ipv6Address.value = faker.internet.ipv6()
  macAddress.value = faker.internet.mac()

  companyName.value = faker.company.companyName()
  catchPhrase.value = faker.company.catchPhrase()

  bitcoinAddress.value = faker.finance.bitcoinAddress()
  ethereumAddress.value = faker.finance.ethereumAddress()
  litecoinAddress.value = faker.finance.litecoinAddress()
  creditCardNumber.value = faker.finance.creditCardNumber()
  creditCardCVV.value = faker.finance.creditCardCVV()
}

addEventListener('load', fake)
generate.addEventListener('click', fake)

addEventListener('keyup', event => {
  if (event.key == 'Enter') fake()
})

locales.addEventListener('change', () => {
  faker.locale = locales.value
})
