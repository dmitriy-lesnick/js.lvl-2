class List {
    items = []

    constructor() {
        let goods = this.fetchGoods()
        goods = goods.map((cur) => {
            return new GoodItem(cur)
        })
        this.items.push(...goods)
        this.render()
    }

    fetchGoods() {
        return [
            { name: 'Shirt', price: 150 },
            { name: 'Socks', price: 50 },
            { name: 'Jacket', price: 250 },
            { name: 'Shoes', price: 200 },
        ]
    }

    render() {
        this.items.forEach(good => {
            good.render()
        })
    }

}


class GoodItem {
    name = ''
    price = 0

    constructor({ name, price }) {
        this.name = name
        this.price = price
    }

    render() {
        const placeToRender = document.querySelector('.goods-list')
        if (placeToRender) {
            const block = document.createElement('div')
            block.innerText = `Товар: ${this.name} = ${this.price}`
            placeToRender.appendChild(block)
        }
    }
}

const ListInstance = new List