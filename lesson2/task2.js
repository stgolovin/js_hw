// товары
const goods = [
    {
        id: 1,
        name: 'pizza',
        description: 'Tastiest pizza ever',
        sizes: ['s', 'm', 'l'],
        price: '500',
        available: true,
    },
    {
        id: 2,
        name: 'hot wings',
        description: 'As hot as hell',
        sizes: ['s', 'm', 'l'],
        price: '200',
        available: true,
    },
    {
        id: 3,
        name: 'burger',
        description: 'Try not to tear your mounth down',
        sizes: ['s', 'l'],
        price: '250',
        available: true,
    },
    {
        id: 4,
        name: 'french fries',
        description: 'Souce makes a deal',
        sizes: ['s', 'l'],
        price: '100',
        available: true,
    },
    {
        id: 5,
        name: 'sandwich',
        description: 'If you care about your health',
        sizes: ['s', 'l'],
        price: '150',
        available: true,
    },
];
// корзина
const cart = [
    {
        good: goods[0],
        amount: 5,
    },
    {
        good: goods[3],
        amount: 2,
    }
];
// добавить в корзину
function addToCart() {
    item = {
        good: goods[2],
        amount: 3,
    }
    return cart.unshift(item)
}
// удалить из корзины по индексу
function removeFromCart(position) {
    return cart.splice(position, 1)
}
// очистить корзину
function clearCart() {
    return cart.splice(0, cart.length)
}
// посчитать общую стоимость товаров в корзине и общее количество товаров
function cartOperation() {
    totalAmount = 0;
    totalSum = 0;
    for (let key in cart) {
        totalAmount += cart[key].amount
        price = cart[key].good.price;
        qty = cart[key].amount;
        sum = price * qty
        totalSum += sum
    };
    data = {
        totalAmount: totalAmount,
        totalSum: totalSum,
    }
    return data
}

// запуск функций отсюда
function main() {
    addToCart()
    removeFromCart(1)
    clearCart()
    console.log(cartOperation())
}

main()
// показать корзину
console.log(cart)
