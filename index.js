'use strict';

const goods = [
    {
        name: 'butter',
        amount: 3,
        isBought: true,
        price: 150,
        cost: 450,
    },
    {
        name: 'melon',
        amount: 2,
        isBought: false,
        price: 100,
        cost: 200,
    },
    {
        name: 'bread',
        amount: 3,
        isBought: true,
        price: 30,
        cost: 90,
    },
    {
        name: 'egg',
        amount: 10,
        isBought: false,
        price: 7,
        cost: 70,
    },
    {
        name: 'avocado',
        amount: 2,
        isBought: true,
        price: 55,
        cost: 110,
    }
];

const showBoughtFirst = (arr) => {
    let arrBought = [];
    let arrNotBought = [];
    for (const good of arr) {
        good.isBought ? arrBought.push(good) : arrNotBought.push(good)
    }
    return [...arrBought, ...arrNotBought]
}

console.log(showBoughtFirst(goods));

const makePurchase = (item) => {
    for (const good of goods) {
        if (good.name === item) {
            good.isBought = true
        }
    }
    return goods;
}

console.log(makePurchase('egg'));

const deleteGood = (item) => {
    return goods.filter(good => good.name !== item)
}

console.log(deleteGood('egg'));

const addGood = (item) => {
    let good = goods.find(good => good.name === item)
    if (good) {
        good.amount += 1;
        good.cost += good.price
    } else {
        goods.push({
                'name': item,
                'amount': 1,
                'isBought': false,
                'price': 50,
                'cost': 50,
            })
    }
    return goods;
}

console.log(addGood('buckweat'));
console.log(addGood('avocado'));

const countTotalCost = () => {
    return goods.reduce((total, good) => {
        return total + good.cost
    }, 0)
}

console.log(countTotalCost());

const countNotBoughtCost = () => {
    return goods.filter(good => good.isBought === false).reduce((total, good) => {
        return total + good.cost
    }, 0) 
}

console.log(countNotBoughtCost());

const countBoughtCost = () => {
    return goods.filter(good => good.isBought === true).reduce((total, good) => {
        return total + good.cost
    }, 0) 
}

console.log(countBoughtCost());

const sortGoods = (order) => {
    if (order === 'ascending') {
        return [...goods].sort(
            (firstGood, nextGood) => firstGood.cost - nextGood.cost
        )
    } else if (order === 'descending') {
        return [...goods].sort(
            (firstGood, nextGood) => nextGood.cost - firstGood.cost
        )
    } else {
        throw Error;
    }
}

console.log(sortGoods('ascending'));
console.log(sortGoods('descending'));

