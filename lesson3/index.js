class Good {
    constructor(id, name, description, sizes, price, available) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.sizes = sizes;
        this.price = price;
        this.available = available;
    }

    setAvailable(bool) {
        this.available = bool
    }
}


class GoodsList {  
    #goods   
    constructor(filter, sortPrice, sortDir) {
        this.#goods = [];
        this.filter = filter;
        this.sortPrice = sortPrice;
        this.sortDir = sortDir;
    }
// выводит объект в каталоге с фильтром по имени товара
    get list() {
        const forSaleList = this.#goods.filter(good => this.filter.test(good.name));
        return forSaleList
    }
// выводит все объекты в каталоге без фильтра по имени товара
    get all() {
        const forSaleList = this.#goods
        if (!this.sortPrice) {
            return forSaleList;
        }
        if (this.sortDir) {
            return forSaleList.sort((a, b) => (a.price - b.price));
        }
        return forSaleList.sort((a, b) => (b.price - a.price));
    }
    
    add(newGood) {
        this.#goods.push(newGood);
    }

    remove(id) {
        const index = this.#goods.findIndex(good => good.id === id);
        if ((index > this.#goods.length) || index === undefined) {
            console.log("Out of range")
        } else {
            this.#goods.splice(index, 1);
        }
    }
}


class BasketGood extends Good { 
    constructor(id, name, description, sizes, price, available, amount) {
        super(id, name, description, sizes, price, available);
        this.amount = amount;
    }
}


class Basket {
    constructor() {
        this.goods = []
    }

    get totalAmount() {
        return this.goods.map(item => item.amount).reduce((a, b) => a + b, 0);
    }

    get totalSum() {
        return this.goods.reduce((a, b) => a + b.amount * b.price, 0);
    }

    add(good, amount) {
        let index = this.goods.findIndex(value => value.id === good.id);
        if (index >= 0) {
            this.goods[index].amount += amount;
        } else {
            let addGood = new BasketGood(good.id, good.name, good.description, good.sizes, good.price, good.available, amount);
            this.goods.push(addGood);
        }
    }

    remove(good, amount) {
        let index = this.goods.findIndex(value => value.id === good.id);
        if (index >= 0) {
                if (this.goods[index].amount - amount <= 0){
                this.goods.splice(index, 1);
            } else {
                this.goods[index].amount -= amount;
            }
        }
    }

    clear() {
        this.goods.length = 0;
    }

    removeUnavailable() {
        this.goods.filter(item => item.available === false).forEach(value => this.remove(value, value.amount));
    }
}


// инициализируем переменные
const good1 = new Good(1, 'burger', 'tasty burger', ['s', 'm', 'l'], 100, true);
const good2 = new Good(2, 'pizza', 'real italian pizza', ['s', 'm', 'l'], 200, true);
const good3 = new Good(3, 'wrap', 'yummy turkish wrap', ['s', 'l'], 50, true);
const good4 = new Good(4, 'sandwich', 'fresh n healty', ['s', 'l'], 70, true);
const good5 = new Good(5, 'hummus', 'lovely hummus from Israel', ['s', 'l'], 150, true);


// console.log(good1);

good4.setAvailable(false)
// console.log(good3)

const catalog = new GoodsList(/Hummus/i, true, false)

catalog.add(good1)
catalog.add(good2)
catalog.add(good3)
catalog.add(good4)
catalog.add(good5)


// console.log(`Selected goods from catalog: `, catalog.list)

catalog.sortPrice = true;
catalog.sortDir = false;

// console.log(`Sorted by price in descending order: `, catalog.all);

catalog.sortPrice = true;
catalog.sortDir = true;

// console.log(`Sorted by price in ascending order: `, catalog.all);

catalog.sortPrice = false;
catalog.sortDir = false;

catalog.remove(5);
// console.log(`Catalog without removing item:`, catalog.all);

const basket = new Basket();

basket.add(good1, 1);
basket.add(good2, 3);
basket.add(good3, 7);
basket.add(good4, 5);
basket.add(good5, 10);
basket.add(good5, 5);

// console.log(basket.goods)

// console.log(`Total items in cart: ${basket.totalAmount}`);
// console.log(`Total sum for ${basket.totalAmount} items in a cart is: RUR ${basket.totalSum}`);

basket.remove(good5, 15)
// console.log(basket.goods)

// у good4 значение available === false;
basket.removeUnavailable();
// console.log(basket.goods)

// basket.clear();
// console.log(basket.goods)
