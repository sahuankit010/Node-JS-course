const name = 'Ankit'
const userAge = 26

const user = {
    name,
    age: userAge,
    location: 'Dallas'
}

console.log(user)

const product = {
    label: "Red Notebook",
    price: 1.5,
    stock: 201,
    salePrice: null,
    rating: 4
}

// const {label: productLabel, stock, rating = 5} = product

// console.log(productLabel)
// console.log(stock)
// console.log(rating)

const transaction = (type, {label = 'Blue Notebook', stock = 5, salePrice = 2} = {}) => {
    console.log(type, label, stock, salePrice)
}

transaction('order')

const greet = (name='User') => {
    console.log('Hola'+ name + '!')
}

greet()
greet('Rafa')